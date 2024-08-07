// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/// @title Guestbook
contract Guestbook {
    struct Entry {
        string name;
        string message;
    }

    Entry[] public entries;

    // Define an event to log new entries
    event EntrySigned(string name, string message);

    function signGuestbook(string memory _name, string memory _message) public {
        entries.push(Entry(_name, _message));
        // Emit the event when a new entry is added
        emit EntrySigned(_name, _message);
    }

    function getEntries() public view returns (Entry[] memory) {
        return entries;
    }
}
