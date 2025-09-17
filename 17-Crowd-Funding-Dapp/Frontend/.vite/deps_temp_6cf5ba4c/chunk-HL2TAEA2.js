// node_modules/thirdweb/dist/esm/rpc/actions/eth_getStorageAt.js
async function eth_getStorageAt(request, params) {
  return await request({
    method: "eth_getStorageAt",
    params: [params.address, params.position, params.blockTag ?? "latest"]
  });
}

export {
  eth_getStorageAt
};
//# sourceMappingURL=chunk-HL2TAEA2.js.map
