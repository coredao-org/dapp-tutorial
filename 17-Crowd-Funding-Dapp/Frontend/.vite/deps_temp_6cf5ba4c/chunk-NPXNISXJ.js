// node_modules/thirdweb/dist/esm/rpc/actions/eth_getCode.js
async function eth_getCode(request, params) {
  return request({
    method: "eth_getCode",
    params: [params.address, params.blockTag || "latest"]
  });
}

export {
  eth_getCode
};
//# sourceMappingURL=chunk-NPXNISXJ.js.map
