pragma solidity ^0.5.8;

import "./IERC20.sol";

// RibonToken will be an ERC-20 Token
// https://eips.ethereum.org/EIPS/eip-20
contract RibonToken is IERC20 {
  function totalSupply() public view returns (uint256) {
    return 0;
  }

  function balanceOf(address) public view returns (uint256) {
    return 0x0;
  }

  function transfer(address, uint256) public returns (bool) {
    return false;
  }

  function allowance(address, address) public view returns (uint256) {
    return 0;
  }

  function approve(address, uint256) public returns (bool) {
    return false;
  }

  function transferFrom(address, address, uint256) public returns (bool) {
    return false;
  }
}
