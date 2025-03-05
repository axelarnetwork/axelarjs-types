"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeygenOptIn = exports.KeygenOptOut = exports.KeyRotated = exports.KeyAssigned = exports.SignatureSubmitted = exports.SigningExpired = exports.SigningCompleted = exports.SigningStarted_PubKeysEntry = exports.SigningStarted = exports.PubKeySubmitted = exports.KeygenExpired = exports.KeygenCompleted = exports.KeygenStarted = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.multisig.v1beta1";
function createBaseKeygenStarted() {
    return { module: "", keyId: "", participants: [] };
}
exports.KeygenStarted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        for (const v of message.participants) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenStarted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.keyId = reader.string();
                    break;
                case 3:
                    message.participants.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            participants: Array.isArray(object === null || object === void 0 ? void 0 : object.participants)
                ? object.participants.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        if (message.participants) {
            obj.participants = message.participants.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.participants = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKeygenStarted();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        message.participants = ((_c = object.participants) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseKeygenCompleted() {
    return { module: "", keyId: "" };
}
exports.KeygenCompleted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenCompleted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeygenCompleted();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseKeygenExpired() {
    return { module: "", keyId: "" };
}
exports.KeygenExpired = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenExpired();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeygenExpired();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePubKeySubmitted() {
    return { module: "", keyId: "", participant: new Uint8Array(), pubKey: new Uint8Array() };
}
exports.PubKeySubmitted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        if (message.participant.length !== 0) {
            writer.uint32(26).bytes(message.participant);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(34).bytes(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKeySubmitted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.keyId = reader.string();
                    break;
                case 3:
                    message.participant = reader.bytes();
                    break;
                case 4:
                    message.pubKey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.participant !== undefined &&
            (obj.participant = base64FromBytes(message.participant !== undefined ? message.participant : new Uint8Array()));
        message.pubKey !== undefined &&
            (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePubKeySubmitted();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        message.participant = (_c = object.participant) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.pubKey = (_d = object.pubKey) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseSigningStarted() {
    return {
        module: "",
        sigId: long_1.default.UZERO,
        keyId: "",
        pubKeys: {},
        payloadHash: new Uint8Array(),
        requestingModule: "",
    };
}
exports.SigningStarted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (!message.sigId.isZero()) {
            writer.uint32(16).uint64(message.sigId);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        Object.entries(message.pubKeys).forEach(([key, value]) => {
            exports.SigningStarted_PubKeysEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.payloadHash.length !== 0) {
            writer.uint32(42).bytes(message.payloadHash);
        }
        if (message.requestingModule !== "") {
            writer.uint32(50).string(message.requestingModule);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningStarted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.sigId = reader.uint64();
                    break;
                case 3:
                    message.keyId = reader.string();
                    break;
                case 4:
                    const entry4 = exports.SigningStarted_PubKeysEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.pubKeys[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.payloadHash = reader.bytes();
                    break;
                case 6:
                    message.requestingModule = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            sigId: isSet(object.sigId) ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO,
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            pubKeys: isObject(object.pubKeys)
                ? Object.entries(object.pubKeys).reduce((acc, [key, value]) => {
                    acc[key] = bytesFromBase64(value);
                    return acc;
                }, {})
                : {},
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            requestingModule: isSet(object.requestingModule) ? String(object.requestingModule) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.sigId !== undefined && (obj.sigId = (message.sigId || long_1.default.UZERO).toString());
        message.keyId !== undefined && (obj.keyId = message.keyId);
        obj.pubKeys = {};
        if (message.pubKeys) {
            Object.entries(message.pubKeys).forEach(([k, v]) => {
                obj.pubKeys[k] = base64FromBytes(v);
            });
        }
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        message.requestingModule !== undefined && (obj.requestingModule = message.requestingModule);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSigningStarted();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.sigId =
            object.sigId !== undefined && object.sigId !== null ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO;
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        message.pubKeys = Object.entries((_c = object.pubKeys) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.payloadHash = (_d = object.payloadHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.requestingModule = (_e = object.requestingModule) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseSigningStarted_PubKeysEntry() {
    return { key: "", value: new Uint8Array() };
}
exports.SigningStarted_PubKeysEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningStarted_PubKeysEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSigningStarted_PubKeysEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseSigningCompleted() {
    return { module: "", sigId: long_1.default.UZERO };
}
exports.SigningCompleted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (!message.sigId.isZero()) {
            writer.uint32(16).uint64(message.sigId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningCompleted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.sigId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            sigId: isSet(object.sigId) ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.sigId !== undefined && (obj.sigId = (message.sigId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSigningCompleted();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.sigId =
            object.sigId !== undefined && object.sigId !== null ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseSigningExpired() {
    return { module: "", sigId: long_1.default.UZERO };
}
exports.SigningExpired = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (!message.sigId.isZero()) {
            writer.uint32(16).uint64(message.sigId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningExpired();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.sigId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            sigId: isSet(object.sigId) ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.sigId !== undefined && (obj.sigId = (message.sigId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSigningExpired();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.sigId =
            object.sigId !== undefined && object.sigId !== null ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseSignatureSubmitted() {
    return { module: "", sigId: long_1.default.UZERO, participant: new Uint8Array(), signature: new Uint8Array() };
}
exports.SignatureSubmitted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (!message.sigId.isZero()) {
            writer.uint32(16).uint64(message.sigId);
        }
        if (message.participant.length !== 0) {
            writer.uint32(26).bytes(message.participant);
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureSubmitted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.sigId = reader.uint64();
                    break;
                case 3:
                    message.participant = reader.bytes();
                    break;
                case 4:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            sigId: isSet(object.sigId) ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO,
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.sigId !== undefined && (obj.sigId = (message.sigId || long_1.default.UZERO).toString());
        message.participant !== undefined &&
            (obj.participant = base64FromBytes(message.participant !== undefined ? message.participant : new Uint8Array()));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSignatureSubmitted();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.sigId =
            object.sigId !== undefined && object.sigId !== null ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO;
        message.participant = (_b = object.participant) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.signature = (_c = object.signature) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseKeyAssigned() {
    return { module: "", chain: "", keyId: "" };
}
exports.KeyAssigned = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyAssigned();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKeyAssigned();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.keyId = (_c = object.keyId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseKeyRotated() {
    return { module: "", chain: "", keyId: "" };
}
exports.KeyRotated = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyRotated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKeyRotated();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.keyId = (_c = object.keyId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseKeygenOptOut() {
    return { participant: new Uint8Array() };
}
exports.KeygenOptOut = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.participant.length !== 0) {
            writer.uint32(10).bytes(message.participant);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenOptOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.participant = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.participant !== undefined &&
            (obj.participant = base64FromBytes(message.participant !== undefined ? message.participant : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseKeygenOptOut();
        message.participant = (_a = object.participant) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseKeygenOptIn() {
    return { participant: new Uint8Array() };
}
exports.KeygenOptIn = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.participant.length !== 0) {
            writer.uint32(10).bytes(message.participant);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenOptIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.participant = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.participant !== undefined &&
            (obj.participant = base64FromBytes(message.participant !== undefined ? message.participant : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseKeygenOptIn();
        message.participant = (_a = object.participant) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=events.js.map