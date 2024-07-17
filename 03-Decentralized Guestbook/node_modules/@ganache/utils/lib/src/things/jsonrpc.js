"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRpcErrorCode = exports.makeError = exports.makeResponse = exports.makeRequest = void 0;
const jsonrpc = "2.0";
const makeRequest = (json) => {
    return {
        id: json.id,
        jsonrpc,
        method: json.method,
        params: json.params
    };
};
exports.makeRequest = makeRequest;
const makeResponse = (id, result) => {
    return {
        id,
        jsonrpc,
        result
    };
};
exports.makeResponse = makeResponse;
const makeError = (id, error, result) => {
    // Error objects are weird, `message` isn't included in the property names,
    // so it is pulled out separately.
    const details = { message: error.message };
    Object.getOwnPropertyNames(error).forEach(name => {
        if (typeof name === "string") {
            details[name] = error[name];
        }
    });
    if (typeof details.code !== "number") {
        details.code = -32700; // JSON-RPC Parse error
    }
    if (result !== undefined) {
        return {
            id,
            jsonrpc,
            error: details,
            result
        };
    }
    else {
        return {
            id,
            jsonrpc,
            error: details
        };
    }
};
exports.makeError = makeError;
var JsonRpcErrorCode;
(function (JsonRpcErrorCode) {
    /**
     * Invalid JSON was received by the server.
     * An error occurred on the server while parsing the JSON text.
     */
    JsonRpcErrorCode[JsonRpcErrorCode["PARSE_ERROR"] = -32700] = "PARSE_ERROR";
    /**
     * The JSON sent is not a valid Request object.
     */
    JsonRpcErrorCode[JsonRpcErrorCode["INVALID_REQUEST"] = -32600] = "INVALID_REQUEST";
    /**
     * The method does not exist / is not available.
     */
    JsonRpcErrorCode[JsonRpcErrorCode["METHOD_NOT_FOUND"] = -32601] = "METHOD_NOT_FOUND";
    /**
     * Invalid method parameter(s).
     */
    JsonRpcErrorCode[JsonRpcErrorCode["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
    /**
     * Internal JSON-RPC error.
     */
    JsonRpcErrorCode[JsonRpcErrorCode["INTERNAL_ERROR"] = -32603] = "INTERNAL_ERROR";
    /**
     * Missing or invalid parameters
     */
    JsonRpcErrorCode[JsonRpcErrorCode["INVALID_INPUT"] = -32000] = "INVALID_INPUT";
    /**
     * Transaction creation failed
     */
    JsonRpcErrorCode[JsonRpcErrorCode["TRANSACTION_REJECTED"] = -32003] = "TRANSACTION_REJECTED";
    /**
     * 	Method is not implemented
     */
    JsonRpcErrorCode[JsonRpcErrorCode["METHOD_NOT_SUPPORTED"] = -32004] = "METHOD_NOT_SUPPORTED";
    /**
     * 	Request exceeds defined limit
     */
    JsonRpcErrorCode[JsonRpcErrorCode["LIMIT_EXCEEDED"] = -32005] = "LIMIT_EXCEEDED";
    /**
     * Version of JSON-RPC protocol is not supported
     */
    JsonRpcErrorCode[JsonRpcErrorCode["JSON_RPC_VERSION_NOT_SUPPORTED"] = -32006] = "JSON_RPC_VERSION_NOT_SUPPORTED";
})(JsonRpcErrorCode = exports.JsonRpcErrorCode || (exports.JsonRpcErrorCode = {}));
//# sourceMappingURL=jsonrpc.js.map