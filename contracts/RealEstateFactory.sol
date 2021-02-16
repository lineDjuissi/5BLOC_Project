//pragma solidity ^0.7.6;


pragma solidity ^0.4.19;

import "./ownable.sol";
import "./safemath.sol";
import "./erc721.sol";

contract RealEstateFactory is Ownable, ERC721 {

  using SafeMath for uint256;
  
  address curentSeller;
  uint curentComission;

  event NewRealEstate(uint realEstateId, string name, address salerAddress, uint price, string images, uint comission);


  struct RealEstate {
    string name;
    address salerAddress;
    uint price;
    string images;
    uint comission;
  }

  RealEstate[] public realestates;

  mapping (uint => address) public realestateToOwner;
  mapping (address => uint) ownerRealestateCount;
  mapping (uint => address) realestateApprovals;
  
  //fonctions for realestates management 
  

  function createRealEstate(string _name, uint _price, string _realestateImages) public {
    address realestateOwner = msg.sender;
    uint comission = 10;
    uint id = realestates.push(RealEstate(_name, realestateOwner, _price, _realestateImages, comission)) - 1;
    realestateToOwner[id] = msg.sender;
    ownerRealestateCount[msg.sender]++;
    NewRealEstate(id, _name, realestateOwner, _price, _realestateImages, comission);
  }
  
  
  // List all the existing realestates
  function getAllRealestates() external view returns(uint[]) {
    uint[] memory result = new uint[](realestates.length);
    uint counter = 0;
    for (uint i = 0; i < realestates.length; i++) {
        result[counter] = i;
        counter++;
    }
    return result;
  }
  
  // Fonctions for the saling of real estate
  
  modifier onlyOwnerOf(uint _realestateId) {
    require(msg.sender == realestateToOwner[_realestateId]);
    _;
  }
  
  function balanceOf(address _owner) public view returns (uint256 _balance) {
    // 1. Renvoyez le nombre de RealEstate que `_owner` a ici
    return ownerRealestateCount[_owner];
  }

  function ownerOf(uint256 _realestateId) public view returns (address _owner) {
    // 2. Renvoyez le propriétaire de `_realestateId` ici
    return realestateToOwner[_realestateId];
  }
  
  
  function _transfer(address _from, address _to, uint256 _realestateId) private {
    ownerRealestateCount[_to]++;
    ownerRealestateCount[_from]--;
    realestateToOwner[_realestateId] = _to;
    Transfer(_from, _to, _realestateId);
  }

  function transfer(address _to, uint256 _realestateId) public onlyOwnerOf(_realestateId) {
      _transfer(msg.sender, _to, _realestateId);
  }

  function approve(address _to, uint256 _realestateId) internal {
    realestateApprovals[_realestateId] = _to;
    Approval(msg.sender, _to, _realestateId);

  }

  function takeOwnership(uint256 _realestateId) public {
    require(realestateApprovals[_realestateId] == msg.sender);
    _transfer(ownerOf(_realestateId), msg.sender, _realestateId);

  }
  
  
  //function for the selling 
  
  function getBalance() public view returns (uint256 _balance) {
      return this.balance;
  }
  
  function getvalue() public view returns (uint256 _comission) {
      uint256 comission = (this.balance * 10)/100 ;
      return comission;
  }
  
  function getseller() public view returns (address _seller) {
      return curentSeller;
  }
  
  
  function BuyRealEstate(uint256 _realestateId) external payable {
    uint price = realestates[_realestateId].price;
    require(msg.value == price); 
    curentSeller = realestateToOwner[_realestateId];
    curentComission = realestates[_realestateId].comission;
    approve(msg.sender, _realestateId);
    takeOwnership(_realestateId);
   
  }
  
  
  function getPaid() external {
    
    uint comission = (this.balance * curentComission)/100 ;
    curentSeller.transfer(this.balance - comission);
    owner.transfer(this.balance);
  }
  
  
  function updateRealestate(uint _realestateId, uint _price, string _image , uint _comission) external onlyOwnerOf(_realestateId) {
    realestates[_realestateId].price = _price;
    realestates[_realestateId].images = _image;
    realestates[_realestateId].comission = _comission;
  }
  
  
  
  
  
}