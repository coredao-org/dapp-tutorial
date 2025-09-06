// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


contract Counter {
int256 private _value;
event Increment(address indexed caller, int256 newValue);
event Decrement(address indexed caller, int256 newValue);


function current() external view returns (int256) {
return _value;
}


function increment() external {
_value += 1;
emit Increment(msg.sender, _value);
}


function decrement() external {
_value -= 1;
emit Decrement(msg.sender, _value);
}
}