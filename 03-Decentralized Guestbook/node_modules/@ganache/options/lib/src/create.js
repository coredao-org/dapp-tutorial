"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OptionsConfig_defaults, _OptionsConfig_namespaces;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsConfig = void 0;
const utils_1 = require("@ganache/utils");
const checkForConflicts = (name, namespace, suppliedOptions, conflicts) => {
    if (!conflicts)
        return;
    for (const conflict of conflicts) {
        if (suppliedOptions.has(conflict)) {
            throw new Error(`Values for both "${namespace}.${name}" and ` +
                `"${namespace}.${conflict}" cannot ` +
                `be specified; they are mutually exclusive.`);
        }
    }
};
function fill(defaults, options, target, namespace) {
    const def = defaults[namespace];
    const config = (target[namespace] = target[namespace] || {});
    const flavor = options.flavor;
    const suppliedOptions = new Set();
    const keys = Object.keys(def);
    if ((0, utils_1.hasOwn)(options, namespace)) {
        const namespaceOptions = options[namespace];
        for (let i = 0, l = keys.length; i < l; i++) {
            const key = keys[i];
            const propDefinition = def[key];
            let value = namespaceOptions[key];
            if (value !== undefined) {
                const normalized = propDefinition.normalize(namespaceOptions[key]);
                if (normalized !== undefined) {
                    checkForConflicts(key, namespace, suppliedOptions, propDefinition.conflicts);
                    config[key] = normalized;
                    suppliedOptions.add(key);
                }
            }
            else {
                const legacyName = propDefinition.legacyName || key;
                value = options[legacyName];
                if (value !== undefined) {
                    const normalized = propDefinition.normalize(value);
                    if (normalized !== undefined) {
                        checkForConflicts(key, namespace, suppliedOptions, propDefinition.conflicts);
                        config[key] = normalized;
                        suppliedOptions.add(key);
                    }
                }
                else if ((0, utils_1.hasOwn)(propDefinition, "default")) {
                    config[key] = propDefinition.default(config, flavor);
                }
            }
        }
    }
    else {
        for (let i = 0, l = keys.length; i < l; i++) {
            const key = keys[i];
            const propDefinition = def[key];
            const legacyName = propDefinition.legacyName || key;
            const value = options[legacyName];
            if (value !== undefined) {
                const normalized = propDefinition.normalize(value);
                if (normalized !== undefined) {
                    checkForConflicts(key, namespace, suppliedOptions, propDefinition.conflicts);
                    config[key] = normalized;
                    suppliedOptions.add(key);
                }
            }
            else if ((0, utils_1.hasOwn)(propDefinition, "default")) {
                config[key] = propDefinition.default(config, flavor);
            }
        }
    }
}
class OptionsConfig {
    constructor(defaults) {
        _OptionsConfig_defaults.set(this, void 0);
        _OptionsConfig_namespaces.set(this, void 0);
        __classPrivateFieldSet(this, _OptionsConfig_defaults, defaults, "f");
        __classPrivateFieldSet(this, _OptionsConfig_namespaces, Object.keys(defaults), "f");
    }
    normalize(options) {
        const defaults = __classPrivateFieldGet(this, _OptionsConfig_defaults, "f");
        const out = {};
        __classPrivateFieldGet(this, _OptionsConfig_namespaces, "f").forEach(namespace => {
            fill(defaults, options, out, namespace);
        });
        return out;
    }
}
exports.OptionsConfig = OptionsConfig;
_OptionsConfig_defaults = new WeakMap(), _OptionsConfig_namespaces = new WeakMap();
//# sourceMappingURL=create.js.map