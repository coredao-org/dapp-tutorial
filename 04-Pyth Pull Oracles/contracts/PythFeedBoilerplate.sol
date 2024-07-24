// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

contract PythFeedBoilerplate {
  IPyth public pyth;

  constructor(address pythContract) {
    pyth = IPyth(pythContract);
  }

  function updatePrice(bytes[] calldata priceUpdate) public payable {
    uint fee = pyth.getUpdateFee(priceUpdate);
    pyth.updatePriceFeeds{ value: fee }(priceUpdate);
  }

  function getPrice(bytes32 priceFeedId) public view returns (PythStructs.Price memory) {
    return pyth.getPrice(priceFeedId);
  }

  function getPriceWithoutUpdate(bytes32 priceFeedId) public view returns (int64, int32) {
    PythStructs.Price memory price = pyth.getPrice(priceFeedId);
    return (price.price, price.expo);
  }
}
