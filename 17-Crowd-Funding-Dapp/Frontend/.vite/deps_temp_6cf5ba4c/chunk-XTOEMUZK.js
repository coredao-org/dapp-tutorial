import {
  ClientScopedStorage
} from "./chunk-CYVKJMZE.js";
import {
  webLocalStorage
} from "./chunk-VIBS7Y3M.js";
import {
  base64ToString,
  base64UrlToBase64
} from "./chunk-VJOHABJ4.js";

// node_modules/@passwordless-id/webauthn/dist/webauthn.min.js
var N = Object.defineProperty;
var b = (e, a) => {
  for (var t in a)
    N(e, t, { get: a[t], enumerable: true });
};
var S = {};
b(S, { authenticate: () => M, isAvailable: () => U, isLocalAuthenticator: () => I, register: () => V });
var s = {};
b(s, { bufferToHex: () => m, concatenateBuffers: () => D, isBase64url: () => l, parseBase64url: () => d, parseBuffer: () => E, randomChallenge: () => R, sha256: () => u, toBase64url: () => o, toBuffer: () => f });
function R() {
  return crypto.randomUUID();
}
function f(e) {
  return Uint8Array.from(e, (a) => a.charCodeAt(0)).buffer;
}
function E(e) {
  return String.fromCharCode(...new Uint8Array(e));
}
function l(e) {
  return e.match(/^[a-zA-Z0-9\-_]+=*$/) !== null;
}
function o(e) {
  return btoa(E(e)).replaceAll("+", "-").replaceAll("/", "_");
}
function d(e) {
  return e = e.replaceAll("-", "+").replaceAll("_", "/"), f(atob(e));
}
async function u(e) {
  return await crypto.subtle.digest("SHA-256", e);
}
function m(e) {
  return [...new Uint8Array(e)].map((a) => a.toString(16).padStart(2, "0")).join("");
}
function D(e, a) {
  var t = new Uint8Array(e.byteLength + a.byteLength);
  return t.set(new Uint8Array(e), 0), t.set(new Uint8Array(a), e.byteLength), t;
}
function U() {
  return !!window.PublicKeyCredential;
}
async function I() {
  return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
}
async function H(e) {
  if (e === "local")
    return "platform";
  if (e === "roaming" || e === "extern")
    return "cross-platform";
  if (e !== "both")
    try {
      return await I() ? "platform" : "cross-platform";
    } catch {
      return;
    }
}
function v(e) {
  switch (e) {
    case -7:
      return "ES256";
    case -257:
      return "RS256";
    default:
      throw new Error(`Unknown algorithm code: ${e}`);
  }
}
async function V(e, a, t) {
  if (t = t ?? {}, !l(a))
    throw new Error("Provided challenge is not properly encoded in Base64url");
  let i = { challenge: d(a), rp: { id: t.domain ?? window.location.hostname, name: t.domain ?? window.location.hostname }, user: { id: t.userHandle ? f(t.userHandle) : await u(new TextEncoder().encode("passwordless.id-user:" + e)), name: e, displayName: e }, pubKeyCredParams: [{ alg: -7, type: "public-key" }, { alg: -257, type: "public-key" }], timeout: t.timeout ?? 6e4, authenticatorSelection: { userVerification: t.userVerification ?? "required", authenticatorAttachment: await H(t.authenticatorType ?? "auto"), residentKey: t.discoverable ?? "preferred", requireResidentKey: t.discoverable === "required" }, attestation: "direct" };
  t.debug && console.debug(i);
  let r = await navigator.credentials.create({ publicKey: i, signal: t.signal });
  t.debug && console.debug(r);
  let c = r.response, n = { username: e, credential: { id: r.id, publicKey: o(c.getPublicKey()), algorithm: v(r.response.getPublicKeyAlgorithm()) }, authenticatorData: o(c.getAuthenticatorData()), clientData: o(c.clientDataJSON) };
  return t.attestation && (n.attestationData = o(c.attestationObject)), n;
}
async function k(e) {
  let a = ["internal"], t = ["hybrid", "usb", "ble", "nfc"];
  if (e === "local")
    return a;
  if (e == "roaming" || e === "extern")
    return t;
  if (e === "both")
    return [...a, ...t];
  try {
    return await I() ? a : t;
  } catch {
    return [...a, ...t];
  }
}
async function M(e, a, t) {
  if (t = t ?? {}, !l(a))
    throw new Error("Provided challenge is not properly encoded in Base64url");
  let i = await k(t.authenticatorType ?? "auto"), r = { challenge: d(a), rpId: t.domain ?? window.location.hostname, allowCredentials: e.map((A) => ({ id: d(A), type: "public-key", transports: i })), userVerification: t.userVerification ?? "required", timeout: t.timeout ?? 6e4 };
  t.debug && console.debug(r);
  let c = await navigator.credentials.get({ publicKey: r, mediation: t.mediation, signal: t.signal });
  t.debug && console.debug(c);
  let n = c.response;
  return { credentialId: c.id, authenticatorData: o(n.authenticatorData), clientData: o(n.clientDataJSON), signature: o(n.signature), userHandle: n.userHandle ? o(n.userHandle) : void 0 };
}
var K = {};
b(K, { verifyAuthentication: () => X, verifyRegistration: () => J, verifySignature: () => x });
var C = {};
b(C, { parseAttestation: () => _, parseAuthentication: () => w, parseAuthenticator: () => O, parseClient: () => F, parseRegistration: () => P });
var h = { "00000000-0000-0000-0000-000000000000": "Unknown authenticator", "0076631b-d4a0-427f-5773-0ec71c9e0279": "HYPR FIDO2 Authenticator", "07a9f89c-6407-4594-9d56-621d5f1e358b": "NXP Semiconductros FIDO2 Conformance Testing CTAP2 Authenticator", "08987058-cadc-4b81-b6e1-30de50dcbe96": "Windows Hello", "09591fc6-9811-48f7-8f57-b9f23df6413f": "Pone Biometrics OFFPAD Authenticator", "0acf3011-bc60-f375-fb53-6f05f43154e0": "Nymi FIDO2 Authenticator", "0bb43545-fd2c-4185-87dd-feb0b2916ace": "Security Key NFC by Yubico - Enterprise Edition", "0d9b2e56-566b-c393-2940-f821b7f15d6d": "Excelsecu eSecu FIDO2 Pro Security Key", "0ea242b4-43c4-4a1b-8b17-dd6d0b6baec6": "Keeper", "1105e4ed-af1d-02ff-ffff-ffffffffffff": "Egomet FIDO2 Authenticator for Android", "12ded745-4bed-47d4-abaa-e713f51d6393": "Feitian AllinOne FIDO2 Authenticator", "149a2021-8ef6-4133-96b8-81f8d5b7f1f5": "Security Key by Yubico with NFC", "17290f1e-c212-34d0-1423-365d729f09d9": "Thales PIN iOS SDK", "175cd298-83d2-4a26-b637-313c07a6434e": "Chunghwa Telecom FIDO2 Smart Card Authenticator", "1c086528-58d5-f211-823c-356786e36140": "Atos CardOS FIDO2", "20f0be98-9af9-986a-4b42-8eca4acb28e4": "Excelsecu eSecu FIDO2 Fingerprint Security Key", "2194b428-9397-4046-8f39-007a1605a482": "IDPrime 931 Fido", "23786452-f02d-4344-87ed-aaf703726881": "SafeNet eToken Fusion CC", "2c0df832-92de-4be1-8412-88a8f074df4a": "Feitian FIDO Smart Card", "2d3bec26-15ee-4f5d-88b2-53622490270b": "HID Crescendo Key V2", "2fc0579f-8113-47ea-b116-bb5a8db9202a": "YubiKey 5 Series with NFC", "2ffd6452-01da-471f-821b-ea4bf6c8676a": "IDPrime 941 Fido", "30b5035e-d297-4fc1-b00b-addc96ba6a97": "OneSpan FIDO Touch", "30b5035e-d297-4ff1-b00b-addc96ba6a98": "OneSpan DIGIPASS FX1 BIO", "341e4da9-3c2e-8103-5a9f-aad887135200": "Ledger Nano S FIDO2 Authenticator", "34f5766d-1536-4a24-9033-0e294e510fb0": "YubiKey 5 Series CTAP2.1 Preview Expired ", "361a3082-0278-4583-a16f-72a527f973e4": "eWBM eFA500 FIDO2 Authenticator", "3789da91-f943-46bc-95c3-50ea2012f03a": "NEOWAVE Winkeo FIDO2", "39a5647e-1853-446c-a1f6-a79bae9f5bc7": "IDmelon", "3b1adb99-0dfe-46fd-90b8-7f7614a4de2a": "GoTrust Idem Key FIDO2 Authenticator", "3e078ffd-4c54-4586-8baa-a77da113aec5": "Hideez Key 3 FIDO2", "3e22415d-7fdf-4ea4-8a0c-dd60c4249b9d": "Feitian iePass FIDO Authenticator", "3f59672f-20aa-4afe-b6f4-7e5e916b6d98": "Arculus FIDO 2.1 Key Card [P71]", "42b4fb4a-2866-43b2-9bf7-6c6669c2e5d3": "Google Titan Security Key v2", "454e5346-4944-4ffd-6c93-8e9267193e9a": "Ensurity ThinC", "4b3f8944-d4f2-4d21-bb19-764a986ec160": "KeyXentic FIDO2 Secp256R1 FIDO2 CTAP2 Authenticator", "4c0cf95d-2f40-43b5-ba42-4c83a11c04ba": "Feitian BioPass FIDO2 Pro Authenticator", "4c50ff10-1057-4fc6-b8ed-43a529530c3c": "ImproveID Authenticator", "4d41190c-7beb-4a84-8018-adf265a6352d": "Thales IDPrime FIDO Bio", "4e768f2c-5fab-48b3-b300-220eb487752b": "Hideez Key 4 FIDO2 SDK", "504d7149-4e4c-3841-4555-55445a677357": "WiSECURE AuthTron USB FIDO2 Authenticator", "50a45b0c-80e7-f944-bf29-f552bfa2e048": "ACS FIDO Authenticator", "516d3969-5a57-5651-5958-4e7a49434167": "SmartDisplayer BobeePass FIDO2 Authenticator", "531126d6-e717-415c-9320-3d9aa6981239": "Dashlane", "53414d53-554e-4700-0000-000000000000": "Samsung Pass", "5343502d-5343-5343-6172-644649444f32": "ESS Smart Card Inc. Authenticator", "54d9fee8-e621-4291-8b18-7157b99c5bec": "HID Crescendo Enabled", "5626bed4-e756-430b-a7ff-ca78c8b12738": "VALMIDO PRO FIDO", "58b44d0b-0a7c-f33a-fd48-f7153c871352": "Ledger Nano S Plus FIDO2 Authenticator", "5ca1ab1e-1337-fa57-f1d0-a117e71ca702": "Allthenticator App: roaming BLE FIDO2 Allthenticator for Windows, Mac, Linux, and Allthenticate door readers", "5d629218-d3a5-11ed-afa1-0242ac120002": "Swissbit iShield Key Pro", "5fdb81b8-53f0-4967-a881-f5ec26fe4d18": "VinCSS FIDO2 Authenticator", "6002f033-3c07-ce3e-d0f7-0ffe5ed42543": "Excelsecu eSecu FIDO2 Fingerprint Key", "6028b017-b1d4-4c02-b4b3-afcdafc96bb2": "Windows Hello", "61250591-b2bc-4456-b719-0b17be90bb30": "eWBM eFPA FIDO2 Authenticator", "664d9f67-84a2-412a-9ff7-b4f7d8ee6d05": "OpenSK authenticator", "66a0ccb3-bd6a-191f-ee06-e375c50b9846": "Thales Bio iOS SDK", "692db549-7ae5-44d5-a1e5-dd20a493b723": "HID Crescendo Key", "69700f79-d1fb-472e-bd9b-a3a3b9a9eda0": "Pone Biometrics OFFPAD Authenticator", "6d44ba9b-f6ec-2e49-b930-0c8fe920cb73": "Security Key by Yubico with NFC", "73402251-f2a8-4f03-873e-3cb6db604b03": "uTrust FIDO2 Security Key", "73bb0cd4-e502-49b8-9c6f-b59445bf720b": "YubiKey 5 FIPS Series", "74820b05-a6c9-40f9-8fb0-9f86aca93998": "SafeNet eToken Fusion", "77010bd7-212a-4fc9-b236-d2ca5e9d4084": "Feitian BioPass FIDO2 Authenticator", "771b48fd-d3d4-4f74-9232-fc157ab0507a": "Edge on Mac", "7e3f3d30-3557-4442-bdae-139312178b39": "RSA DS100", "820d89ed-d65a-409e-85cb-f73f0578f82a": "IDmelon iOS Authenticator", "833b721a-ff5f-4d00-bb2e-bdda3ec01e29": "Feitian ePass FIDO2 Authenticator", "83c47309-aabb-4108-8470-8be838b573cb": "YubiKey Bio Series (Enterprise Profile)", "85203421-48f9-4355-9bc8-8a53846e5083": "YubiKey 5 FIPS Series with Lightning", "87dbc5a1-4c94-4dc8-8a47-97d800fd1f3c": "eWBM eFA320 FIDO2 Authenticator", "8836336a-f590-0921-301d-46427531eee6": "Thales Bio Android SDK", "8876631b-d4a0-427f-5773-0ec71c9e0279": "Solo Secp256R1 FIDO2 CTAP2 Authenticator", "88bbd2f0-342a-42e7-9729-dd158be5407a": "Precision InnaIT Key FIDO 2 Level 2 certified", "8976631b-d4a0-427f-5773-0ec71c9e0279": "Solo Tap Secp256R1 FIDO2 CTAP2 Authenticator", "89b19028-256b-4025-8872-255358d950e4": "Sentry Enterprises CTAP2 Authenticator", "8c97a730-3f7b-41a6-87d6-1e9b62bda6f0": "FT-JCOS FIDO Fingerprint Card", "8d1b1fcb-3c76-49a9-9129-5515b346aa02": "IDEMIA ID-ONE Card", "91ad6b93-264b-4987-8737-3a690cad6917": "Token Ring FIDO2 Authenticator", "931327dd-c89b-406c-a81e-ed7058ef36c6": "Swissbit iShield Key FIDO2", "95442b2e-f15e-4def-b270-efb106facb4e": "eWBM eFA310 FIDO2 Authenticator", "95e4d58c-056e-4a65-866d-f5a69659e880": "TruU Windows Authenticator", "973446ca-e21c-9a9b-99f5-9b985a67af0f": "ACS FIDO Authenticator Card", "9876631b-d4a0-427f-5773-0ec71c9e0279": "Somu Secp256R1 FIDO2 CTAP2 Authenticator", "998f358b-2dd2-4cbe-a43a-e8107438dfb3": "OnlyKey Secp256R1 FIDO2 CTAP2 Authenticator", "99bf4610-ec26-4252-b31f-7380ccd59db5": "ZTPass Card", "9c835346-796b-4c27-8898-d6032f515cc5": "Cryptnox FIDO2", "9d3df6ba-282f-11ed-a261-0242ac120002": "Arculus FIDO2/U2F Key Card", "9ddd1817-af5a-4672-a2b9-3e3dd95000a9": "Windows Hello", "9f0d8150-baa5-4c00-9299-ad62c8bb4e87": "GoTrust Idem Card FIDO2 Authenticator", "9f77e279-a6e2-4d58-b700-31e5943c6a98": "Hyper FIDO Pro", "a1f52be5-dfab-4364-b51c-2bd496b14a56": "OCTATCO EzFinger2 FIDO2 AUTHENTICATOR", "a3975549-b191-fd67-b8fb-017e2917fdb3": "Excelsecu eSecu FIDO2 NFC Security Key", "a4e9fc6d-4cbe-4758-b8ba-37598bb5bbaa": "Security Key NFC by Yubico", "ab32f0c6-2239-afbb-c470-d2ef4e254db6": "TEST (DUMMY RECORD)", "ab32f0c6-2239-afbb-c470-d2ef4e254db7": "TOKEN2 FIDO2 Security Key", "adce0002-35bc-c60a-648b-0b25f1f05503": "Chrome on Mac", "aeb6569c-f8fb-4950-ac60-24ca2bbe2e52": "HID Crescendo C2300", "b267239b-954f-4041-a01b-ee4f33c145b6": "authenton1 - CTAP2.1", "b50d5e0a-7f81-4959-9b12-f45407407503": "IDPrime 3940 FIDO", "b5397666-4885-aa6b-cebf-e52262a439a2": "Chromium Browser", "b6ede29c-3772-412c-8a78-539c1f4c62d2": "Feitian BioPass FIDO2 Plus Authenticator", "b84e4048-15dc-4dd0-8640-f4f60813c8af": "NordPass", "b92c3f9a-c014-4056-887f-140a2501163b": "Security Key by Yubico", "b93fd961-f2e6-462f-b122-82002247de78": "Android Authenticator with SafetyNet Attestation", "ba76a271-6eb6-4171-874d-b6428dbe3437": "ATKey.ProS", "ba86dc56-635f-4141-aef6-00227b1b9af6": "TruU Windows Authenticator", "bada5566-a7aa-401f-bd96-45619a55120d": "1Password", "bbf4b6a7-679d-f6fc-c4f2-8ac0ddf9015a": "Excelsecu eSecu FIDO2 PRO Security Key", "bc2fe499-0d8e-4ffe-96f3-94a82840cf8c": "OCTATCO EzQuant FIDO2 AUTHENTICATOR", "be727034-574a-f799-5c76-0929e0430973": "Crayonic KeyVault K1 (USB-NFC-BLE FIDO2 Authenticator)", "c1f9a0bc-1dd2-404a-b27f-8e29047a43fd": "YubiKey 5 FIPS Series with NFC", "c5703116-972b-4851-a3e7-ae1259843399": "NEOWAVE Badgeo FIDO2", "c5ef55ff-ad9a-4b9f-b580-adebafe026d0": "YubiKey 5 Series with Lightning", "c80dbd9a-533f-4a17-b941-1a2f1c7cedff": "HID Crescendo C3000", "ca4cff1b-5a81-4404-8194-59aabcf1660b": "IDPrime 3930 FIDO", "ca87cb70-4c1b-4579-a8e8-4efdd7c007e0": "FIDO Alliance TruU Sample FIDO2 Authenticator", "cb69481e-8ff7-4039-93ec-0a2729a154a8": "YubiKey 5 Series", "cd69adb5-3c7a-deb9-3177-6800ea6cb72a": "Thales PIN Android SDK", "cdbdaea2-c415-5073-50f7-c04e968640b6": "Excelsecu eSecu FIDO2 Security Key", "cfcb13a2-244f-4b36-9077-82b79d6a7de7": "USB/NFC Passcode Authenticator", "d384db22-4d50-ebde-2eac-5765cf1e2a44": "Excelsecu eSecu FIDO2 Fingerprint Security Key", "d41f5a69-b817-4144-a13c-9ebd6d9254d6": "ATKey.Card CTAP2.0", "d548826e-79b4-db40-a3d8-11116f7e8349": "Bitwarden", "d61d3b87-3e7c-4aea-9c50-441c371903ad": "KeyVault Secp256R1 FIDO2 CTAP2 Authenticator", "d7a423ad-3e19-4492-9200-78137dccc136": "VivoKey Apex FIDO2", "d821a7d4-e97c-4cb6-bd82-4237731fd4be": "Hyper FIDO Bio Security Key", "d8522d9f-575b-4866-88a9-ba99fa02f35b": "YubiKey Bio Series", "d91c5288-0ef0-49b7-b8ae-21ca0aa6b3f3": "KEY-ID FIDO2 Authenticator", "d94a29d9-52dd-4247-9c2d-8b818b610389": "VeriMark Guard Fingerprint Key", "da1fa263-8b25-42b6-a820-c0036f21ba7f": "ATKey.Card NFC", "dd4ec289-e01d-41c9-bb89-70fa845d4bf2": "iCloud Keychain (Managed)", "e1a96183-5016-4f24-b55b-e3ae23614cc6": "ATKey.Pro CTAP2.0", "e416201b-afeb-41ca-a03d-2281c28322aa": "ATKey.Pro CTAP2.1", "e86addcd-7711-47e5-b42a-c18257b0bf61": "IDCore 3121 Fido", "ea9b8d66-4d01-1d21-3ce4-b6b48cb575d4": "Google Password Manager", "eabb46cc-e241-80bf-ae9e-96fa6d2975cf": "TOKEN2 PIN Plus Security Key Series ", "eb3b131e-59dc-536a-d176-cb7306da10f5": "ellipticSecure MIRkey USB Authenticator", "ec31b4cc-2acc-4b8e-9c01-bade00ccbe26": "KeyXentic FIDO2 Secp256R1 FIDO2 CTAP2 Authenticator", "ee041bce-25e5-4cdb-8f86-897fd6418464": "Feitian ePass FIDO2-NFC Authenticator", "ee882879-721c-4913-9775-3dfcce97072a": "YubiKey 5 Series", "efb96b10-a9ee-4b6c-a4a9-d32125ccd4a4": "Safenet eToken FIDO", "f3809540-7f14-49c1-a8b3-8f813b225541": "Enpass", "f4c63eff-d26c-4248-801c-3736c7eaa93a": "FIDO KeyPass S3", "f7c558a0-f465-11e8-b568-0800200c9a66": "KONAI Secp256R1 FIDO2 Conformance Testing CTAP2 Authenticator", "f8a011f3-8c0a-4d15-8006-17111f9edc7d": "Security Key by Yubico", "fa2b99dc-9e39-4257-8f92-4a30d23c4118": "YubiKey 5 Series with NFC", "fbefdf68-fe86-0106-213e-4d5fa24cbe2e": "Excelsecu eSecu FIDO2 NFC Security Key", "fbfc3007-154e-4ecc-8c0b-6e020557d7bd": "iCloud Keychain", "fcb1bcb4-f370-078c-6993-bc24d0ae3fbe": "Ledger Nano X FIDO2 Authenticator", "fec067a1-f1d0-4c5e-b4c0-cc3237475461": "KX701 SmartToken FIDO" };
function T(e) {
  let a = new DataView(e.slice(32, 33)).getUint8(0), t = { rpIdHash: o(e.slice(0, 32)), flags: { userPresent: !!(a & 1), userVerified: !!(a & 4), backupEligibility: !!(a & 8), backupState: !!(a & 16), attestedData: !!(a & 64), extensionsIncluded: !!(a & 128) }, counter: new DataView(e.slice(33, 37)).getUint32(0, false) };
  if (t.synced = t.flags.backupState, e.byteLength > 37) {
    let i = Y(e);
    t = { ...t, aaguid: i, name: h[i] ?? "Unknown", icon_light: "https://webauthn.passwordless.id/authenticators/" + i + "-light.png", icon_dark: "https://webauthn.passwordless.id/authenticators/" + i + "-dark.png" };
  }
  return t;
}
function Y(e) {
  return L(e.slice(37, 53));
}
function L(e) {
  let a = m(e);
  return a = a.substring(0, 8) + "-" + a.substring(8, 12) + "-" + a.substring(12, 16) + "-" + a.substring(16, 20) + "-" + a.substring(20, 32), a;
}
var W = new TextDecoder("utf-8");
function F(e) {
  return typeof e == "string" && (e = d(e)), JSON.parse(W.decode(e));
}
function O(e) {
  return typeof e == "string" && (e = d(e)), T(e);
}
function _(e) {
  return e;
}
function P(e) {
  return { username: e.username, credential: e.credential, client: F(e.clientData), authenticator: O(e.authenticatorData), attestation: e.attestationData ? e.attestationData : null };
}
function w(e) {
  return { credentialId: e.credentialId, client: F(e.clientData), authenticator: O(e.authenticatorData), signature: e.signature };
}
async function G(e, a) {
  if (typeof e == "function") {
    let t = e(a);
    return t instanceof Promise ? await t : t;
  }
  return e === a;
}
async function y(e, a) {
  return !await G(e, a);
}
async function J(e, a) {
  let t = P(e);
  if (t.client.type !== "webauthn.create")
    throw new Error(`Unexpected ClientData type: ${t.client.type}`);
  if (await y(a.origin, t.client.origin))
    throw new Error(`Unexpected ClientData origin: ${t.client.origin}`);
  if (await y(a.challenge, t.client.challenge))
    throw new Error(`Unexpected ClientData challenge: ${t.client.challenge}`);
  return t;
}
async function X(e, a, t) {
  if (e.credentialId !== a.id)
    throw new Error(`Credential ID mismatch: ${e.credentialId} vs ${a.id}`);
  if (!await x({ algorithm: a.algorithm, publicKey: a.publicKey, authenticatorData: e.authenticatorData, clientData: e.clientData, signature: e.signature, verbose: t.verbose }))
    throw new Error(`Invalid signature: ${e.signature}`);
  let r = w(e);
  if (t.verbose && console.debug(r), r.client.type !== "webauthn.get")
    throw new Error(`Unexpected clientData type: ${r.client.type}`);
  if (await y(t.origin, r.client.origin))
    throw new Error(`Unexpected ClientData origin: ${r.client.origin}`);
  if (await y(t.challenge, r.client.challenge))
    throw new Error(`Unexpected ClientData challenge: ${r.client.challenge}`);
  let c = t.domain ?? new URL(r.client.origin).hostname, n = o(await u(f(c)));
  if (r.authenticator.rpIdHash !== n)
    throw new Error(`Unexpected RpIdHash: ${r.authenticator.rpIdHash} vs ${n}`);
  if (!r.authenticator.flags.userPresent)
    throw new Error("Unexpected authenticator flags: missing userPresent");
  if (!r.authenticator.flags.userVerified && t.userVerified)
    throw new Error("Unexpected authenticator flags: missing userVerified");
  if (t.counter && r.authenticator.counter <= t.counter)
    throw new Error(`Unexpected authenticator counter: ${r.authenticator.counter} (should be > ${t.counter})`);
  return r;
}
function q(e) {
  switch (e) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: "SHA-256" };
    default:
      throw new Error(`Unknown or unsupported crypto algorithm: ${e}. Only 'RS256' and 'ES256' are supported.`);
  }
}
async function z(e, a) {
  let t = d(a);
  return crypto.subtle.importKey("spki", t, e, false, ["verify"]);
}
async function x({ algorithm: e, publicKey: a, authenticatorData: t, clientData: i, signature: r, verbose: c }) {
  let n = q(e), g = await z(n, a);
  c && console.debug(g);
  let A = await u(d(i)), B = D(d(t), A);
  c && (console.debug("Crypto Algo: " + JSON.stringify(n)), console.debug("Public key: " + a), console.debug("Data: " + o(B)), console.debug("Signature: " + r));
  let p = d(r);
  return e == "ES256" && (p = j(p)), await crypto.subtle.verify(n, g, p, B);
}
function j(e) {
  let a = new Uint8Array(e), t = a[4] === 0 ? 5 : 4, i = t + 32, r = a[i + 2] === 0 ? i + 3 : i + 2, c = a.slice(t, i), n = a.slice(r);
  return new Uint8Array([...c, ...n]);
}

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/passkeys.js
var PasskeyWebClient = class {
  isAvailable() {
    return S.isAvailable();
  }
  async register(args) {
    const { name, challenge, rp } = args;
    const registration = await S.register(name, challenge, {
      authenticatorType: "auto",
      userVerification: "required",
      domain: rp.id,
      attestation: true,
      debug: false
    });
    const clientDataB64 = base64UrlToBase64(registration.clientData);
    const clientDataParsed = JSON.parse(base64ToString(clientDataB64));
    return {
      authenticatorData: registration.authenticatorData,
      credentialId: registration.credential.id,
      clientData: registration.clientData,
      credential: {
        publicKey: registration.credential.publicKey,
        algorithm: registration.credential.algorithm
      },
      origin: clientDataParsed.origin
    };
  }
  async authenticate(args) {
    const { credentialId, challenge, rp } = args;
    const result = await S.authenticate(credentialId ? [credentialId] : [], challenge, {
      authenticatorType: "auto",
      userVerification: "required",
      domain: rp.id
    });
    const clientDataB64 = base64UrlToBase64(result.clientData);
    const clientDataParsed = JSON.parse(base64ToString(clientDataB64));
    return {
      authenticatorData: result.authenticatorData,
      credentialId: result.credentialId,
      clientData: result.clientData,
      signature: result.signature,
      origin: clientDataParsed.origin
    };
  }
};
async function hasStoredPasskey(client, ecosystemId) {
  const storage = new ClientScopedStorage({
    storage: webLocalStorage,
    // TODO (passkey) react native variant of this fn
    clientId: client.clientId,
    ecosystem: ecosystemId ? { id: ecosystemId } : void 0
  });
  const credId = await storage.getPasskeyCredentialId();
  return !!credId;
}

export {
  PasskeyWebClient,
  hasStoredPasskey
};
//# sourceMappingURL=chunk-XTOEMUZK.js.map
