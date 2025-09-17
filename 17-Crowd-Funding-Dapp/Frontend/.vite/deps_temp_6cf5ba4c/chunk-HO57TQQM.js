import {
  Input,
  Spinner,
  WalletEntryButton,
  useSetSelectionData
} from "./chunk-AARWH2GQ.js";
import {
  Container,
  CrossCircledIcon,
  MagnifyingGlassIcon,
  ModalHeader,
  Spacer,
  Text,
  iconSize,
  newStyled,
  spacing,
  useCustomTheme
} from "./chunk-HI6IFF64.js";
import {
  require_jsx_runtime
} from "./chunk-U3QNWT4A.js";
import {
  isEcosystemWallet
} from "./chunk-XC5J5ANL.js";
import {
  getInjectedProvider
} from "./chunk-FXBAO7K3.js";
import {
  getInstalledWalletProviders
} from "./chunk-PWFRCBEK.js";
import {
  smartWallet
} from "./chunk-2HYPHUAF.js";
import {
  createInAppWallet
} from "./chunk-6WNCTW75.js";
import {
  createWalletEmitter,
  trackConnect
} from "./chunk-CLN3QXW2.js";
import {
  getCoinbaseWebProvider
} from "./chunk-R76ND7QY.js";
import {
  COINBASE
} from "./chunk-BZXRHH4X.js";
import {
  webLocalStorage
} from "./chunk-VIBS7Y3M.js";
import {
  require_react
} from "./chunk-2MTJELC7.js";
import {
  getCachedChainIfExists
} from "./chunk-TFBEDS4S.js";
import {
  detectOS
} from "./chunk-P7ZDTV2E.js";
import {
  __toESM
} from "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AllWalletsUI.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/fuse.js/dist/fuse.mjs
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
var INFINITY = 1 / 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
var hasOwn = Object.prototype.hasOwnProperty;
var KeyStore = class {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      let obj = createKey(key);
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return { path, id, weight, src, getFn };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
var MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
var BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
var FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
var AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};
var SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
var FuseIndex = class {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];
        while (stack.length) {
          const { nestedArrIndex, value: value2 } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else
            ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
};
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
var MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
var BitapSearch = class {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;
    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }
    if (this.pattern === text) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
};
var BaseMatch = class {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
};
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
var ExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InverseExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var PrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InversePrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var SuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }
};
var InverseSuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var FuzzyMatch = class extends BaseMatch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text) {
    return this._bitapSearch.searchIn(text);
  }
};
var IncludeMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text) {
    let location = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
};
var searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];
var searchersLen = searchers.length;
var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
var OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
var ExtendedSearch = class {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const { includeMatches, isCaseSensitive } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers2 = query[i];
      allIndices.length = 0;
      numMatches = 0;
      for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
        const searcher = searchers2[j];
        const { isMatch, indices, score } = searcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
};
var registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
var LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
var KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
var isPath = (query) => !!query[KeyType.PATH];
var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
var convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, { auto = true } = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({ key, norm: norm2, score }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
      );
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const { indices, value } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches)
    transformers.push(transformMatches);
  if (includeScore)
    transformers.push(transformScore);
  return results.map((result) => {
    const { idx } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
var Fuse = class {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };
    if (this.options.useExtendedSearch && false) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
    }
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, { ignoreFieldNorm });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];
    records.forEach(({ v: text, i: idx, n: norm2 }) => {
      if (!isDefined(text)) {
        return;
      }
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm: norm2, indices }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;
        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });
        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ];
        }
        return [];
      }
      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return;
      }
      let matches = [];
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });
      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });
    return results;
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches = [];
    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm2 } = value;
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        matches.push({ score, key, value: text, norm: norm2, indices });
      }
    }
    return matches;
  }
};
Fuse.version = "7.0.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AllWalletsUI.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/wallets/__generated__/wallet-infos.js
var ALL_MINIMAL_WALLET_INFOS = [
  {
    id: "io.metamask",
    name: "MetaMask",
    hasMobileSupport: true
  },
  {
    id: "com.trustwallet.app",
    name: "Trust Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.okex.wallet",
    name: "OKX Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.bitget.web3",
    name: "Bitget Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.binance",
    name: "Binance Web3 Wallet",
    hasMobileSupport: true
  },
  {
    id: "org.uniswap",
    name: "Uniswap Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.safepal",
    name: "SafePal",
    hasMobileSupport: true
  },
  {
    id: "me.rainbow",
    name: "Rainbow",
    hasMobileSupport: true
  },
  {
    id: "com.bybit",
    name: "Bybit Wallet",
    hasMobileSupport: true
  },
  {
    id: "pro.tokenpocket",
    name: "TokenPocket",
    hasMobileSupport: true
  },
  {
    id: "com.ledger",
    name: "Ledger Live",
    hasMobileSupport: true
  },
  {
    id: "xyz.timelesswallet",
    name: "Timeless X",
    hasMobileSupport: true
  },
  {
    id: "global.safe",
    name: "Safe",
    hasMobileSupport: true
  },
  {
    id: "io.zerion.wallet",
    name: "Zerion",
    hasMobileSupport: true
  },
  {
    id: "com.robinhood.wallet",
    name: "Robinhood Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.1inch.wallet",
    name: "1inch Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.crypto.wallet",
    name: "Crypto.com | DeFi Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.exodus",
    name: "Exodus",
    hasMobileSupport: true
  },
  {
    id: "xyz.argent",
    name: "Argent",
    hasMobileSupport: true
  },
  {
    id: "im.token",
    name: "imToken",
    hasMobileSupport: true
  },
  {
    id: "com.blockchain",
    name: "Blockchain.com",
    hasMobileSupport: true
  },
  {
    id: "io.magiceden.wallet",
    name: "Magic Eden",
    hasMobileSupport: true
  },
  {
    id: "com.kraken",
    name: "Kraken Wallet ",
    hasMobileSupport: true
  },
  {
    id: "app.backpack",
    name: "Backpack",
    hasMobileSupport: true
  },
  {
    id: "com.zengo",
    name: "Zengo Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.mewwallet",
    name: "MEW wallet",
    hasMobileSupport: true
  },
  {
    id: "com.fireblocks",
    name: "Fireblocks",
    hasMobileSupport: true
  },
  {
    id: "org.mathwallet",
    name: "MathWallet",
    hasMobileSupport: true
  },
  {
    id: "com.alphawallet",
    name: "AlphaWallet",
    hasMobileSupport: true
  },
  {
    id: "com.unstoppabledomains",
    name: "Unstoppable Domains",
    hasMobileSupport: true
  },
  {
    id: "app.keyring",
    name: "KEYRING PRO",
    hasMobileSupport: true
  },
  {
    id: "xyz.frontier.wallet",
    name: "Frontier",
    hasMobileSupport: true
  },
  {
    id: "app.omni",
    name: "Omni",
    hasMobileSupport: true
  },
  {
    id: "co.lobstr",
    name: "LOBSTR Wallet",
    hasMobileSupport: true
  },
  {
    id: "technology.obvious",
    name: "Obvious",
    hasMobileSupport: true
  },
  {
    id: "com.ambire",
    name: "Ambire Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.mtpelerin",
    name: "Bridge Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.internetmoney",
    name: "Internet Money Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.walletnow",
    name: "NOW Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.bitcoin",
    name: "Bitcoin.com Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.alpha-u.wallet.web",
    name: "αU wallet",
    hasMobileSupport: true
  },
  {
    id: "com.coin98",
    name: "Coin98 Super Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.myabcwallet",
    name: "ABC Wallet",
    hasMobileSupport: true
  },
  {
    id: "co.arculus",
    name: "Arculus Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.opera",
    name: "Opera Crypto Browser",
    hasMobileSupport: true
  },
  {
    id: "com.chain",
    name: "Chain",
    hasMobileSupport: true
  },
  {
    id: "io.huddln",
    name: "Huddln",
    hasMobileSupport: true
  },
  {
    id: "com.get-verso",
    name: "Verso",
    hasMobileSupport: true
  },
  {
    id: "me.haha",
    name: "HaHa",
    hasMobileSupport: true
  },
  {
    id: "pk.modular",
    name: "Modular Wallet Prod",
    hasMobileSupport: true
  },
  {
    id: "org.kelp",
    name: "Kelp",
    hasMobileSupport: true
  },
  {
    id: "io.clingon",
    name: "Cling Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.broearn",
    name: "Broearn Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.coinomi",
    name: "Coinomi",
    hasMobileSupport: true
  },
  {
    id: "com.ripio",
    name: "Ripio Portal",
    hasMobileSupport: true
  },
  {
    id: "com.sabay.wallet",
    name: "Sabay Wallet App",
    hasMobileSupport: true
  },
  {
    id: "io.tokoin",
    name: "Tokoin | My-T Wallet",
    hasMobileSupport: true
  },
  {
    id: "world.fncy",
    name: "Fncy Mobile Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.copiosa",
    name: "Copiosa",
    hasMobileSupport: true
  },
  {
    id: "com.liberawallet",
    name: "Libera",
    hasMobileSupport: true
  },
  {
    id: "io.certhis",
    name: "Certhis",
    hasMobileSupport: true
  },
  {
    id: "com.burritowallet",
    name: "Burrito",
    hasMobileSupport: true
  },
  {
    id: "io.ancrypto",
    name: "Ancrypto",
    hasMobileSupport: true
  },
  {
    id: "network.cvl",
    name: "CVL Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.cypherwallet",
    name: "Cypher Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.status",
    name: "Status",
    hasMobileSupport: true
  },
  {
    id: "io.enjin",
    name: "Enjin Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.trinity-tech",
    name: "Essentials",
    hasMobileSupport: true
  },
  {
    id: "app.everspace",
    name: "Everspace",
    hasMobileSupport: true
  },
  {
    id: "io.kriptomat",
    name: "Kriptomat",
    hasMobileSupport: true
  },
  {
    id: "io.oxalus",
    name: "Oxalus Wallet",
    hasMobileSupport: true
  },
  {
    id: "org.thetatoken",
    name: "Theta Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.leapwallet",
    name: "Leap Cosmos Wallet",
    hasMobileSupport: true
  },
  {
    id: "finance.islamicoin",
    name: "ISLAMIwallet",
    hasMobileSupport: true
  },
  {
    id: "xyz.coca",
    name: "COCA Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.monarchwallet",
    name: "Monarch Wallet",
    hasMobileSupport: true
  },
  {
    id: "co.filwallet",
    name: "FILWallet",
    hasMobileSupport: true
  },
  {
    id: "com.valoraapp",
    name: "Valora",
    hasMobileSupport: true
  },
  {
    id: "com.coincircle",
    name: "CoinCircle",
    hasMobileSupport: true
  },
  {
    id: "money.snowball",
    name: "Snowball",
    hasMobileSupport: true
  },
  {
    id: "io.paraswap",
    name: "ParaSwap Wallet",
    hasMobileSupport: true
  },
  {
    id: "network.mrhb",
    name: "Sahal Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.apollox",
    name: "ApolloX",
    hasMobileSupport: true
  },
  {
    id: "com.ennowallet",
    name: "Enno Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.loopring.wallet",
    name: "Loopring",
    hasMobileSupport: true
  },
  {
    id: "com.bee",
    name: "BeeWallet",
    hasMobileSupport: true
  },
  {
    id: "cc.localtrade.lab",
    name: "LocalTrade Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.xcapit",
    name: "Xcapit",
    hasMobileSupport: true
  },
  {
    id: "io.safematrix",
    name: "Safematrix",
    hasMobileSupport: true
  },
  {
    id: "com.neonwallet",
    name: "Neon Wallet",
    hasMobileSupport: true
  },
  {
    id: "xyz.sequence",
    name: "Sequence Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.linen",
    name: "Linen",
    hasMobileSupport: true
  },
  {
    id: "io.nabox",
    name: "Nabox",
    hasMobileSupport: true
  },
  {
    id: "net.spatium",
    name: "Spatium",
    hasMobileSupport: true
  },
  {
    id: "com.cryptnox",
    name: "Cryptnox Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.rktechworks",
    name: "ID Pocket",
    hasMobileSupport: true
  },
  {
    id: "pro.assure",
    name: "Assure",
    hasMobileSupport: true
  },
  {
    id: "trade.flooz.wallet",
    name: "Flooz",
    hasMobileSupport: true
  },
  {
    id: "app.keplr",
    name: "Keplr",
    hasMobileSupport: true
  },
  {
    id: "com.crossmint",
    name: "Crossmint",
    hasMobileSupport: true
  },
  {
    id: "com.pierwallet",
    name: "pier",
    hasMobileSupport: true
  },
  {
    id: "app.core",
    name: "Core",
    hasMobileSupport: true
  },
  {
    id: "app.keeper-wallet",
    name: "Keeper",
    hasMobileSupport: true
  },
  {
    id: "com.dcentwallet",
    name: "D'CENT Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.withpaper",
    name: "Paper",
    hasMobileSupport: true
  },
  {
    id: "finance.klever",
    name: "Klever Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.edge",
    name: "Edge Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.neftipedia",
    name: "NeftiWallet",
    hasMobileSupport: true
  },
  {
    id: "io.goldbit",
    name: "GoldBit",
    hasMobileSupport: true
  },
  {
    id: "com.coingrig",
    name: "Coingrig",
    hasMobileSupport: true
  },
  {
    id: "io.xfun",
    name: "XFUN Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.ricewallet",
    name: "RiceWallet",
    hasMobileSupport: true
  },
  {
    id: "com.antiersolutions",
    name: "Ancrypto Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.okse",
    name: "Okse Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.aktionariat",
    name: "Aktionariat",
    hasMobileSupport: true
  },
  {
    id: "com.itoken",
    name: "iToken Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.zelus",
    name: "Zelus",
    hasMobileSupport: true
  },
  {
    id: "com.cardstack",
    name: "Card Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.paybolt",
    name: "PayBolt",
    hasMobileSupport: true
  },
  {
    id: "org.arianee",
    name: "Arianee Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.slavi",
    name: "Slavi Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.plasma-wallet",
    name: "Plasma Wallet",
    hasMobileSupport: true
  },
  {
    id: "tech.defiantapp",
    name: "Defiant",
    hasMobileSupport: true
  },
  {
    id: "cc.avacus",
    name: "Avacus",
    hasMobileSupport: true
  },
  {
    id: "org.bytebank",
    name: "ByteBank",
    hasMobileSupport: true
  },
  {
    id: "com.coolbitx.cwsapp",
    name: "CoolWallet",
    hasMobileSupport: true
  },
  {
    id: "com.optowallet",
    name: "Opto Wallet",
    hasMobileSupport: true
  },
  {
    id: "network.trustkeys",
    name: "TK Finance",
    hasMobileSupport: true
  },
  {
    id: "app.beewallet",
    name: "Bee Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.ttmwallet",
    name: "MDAO Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.pltwallet",
    name: "PLTwallet",
    hasMobileSupport: true
  },
  {
    id: "io.helixid",
    name: "helix id",
    hasMobileSupport: true
  },
  {
    id: "it.airgap",
    name: "AirGap Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.qubic.wallet",
    name: "Qubic Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.holdstation",
    name: "Holdstation Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.saakuru.app",
    name: "Saakuru All-in-One crypto App",
    hasMobileSupport: true
  },
  {
    id: "com.3swallet",
    name: "3S Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.payperless",
    name: "Payperless",
    hasMobileSupport: true
  },
  {
    id: "digital.minerva",
    name: "Minerva Wallet",
    hasMobileSupport: true
  },
  {
    id: "finance.voltage",
    name: "Volt: DeFi",
    hasMobileSupport: true
  },
  {
    id: "com.lif3",
    name: "Lif3 Wallet",
    hasMobileSupport: true
  },
  {
    id: "net.shinobi-wallet",
    name: "Shinobi-Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.kryptogo",
    name: "KryptoGO Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.feralfile.app",
    name: "Feral File",
    hasMobileSupport: true
  },
  {
    id: "com.bifrostwallet",
    name: "Bifrost Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.nufinetes",
    name: "Nufinetes",
    hasMobileSupport: true
  },
  {
    id: "io.wallet3",
    name: "Wallet 3",
    hasMobileSupport: true
  },
  {
    id: "com.abra",
    name: "Abra Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.imem",
    name: "iMe",
    hasMobileSupport: true
  },
  {
    id: "com.premanft",
    name: "PREMA Wallet",
    hasMobileSupport: true
  },
  {
    id: "so.onekey.app.wallet",
    name: "OneKey",
    hasMobileSupport: true
  },
  {
    id: "finance.slingshot",
    name: "Slingshot Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.kriptonio",
    name: "Kriptonio",
    hasMobileSupport: true
  },
  {
    id: "io.streakk",
    name: "Streakk Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.saitamatoken",
    name: "SaitaPro",
    hasMobileSupport: true
  },
  {
    id: "group.com.flowfoundation.wallet",
    name: "Flow Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.hippowallet",
    name: "Hippo Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.cosmostation",
    name: "Cosmostation",
    hasMobileSupport: true
  },
  {
    id: "org.bitizen",
    name: "Bitizen",
    hasMobileSupport: true
  },
  {
    id: "io.blocto",
    name: "Blocto",
    hasMobileSupport: true
  },
  {
    id: "com.humbl",
    name: "HUMBL WALLET",
    hasMobileSupport: true
  },
  {
    id: "io.passpay",
    name: "PassPay Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.ultimate",
    name: "Ultimate",
    hasMobileSupport: true
  },
  {
    id: "me.astrox",
    name: "Me Wallet",
    hasMobileSupport: true
  },
  {
    id: "org.thorwallet",
    name: "THORWallet",
    hasMobileSupport: true
  },
  {
    id: "app.fizzwallet",
    name: "Fizz",
    hasMobileSupport: true
  },
  {
    id: "app.stickey",
    name: "Stickey Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.klipwallet",
    name: "Klip",
    hasMobileSupport: true
  },
  {
    id: "app.coinstats",
    name: "CoinStats",
    hasMobileSupport: true
  },
  {
    id: "land.liker",
    name: "LikerLand App",
    hasMobileSupport: true
  },
  {
    id: "app.krystal",
    name: "Krystal",
    hasMobileSupport: true
  },
  {
    id: "fi.pillar",
    name: "Pillar",
    hasMobileSupport: true
  },
  {
    id: "io.harti",
    name: "HARTi Wallet",
    hasMobileSupport: true
  },
  {
    id: "net.stasis",
    name: "Stasis Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.novawallet",
    name: "Nova Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.dttd",
    name: "DTTD",
    hasMobileSupport: true
  },
  {
    id: "com.foxwallet",
    name: "FoxWallet",
    hasMobileSupport: true
  },
  {
    id: "network.haqq",
    name: "HAQQ Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.tomi",
    name: "tomi Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.tradestrike",
    name: "StrikeX Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.subwallet",
    name: "SubWallet",
    hasMobileSupport: true
  },
  {
    id: "tech.okto",
    name: "Okto",
    hasMobileSupport: true
  },
  {
    id: "app.catecoin",
    name: "Catecoin Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.ukiss",
    name: "UKISS Hub",
    hasMobileSupport: true
  },
  {
    id: "com.tellaw",
    name: "Tellaw Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.tangem",
    name: "Tangem Wallet",
    hasMobileSupport: true
  },
  {
    id: "is.callback",
    name: "Callback",
    hasMobileSupport: true
  },
  {
    id: "io.summonersarena",
    name: "SA ASSISTANT",
    hasMobileSupport: true
  },
  {
    id: "co.xellar",
    name: "Xellar",
    hasMobileSupport: true
  },
  {
    id: "io.talken",
    name: "Talken Wallet",
    hasMobileSupport: true
  },
  {
    id: "xyz.uniultra.wallet",
    name: "U2U Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.ozonewallet",
    name: "OzoneWallet",
    hasMobileSupport: true
  },
  {
    id: "com.tiduswallet",
    name: "Tidus Wallet ",
    hasMobileSupport: true
  },
  {
    id: "world.ixo",
    name: "Impact Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.zelcore",
    name: "Zelcore",
    hasMobileSupport: true
  },
  {
    id: "world.dosi.vault",
    name: "DOSI Vault",
    hasMobileSupport: true
  },
  {
    id: "com.ullapay",
    name: "WOW EARN",
    hasMobileSupport: true
  },
  {
    id: "com.ellipal",
    name: "ELLIPAL",
    hasMobileSupport: true
  },
  {
    id: "money.unstoppable",
    name: "Unstoppable Wallet",
    hasMobileSupport: true
  },
  {
    id: "dev.auroracloud",
    name: "Aurora Pass",
    hasMobileSupport: true
  },
  {
    id: "zone.bitverse",
    name: "Bitverse",
    hasMobileSupport: true
  },
  {
    id: "io.konio",
    name: "Konio",
    hasMobileSupport: true
  },
  {
    id: "net.gateweb3",
    name: "GateWallet",
    hasMobileSupport: true
  },
  {
    id: "app.utorg",
    name: "UTORG",
    hasMobileSupport: true
  },
  {
    id: "com.coinsdo",
    name: "CoinWallet",
    hasMobileSupport: true
  },
  {
    id: "app.ammer",
    name: "Ammer Wallet",
    hasMobileSupport: true
  },
  {
    id: "us.binance",
    name: "Binance.US",
    hasMobileSupport: true
  },
  {
    id: "co.muza",
    name: "MUZA",
    hasMobileSupport: true
  },
  {
    id: "com.fxwallet",
    name: "FxWallet",
    hasMobileSupport: true
  },
  {
    id: "app.ryipay",
    name: "RYIPAY",
    hasMobileSupport: true
  },
  {
    id: "com.roninchain.wallet",
    name: "Ronin Wallet",
    hasMobileSupport: true
  },
  {
    id: "org.dota168",
    name: "MetaWallet",
    hasMobileSupport: true
  },
  {
    id: "io.altme",
    name: "Altme",
    hasMobileSupport: true
  },
  {
    id: "com.bitpie",
    name: "Bitpie",
    hasMobileSupport: true
  },
  {
    id: "io.moonstake",
    name: "MOONSTAKE",
    hasMobileSupport: true
  },
  {
    id: "gg.indi",
    name: "IndiGG",
    hasMobileSupport: true
  },
  {
    id: "io.yusetoken",
    name: "Yuse Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.coininn",
    name: "Coininn Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.functionx",
    name: "f(x)Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.pockie",
    name: "pockie",
    hasMobileSupport: true
  },
  {
    id: "com.amazewallet",
    name: "AmazeWallet",
    hasMobileSupport: true
  },
  {
    id: "com.paliwallet",
    name: "Pali Wallet",
    hasMobileSupport: true
  },
  {
    id: "me.easy",
    name: "EASY",
    hasMobileSupport: true
  },
  {
    id: "live.superex",
    name: "SuperWallet",
    hasMobileSupport: true
  },
  {
    id: "com.secuxtech",
    name: "SecuX",
    hasMobileSupport: true
  },
  {
    id: "io.didwallet",
    name: "DIDWallet",
    hasMobileSupport: true
  },
  {
    id: "social.halo",
    name: "Halo Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.sinohope",
    name: "Sinohope",
    hasMobileSupport: true
  },
  {
    id: "com.ballet",
    name: "Ballet Crypto",
    hasMobileSupport: true
  },
  {
    id: "com.opz",
    name: "OPZ Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.fizen",
    name: "Fizen Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.kresus",
    name: "Kresus SuperApp",
    hasMobileSupport: true
  },
  {
    id: "com.midoin",
    name: "midoin",
    hasMobileSupport: true
  },
  {
    id: "app.onto",
    name: "ONTO",
    hasMobileSupport: true
  },
  {
    id: "com.oasys-wallet",
    name: "Oasys Passport",
    hasMobileSupport: true
  },
  {
    id: "org.gooddollar",
    name: "GoodDollar",
    hasMobileSupport: true
  },
  {
    id: "id.competence",
    name: "Competence.id",
    hasMobileSupport: true
  },
  {
    id: "ai.spotonchain.platform",
    name: "Spot On Chain App",
    hasMobileSupport: true
  },
  {
    id: "network.dgg",
    name: "DGG Wallet",
    hasMobileSupport: true
  },
  {
    id: "llc.besc",
    name: "BeanBag",
    hasMobileSupport: true
  },
  {
    id: "app.gamic",
    name: "Gamic",
    hasMobileSupport: true
  },
  {
    id: "baby.smart",
    name: "Smart.Baby",
    hasMobileSupport: true
  },
  {
    id: "network.gridlock",
    name: "Gridlock Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.zeal",
    name: "Zeal",
    hasMobileSupport: true
  },
  {
    id: "com.ivirse",
    name: "IApp",
    hasMobileSupport: true
  },
  {
    id: "ch.dssecurity",
    name: "DS Security SA",
    hasMobileSupport: true
  },
  {
    id: "com.concordium",
    name: "Concordium",
    hasMobileSupport: true
  },
  {
    id: "io.zkape",
    name: "Ape Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.thirdweb",
    name: "thirdweb",
    hasMobileSupport: true
  },
  {
    id: "io.pitaka",
    name: "Pitaka",
    hasMobileSupport: true
  },
  {
    id: "com.trusteeglobal",
    name: "Trustee Wallet",
    hasMobileSupport: true
  },
  {
    id: "org.mugambo",
    name: "rss wallet",
    hasMobileSupport: true
  },
  {
    id: "cc.dropp",
    name: "Dropp",
    hasMobileSupport: true
  },
  {
    id: "xyz.roam.wallet",
    name: "Roam",
    hasMobileSupport: true
  },
  {
    id: "world.qoin",
    name: "Qoin Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.meld.app",
    name: "MELDapp",
    hasMobileSupport: true
  },
  {
    id: "com.bestwallet",
    name: "Best Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.hyperpay",
    name: "HyperPay",
    hasMobileSupport: true
  },
  {
    id: "io.xucre",
    name: "Xucre",
    hasMobileSupport: true
  },
  {
    id: "app.herewallet",
    name: "HERE Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.cakewallet",
    name: "Cake Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.unagi.unawallet",
    name: "una Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.ethos",
    name: "Ethos Self-Custody Vault",
    hasMobileSupport: true
  },
  {
    id: "app.pluswallet",
    name: "Plus Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.authentrend",
    name: "AT.Wallet",
    hasMobileSupport: true
  },
  {
    id: "finance.plena",
    name: "Plena-App",
    hasMobileSupport: true
  },
  {
    id: "com.wemix",
    name: "WemixWallet",
    hasMobileSupport: true
  },
  {
    id: "com.gemwallet",
    name: "Gem Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.caesiumlab",
    name: "Caesium",
    hasMobileSupport: true
  },
  {
    id: "pro.fintoken",
    name: "FINTOKEN",
    hasMobileSupport: true
  },
  {
    id: "com.peakdefi",
    name: "PEAKDEFI",
    hasMobileSupport: true
  },
  {
    id: "com.nodle",
    name: "Nodle",
    hasMobileSupport: true
  },
  {
    id: "com.cryptokara",
    name: "Cryptokara",
    hasMobileSupport: true
  },
  {
    id: "com.poolsmobility.wallet",
    name: "poolswallet",
    hasMobileSupport: true
  },
  {
    id: "com.veworld",
    name: "VeWorld Mobile",
    hasMobileSupport: true
  },
  {
    id: "com.azcoiner",
    name: "AZCoiner",
    hasMobileSupport: true
  },
  {
    id: "technology.jambo",
    name: "Jambo",
    hasMobileSupport: true
  },
  {
    id: "vc.uincubator.api",
    name: "UIIC",
    hasMobileSupport: true
  },
  {
    id: "app.m1nty",
    name: "M1NTY",
    hasMobileSupport: true
  },
  {
    id: "io.noone",
    name: "Noone Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.bitso",
    name: "Bitso Web3 Wallet",
    hasMobileSupport: true
  },
  {
    id: "online.puzzle",
    name: "Puzzle Wallet",
    hasMobileSupport: true
  },
  {
    id: "network.blackfort",
    name: "BlackFort Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.armana.portal",
    name: "Armana Portal",
    hasMobileSupport: true
  },
  {
    id: "io.bharatbox",
    name: "BharatBox App",
    hasMobileSupport: true
  },
  {
    id: "com.greengloryglobal",
    name: "Blockaura",
    hasMobileSupport: true
  },
  {
    id: "com.x9wallet",
    name: "X9Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.miraiapp",
    name: "Mirai App",
    hasMobileSupport: true
  },
  {
    id: "io.kigo",
    name: "Kigo",
    hasMobileSupport: true
  },
  {
    id: "com.getcogni",
    name: "Cogni ",
    hasMobileSupport: true
  },
  {
    id: "com.fastex.wallet",
    name: "Fastex Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.wallacy",
    name: "Wallacy",
    hasMobileSupport: true
  },
  {
    id: "org.talkapp",
    name: "T+ Wallet ",
    hasMobileSupport: true
  },
  {
    id: "com.usecapsule",
    name: "Capsule",
    hasMobileSupport: true
  },
  {
    id: "com.unitywallet",
    name: "Unity Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.sinum",
    name: "Sinum",
    hasMobileSupport: true
  },
  {
    id: "finance.soulswap.app",
    name: "SoulSwap",
    hasMobileSupport: true
  },
  {
    id: "com.shapeshift",
    name: "ShapeShift",
    hasMobileSupport: true
  },
  {
    id: "finance.panaroma",
    name: "Panaroma Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.neopin",
    name: "NEOPIN",
    hasMobileSupport: true
  },
  {
    id: "com.alicebob",
    name: "Alicebob Wallet",
    hasMobileSupport: true
  },
  {
    id: "co.cyber.wallet",
    name: "CyberWallet",
    hasMobileSupport: true
  },
  {
    id: "com.dextrade",
    name: "DexTrade",
    hasMobileSupport: true
  },
  {
    id: "com.hashpack.wallet",
    name: "HashPack",
    hasMobileSupport: true
  },
  {
    id: "org.thepulsewallet",
    name: "The Pulse Wallet",
    hasMobileSupport: true
  },
  {
    id: "id.co.pintu",
    name: "Pintu",
    hasMobileSupport: true
  },
  {
    id: "io.bladewallet",
    name: "Blade Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.pandoshi",
    name: "Pandoshi Wallet",
    hasMobileSupport: true
  },
  {
    id: "money.keychain",
    name: "Keychain",
    hasMobileSupport: true
  },
  {
    id: "com.mpcvault.broswerplugin",
    name: "MPCVault | Team crypto wallet",
    hasMobileSupport: true
  },
  {
    id: "io.legacynetwork",
    name: "Legacy Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.getclave",
    name: "Clave",
    hasMobileSupport: true
  },
  {
    id: "me.iopay",
    name: "ioPay",
    hasMobileSupport: true
  },
  {
    id: "app.kabila",
    name: "Kabila Wallet",
    hasMobileSupport: true
  },
  {
    id: "one.mixin.messenger",
    name: "Mixin Messenger",
    hasMobileSupport: true
  },
  {
    id: "com.bettatrade",
    name: "Bettatrade",
    hasMobileSupport: true
  },
  {
    id: "io.scramberry",
    name: "ScramberryWallet",
    hasMobileSupport: true
  },
  {
    id: "io.earthwallet",
    name: "Earth Wallet",
    hasMobileSupport: true
  },
  {
    id: "xyz.nestwallet",
    name: "Nest Wallet",
    hasMobileSupport: true
  },
  {
    id: "xyz.echooo",
    name: "Echooo Wallet",
    hasMobileSupport: true
  },
  {
    id: "net.myrenegade",
    name: "Renegade",
    hasMobileSupport: true
  },
  {
    id: "io.ready",
    name: "Ready",
    hasMobileSupport: true
  },
  {
    id: "ai.hacken",
    name: "hAI by Hacken",
    hasMobileSupport: true
  },
  {
    id: "io.plutope",
    name: "Plutope",
    hasMobileSupport: true
  },
  {
    id: "io.trustasset",
    name: "Trust Asset Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.dfinnwallet",
    name: "Dfinn Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.bmawallet",
    name: "BMA Wallet",
    hasMobileSupport: true
  },
  {
    id: "net.spatium.wallet",
    name: "Spatium",
    hasMobileSupport: true
  },
  {
    id: "io.transi",
    name: "Transi",
    hasMobileSupport: true
  },
  {
    id: "com.dolletwallet",
    name: "Dollet",
    hasMobileSupport: true
  },
  {
    id: "app.wombat",
    name: "Wombat",
    hasMobileSupport: true
  },
  {
    id: "fi.dropmate",
    name: "Dropmate",
    hasMobileSupport: true
  },
  {
    id: "pub.dg",
    name: "DGPub App",
    hasMobileSupport: true
  },
  {
    id: "com.icewal",
    name: "icewal",
    hasMobileSupport: true
  },
  {
    id: "one.metapro.wallet",
    name: "metapro wallet",
    hasMobileSupport: true
  },
  {
    id: "xyz.bonuz",
    name: "Bonuz Social Smart Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.shido",
    name: "Shido App",
    hasMobileSupport: true
  },
  {
    id: "co.lifedefi",
    name: "Life DeFi",
    hasMobileSupport: true
  },
  {
    id: "fun.tobi",
    name: "Tobi",
    hasMobileSupport: true
  },
  {
    id: "app.clot",
    name: "Clot",
    hasMobileSupport: true
  },
  {
    id: "me.komet.app",
    name: "Komet",
    hasMobileSupport: true
  },
  {
    id: "io.guardiianwallet",
    name: "GUARDIIAN Wallet",
    hasMobileSupport: true
  },
  {
    id: "io.wallypto",
    name: "Wallypto",
    hasMobileSupport: true
  },
  {
    id: "com.safemoon",
    name: "SafeMoon",
    hasMobileSupport: true
  },
  {
    id: "com.elrond.maiar.wallet",
    name: "xPortal",
    hasMobileSupport: true
  },
  {
    id: "co.swopme",
    name: "SWOP",
    hasMobileSupport: true
  },
  {
    id: "com.bitpay",
    name: "BitPay Wallet",
    hasMobileSupport: true
  },
  {
    id: "app.tofee",
    name: "Tofee Wallet Official",
    hasMobileSupport: true
  },
  {
    id: "com.zypto",
    name: "Zypto",
    hasMobileSupport: true
  },
  {
    id: "xyz.orion",
    name: "Orion",
    hasMobileSupport: true
  },
  {
    id: "io.uptn.dapp-web",
    name: "UPTN",
    hasMobileSupport: true
  },
  {
    id: "app.nicegram",
    name: "Nicegram Wallet",
    hasMobileSupport: true
  },
  {
    id: "finance.openwallet",
    name: "Open Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.tastycrypto",
    name: "tastycrypto",
    hasMobileSupport: true
  },
  {
    id: "com.ipmb",
    name: "IPMB Wallet",
    hasMobileSupport: true
  },
  {
    id: "com.daffione",
    name: "DaffiOne",
    hasMobileSupport: true
  },
  {
    id: "io.owallet",
    name: "OWallet",
    hasMobileSupport: true
  },
  {
    id: "com.beexo",
    name: "Beexo",
    hasMobileSupport: true
  },
  {
    id: "com.webauth",
    name: "WebAuth",
    hasMobileSupport: true
  },
  {
    id: "id.plumaa",
    name: "Plumaa ID",
    hasMobileSupport: true
  },
  {
    id: "social.gm2",
    name: "GM² Social",
    hasMobileSupport: true
  },
  {
    id: "nl.greenhood.wallet",
    name: "Greenhood",
    hasMobileSupport: true
  },
  {
    id: "com.coinbase.wallet",
    name: "Coinbase Wallet",
    hasMobileSupport: false
  },
  {
    id: "app.phantom",
    name: "Phantom",
    hasMobileSupport: false
  },
  {
    id: "io.rabby",
    name: "Rabby",
    hasMobileSupport: false
  },
  {
    id: "com.brave.wallet",
    name: "Brave Wallet",
    hasMobileSupport: false
  },
  {
    id: "io.xdefi",
    name: "XDEFI Wallet",
    hasMobileSupport: false
  },
  {
    id: "com.moongate.one",
    name: "MG",
    hasMobileSupport: false
  },
  {
    id: "com.blanqlabs.wallet",
    name: "Blanq",
    hasMobileSupport: false
  },
  {
    id: "tech.levain",
    name: "Levain",
    hasMobileSupport: false
  },
  {
    id: "com.enkrypt",
    name: "Enkrypt",
    hasMobileSupport: false
  },
  {
    id: "com.scramble",
    name: "Scramble",
    hasMobileSupport: false
  },
  {
    id: "io.finoa",
    name: "FinoaConnect",
    hasMobileSupport: false
  },
  {
    id: "inc.tomo",
    name: "tomo extension wallet",
    hasMobileSupport: false
  },
  {
    id: "com.walletconnect.com",
    name: "SampleW",
    hasMobileSupport: false
  },
  {
    id: "io.leapwallet.CompassWallet",
    name: "Compass Wallet",
    hasMobileSupport: false
  },
  {
    id: "app.nightly",
    name: "Nightly",
    hasMobileSupport: false
  },
  {
    id: "com.blazpay.wallet",
    name: "Blazpay",
    hasMobileSupport: false
  },
  {
    id: "com.lootrush",
    name: "LootRush",
    hasMobileSupport: false
  },
  {
    id: "app.core.extension",
    name: "Core",
    hasMobileSupport: false
  },
  {
    id: "xyz.dawnwallet",
    name: "Dawn Wallet",
    hasMobileSupport: false
  },
  {
    id: "xyz.abs",
    name: "Abstract Global Wallet",
    hasMobileSupport: false
  },
  {
    id: "smart",
    name: "Smart Wallet",
    hasMobileSupport: true
  },
  {
    id: "inApp",
    name: "In-App Wallet",
    hasMobileSupport: true
  },
  {
    id: "embedded",
    name: "In-App Wallet",
    hasMobileSupport: true
  },
  {
    id: "walletConnect",
    name: "WalletConnect",
    hasMobileSupport: false
  }
];
var wallet_infos_default = ALL_MINIMAL_WALLET_INFOS;

