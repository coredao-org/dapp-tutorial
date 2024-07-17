/// <reference types="node" />
import { Address } from "@ganache/ethereum-address";
import { Data, Quantity } from "@ganache/utils";
export declare type EthereumRawAccount = [
    nonce: Buffer,
    balance: Buffer,
    stateRoot: Buffer,
    codeHash: Buffer
];
export declare class Account {
    address: Address;
    balance: Quantity;
    privateKey: Data;
    nonce: Quantity;
    stateRoot: Buffer;
    codeHash: Buffer;
    constructor(address: Address);
    static fromBuffer(buffer: Buffer): any;
    serialize(): Buffer;
}
//# sourceMappingURL=account.d.ts.map