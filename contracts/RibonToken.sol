pragma solidity ^0.5.8;

import "./IERC20.sol";

// RibonToken will be an ERC-20 Token
// https://eips.ethereum.org/EIPS/eip-20
contract RibonToken is IERC20 {
  string public name;
  string public symbol;
  uint8 public decimals;
  uint256 private initialSupply;
  mapping (address => uint256) private balances;

  constructor (string memory _name, string memory _symbol, uint8 _decimals, uint256 _totalSupply) public {
    name = _name;
    symbol = _symbol;
    decimals = _decimals;
    initialSupply = _totalSupply;
    balances[msg.sender] = _totalSupply;
  }

  function totalSupply() public view returns (uint256) {
    return initialSupply;
  }

  function balanceOf(address account) public view returns (uint256) {
    return balances[account];
  }

  function transfer(address recipient, uint256) public returns (bool) {
    require(recipient != address(0));
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
