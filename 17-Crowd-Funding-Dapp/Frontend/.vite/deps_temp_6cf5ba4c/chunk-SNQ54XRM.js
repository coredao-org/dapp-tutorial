// node_modules/thirdweb/dist/esm/utils/caching/lru.js
var LruMap = class extends Map {
  constructor(size) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
      this.delete(key);
      super.set(key, value);
    }
    return value;
  }
  set(key, value) {
    super.set(key, value);
    if (this.maxSize && this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey) {
        this.delete(firstKey);
      }
    }
    return this;
  }
};

export {
  LruMap
};
//# sourceMappingURL=chunk-SNQ54XRM.js.map
