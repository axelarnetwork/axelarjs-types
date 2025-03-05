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
exports.TokenSent = exports.ContractCallWithTokenSubmitted = exports.ContractCallSubmitted = exports.FeePaid = exports.FeeCollected = exports.AxelarTransferCompleted = exports.IBCTransferRetried = exports.IBCTransferFailed = exports.IBCTransferCompleted = exports.IBCTransferSent = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "axelar.axelarnet.v1beta1";
function createBaseIBCTransferSent() {
    return {
        id: long_1.default.UZERO,
        receipient: "",
        asset: undefined,
        sequence: long_1.default.UZERO,
        portId: "",
        channelId: "",
        recipient: "",
    };
}
exports.IBCTransferSent = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.receipient !== "") {
            writer.uint32(18).string(message.receipient);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        if (message.portId !== "") {
            writer.uint32(42).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(50).string(message.channelId);
        }
        if (message.recipient !== "") {
            writer.uint32(58).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCTransferSent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.receipient = reader.string();
                    break;
                case 3:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sequence = reader.uint64();
                    break;
                case 5:
                    message.portId = reader.string();
                    break;
                case 6:
                    message.channelId = reader.string();
                    break;
                case 7:
                    message.recipient = reader.string();
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            receipient: isSet(object.receipient) ? String(object.receipient) : "",
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.receipient !== undefined && (obj.receipient = message.receipient);
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseIBCTransferSent();
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.receipient = (_a = object.receipient) !== null && _a !== void 0 ? _a : "";
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        message.portId = (_b = object.portId) !== null && _b !== void 0 ? _b : "";
        message.channelId = (_c = object.channelId) !== null && _c !== void 0 ? _c : "";
        message.recipient = (_d = object.recipient) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseIBCTransferCompleted() {
    return { id: long_1.default.UZERO, sequence: long_1.default.UZERO, portId: "", channelId: "" };
}
exports.IBCTransferCompleted = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.portId !== "") {
            writer.uint32(26).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(34).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCTransferCompleted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.portId = reader.string();
                    break;
                case 4:
                    message.channelId = reader.string();
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIBCTransferCompleted();
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseIBCTransferFailed() {
    return { id: long_1.default.UZERO, sequence: long_1.default.UZERO, portId: "", channelId: "" };
}
exports.IBCTransferFailed = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.portId !== "") {
            writer.uint32(26).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(34).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCTransferFailed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.portId = reader.string();
                    break;
                case 4:
                    message.channelId = reader.string();
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIBCTransferFailed();
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseIBCTransferRetried() {
    return {
        id: long_1.default.UZERO,
        receipient: "",
        asset: undefined,
        sequence: long_1.default.UZERO,
        portId: "",
        channelId: "",
        recipient: "",
    };
}
exports.IBCTransferRetried = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.receipient !== "") {
            writer.uint32(18).string(message.receipient);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        if (message.portId !== "") {
            writer.uint32(42).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(50).string(message.channelId);
        }
        if (message.recipient !== "") {
            writer.uint32(58).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCTransferRetried();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.receipient = reader.string();
                    break;
                case 3:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sequence = reader.uint64();
                    break;
                case 5:
                    message.portId = reader.string();
                    break;
                case 6:
                    message.channelId = reader.string();
                    break;
                case 7:
                    message.recipient = reader.string();
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            receipient: isSet(object.receipient) ? String(object.receipient) : "",
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.receipient !== undefined && (obj.receipient = message.receipient);
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseIBCTransferRetried();
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.receipient = (_a = object.receipient) !== null && _a !== void 0 ? _a : "";
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        message.portId = (_b = object.portId) !== null && _b !== void 0 ? _b : "";
        message.channelId = (_c = object.channelId) !== null && _c !== void 0 ? _c : "";
        message.recipient = (_d = object.recipient) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseAxelarTransferCompleted() {
    return { id: long_1.default.UZERO, receipient: "", asset: undefined, recipient: "" };
}
exports.AxelarTransferCompleted = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.receipient !== "") {
            writer.uint32(18).string(message.receipient);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(34).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAxelarTransferCompleted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.receipient = reader.string();
                    break;
                case 3:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.recipient = reader.string();
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            receipient: isSet(object.receipient) ? String(object.receipient) : "",
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.receipient !== undefined && (obj.receipient = message.receipient);
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAxelarTransferCompleted();
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.receipient = (_a = object.receipient) !== null && _a !== void 0 ? _a : "";
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        message.recipient = (_b = object.recipient) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFeeCollected() {
    return { collector: new Uint8Array(), fee: undefined };
}
exports.FeeCollected = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collector.length !== 0) {
            writer.uint32(10).bytes(message.collector);
        }
        if (message.fee !== undefined) {
            coin_1.Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeCollected();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collector = reader.bytes();
                    break;
                case 2:
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
            collector: isSet(object.collector) ? bytesFromBase64(object.collector) : new Uint8Array(),
            fee: isSet(object.fee) ? coin_1.Coin.fromJSON(object.fee) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collector !== undefined &&
            (obj.collector = base64FromBytes(message.collector !== undefined ? message.collector : new Uint8Array()));
        message.fee !== undefined && (obj.fee = message.fee ? coin_1.Coin.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFeeCollected();
        message.collector = (_a = object.collector) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
        return message;
    },
};
function createBaseFeePaid() {
    return {
        messageId: "",
        recipient: new Uint8Array(),
        fee: undefined,
        refundRecipient: "",
        asset: "",
        sourceChain: "",
        destinationChain: "",
    };
}
exports.FeePaid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageId !== "") {
            writer.uint32(10).string(message.messageId);
        }
        if (message.recipient.length !== 0) {
            writer.uint32(18).bytes(message.recipient);
        }
        if (message.fee !== undefined) {
            coin_1.Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
        }
        if (message.refundRecipient !== "") {
            writer.uint32(34).string(message.refundRecipient);
        }
        if (message.asset !== "") {
            writer.uint32(42).string(message.asset);
        }
        if (message.sourceChain !== "") {
            writer.uint32(50).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(58).string(message.destinationChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeePaid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageId = reader.string();
                    break;
                case 2:
                    message.recipient = reader.bytes();
                    break;
                case 3:
                    message.fee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.refundRecipient = reader.string();
                    break;
                case 5:
                    message.asset = reader.string();
                    break;
                case 6:
                    message.sourceChain = reader.string();
                    break;
                case 7:
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
            messageId: isSet(object.messageId) ? String(object.messageId) : "",
            recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
            fee: isSet(object.fee) ? coin_1.Coin.fromJSON(object.fee) : undefined,
            refundRecipient: isSet(object.refundRecipient) ? String(object.refundRecipient) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.recipient !== undefined &&
            (obj.recipient = base64FromBytes(message.recipient !== undefined ? message.recipient : new Uint8Array()));
        message.fee !== undefined && (obj.fee = message.fee ? coin_1.Coin.toJSON(message.fee) : undefined);
        message.refundRecipient !== undefined && (obj.refundRecipient = message.refundRecipient);
        message.asset !== undefined && (obj.asset = message.asset);
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseFeePaid();
        message.messageId = (_a = object.messageId) !== null && _a !== void 0 ? _a : "";
        message.recipient = (_b = object.recipient) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
        message.refundRecipient = (_c = object.refundRecipient) !== null && _c !== void 0 ? _c : "";
        message.asset = (_d = object.asset) !== null && _d !== void 0 ? _d : "";
        message.sourceChain = (_e = object.sourceChain) !== null && _e !== void 0 ? _e : "";
        message.destinationChain = (_f = object.destinationChain) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseContractCallSubmitted() {
    return {
        messageId: "",
        sender: "",
        sourceChain: "",
        destinationChain: "",
        contractAddress: "",
        payload: new Uint8Array(),
        payloadHash: new Uint8Array(),
    };
}
exports.ContractCallSubmitted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageId !== "") {
            writer.uint32(10).string(message.messageId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.sourceChain !== "") {
            writer.uint32(26).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(34).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(42).string(message.contractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(50).bytes(message.payload);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(58).bytes(message.payloadHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCallSubmitted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageId = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.sourceChain = reader.string();
                    break;
                case 4:
                    message.destinationChain = reader.string();
                    break;
                case 5:
                    message.contractAddress = reader.string();
                    break;
                case 6:
                    message.payload = reader.bytes();
                    break;
                case 7:
                    message.payloadHash = reader.bytes();
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
            messageId: isSet(object.messageId) ? String(object.messageId) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.sender !== undefined && (obj.sender = message.sender);
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseContractCallSubmitted();
        message.messageId = (_a = object.messageId) !== null && _a !== void 0 ? _a : "";
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        message.sourceChain = (_c = object.sourceChain) !== null && _c !== void 0 ? _c : "";
        message.destinationChain = (_d = object.destinationChain) !== null && _d !== void 0 ? _d : "";
        message.contractAddress = (_e = object.contractAddress) !== null && _e !== void 0 ? _e : "";
        message.payload = (_f = object.payload) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.payloadHash = (_g = object.payloadHash) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    },
};
function createBaseContractCallWithTokenSubmitted() {
    return {
        messageId: "",
        sender: "",
        sourceChain: "",
        destinationChain: "",
        contractAddress: "",
        payload: new Uint8Array(),
        payloadHash: new Uint8Array(),
        asset: undefined,
    };
}
exports.ContractCallWithTokenSubmitted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageId !== "") {
            writer.uint32(10).string(message.messageId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.sourceChain !== "") {
            writer.uint32(26).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(34).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(42).string(message.contractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(50).bytes(message.payload);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(58).bytes(message.payloadHash);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCallWithTokenSubmitted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageId = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.sourceChain = reader.string();
                    break;
                case 4:
                    message.destinationChain = reader.string();
                    break;
                case 5:
                    message.contractAddress = reader.string();
                    break;
                case 6:
                    message.payload = reader.bytes();
                    break;
                case 7:
                    message.payloadHash = reader.bytes();
                    break;
                case 8:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
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
            messageId: isSet(object.messageId) ? String(object.messageId) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.sender !== undefined && (obj.sender = message.sender);
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseContractCallWithTokenSubmitted();
        message.messageId = (_a = object.messageId) !== null && _a !== void 0 ? _a : "";
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        message.sourceChain = (_c = object.sourceChain) !== null && _c !== void 0 ? _c : "";
        message.destinationChain = (_d = object.destinationChain) !== null && _d !== void 0 ? _d : "";
        message.contractAddress = (_e = object.contractAddress) !== null && _e !== void 0 ? _e : "";
        message.payload = (_f = object.payload) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.payloadHash = (_g = object.payloadHash) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
};
function createBaseTokenSent() {
    return {
        transferId: long_1.default.UZERO,
        sender: "",
        sourceChain: "",
        destinationChain: "",
        destinationAddress: "",
        asset: undefined,
    };
}
exports.TokenSent = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.transferId.isZero()) {
            writer.uint32(8).uint64(message.transferId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.sourceChain !== "") {
            writer.uint32(26).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(34).string(message.destinationChain);
        }
        if (message.destinationAddress !== "") {
            writer.uint32(42).string(message.destinationAddress);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenSent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.sourceChain = reader.string();
                    break;
                case 4:
                    message.destinationChain = reader.string();
                    break;
                case 5:
                    message.destinationAddress = reader.string();
                    break;
                case 6:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = (message.transferId || long_1.default.UZERO).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTokenSent();
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? long_1.default.fromValue(object.transferId)
                : long_1.default.UZERO;
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.sourceChain = (_b = object.sourceChain) !== null && _b !== void 0 ? _b : "";
        message.destinationChain = (_c = object.destinationChain) !== null && _c !== void 0 ? _c : "";
        message.destinationAddress = (_d = object.destinationAddress) !== null && _d !== void 0 ? _d : "";
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
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