// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/// @title Guestbook
contract Guestbook {
    struct Entry {
        string name;
        string message;
    }

    Entry[] public entries;

    function signGuestbook(string memory _name, string memory _message) public {
        entries.push(Entry(_name, _message));
    }

    function getEntries() public view returns (Entry[] memory) {
        return entries;
    }
}