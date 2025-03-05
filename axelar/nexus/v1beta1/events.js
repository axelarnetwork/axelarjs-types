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
exports.WasmMessageRouted = exports.MessageFailed = exports.MessageExecuted = exports.MessageProcessing = exports.MessageReceived = exports.RateLimitUpdated = exports.InsufficientFee = exports.FeeDeducted = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../../google/protobuf/duration");
const types_1 = require("../../../axelar/nexus/exported/v1beta1/types");
exports.protobufPackage = "axelar.nexus.v1beta1";
function createBaseFeeDeducted() {
    return {
        transferId: long_1.default.UZERO,
        recipientChain: "",
        recipientAddress: "",
        amount: undefined,
        fee: undefined,
    };
}
exports.FeeDeducted = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.transferId.isZero()) {
            writer.uint32(8).uint64(message.transferId);
        }
        if (message.recipientChain !== "") {
            writer.uint32(18).string(message.recipientChain);
        }
        if (message.recipientAddress !== "") {
            writer.uint32(26).string(message.recipientAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            coin_1.Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDeducted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.uint64();
                    break;
                case 2:
                    message.recipientChain = reader.string();
                    break;
                case 3:
                    message.recipientAddress = reader.string();
                    break;
                case 4:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.fee = coin_1.Coin.decode(reader, reader.uint32());
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
            transferId: isSet(object.transferId) ? long_1.default.fromValue(object.transferId) : long_1.default.UZERO,
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
            recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            fee: isSet(object.fee) ? coin_1.Coin.fromJSON(object.fee) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = (message.transferId || long_1.default.UZERO).toString());
        message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
        message.recipientAddress !== undefined && (obj.recipientAddress = message.recipientAddress);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.fee !== undefined && (obj.fee = message.fee ? coin_1.Coin.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeeDeducted();
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? long_1.default.fromValue(object.transferId)
                : long_1.default.UZERO;
        message.recipientChain = (_a = object.recipientChain) !== null && _a !== void 0 ? _a : "";
        message.recipientAddress = (_b = object.recipientAddress) !== null && _b !== void 0 ? _b : "";
        message.amount =
            object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
        return message;
    },
};
function createBaseInsufficientFee() {
    return {
        transferId: long_1.default.UZERO,
        recipientChain: "",
        recipientAddress: "",
        amount: undefined,
        fee: undefined,
    };
}
exports.InsufficientFee = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.transferId.isZero()) {
            writer.uint32(8).uint64(message.transferId);
        }
        if (message.recipientChain !== "") {
            writer.uint32(18).string(message.recipientChain);
        }
        if (message.recipientAddress !== "") {
            writer.uint32(26).string(message.recipientAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            coin_1.Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInsufficientFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.uint64();
                    break;
                case 2:
                    message.recipientChain = reader.string();
                    break;
                case 3:
                    message.recipientAddress = reader.string();
                    break;
                case 4:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.fee = coin_1.Coin.decode(reader, reader.uint32());
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
            transferId: isSet(object.transferId) ? long_1.default.fromValue(object.transferId) : long_1.default.UZERO,
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
            recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            fee: isSet(object.fee) ? coin_1.Coin.fromJSON(object.fee) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = (message.transferId || long_1.default.UZERO).toString());
        message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
        message.recipientAddress !== undefined && (obj.recipientAddress = message.recipientAddress);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.fee !== undefined && (obj.fee = message.fee ? coin_1.Coin.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseInsufficientFee();
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? long_1.default.fromValue(object.transferId)
                : long_1.default.UZERO;
        message.recipientChain = (_a = object.recipientChain) !== null && _a !== void 0 ? _a : "";
        message.recipientAddress = (_b = object.recipientAddress) !== null && _b !== void 0 ? _b : "";
        message.amount =
            object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
        return message;
    },
};
function createBaseRateLimitUpdated() {
    return { chain: "", limit: undefined, window: undefined };
}
exports.RateLimitUpdated = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.limit !== undefined) {
            coin_1.Coin.encode(message.limit, writer.uint32(18).fork()).ldelim();
        }
        if (message.window !== undefined) {
            duration_1.Duration.encode(message.window, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRateLimitUpdated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.limit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.window = duration_1.Duration.decode(reader, reader.uint32());
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            limit: isSet(object.limit) ? coin_1.Coin.fromJSON(object.limit) : undefined,
            window: isSet(object.window) ? duration_1.Duration.fromJSON(object.window) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.limit !== undefined && (obj.limit = message.limit ? coin_1.Coin.toJSON(message.limit) : undefined);
        message.window !== undefined &&
            (obj.window = message.window ? duration_1.Duration.toJSON(message.window) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRateLimitUpdated();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.limit =
            object.limit !== undefined && object.limit !== null ? coin_1.Coin.fromPartial(object.limit) : undefined;
        message.window =
            object.window !== undefined && object.window !== null ? duration_1.Duration.fromPartial(object.window) : undefined;
        return message;
    },
};
function createBaseMessageReceived() {
    return { id: "", payloadHash: new Uint8Array(), sender: undefined, recipient: undefined };
}
exports.MessageReceived = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(18).bytes(message.payloadHash);
        }
        if (message.sender !== undefined) {
            types_1.CrossChainAddress.encode(message.sender, writer.uint32(26).fork()).ldelim();
        }
        if (message.recipient !== undefined) {
            types_1.CrossChainAddress.encode(message.recipient, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageReceived();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.payloadHash = reader.bytes();
                    break;
                case 3:
                    message.sender = types_1.CrossChainAddress.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.recipient = types_1.CrossChainAddress.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            sender: isSet(object.sender) ? types_1.CrossChainAddress.fromJSON(object.sender) : undefined,
            recipient: isSet(object.recipient) ? types_1.CrossChainAddress.fromJSON(object.recipient) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        message.sender !== undefined &&
            (obj.sender = message.sender ? types_1.CrossChainAddress.toJSON(message.sender) : undefined);
        message.recipient !== undefined &&
            (obj.recipient = message.recipient ? types_1.CrossChainAddress.toJSON(message.recipient) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMessageReceived();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.payloadHash = (_b = object.payloadHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? types_1.CrossChainAddress.fromPartial(object.sender)
                : undefined;
        message.recipient =
            object.recipient !== undefined && object.recipient !== null
                ? types_1.CrossChainAddress.fromPartial(object.recipient)
                : undefined;
        return message;
    },
};
function createBaseMessageProcessing() {
    return { id: "", sourceChain: "", destinationChain: "" };
}
exports.MessageProcessing = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sourceChain !== "") {
            writer.uint32(18).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(26).string(message.destinationChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageProcessing();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sourceChain = reader.string();
                    break;
                case 3:
                    message.destinationChain = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMessageProcessing();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sourceChain = (_b = object.sourceChain) !== null && _b !== void 0 ? _b : "";
        message.destinationChain = (_c = object.destinationChain) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMessageExecuted() {
    return { id: "", sourceChain: "", destinationChain: "" };
}
exports.MessageExecuted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sourceChain !== "") {
            writer.uint32(18).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(26).string(message.destinationChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageExecuted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sourceChain = reader.string();
                    break;
                case 3:
                    message.destinationChain = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMessageExecuted();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sourceChain = (_b = object.sourceChain) !== null && _b !== void 0 ? _b : "";
        message.destinationChain = (_c = object.destinationChain) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMessageFailed() {
    return { id: "", sourceChain: "", destinationChain: "" };
}
exports.MessageFailed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sourceChain !== "") {
            writer.uint32(18).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(26).string(message.destinationChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageFailed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sourceChain = reader.string();
                    break;
                case 3:
                    message.destinationChain = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMessageFailed();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sourceChain = (_b = object.sourceChain) !== null && _b !== void 0 ? _b : "";
        message.destinationChain = (_c = object.destinationChain) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseWasmMessageRouted() {
    return { message: undefined };
}
exports.WasmMessageRouted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== undefined) {
            types_1.WasmMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmMessageRouted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = types_1.WasmMessage.decode(reader, reader.uint32());
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
            message: isSet(object.message) ? types_1.WasmMessage.fromJSON(object.message) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined &&
            (obj.message = message.message ? types_1.WasmMessage.toJSON(message.message) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWasmMessageRouted();
        message.message =
            object.message !== undefined && object.message !== null
                ? types_1.WasmMessage.fromPartial(object.message)
                : undefined;
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
//# sourceMappingURL=events.js.map