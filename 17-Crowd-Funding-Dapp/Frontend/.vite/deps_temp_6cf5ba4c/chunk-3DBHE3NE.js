// node_modules/thirdweb/dist/esm/reactive/store.js
function createStore(initialValue) {
  const listeners = /* @__PURE__ */ new Set();
  let value = initialValue;
  const notify = () => {
    for (const listener of listeners) {
      listener();
    }
  };
  return {
    getValue() {
      return value;
    },
    setValue(newValue) {
      if (newValue === value) {
        return;
      }
      value = newValue;
      notify();
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    }
  };
}

// node_modules/thirdweb/dist/esm/transaction/transaction-store.js
var transactionsByAddress = /* @__PURE__ */ new Map();
function getTransactionStore(address) {
  const existingStore = transactionsByAddress.get(address);
  if (existingStore) {
    return existingStore;
  }
  const newStore = createStore([]);
  transactionsByAddress.set(address, newStore);
  return newStore;
}
function addTransactionToStore(options) {
  const { address, transactionHash, chainId } = options;
  const tranasctionStore = getTransactionStore(address);
  tranasctionStore.setValue([
    ...tranasctionStore.getValue(),
    { transactionHash, chainId }
  ]);
  transactionsByAddress.set(address, tranasctionStore);
}

export {
  createStore,
  getTransactionStore,
  addTransactionToStore
};
//# sourceMappingURL=chunk-3DBHE3NE.js.map
