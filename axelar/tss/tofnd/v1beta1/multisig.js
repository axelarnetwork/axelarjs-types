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
exports.SignResponse = exports.SignRequest = exports.KeygenResponse = exports.KeygenRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.tss.tofnd.v1beta1";
function createBaseKeygenRequest() {
    return { keyUid: "", partyUid: "" };
}
exports.KeygenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyUid !== "") {
            writer.uint32(10).string(message.keyUid);
        }
        if (message.partyUid !== "") {
            writer.uint32(18).string(message.partyUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyUid = reader.string();
                    break;
                case 2:
                    message.partyUid = reader.string();
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
            keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
            partyUid: isSet(object.partyUid) ? String(object.partyUid) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyUid !== undefined && (obj.keyUid = message.keyUid);
        message.partyUid !== undefined && (obj.partyUid = message.partyUid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeygenRequest();
        message.keyUid = (_a = object.keyUid) !== null && _a !== void 0 ? _a : "";
        message.partyUid = (_b = object.partyUid) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseKeygenResponse() {
    return { pubKey: undefined, error: undefined };
}
exports.KeygenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pubKey !== undefined) {
            writer.uint32(10).bytes(message.pubKey);
        }
        if (message.error !== undefined) {
            writer.uint32(18).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = reader.bytes();
                    break;
                case 2:
                    message.error = reader.string();
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
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : undefined,
            error: isSet(object.error) ? String(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined &&
            (obj.pubKey = message.pubKey !== undefined ? base64FromBytes(message.pubKey) : undefined);
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeygenResponse();
        message.pubKey = (_a = object.pubKey) !== null && _a !== void 0 ? _a : undefined;
        message.error = (_b = object.error) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSignRequest() {
    return { keyUid: "", msgToSign: new Uint8Array(), partyUid: "", pubKey: new Uint8Array() };
}
exports.SignRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyUid !== "") {
            writer.uint32(10).string(message.keyUid);
        }
        if (message.msgToSign.length !== 0) {
            writer.uint32(18).bytes(message.msgToSign);
        }
        if (message.partyUid !== "") {
            writer.uint32(26).string(message.partyUid);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(34).bytes(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyUid = reader.string();
                    break;
                case 2:
                    message.msgToSign = reader.bytes();
                    break;
                case 3:
                    message.partyUid = reader.string();
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
            keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
            msgToSign: isSet(object.msgToSign) ? bytesFromBase64(object.msgToSign) : new Uint8Array(),
            partyUid: isSet(object.partyUid) ? String(object.partyUid) : "",
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyUid !== undefined && (obj.keyUid = message.keyUid);
        message.msgToSign !== undefined &&
            (obj.msgToSign = base64FromBytes(message.msgToSign !== undefined ? message.msgToSign : new Uint8Array()));
        message.partyUid !== undefined && (obj.partyUid = message.partyUid);
        message.pubKey !== undefined &&
            (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSignRequest();
        message.keyUid = (_a = object.keyUid) !== null && _a !== void 0 ? _a : "";
        message.msgToSign = (_b = object.msgToSign) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.partyUid = (_c = object.partyUid) !== null && _c !== void 0 ? _c : "";
        message.pubKey = (_d = object.pubKey) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseSignResponse() {
    return { signature: undefined, error: undefined };
}
exports.SignResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature !== undefined) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.error !== undefined) {
            writer.uint32(18).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature = reader.bytes();
                    break;
                case 2:
                    message.error = reader.string();
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
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
            error: isSet(object.error) ? String(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature !== undefined &&
            (obj.signature = message.signature !== undefined ? base64FromBytes(message.signature) : undefined);
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSignResponse();
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : undefined;
        message.error = (_b = object.error) !== null && _b !== void 0 ? _b : undefined;
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
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=multisig.js.map