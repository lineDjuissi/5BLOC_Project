pragma solidity ^0.4.19;

import "./ownable.sol";
import "./safemath.sol";

contract RealEstateFactory is Ownable {

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

  function createRealEstate(string _name, uint _price, string _realestateImages) public {
    address realestateOwner = msg.sender;
    uint id = realestates.push(RealEstate(_name, realestateOwner, _price, _realestateImages)) - 1;
    realestateToOwner[id] = msg.sender;
    ownerRealestateCount[msg.sender]++;
    NewRealEstate(id, _name, realestateOwner, _price, _realestateImages);
  }
  
}