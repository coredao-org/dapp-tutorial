"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceStorageMap = void 0;
class TraceStorageMap extends Map {
    toJSON() {
        const obj = {};
        for (const [key, value] of this) {
            obj[key.toJSON()] = value;
        }
        return obj;
    }
}
exports.TraceStorageMap = TraceStorageMap;
//# sourceMappingURL=trace-storage-map.js.map