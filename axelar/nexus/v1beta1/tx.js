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
exports.SetTransferRateLimitResponse = exports.SetTransferRateLimitRequest = exports.RegisterAssetFeeResponse = exports.RegisterAssetFeeRequest = exports.DeactivateChainResponse = exports.DeactivateChainRequest = exports.ActivateChainResponse = exports.ActivateChainRequest = exports.DeregisterChainMaintainerResponse = exports.DeregisterChainMaintainerRequest = exports.RegisterChainMaintainerResponse = exports.RegisterChainMaintainerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/nexus/exported/v1beta1/types");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../../google/protobuf/duration");
exports.protobufPackage = "axelar.nexus.v1beta1";
function createBaseRegisterChainMaintainerRequest() {
    return { senderBz: new Uint8Array(), chains: [], sender: "" };
}
exports.RegisterChainMaintainerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderBz.length !== 0) {
            writer.uint32(10).bytes(message.senderBz);
        }
        for (const v of message.chains) {
            writer.uint32(18).string(v);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterChainMaintainerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderBz = reader.bytes();
                    break;
                case 2:
                    message.chains.push(reader.string());
                    break;
                case 3:
                    message.sender = reader.string();
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
            senderBz: isSet(object.senderBz) ? bytesFromBase64(object.senderBz) : new Uint8Array(),
            chains: Array.isArray(object === null || object === void 0 ? void 0 : object.chains) ? object.chains.map((e) => String(e)) : [],
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderBz !== undefined &&
            (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
        if (message.chains) {
            obj.chains = message.chains.map((e) => e);
        }
        else {
            obj.chains = [];
        }
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisterChainMaintainerRequest();
        message.senderBz = (_a = object.senderBz) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chains = ((_b = object.chains) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisterChainMaintainerResponse() {
    return {};
}
exports.RegisterChainMaintainerResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterChainMaintainerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRegisterChainMaintainerResponse();
        return message;
    },
};
function createBaseDeregisterChainMaintainerRequest() {
    return { senderBz: new Uint8Array(), chains: [], sender: "" };
}
exports.DeregisterChainMaintainerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderBz.length !== 0) {
            writer.uint32(10).bytes(message.senderBz);
        }
        for (const v of message.chains) {
            writer.uint32(18).string(v);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeregisterChainMaintainerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderBz = reader.bytes();
                    break;
                case 2:
                    message.chains.push(reader.string());
                    break;
                case 3:
                    message.sender = reader.string();
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
            senderBz: isSet(object.senderBz) ? bytesFromBase64(object.senderBz) : new Uint8Array(),
            chains: Array.isArray(object === null || object === void 0 ? void 0 : object.chains) ? object.chains.map((e) => String(e)) : [],
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderBz !== undefined &&
            (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
        if (message.chains) {
            obj.chains = message.chains.map((e) => e);
        }
        else {
            obj.chains = [];
        }
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDeregisterChainMaintainerRequest();
        message.senderBz = (_a = object.senderBz) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chains = ((_b = object.chains) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseDeregisterChainMaintainerResponse() {
    return {};
}
exports.DeregisterChainMaintainerResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeregisterChainMaintainerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseDeregisterChainMaintainerResponse();
        return message;
    },
};
function createBaseActivateChainRequest() {
    return { senderBz: new Uint8Array(), chains: [], sender: "" };
}
exports.ActivateChainRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderBz.length !== 0) {
            writer.uint32(10).bytes(message.senderBz);
        }
        for (const v of message.chains) {
            writer.uint32(18).string(v);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateChainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderBz = reader.bytes();
                    break;
                case 2:
                    message.chains.push(reader.string());
                    break;
                case 3:
                    message.sender = reader.string();
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
            senderBz: isSet(object.senderBz) ? bytesFromBase64(object.senderBz) : new Uint8Array(),
            chains: Array.isArray(object === null || object === void 0 ? void 0 : object.chains) ? object.chains.map((e) => String(e)) : [],
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderBz !== undefined &&
            (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
        if (message.chains) {
            obj.chains = message.chains.map((e) => e);
        }
        else {
            obj.chains = [];
        }
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseActivateChainRequest();
        message.senderBz = (_a = object.senderBz) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chains = ((_b = object.chains) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseActivateChainResponse() {
    return {};
}
exports.ActivateChainResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateChainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseActivateChainResponse();
        return message;
    },
};
function createBaseDeactivateChainRequest() {
    return { senderBz: new Uint8Array(), chains: [], sender: "" };
}
exports.DeactivateChainRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderBz.length !== 0) {
            writer.uint32(10).bytes(message.senderBz);
        }
        for (const v of message.chains) {
            writer.uint32(18).string(v);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeactivateChainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderBz = reader.bytes();
                    break;
                case 2:
                    message.chains.push(reader.string());
                    break;
                case 3:
                    message.sender = reader.string();
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
            senderBz: isSet(object.senderBz) ? bytesFromBase64(object.senderBz) : new Uint8Array(),
            chains: Array.isArray(object === null || object === void 0 ? void 0 : object.chains) ? object.chains.map((e) => String(e)) : [],
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderBz !== undefined &&
            (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
        if (message.chains) {
            obj.chains = message.chains.map((e) => e);
        }
        else {
            obj.chains = [];
        }
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDeactivateChainRequest();
        message.senderBz = (_a = object.senderBz) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chains = ((_b = object.chains) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseDeactivateChainResponse() {
    return {};
}
exports.DeactivateChainResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeactivateChainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseDeactivateChainResponse();
        return message;
    },
};
function createBaseRegisterAssetFeeRequest() {
    return { senderBz: new Uint8Array(), feeInfo: undefined, sender: "" };
}
exports.RegisterAssetFeeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderBz.length !== 0) {
            writer.uint32(10).bytes(message.senderBz);
        }
        if (message.feeInfo !== undefined) {
            types_1.FeeInfo.encode(message.feeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterAssetFeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderBz = reader.bytes();
                    break;
                case 2:
                    message.feeInfo = types_1.FeeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sender = reader.string();
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
            senderBz: isSet(object.senderBz) ? bytesFromBase64(object.senderBz) : new Uint8Array(),
            feeInfo: isSet(object.feeInfo) ? types_1.FeeInfo.fromJSON(object.feeInfo) : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderBz !== undefined &&
            (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
        message.feeInfo !== undefined &&
            (obj.feeInfo = message.feeInfo ? types_1.FeeInfo.toJSON(message.feeInfo) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRegisterAssetFeeRequest();
        message.senderBz = (_a = object.senderBz) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.feeInfo =
            object.feeInfo !== undefined && object.feeInfo !== null
                ? types_1.FeeInfo.fromPartial(object.feeInfo)
                : undefined;
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRegisterAssetFeeResponse() {
    return {};
}
exports.RegisterAssetFeeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterAssetFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRegisterAssetFeeResponse();
        return message;
    },
};
function createBaseSetTransferRateLimitRequest() {
    return { senderBz: new Uint8Array(), chain: "", limit: undefined, window: undefined, sender: "" };
}
exports.SetTransferRateLimitRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderBz.length !== 0) {
            writer.uint32(10).bytes(message.senderBz);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.limit !== undefined) {
            coin_1.Coin.encode(message.limit, writer.uint32(26).fork()).ldelim();
        }
        if (message.window !== undefined) {
            duration_1.Duration.encode(message.window, writer.uint32(34).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(42).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetTransferRateLimitRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderBz = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.limit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.window = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sender = reader.string();
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
            senderBz: isSet(object.senderBz) ? bytesFromBase64(object.senderBz) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            limit: isSet(object.limit) ? coin_1.Coin.fromJSON(object.limit) : undefined,
            window: isSet(object.window) ? duration_1.Duration.fromJSON(object.window) : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderBz !== undefined &&
            (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.limit !== undefined && (obj.limit = message.limit ? coin_1.Coin.toJSON(message.limit) : undefined);
        message.window !== undefined &&
            (obj.window = message.window ? duration_1.Duration.toJSON(message.window) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSetTransferRateLimitRequest();
        message.senderBz = (_a = object.senderBz) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.limit =
            object.limit !== undefined && object.limit !== null ? coin_1.Coin.fromPartial(object.limit) : undefined;
        message.window =
            object.window !== undefined && object.window !== null ? duration_1.Duration.fromPartial(object.window) : undefined;
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseSetTransferRateLimitResponse() {
    return {};
}
exports.SetTransferRateLimitResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetTransferRateLimitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseSetTransferRateLimitResponse();
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
//# sourceMappingURL=tx.js.map