// node_modules/thirdweb/dist/esm/utils/web/isMobile.js
function isAndroid() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const os = detectOS(navigator.userAgent);
  return os ? os.toLowerCase().includes("android") : false;
}
function isIOS() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const os = detectOS(navigator.userAgent);
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}
function isMobile() {
  return isAndroid() || isIOS();
}

// node_modules/thirdweb/dist/esm/utils/web/openWindow.js
function openWindow(uri) {
  const isInsideIframe = window !== window.top;
  if (isInsideIframe) {
    window.open(uri);
  } else {
    if (uri.startsWith("http")) {
      const link = document.createElement("a");
      link.href = uri;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.click();
    } else {
      window.location.href = uri;
    }
  }
}

// node_modules/thirdweb/dist/esm/wallets/coinbase/coinbase-wallet.js
function coinbaseWalletSDK(args) {
  const { createOptions } = args;
  const emitter = createWalletEmitter();
  let account = void 0;
  let chain = void 0;
  function reset() {
    account = void 0;
    chain = void 0;
  }
  let handleDisconnect = async () => {
  };
  let handleSwitchChain = async (newChain) => {
    chain = newChain;
  };
  const unsubscribeChainChanged = emitter.subscribe("chainChanged", (newChain) => {
    chain = newChain;
  });
  const unsubscribeDisconnect = emitter.subscribe("disconnect", () => {
    reset();
    unsubscribeChainChanged();
    unsubscribeDisconnect();
  });
  emitter.subscribe("accountChanged", (_account) => {
    account = _account;
  });
  return {
    id: COINBASE,
    subscribe: emitter.subscribe,
    getChain() {
      if (!chain) {
        return void 0;
      }
      chain = getCachedChainIfExists(chain.id) || chain;
      return chain;
    },
    getConfig: () => createOptions,
    getAccount: () => account,
    autoConnect: async (options) => {
      const { autoConnectCoinbaseWalletSDK } = await import("./coinbaseWebSDK-RVHYUQN6.js");
      const provider = await args.providerFactory();
      const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectCoinbaseWalletSDK(options, emitter, provider);
      account = connectedAccount;
      chain = connectedChain;
      handleDisconnect = doDisconnect;
      handleSwitchChain = doSwitchChain;
      trackConnect({
        client: options.client,
        walletType: COINBASE,
        walletAddress: account.address,
        chainId: chain.id
      });
      return account;
    },
    connect: async (options) => {
      const { connectCoinbaseWalletSDK } = await import("./coinbaseWebSDK-RVHYUQN6.js");
      const provider = await args.providerFactory();
      const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectCoinbaseWalletSDK(options, emitter, provider);
      account = connectedAccount;
      chain = connectedChain;
      handleDisconnect = doDisconnect;
      handleSwitchChain = doSwitchChain;
      trackConnect({
        client: options.client,
        walletType: COINBASE,
        walletAddress: account.address,
        chainId: chain.id
      });
      return account;
    },
    disconnect: async () => {
      reset();
      await handleDisconnect();
    },
    switchChain: async (newChain) => {
      await handleSwitchChain(newChain);
    },
    onConnectRequested: async () => {
      var _a;
      if (args.onConnectRequested) {
        const provider = await args.providerFactory();
        return (_a = args.onConnectRequested) == null ? void 0 : _a.call(args, provider);
      }
    }
  };
}

