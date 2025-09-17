import {
  areUint8ArraysEqual,
  isUint8Array
} from "./chunk-VJOHABJ4.js";
import {
  isObjectWithKeys
} from "./chunk-3ZOYRTTJ.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  detectPlatform
} from "./chunk-P7ZDTV2E.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/storage/upload/helpers.js
function isFileInstance(data) {
  return globalThis.File && data instanceof File;
}
function isBufferOrStringWithName(data) {
  if (!data) {
    return false;
  }
  if (!isObjectWithKeys(data, ["data", "name"])) {
    return false;
  }
  return !!(typeof data.name === "string" && (typeof data.data === "string" || isUint8Array(data.data)));
}
function isFileBufferOrStringEqual(input1, input2) {
  if (isFileInstance(input1) && isFileInstance(input2)) {
    if (input1.name === input2.name && input1.lastModified === input2.lastModified && input1.size === input2.size) {
      return true;
    }
  } else if (isUint8Array(input1) && isUint8Array(input2)) {
    return areUint8ArraysEqual(input1, input2);
  } else if (isBufferOrStringWithName(input1) && isBufferOrStringWithName(input2)) {
    if (input1.name === input2.name) {
      if (typeof input1.data === "string" && typeof input2.data === "string") {
        return input1.data === input2.data;
      }
      if (isUint8Array(input1.data) && isUint8Array(input2.data)) {
        return areUint8ArraysEqual(input1.data, input2.data);
      }
    }
  }
  return false;
}
function buildFormData(form, files, options) {
  const fileNameToFileMap = /* @__PURE__ */ new Map();
  const fileNames = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    let fileName = "";
    let fileData = file;
    if (isFileInstance(file)) {
      if (options == null ? void 0 : options.rewriteFileNames) {
        let extensions = "";
        if (file.name) {
          const extensionStartIndex = file.name.lastIndexOf(".");
          if (extensionStartIndex > -1) {
            extensions = file.name.substring(extensionStartIndex);
          }
        }
        fileName = `${i + options.rewriteFileNames.fileStartNumber}${extensions}`;
      } else {
        fileName = `${file.name}`;
      }
    } else if (isBufferOrStringWithName(file)) {
      fileData = file.data;
      if (options == null ? void 0 : options.rewriteFileNames) {
        fileName = `${i + options.rewriteFileNames.fileStartNumber}`;
      } else {
        fileName = `${file.name}`;
      }
    } else {
      if (options == null ? void 0 : options.rewriteFileNames) {
        fileName = `${i + options.rewriteFileNames.fileStartNumber}`;
      } else {
        fileName = `${i}`;
      }
    }
    const filepath = (options == null ? void 0 : options.uploadWithoutDirectory) ? "files" : `files/${fileName}`;
    if (fileNameToFileMap.has(fileName)) {
      if (isFileBufferOrStringEqual(fileNameToFileMap.get(fileName), file)) {
        fileNames.push(fileName);
        continue;
      }
      throw new Error(`[DUPLICATE_FILE_NAME_ERROR] File name ${fileName} was passed for more than one different file.`);
    }
    fileNameToFileMap.set(fileName, file);
    fileNames.push(fileName);
    form.append("file", new Blob([fileData]), filepath);
  }
  const metadata = {
    name: "Storage SDK",
    keyvalues: { ...options == null ? void 0 : options.metadata }
  };
  form.append("pinataMetadata", JSON.stringify(metadata));
  if (options == null ? void 0 : options.uploadWithoutDirectory) {
    form.append("pinataOptions", JSON.stringify({
      wrapWithDirectory: false
    }));
  }
  return {
    form,
    // encode the file names on the way out (which is what the upload backend expects)
    fileNames: fileNames.map((fName) => encodeURIComponent(fName))
  };
}
function isFileOrUint8Array(data) {
  return isFileInstance(data) || isUint8Array(data) || isBufferOrStringWithName(data);
}
function extractObjectFiles(data, files = []) {
  if (isFileOrUint8Array(data)) {
    files.push(data);
    return files;
  }
  if (typeof data === "object") {
    if (!data) {
      return files;
    }
    if (Array.isArray(data)) {
      for (const entry of data) {
        extractObjectFiles(entry, files);
      }
    } else {
      Object.keys(data).map((key) => extractObjectFiles(data[key], files));
    }
  }
  return files;
}
function replaceObjectFilesWithUris(data, uris) {
  if (isFileOrUint8Array(data)) {
    if (uris.length) {
      return uris.shift();
    }
    console.warn("Not enough URIs to replace all files in object.");
  }
  if (typeof data === "object") {
    if (!data) {
      return data;
    }
    if (Array.isArray(data)) {
      return data.map((entry) => replaceObjectFilesWithUris(entry, uris));
    }
    return Object.fromEntries(Object.entries(data).map(([key, value]) => [
      key,
      replaceObjectFilesWithUris(value, uris)
    ]));
  }
  return data;
}
function replaceGatewayUrlWithScheme(url) {
  if (url.includes("/ipfs/")) {
    const hash = url.split("/ipfs/")[1];
    return `ipfs://${hash}`;
  }
  return url;
}
function replaceObjectGatewayUrlsWithSchemes(data) {
  if (typeof data === "string") {
    return replaceGatewayUrlWithScheme(data);
  }
  if (typeof data === "object") {
    if (!data) {
      return data;
    }
    if (isFileOrUint8Array(data)) {
      return data;
    }
    if (Array.isArray(data)) {
      return data.map((entry) => replaceObjectGatewayUrlsWithSchemes(entry));
    }
    return Object.fromEntries(Object.entries(data).map(([key, value]) => [
      key,
      replaceObjectGatewayUrlsWithSchemes(value)
    ]));
  }
  return data;
}

// node_modules/thirdweb/dist/esm/storage/upload.js
async function upload(options) {
  if (options.files.length === 0) {
    return null;
  }
  const isFileArray = options.files.map((item) => isFileOrUint8Array(item) || typeof item === "string").every((item) => !!item);
  let uris;
  if (isFileArray) {
    uris = options.files;
  } else {
    let cleaned = options.files;
    cleaned = replaceObjectGatewayUrlsWithSchemes(cleaned);
    const files = extractObjectFiles(cleaned);
    if (files.length) {
      const uris_ = await upload({ ...options, files });
      cleaned = replaceObjectFilesWithUris(
        cleaned,
        // always pass an array even if the underlying upload returns a single uri
        Array.isArray(uris_) ? uris_ : [uris_]
      );
    }
    uris = cleaned.map((item) => {
      if (typeof item === "string") {
        return item;
      }
      return stringify(item);
    });
  }
  const form_ = new FormData();
  const { fileNames, form } = buildFormData(form_, uris, options);
  const platform = detectPlatform();
  if (platform === "browser" || platform === "node") {
    const { uploadBatch } = await import("./web-node-NK4RL5GU.js");
    const uris2 = await uploadBatch(options.client, form, fileNames, options);
    if (options.files.length === 1) {
      return uris2[0];
    }
    return uris2;
  }
  throw new Error("Please, use the uploadMobile function in mobile environments.");
}
export {
  upload
};
//# sourceMappingURL=upload-U3ZHZXSH.js.map
