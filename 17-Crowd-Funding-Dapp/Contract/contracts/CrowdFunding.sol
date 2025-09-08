// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract CrowdFunding{
    string public name;
    string public description;
    uint256 public goal;
    uint256 public deadLine;
    address public owner;
    bool public  paused;

enum CampaignState {Active , Successful , Failed}
CampaignState public state;
    struct Tier{
        string name;
        uint256 amount;
        uint256 backers;
    }

struct Backer{
    uint256 totalcontribution;
    mapping (uint256 =>bool) fundedTires;
}
    Tier[] public tiers;

    mapping (address =>Backer) public backers;

    modifier onlyOwner(){
        require(msg.sender==owner,"Not Owner");
_;   
    }

    modifier campaingOpen(){
        require(state==CampaignState.Active,"Campain is not Active");
        _;
    }

    modifier notpuased(){
        require(!paused,"Contract is Paused");
        _;
    }
     
     constructor(address _owner,string memory _name,string memory _description,uint256 _goal , uint256 _duration ){
        name=_name;
        description=_description;
        goal=_goal;
        deadLine=block.timestamp+(_duration * 1 days);
        owner=_owner;
        state=CampaignState.Active;

     }

function checkAndUpdateCampaignState() internal{
    if(state== CampaignState.Active){
        if(block.timestamp>=deadLine){
            state=address(this).balance >= goal ? CampaignState.Successful: CampaignState.Failed;
        }
        else{
         state=address(this).balance >= goal ? CampaignState.Successful: CampaignState.Active;
        }
    }
}
     function fund(uint256 _tierIndex)public payable campaingOpen notpuased{


require(_tierIndex<tiers.length,"invalid");
require(msg.value == tiers[_tierIndex].amount,"Invalid Amount");
tiers[_tierIndex].backers++;
backers[msg.sender].totalcontribution += msg.value;
backers[msg.sender].fundedTires[_tierIndex]=true;
checkAndUpdateCampaignState();

     }

     function addTier(string memory _name , uint256 _amount) public onlyOwner{
        require(_amount>0,"Please Enter Valid Tier");
        tiers.push(Tier(_name,_amount,0));

     }

function removeTier(uint256 _index) public onlyOwner{
    require(_index<tiers.length,"does not Exits");
    tiers[_index]=tiers[tiers.length-1];
   tiers.pop();
}
     function withdraw() public onlyOwner{
checkAndUpdateCampaignState();
require(state == CampaignState.Successful,"Campain is not Successful");
uint balance = address(this).balance;
require(balance>0,"no Balance");
payable(owner).transfer(balance);
     }

     function getcontractBalance() public view returns (uint256){
return address(this).balance;
     }

function refund() public {
    checkAndUpdateCampaignState();

    uint256 amount =backers[msg.sender].totalcontribution;
    require(amount>0,"No contribution to refund");

    backers[msg.sender].totalcontribution=0;
    payable(msg.sender).transfer(amount);
}

function hasfundedtier(address _backer , uint256 _tierIndex) public view returns (bool){
    return backers[_backer].fundedTires[_tierIndex];
}

function getTiers() public view returns (Tier[] memory){
    return tiers;
}
function tooglepause () public  onlyOwner{
    paused = !paused;
}
function getCampaignStatus() public view returns (CampaignState){
    if(state== CampaignState.Active && block.timestamp>deadLine){
        return address(this).balance >= goal ? CampaignState.Successful : CampaignState.Failed;
    }
    return state;
}

function extendDeadLine(uint256 _daysAdded) public onlyOwner campaingOpen{
    deadLine+=_daysAdded*1 days;
}
}