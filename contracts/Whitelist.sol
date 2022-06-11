// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Whitelist{
   
  uint8 public maxWhitelistAddresses;
  uint8 public numWhitelistAddresses;

  constructor(uint8 _maxWhitelistAddresses){
       maxWhitelistAddresses = _maxWhitelistAddresses;
  }
  
  mapping(address => bool) whitelistAddresses;

  function addToWhitelist() public {
    require(!whitelistAddresses[msg.sender]," you're already whitelisted ");
    require(numWhitelistAddresses <= maxWhitelistAddresses);

    whitelistAddresses[msg.sender] = true;
    numWhitelistAddresses += 1;
  }
}