pragma solidity ^0.5.8;

// RibonToken will be an ERC-20 Token
// https://eips.ethereum.org/EIPS/eip-20
contract RibonToken {
}

contract Ribon {
  /*
      Called by Publishers (generally NGOs).
      A story have a text (written by a Publisher)
        and an associated number of Ribon tokens.
  */
  function addStory() public {
    /*
      create a story:
        - the id will be generated
        - the text will be an argument of this function
        - the number of tokens will be an argument
        - the publisher will be the msg.sender
      add the created history to the history map
    */
  }
  
  // Called by any person who uses Ribon
  function collectStory() public {
  }
  
  // Called by any person who uses Ribon                                
  function makeDonation() public {
  }
}
