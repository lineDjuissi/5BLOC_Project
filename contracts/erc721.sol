contract ERC721 {
  event Transfert(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);

  function balanceOf(address _owner) public view returns (uint256 _balance);
  function ownerOf(uint256 _tokenId) public view returns (address _owner);
  function transfert(address _to, uint256 _tokenId) public;
  function approve(address _to, uint256 _tokenId) internal;
  function takeOwnership(uint256 _tokenId) public;
}
