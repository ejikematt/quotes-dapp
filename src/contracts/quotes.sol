// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IERC20Token {
  function transfer(address, uint256) external returns (bool);
  function approve(address, uint256) external returns (bool);
  function transferFrom(address, address, uint256) external returns (bool);
  function totalSupply() external view returns (uint256);
  function balanceOf(address) external view returns (uint256);
  function allowance(address, address) external view returns (uint256);

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract Motivate {

    uint internal quotesLength = 0;
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    struct Quote {
        address payable owner;
        string text;
        uint helpfull;
    }

    mapping (uint => Quote) internal quotes;

    function writeQuote(
        string memory _text
    ) public {
        uint _helpfull = 0;
        quotes[quotesLength] = Quote(
            payable(msg.sender),
            _text,
            _helpfull
        );
        quotesLength++;
    }

    function readQuotes(uint _index) public view returns (
        address payable,
        string memory, 
        uint
    ) {
        return (
             quotes[_index].owner,
            quotes[_index].text, 
             quotes[_index].helpfull
           
        );
    }
    
function editQuote(uint _index, string memory _text) public {
    require(msg.sender == quotes[_index].owner, "you cannot edit this quote");
    quotes[_index].text = _text;
}

function increaseHelpfullness(uint _index) private {
    quotes[_index].helpfull ++;
}

    function addHelpfullness(uint _index, uint _price) public payable  {
        require(_price == 1, "can only tip 1 cUSD");
        require(
          IERC20Token(cUsdTokenAddress).transferFrom(
            msg.sender,
            quotes[_index].owner,
            _price
          ),
          "Transfer failed."
        );
        increaseHelpfullness(_index);
    }
    
    function getQuotesLength() public view returns (uint) {
        return (quotesLength);
    }
}

