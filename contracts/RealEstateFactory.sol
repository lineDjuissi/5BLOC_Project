pragma solidity ^0.4.19;

import "./ownable.sol";
import "./safemath.sol";
import "./erc721.sol";

contract RealEstateFactory is Ownable, ERC721 {

  using SafeMath for uint256;

  event NewRealEstate(uint realEstateId, string name, address salerAddress, uint price, string images);


  struct RealEstate {
    string name;
    address salerAddress;
    uint price;
    string images;
  }

  RealEstate[] public realestates;

  mapping (uint => address) public realestateToOwner;
  mapping (address => uint) ownerRealestateCount;
  mapping (uint => address) realestateApprovals;
  
  //fonctions for realestates management 
  

  function createRealEstate(string _name, uint _price, string _realestateImages) public {
    address realestateOwner = msg.sender;
    uint id = realestates.push(RealEstate(_name, realestateOwner, _price, _realestateImages)) - 1;
    realestateToOwner[id] = msg.sender;
    ownerRealestateCount[msg.sender]++;
    NewRealEstate(id, _name, realestateOwner, _price, _realestateImages);
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

  function approve(address _to, uint256 _realestateId) public {
    realestateApprovals[_realestateId] = _to;
    Approval(msg.sender, _to, _realestateId);

  }

  function takeOwnership(uint256 _realestateId) public {
    require(realestateApprovals[_realestateId] == msg.sender);
    address owner = ownerOf(_realestateId);
    _transfer(owner, msg.sender, _realestateId);

  }
  
  
}