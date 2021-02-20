//pragma solidity ^0.7.6;


pragma solidity ^0.4.19;

import "./ownable.sol";
import "./safemath.sol";
import "./erc721.sol";

contract RealEstateFactory is Ownable, ERC721 {

  using SafeMath for uint256;
  

  struct RealEstate {
    uint idRealestate;
    string name;
    address salerAddress;
    uint price;
    string images;
    uint comission;
    bool status;
    string location;
    uint pieces;
  }

  RealEstate[] public realestates;

  mapping (uint => address) public realestateToOwner;
  mapping (address => uint) ownerRealestateCount;
  mapping (uint => address) realestateApprovals;
  
  
  //fonctions for realestates management 
  

  function createRealEstate(string _name, uint _price, string _realestateImages, string _location, uint _pieces) public {
    address realestateOwner = msg.sender;
    uint comission = 10;
    uint idRealestate = realestates.length;
    bool status= true ;
    uint id = realestates.push(RealEstate(idRealestate, _name, realestateOwner, _price, _realestateImages, comission, status, _location, _pieces)) - 1;
    realestateToOwner[id] = msg.sender;
    ownerRealestateCount[msg.sender]++;
  }
  
  
  // functions to access realestates and their attributes
  
  function getAllRealestates() external view returns(uint[]) {
    uint[] memory result = new uint[](realestates.length);
    uint counter = 0;
    for (uint i = 0; i < realestates.length; i++) {
        result[counter] = i;
        counter++;
    }
    return result;
  }
  
  
  function getRealestateId() public view returns(uint[]) {
    uint[] memory result1 = new uint[](realestates.length);
    
    for (uint i = 0; i < realestates.length; i++) {
        result1[i] = realestates[i].idRealestate ;
        
    }
    return result1;
  }
  
  
  function getRealestatesByOwner(address _owner) external view returns(uint[]) {
    uint[] memory result = new uint[](ownerRealestateCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < realestates.length; i++) {
      if (realestateToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }
  
  
  function getStatus(uint _realestateId) external view returns(bool) {
      return realestates[_realestateId].status;
  }
  

  function updateStatus(uint _realestateId) external {
      if (realestates[_realestateId].status == true){
           realestates[_realestateId].status = false;
      } else {
           realestates[_realestateId].status = true;
      }
  }
  
  
  // Functions from ERC721 for token management
  
  modifier onlyOwnerOf(uint _realestateId) {
    require(msg.sender == realestateToOwner[_realestateId]);
    _;
  }
  
  function balanceOf(address _owner) public view returns (uint256 _balance) {
    // 1. Renvoyez le nombre de RealEstate que `_owner` a ici
    return ownerRealestateCount[_owner];
  }

  function ownerOf(uint256 _realestateId) public view returns (address _owner) {
    return realestateToOwner[_realestateId];
  }
  
  
  function _transfert(address _from, address _to, uint256 _realestateId) private {
    ownerRealestateCount[_to]++;
    ownerRealestateCount[_from]--;
    realestateToOwner[_realestateId] = _to;
    realestates[_realestateId].salerAddress = _to;
    Transfert(_from, _to, _realestateId);
  }

  function transfert(address _to, uint256 _realestateId) public onlyOwnerOf(_realestateId) {
      _transfert(msg.sender, _to, _realestateId);
  }

  function approve(address _to, uint256 _realestateId) internal {
    realestateApprovals[_realestateId] = _to;
    Approval(msg.sender, _to, _realestateId);

  }

  function takeOwnership(uint256 _realestateId) public {
    require(realestateApprovals[_realestateId] == msg.sender);
    _transfert(ownerOf(_realestateId), msg.sender, _realestateId);

  }
  

  
  //functions for the realestates selling 
  

  function BuyRealEstate(uint256 _realestateId) public payable {
    uint price = realestates[_realestateId].price;
    price = price * 1 ether;
    require(msg.value == price); 
    approve(msg.sender, _realestateId);
    takeOwnership(_realestateId);
   
  }
  
  function getPaid(address _seller, uint _comission) external {
    
    uint comission = (this.balance * _comission)/100 ;
    _seller.transfer(this.balance - comission);
    //owner.transfer(this.balance);
  }
  
  
  function withdrawCom() external {
      owner.transfer(this.balance);
  }
  
  
  function getBalance() public view returns (uint256 _balance) {
      return this.balance;
  }
  
  function getPrice(uint256 _realestateId) public view returns (uint256) {
      return realestates[_realestateId].price;
  }
  
  function getSeller(uint256 _realestateId) public view returns (address) {
      return realestates[_realestateId].salerAddress ;
  }
  
  
  
  //function for attributs updating
  
  function updateRealestate(uint _realestateId, uint _price, string _image , string _name, string _location, uint _pieces) external onlyOwnerOf(_realestateId) {
    realestates[_realestateId].price = _price;
    realestates[_realestateId].images = _image;
    realestates[_realestateId].name = _name;
    realestates[_realestateId].location = _location;
    realestates[_realestateId].pieces = _pieces;
  }
  
  
  function updateComission(uint _realestateId, uint _comission) external onlyOwner() {
    realestates[_realestateId].comission = _comission;
  }
  
  
}