// node_modules/thirdweb/dist/esm/wallets/in-app/web/ecosystem.js
function ecosystemWallet(...args) {
  const [ecosystemId, createOptions] = args;
  const ecosystem = {
    id: ecosystemId,
    partnerId: createOptions == null ? void 0 : createOptions.partnerId
  };
  return createInAppWallet({
    ecosystem,
    createOptions: {
      auth: {
        ...createOptions == null ? void 0 : createOptions.auth,
        options: []
        // controlled by ecosystem
      },
      partnerId: ecosystem.partnerId
    },
    connectorFactory: async (client) => {
      const { InAppWebConnector } = await import("./web-connector-5CMXT4ED.js");
      return new InAppWebConnector({
        client,
        ecosystem
      });
    }
  });
}

// node_modules/thirdweb/dist/esm/wallets/in-app/web/in-app.js
function inAppWallet(createOptions) {
  return createInAppWallet({
    createOptions,
    connectorFactory: async (client) => {
      var _a;
      const { InAppWebConnector } = await import("./web-connector-5CMXT4ED.js");
      return new InAppWebConnector({
        client,
        passkeyDomain: (_a = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _a.passkeyDomain
      });
    }
  });
}

// node_modules/thirdweb/dist/esm/wallets/create-wallet.js
function createWallet(...args) {
  const [id, creationOptions] = args;
  switch (true) {
    case id === "smart": {
      return smartWallet(creationOptions);
    }
    case (id === "embedded" || id === "inApp"): {
      return inAppWallet(creationOptions);
    }
    case isEcosystemWallet(id):
      return ecosystemWallet(...args);
    case id === COINBASE: {
      const options = creationOptions;
      return coinbaseWalletSDK({
        createOptions: options,
        providerFactory: () => getCoinbaseWebProvider(options),
        onConnectRequested: async (provider) => {
          const { showCoinbasePopup } = await import("./utils-QE6HZ2TS.js");
          return showCoinbasePopup(provider);
        }
      });
    }
    default: {
      let reset = function() {
        account = void 0;
        chain = void 0;
      };
      const emitter = createWalletEmitter();
      let account = void 0;
      let chain = void 0;
      const unsubscribeChain = emitter.subscribe("chainChanged", (newChain) => {
        chain = newChain;
      });
      let handleDisconnect = async () => {
      };
      const unsubscribeDisconnect = emitter.subscribe("disconnect", () => {
        reset();
        unsubscribeChain();
        unsubscribeDisconnect();
      });
      emitter.subscribe("accountChanged", (_account) => {
        account = _account;
      });
      let handleSwitchChain = async () => {
        throw new Error("Not implemented yet");
      };
      const sessionHandler = isMobile() ? (uri) => openWindow(uri) : void 0;
      const wallet = {
        id,
        subscribe: emitter.subscribe,
        getConfig: () => args[1],
        getChain() {
          if (!chain) {
            return void 0;
          }
          chain = getCachedChainIfExists(chain.id) || chain;
          return chain;
        },
        getAccount: () => account,
        autoConnect: async (options) => {
          const { injectedProvider } = await import("./mipdStore-HEJSLGN7.js");
          if (id !== "walletConnect" && injectedProvider(id)) {
            const { autoConnectEip1193Wallet } = await import("./injected-LISAWEIO.js");
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectEip1193Wallet({
              id,
              provider: getInjectedProvider(id),
              emitter,
              chain: options.chain,
              client: options.client
            });
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            trackConnect({
              client: options.client,
              walletType: id,
              walletAddress: account.address,
              chainId: chain.id
            });
            return account;
          }
          if (options && "client" in options) {
            const { autoConnectWC } = await import("./controller-W2QS5UC4.js");
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectWC(options, emitter, wallet.id, webLocalStorage, sessionHandler);
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            trackConnect({
              client: options.client,
              walletType: id,
              walletAddress: account.address,
              chainId: chain.id
            });
            return account;
          }
          throw new Error("Failed to auto connect");
        },
        connect: async (options) => {
          async function wcConnect(wcOptions) {
            const { connectWC } = await import("./controller-W2QS5UC4.js");
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectWC(wcOptions, emitter, wallet.id, webLocalStorage, sessionHandler);
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            trackConnect({
              client: wcOptions.client,
              walletType: id,
              walletAddress: account.address,
              chainId: chain.id
            });
            return account;
          }
          if (id === "walletConnect") {
            const { client, chain: _chain, ...walletConnectOptions } = options;
            return wcConnect({
              client,
              chain: _chain,
              walletConnect: {
                ...walletConnectOptions
              }
            });
          }
          const forceWalletConnectOption = options && "walletConnect" in options;
          const { injectedProvider } = await import("./mipdStore-HEJSLGN7.js");
          if (injectedProvider(id) && !forceWalletConnectOption) {
            const { connectEip1193Wallet } = await import("./injected-LISAWEIO.js");
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectEip1193Wallet({
              id,
              provider: getInjectedProvider(id),
              client: options.client,
              chain: options.chain,
              emitter
            });
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            trackConnect({
              client: options.client,
              walletType: id,
              walletAddress: account.address,
              chainId: chain.id
            });
            return account;
          }
          if (options && "client" in options) {
            return wcConnect(options);
          }
          throw new Error("Failed to connect");
        },
        // these get overridden in connect and autoConnect
        disconnect: async () => {
          reset();
          await handleDisconnect();
        },
        switchChain: (c) => handleSwitchChain(c)
      };
      return wallet;
    }
  }
}

// node_modules/thirdweb/dist/esm/react/web/utils/sortWallets.js
function sortWallets(wallets, recommendedWallets) {
  const providers = getInstalledWalletProviders();
  return wallets.sort((a, b) => {
    const aInstalled = providers.find((p) => p.info.rdns === a.id);
    const bInstalled = providers.find((p) => p.info.rdns === b.id);
    if (aInstalled && !bInstalled) {
      return -1;
    }
    if (!aInstalled && bInstalled) {
      return 1;
    }
    return 0;
  }).sort((a, b) => {
    const aIsRecommended = recommendedWallets == null ? void 0 : recommendedWallets.find((w) => w.id === a.id);
    const bIsRecommended = recommendedWallets == null ? void 0 : recommendedWallets.find((w) => w.id === b.id);
    if (aIsRecommended && !bIsRecommended) {
      return -1;
    }
    if (!aIsRecommended && bIsRecommended) {
      return 1;
    }
    return 0;
  }).sort((a, b) => {
    const aIsInApp = a.id === "inApp" || a.id === "embedded";
    const bIsInApp = b.id === "inApp" || b.id === "embedded";
    if (aIsInApp && !bIsInApp) {
      return -1;
    }
    if (!aIsInApp && bIsInApp) {
      return 1;
    }
    return 0;
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/hooks/useDebouncedValue.js
var import_react = __toESM(require_react(), 1);
function useDebouncedValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(value);
  (0, import_react.useEffect)(() => {
    let ignore = false;
    const id = setTimeout(() => {
      if (ignore) {
        return;
      }
      setDebouncedValue(value);
    }, delay);
    return () => {
      ignore = true;
      clearTimeout(id);
    };
  }, [value, delay]);
  return debouncedValue;
}

// node_modules/thirdweb/dist/esm/react/web/ui/hooks/useShowMore.js
var import_react2 = __toESM(require_react(), 1);
function useShowMore(initialItemsToShow, itemsToAdd) {
  const [itemsToShow, setItemsToShow] = (0, import_react2.useState)(initialItemsToShow);
  const lastItemRef = (0, import_react2.useCallback)((node) => {
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      var _a;
      if ((_a = entries[0]) == null ? void 0 : _a.isIntersecting) {
        setItemsToShow((prev) => prev + itemsToAdd);
      }
    }, { threshold: 1 });
    observer.observe(node);
  }, [itemsToAdd]);
  return { itemsToShow, lastItemRef };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AllWalletsUI.js
function AllWalletsUI(props) {
  const { itemsToShow, lastItemRef } = useShowMore(10, 10);
  const setSelectionData = useSetSelectionData();
  const walletList = (0, import_react3.useMemo)(() => {
    return wallet_infos_default.filter((wallet) => {
      return props.specifiedWallets.findIndex((x) => x.id === wallet.id) === -1;
    });
  }, [props.specifiedWallets]);
  const fuseInstance = (0, import_react3.useMemo)(() => {
    return new Fuse(walletList, {
      threshold: 0.4,
      keys: [
        {
          name: "name",
          weight: 1
        }
      ]
    });
  }, [walletList]);
  const listContainer = (0, import_react3.useRef)(null);
  const [searchTerm, setSearchTerm] = (0, import_react3.useState)("");
  const deferredSearchTerm = useDebouncedValue(searchTerm, 300);
  const searchResults = deferredSearchTerm ? fuseInstance.search(deferredSearchTerm).map((result) => result.item) : walletList;
  const walletInfosToShow = (0, import_react3.useMemo)(() => {
    return sortWallets(searchResults.slice(0, itemsToShow));
  }, [searchResults, itemsToShow]);
  return (0, import_jsx_runtime.jsxs)(Container, { fullHeight: true, flex: "column", animate: "fadein", children: [(0, import_jsx_runtime.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime.jsx)(ModalHeader, { title: "Select Wallet", onBack: props.onBack }) }), (0, import_jsx_runtime.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime.jsxs)("div", { style: {
    display: "flex",
    alignItems: "center",
    position: "relative"
  }, children: [(0, import_jsx_runtime.jsx)(StyledMagnifyingGlassIcon, { width: iconSize.md, height: iconSize.md }), (0, import_jsx_runtime.jsx)(Input, { style: {
    padding: `${spacing.sm} ${spacing.sm} ${spacing.sm} ${spacing.xxl}`
  }, tabIndex: -1, variant: "outline", placeholder: "Search Wallet", value: searchTerm, onChange: (e) => {
    var _a, _b;
    (_b = (_a = listContainer.current) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.scroll({
      top: 0
    });
    setSearchTerm(e.target.value);
  } }), deferredSearchTerm !== searchTerm && (0, import_jsx_runtime.jsx)("div", { style: {
    position: "absolute",
    right: spacing.md
  }, children: (0, import_jsx_runtime.jsx)(Spinner, { size: "md", color: "accentText" }) })] }) }), walletInfosToShow.length > 0 && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime.jsxs)(Container, { animate: "fadein", expand: true, scrollY: true, children: [(0, import_jsx_runtime.jsx)("div", { ref: listContainer, style: {
    maxHeight: props.size === "compact" ? "400px" : void 0,
    paddingInline: spacing.md
  }, children: walletInfosToShow.map((walletInfo, i) => {
    const isLast = i === walletInfosToShow.length - 1;
    return (0, import_jsx_runtime.jsx)("li", { ref: isLast ? lastItemRef : void 0, style: {
      listStyle: "none"
    }, children: (0, import_jsx_runtime.jsx)(WalletEntryButton, { walletId: walletInfo.id, selectWallet: () => {
      const wallet = createWallet(walletInfo.id);
      props.onSelect(wallet);
      if (!props.disableSelectionDataReset) {
        setSelectionData({});
      }
    }, client: props.client, recommendedWallets: props.recommendedWallets, connectLocale: props.connectLocale, isActive: false, badge: void 0 }) }, walletInfo.id);
  }) }), (0, import_jsx_runtime.jsx)(Spacer, { y: "xl" })] })] }), walletInfosToShow.length === 0 && (0, import_jsx_runtime.jsxs)(Container, { flex: "column", gap: "md", center: "both", color: "secondaryText", animate: "fadein", expand: true, style: {
    minHeight: "250px"
  }, children: [(0, import_jsx_runtime.jsx)(CrossCircledIcon, { width: iconSize.xl, height: iconSize.xl }), (0, import_jsx_runtime.jsx)(Text, { children: " No Results " })] })] });
}
var StyledMagnifyingGlassIcon = newStyled(MagnifyingGlassIcon)((_) => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.secondaryText,
    position: "absolute",
    left: spacing.sm
  };
});
var AllWalletsUI_default = AllWalletsUI;

export {
  isAndroid,
  isIOS,
  isMobile,
  openWindow,
  createWallet,
  Fuse,
  useDebouncedValue,
  useShowMore,
  sortWallets,
  AllWalletsUI_default
};
//# sourceMappingURL=chunk-HO57TQQM.js.map
