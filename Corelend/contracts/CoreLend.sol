// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CoreLend is Ownable {
    uint256 public interestRatePerYear = 10; // 10%
    uint256 public constant SECONDS_IN_YEAR = 365 * 24 * 60 * 60;
    uint256 public collateralFactor = 150; // 150% (1.5x)

    struct LoanPosition {
        address collateralToken;
        address borrowToken;
        uint256 collateralAmount;
        uint256 totalBorrowAmount;
        uint256 timestamp;
    }

    mapping(address => bool) public isSupportedToken;
    mapping(address => mapping(address => uint256)) public lenderBalances; // lender => token => balance
    mapping(address => mapping(address => LoanPosition)) public userLoans; // user => borrowToken => LoanPosition

    modifier onlySupported(address token) {
        require(isSupportedToken[token], "Unsupported token");
        _;
    }

    constructor() Ownable(msg.sender) {}

    function addSupportedToken(address token) external onlyOwner {
        isSupportedToken[token] = true;
    }

    function deposit(address token, uint256 amount) external /** onlySupported(token) */ {
        require(amount > 0, "Invalid amount");
        IERC20(token).transferFrom(msg.sender, address(this), amount);
        lenderBalances[msg.sender][token] += amount;
    }

    function withdraw(address token, uint256 amount) external {
        require(lenderBalances[msg.sender][token] >= amount, "Insufficient balance");
        lenderBalances[msg.sender][token] -= amount;
        IERC20(token).transfer(msg.sender, amount);
    }

    function borrow(address collateralToken, address borrowToken, uint256 borrowAmount) external /** onlySupported(collateralToken) onlySupported(borrowToken) */ {
        require(borrowAmount > 0, "Invalid borrow amount");

        uint256 requiredCollateral = (borrowAmount * collateralFactor) / 100;
        IERC20(collateralToken).transferFrom(msg.sender, address(this), requiredCollateral);

        LoanPosition storage loan = userLoans[msg.sender][borrowToken];

        if (loan.totalBorrowAmount == 0) {
            loan.collateralToken = collateralToken;
            loan.borrowToken = borrowToken;
            loan.timestamp = block.timestamp;
        }

        loan.collateralAmount += requiredCollateral;
        loan.totalBorrowAmount += borrowAmount;
        loan.timestamp = block.timestamp;

        IERC20(borrowToken).transfer(msg.sender, borrowAmount);
    }

    function repay(address borrowToken) external {
        LoanPosition storage loan = userLoans[msg.sender][borrowToken];
        require(loan.totalBorrowAmount > 0, "No loan");

        uint256 timeElapsed = block.timestamp - loan.timestamp;
        uint256 interest = (loan.totalBorrowAmount * interestRatePerYear * timeElapsed) / (100 * SECONDS_IN_YEAR);
        uint256 totalRepay = loan.totalBorrowAmount + interest;

        IERC20(loan.borrowToken).transferFrom(msg.sender, address(this), totalRepay);
        IERC20(loan.collateralToken).transfer(msg.sender, loan.collateralAmount);

        delete userLoans[msg.sender][borrowToken];
    }

    function currentDebt(address user, address borrowToken) public view returns (uint256) {
        LoanPosition memory loan = userLoans[user][borrowToken];
        if (loan.totalBorrowAmount == 0) return 0;

        uint256 timeElapsed = block.timestamp - loan.timestamp;
        uint256 interest = (loan.totalBorrowAmount * interestRatePerYear * timeElapsed) / (100 * SECONDS_IN_YEAR);
        return loan.totalBorrowAmount + interest;
    }

    function liquidate(address user, address borrowToken) external {
        LoanPosition memory loan = userLoans[user][borrowToken];
        require(loan.totalBorrowAmount > 0, "No loan");

        uint256 debt = currentDebt(user, borrowToken);
        require((loan.collateralAmount * 100) / debt < collateralFactor, "Healthy loan");

        delete userLoans[user][borrowToken];
        IERC20(loan.collateralToken).transfer(msg.sender, loan.collateralAmount);
    }

    function getLendersBalance(address user, address tokenAddress) external view returns (uint256) {
        return lenderBalances[user][tokenAddress];
    }

    function getLoanDetails(address user, address borrowToken) external view returns (LoanPosition memory) {
        return userLoans[user][borrowToken];
    }
}
