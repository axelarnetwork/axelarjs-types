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
exports.BurnCommand = exports.MintCommand = exports.TokenSent = exports.ContractCallWithMintApproved = exports.ContractCallApproved = exports.EVMEventRetryFailed = exports.EVMEventFailed = exports.EVMEventCompleted = exports.EVMEventConfirmed = exports.CommandBatchAborted = exports.CommandBatchSigned = exports.ChainAdded = exports.ConfirmTokenStarted = exports.ConfirmDepositStarted = exports.ConfirmGatewayTxStarted = exports.ConfirmKeyTransferStarted = exports.NoEventsConfirmed = exports.PollCompleted = exports.PollExpired = exports.PollFailed = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/vote/exported/v1beta1/types");
const types_2 = require("../../../axelar/evm/v1beta1/types");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "axelar.evm.v1beta1";
function createBasePollFailed() {
    return { txId: new Uint8Array(), chain: "", pollId: long_1.default.UZERO };
}
exports.PollFailed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (!message.pollId.isZero()) {
            writer.uint32(24).uint64(message.pollId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePollFailed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.pollId = reader.uint64();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            pollId: isSet(object.pollId) ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.pollId !== undefined && (obj.pollId = (message.pollId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePollFailed();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.pollId =
            object.pollId !== undefined && object.pollId !== null ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO;
        return message;
    },
};
function createBasePollExpired() {
    return { txId: new Uint8Array(), chain: "", pollId: long_1.default.UZERO };
}
exports.PollExpired = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (!message.pollId.isZero()) {
            writer.uint32(24).uint64(message.pollId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePollExpired();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.pollId = reader.uint64();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            pollId: isSet(object.pollId) ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.pollId !== undefined && (obj.pollId = (message.pollId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePollExpired();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.pollId =
            object.pollId !== undefined && object.pollId !== null ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO;
        return message;
    },
};
function createBasePollCompleted() {
    return { txId: new Uint8Array(), chain: "", pollId: long_1.default.UZERO };
}
exports.PollCompleted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (!message.pollId.isZero()) {
            writer.uint32(24).uint64(message.pollId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePollCompleted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.pollId = reader.uint64();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            pollId: isSet(object.pollId) ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.pollId !== undefined && (obj.pollId = (message.pollId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePollCompleted();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.pollId =
            object.pollId !== undefined && object.pollId !== null ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseNoEventsConfirmed() {
    return { txId: new Uint8Array(), chain: "", pollId: long_1.default.UZERO };
}
exports.NoEventsConfirmed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (!message.pollId.isZero()) {
            writer.uint32(24).uint64(message.pollId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNoEventsConfirmed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.pollId = reader.uint64();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            pollId: isSet(object.pollId) ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.pollId !== undefined && (obj.pollId = (message.pollId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseNoEventsConfirmed();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.pollId =
            object.pollId !== undefined && object.pollId !== null ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseConfirmKeyTransferStarted() {
    return {
        chain: "",
        txId: new Uint8Array(),
        gatewayAddress: new Uint8Array(),
        confirmationHeight: long_1.default.UZERO,
        participants: undefined,
    };
}
exports.ConfirmKeyTransferStarted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(18).bytes(message.txId);
        }
        if (message.gatewayAddress.length !== 0) {
            writer.uint32(26).bytes(message.gatewayAddress);
        }
        if (!message.confirmationHeight.isZero()) {
            writer.uint32(32).uint64(message.confirmationHeight);
        }
        if (message.participants !== undefined) {
            types_1.PollParticipants.encode(message.participants, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmKeyTransferStarted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.txId = reader.bytes();
                    break;
                case 3:
                    message.gatewayAddress = reader.bytes();
                    break;
                case 4:
                    message.confirmationHeight = reader.uint64();
                    break;
                case 5:
                    message.participants = types_1.PollParticipants.decode(reader, reader.uint32());
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            gatewayAddress: isSet(object.gatewayAddress)
                ? bytesFromBase64(object.gatewayAddress)
                : new Uint8Array(),
            confirmationHeight: isSet(object.confirmationHeight)
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO,
            participants: isSet(object.participants) ? types_1.PollParticipants.fromJSON(object.participants) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.gatewayAddress !== undefined &&
            (obj.gatewayAddress = base64FromBytes(message.gatewayAddress !== undefined ? message.gatewayAddress : new Uint8Array()));
        message.confirmationHeight !== undefined &&
            (obj.confirmationHeight = (message.confirmationHeight || long_1.default.UZERO).toString());
        message.participants !== undefined &&
            (obj.participants = message.participants ? types_1.PollParticipants.toJSON(message.participants) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseConfirmKeyTransferStarted();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.txId = (_b = object.txId) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.gatewayAddress = (_c = object.gatewayAddress) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.confirmationHeight =
            object.confirmationHeight !== undefined && object.confirmationHeight !== null
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO;
        message.participants =
            object.participants !== undefined && object.participants !== null
                ? types_1.PollParticipants.fromPartial(object.participants)
                : undefined;
        return message;
    },
};
function createBaseConfirmGatewayTxStarted() {
    return {
        txId: new Uint8Array(),
        chain: "",
        gatewayAddress: new Uint8Array(),
        confirmationHeight: long_1.default.UZERO,
        participants: undefined,
    };
}
exports.ConfirmGatewayTxStarted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.gatewayAddress.length !== 0) {
            writer.uint32(26).bytes(message.gatewayAddress);
        }
        if (!message.confirmationHeight.isZero()) {
            writer.uint32(32).uint64(message.confirmationHeight);
        }
        if (message.participants !== undefined) {
            types_1.PollParticipants.encode(message.participants, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmGatewayTxStarted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.gatewayAddress = reader.bytes();
                    break;
                case 4:
                    message.confirmationHeight = reader.uint64();
                    break;
                case 5:
                    message.participants = types_1.PollParticipants.decode(reader, reader.uint32());
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            gatewayAddress: isSet(object.gatewayAddress)
                ? bytesFromBase64(object.gatewayAddress)
                : new Uint8Array(),
            confirmationHeight: isSet(object.confirmationHeight)
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO,
            participants: isSet(object.participants) ? types_1.PollParticipants.fromJSON(object.participants) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.gatewayAddress !== undefined &&
            (obj.gatewayAddress = base64FromBytes(message.gatewayAddress !== undefined ? message.gatewayAddress : new Uint8Array()));
        message.confirmationHeight !== undefined &&
            (obj.confirmationHeight = (message.confirmationHeight || long_1.default.UZERO).toString());
        message.participants !== undefined &&
            (obj.participants = message.participants ? types_1.PollParticipants.toJSON(message.participants) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseConfirmGatewayTxStarted();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.gatewayAddress = (_c = object.gatewayAddress) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.confirmationHeight =
            object.confirmationHeight !== undefined && object.confirmationHeight !== null
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO;
        message.participants =
            object.participants !== undefined && object.participants !== null
                ? types_1.PollParticipants.fromPartial(object.participants)
                : undefined;
        return message;
    },
};
function createBaseConfirmDepositStarted() {
    return {
        txId: new Uint8Array(),
        chain: "",
        depositAddress: new Uint8Array(),
        tokenAddress: new Uint8Array(),
        confirmationHeight: long_1.default.UZERO,
        participants: undefined,
        asset: "",
    };
}
exports.ConfirmDepositStarted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.depositAddress.length !== 0) {
            writer.uint32(26).bytes(message.depositAddress);
        }
        if (message.tokenAddress.length !== 0) {
            writer.uint32(34).bytes(message.tokenAddress);
        }
        if (!message.confirmationHeight.isZero()) {
            writer.uint32(40).uint64(message.confirmationHeight);
        }
        if (message.participants !== undefined) {
            types_1.PollParticipants.encode(message.participants, writer.uint32(50).fork()).ldelim();
        }
        if (message.asset !== "") {
            writer.uint32(58).string(message.asset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmDepositStarted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.depositAddress = reader.bytes();
                    break;
                case 4:
                    message.tokenAddress = reader.bytes();
                    break;
                case 5:
                    message.confirmationHeight = reader.uint64();
                    break;
                case 6:
                    message.participants = types_1.PollParticipants.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.asset = reader.string();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            depositAddress: isSet(object.depositAddress)
                ? bytesFromBase64(object.depositAddress)
                : new Uint8Array(),
            tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
            confirmationHeight: isSet(object.confirmationHeight)
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO,
            participants: isSet(object.participants) ? types_1.PollParticipants.fromJSON(object.participants) : undefined,
            asset: isSet(object.asset) ? String(object.asset) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.depositAddress !== undefined &&
            (obj.depositAddress = base64FromBytes(message.depositAddress !== undefined ? message.depositAddress : new Uint8Array()));
        message.tokenAddress !== undefined &&
            (obj.tokenAddress = base64FromBytes(message.tokenAddress !== undefined ? message.tokenAddress : new Uint8Array()));
        message.confirmationHeight !== undefined &&
            (obj.confirmationHeight = (message.confirmationHeight || long_1.default.UZERO).toString());
        message.participants !== undefined &&
            (obj.participants = message.participants ? types_1.PollParticipants.toJSON(message.participants) : undefined);
        message.asset !== undefined && (obj.asset = message.asset);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseConfirmDepositStarted();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.depositAddress = (_c = object.depositAddress) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.tokenAddress = (_d = object.tokenAddress) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.confirmationHeight =
            object.confirmationHeight !== undefined && object.confirmationHeight !== null
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO;
        message.participants =
            object.participants !== undefined && object.participants !== null
                ? types_1.PollParticipants.fromPartial(object.participants)
                : undefined;
        message.asset = (_e = object.asset) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseConfirmTokenStarted() {
    return {
        txId: new Uint8Array(),
        chain: "",
        gatewayAddress: new Uint8Array(),
        tokenAddress: new Uint8Array(),
        tokenDetails: undefined,
        confirmationHeight: long_1.default.UZERO,
        participants: undefined,
    };
}
exports.ConfirmTokenStarted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.gatewayAddress.length !== 0) {
            writer.uint32(26).bytes(message.gatewayAddress);
        }
        if (message.tokenAddress.length !== 0) {
            writer.uint32(34).bytes(message.tokenAddress);
        }
        if (message.tokenDetails !== undefined) {
            types_2.TokenDetails.encode(message.tokenDetails, writer.uint32(42).fork()).ldelim();
        }
        if (!message.confirmationHeight.isZero()) {
            writer.uint32(48).uint64(message.confirmationHeight);
        }
        if (message.participants !== undefined) {
            types_1.PollParticipants.encode(message.participants, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmTokenStarted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.gatewayAddress = reader.bytes();
                    break;
                case 4:
                    message.tokenAddress = reader.bytes();
                    break;
                case 5:
                    message.tokenDetails = types_2.TokenDetails.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.confirmationHeight = reader.uint64();
                    break;
                case 7:
                    message.participants = types_1.PollParticipants.decode(reader, reader.uint32());
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            gatewayAddress: isSet(object.gatewayAddress)
                ? bytesFromBase64(object.gatewayAddress)
                : new Uint8Array(),
            tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
            tokenDetails: isSet(object.tokenDetails) ? types_2.TokenDetails.fromJSON(object.tokenDetails) : undefined,
            confirmationHeight: isSet(object.confirmationHeight)
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO,
            participants: isSet(object.participants) ? types_1.PollParticipants.fromJSON(object.participants) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.gatewayAddress !== undefined &&
            (obj.gatewayAddress = base64FromBytes(message.gatewayAddress !== undefined ? message.gatewayAddress : new Uint8Array()));
        message.tokenAddress !== undefined &&
            (obj.tokenAddress = base64FromBytes(message.tokenAddress !== undefined ? message.tokenAddress : new Uint8Array()));
        message.tokenDetails !== undefined &&
            (obj.tokenDetails = message.tokenDetails ? types_2.TokenDetails.toJSON(message.tokenDetails) : undefined);
        message.confirmationHeight !== undefined &&
            (obj.confirmationHeight = (message.confirmationHeight || long_1.default.UZERO).toString());
        message.participants !== undefined &&
            (obj.participants = message.participants ? types_1.PollParticipants.toJSON(message.participants) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseConfirmTokenStarted();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.gatewayAddress = (_c = object.gatewayAddress) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.tokenAddress = (_d = object.tokenAddress) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.tokenDetails =
            object.tokenDetails !== undefined && object.tokenDetails !== null
                ? types_2.TokenDetails.fromPartial(object.tokenDetails)
                : undefined;
        message.confirmationHeight =
            object.confirmationHeight !== undefined && object.confirmationHeight !== null
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO;
        message.participants =
            object.participants !== undefined && object.participants !== null
                ? types_1.PollParticipants.fromPartial(object.participants)
                : undefined;
        return message;
    },
};
function createBaseChainAdded() {
    return { chain: "" };
}
exports.ChainAdded = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainAdded();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChainAdded();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCommandBatchSigned() {
    return { chain: "", commandBatchId: new Uint8Array() };
}
exports.CommandBatchSigned = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.commandBatchId.length !== 0) {
            writer.uint32(26).bytes(message.commandBatchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommandBatchSigned();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.commandBatchId = reader.bytes();
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
            commandBatchId: isSet(object.commandBatchId)
                ? bytesFromBase64(object.commandBatchId)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.commandBatchId !== undefined &&
            (obj.commandBatchId = base64FromBytes(message.commandBatchId !== undefined ? message.commandBatchId : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCommandBatchSigned();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.commandBatchId = (_b = object.commandBatchId) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseCommandBatchAborted() {
    return { chain: "", commandBatchId: new Uint8Array() };
}
exports.CommandBatchAborted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.commandBatchId.length !== 0) {
            writer.uint32(26).bytes(message.commandBatchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommandBatchAborted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.commandBatchId = reader.bytes();
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
            commandBatchId: isSet(object.commandBatchId)
                ? bytesFromBase64(object.commandBatchId)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.commandBatchId !== undefined &&
            (obj.commandBatchId = base64FromBytes(message.commandBatchId !== undefined ? message.commandBatchId : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCommandBatchAborted();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.commandBatchId = (_b = object.commandBatchId) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseEVMEventConfirmed() {
    return { chain: "", eventId: "", type: "" };
}
exports.EVMEventConfirmed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEVMEventConfirmed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.eventId = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
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
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            type: isSet(object.type) ? String(object.type) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEVMEventConfirmed();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEVMEventCompleted() {
    return { chain: "", eventId: "", type: "" };
}
exports.EVMEventCompleted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEVMEventCompleted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.eventId = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
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
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            type: isSet(object.type) ? String(object.type) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEVMEventCompleted();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEVMEventFailed() {
    return { chain: "", eventId: "", type: "" };
}
exports.EVMEventFailed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEVMEventFailed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.eventId = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
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
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            type: isSet(object.type) ? String(object.type) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEVMEventFailed();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEVMEventRetryFailed() {
    return { chain: "", eventId: "", type: "" };
}
exports.EVMEventRetryFailed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEVMEventRetryFailed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.eventId = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
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
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            type: isSet(object.type) ? String(object.type) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEVMEventRetryFailed();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseContractCallApproved() {
    return {
        chain: "",
        eventId: "",
        commandId: new Uint8Array(),
        sender: "",
        destinationChain: "",
        contractAddress: "",
        payloadHash: new Uint8Array(),
    };
}
exports.ContractCallApproved = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.commandId.length !== 0) {
            writer.uint32(26).bytes(message.commandId);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(42).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(50).string(message.contractAddress);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(58).bytes(message.payloadHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCallApproved();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.eventId = reader.string();
                    break;
                case 3:
                    message.commandId = reader.bytes();
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.destinationChain = reader.string();
                    break;
                case 6:
                    message.contractAddress = reader.string();
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        message.commandId !== undefined &&
            (obj.commandId = base64FromBytes(message.commandId !== undefined ? message.commandId : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseContractCallApproved();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : "";
        message.commandId = (_c = object.commandId) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.sender = (_d = object.sender) !== null && _d !== void 0 ? _d : "";
        message.destinationChain = (_e = object.destinationChain) !== null && _e !== void 0 ? _e : "";
        message.contractAddress = (_f = object.contractAddress) !== null && _f !== void 0 ? _f : "";
        message.payloadHash = (_g = object.payloadHash) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    },
};
function createBaseContractCallWithMintApproved() {
    return {
        chain: "",
        eventId: "",
        commandId: new Uint8Array(),
        sender: "",
        destinationChain: "",
        contractAddress: "",
        payloadHash: new Uint8Array(),
        asset: undefined,
    };
}
exports.ContractCallWithMintApproved = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (message.commandId.length !== 0) {
            writer.uint32(26).bytes(message.commandId);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(42).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(50).string(message.contractAddress);
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
        const message = createBaseContractCallWithMintApproved();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.eventId = reader.string();
                    break;
                case 3:
                    message.commandId = reader.bytes();
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.destinationChain = reader.string();
                    break;
                case 6:
                    message.contractAddress = reader.string();
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        message.commandId !== undefined &&
            (obj.commandId = base64FromBytes(message.commandId !== undefined ? message.commandId : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseContractCallWithMintApproved();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : "";
        message.commandId = (_c = object.commandId) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.sender = (_d = object.sender) !== null && _d !== void 0 ? _d : "";
        message.destinationChain = (_e = object.destinationChain) !== null && _e !== void 0 ? _e : "";
        message.contractAddress = (_f = object.contractAddress) !== null && _f !== void 0 ? _f : "";
        message.payloadHash = (_g = object.payloadHash) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
};
function createBaseTokenSent() {
    return {
        chain: "",
        eventId: "",
        transferId: long_1.default.UZERO,
        sender: "",
        destinationChain: "",
        destinationAddress: "",
        asset: undefined,
    };
}
exports.TokenSent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        if (!message.transferId.isZero()) {
            writer.uint32(24).uint64(message.transferId);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(42).string(message.destinationChain);
        }
        if (message.destinationAddress !== "") {
            writer.uint32(50).string(message.destinationAddress);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(58).fork()).ldelim();
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
                    message.chain = reader.string();
                    break;
                case 2:
                    message.eventId = reader.string();
                    break;
                case 3:
                    message.transferId = reader.uint64();
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.destinationChain = reader.string();
                    break;
                case 6:
                    message.destinationAddress = reader.string();
                    break;
                case 7:
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            transferId: isSet(object.transferId) ? long_1.default.fromValue(object.transferId) : long_1.default.UZERO,
            sender: isSet(object.sender) ? String(object.sender) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        message.transferId !== undefined && (obj.transferId = (message.transferId || long_1.default.UZERO).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTokenSent();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : "";
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? long_1.default.fromValue(object.transferId)
                : long_1.default.UZERO;
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        message.destinationChain = (_d = object.destinationChain) !== null && _d !== void 0 ? _d : "";
        message.destinationAddress = (_e = object.destinationAddress) !== null && _e !== void 0 ? _e : "";
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
};
function createBaseMintCommand() {
    return {
        chain: "",
        transferId: long_1.default.UZERO,
        commandId: new Uint8Array(),
        destinationChain: "",
        destinationAddress: "",
        asset: undefined,
    };
}
exports.MintCommand = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (!message.transferId.isZero()) {
            writer.uint32(16).uint64(message.transferId);
        }
        if (message.commandId.length !== 0) {
            writer.uint32(26).bytes(message.commandId);
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
        const message = createBaseMintCommand();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.transferId = reader.uint64();
                    break;
                case 3:
                    message.commandId = reader.bytes();
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            transferId: isSet(object.transferId) ? long_1.default.fromValue(object.transferId) : long_1.default.UZERO,
            commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.transferId !== undefined && (obj.transferId = (message.transferId || long_1.default.UZERO).toString());
        message.commandId !== undefined &&
            (obj.commandId = base64FromBytes(message.commandId !== undefined ? message.commandId : new Uint8Array()));
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMintCommand();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? long_1.default.fromValue(object.transferId)
                : long_1.default.UZERO;
        message.commandId = (_b = object.commandId) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.destinationChain = (_c = object.destinationChain) !== null && _c !== void 0 ? _c : "";
        message.destinationAddress = (_d = object.destinationAddress) !== null && _d !== void 0 ? _d : "";
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
};
function createBaseBurnCommand() {
    return { chain: "", commandId: new Uint8Array(), destinationChain: "", depositAddress: "", asset: "" };
}
exports.BurnCommand = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.commandId.length !== 0) {
            writer.uint32(18).bytes(message.commandId);
        }
        if (message.destinationChain !== "") {
            writer.uint32(26).string(message.destinationChain);
        }
        if (message.depositAddress !== "") {
            writer.uint32(34).string(message.depositAddress);
        }
        if (message.asset !== "") {
            writer.uint32(42).string(message.asset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBurnCommand();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.commandId = reader.bytes();
                    break;
                case 3:
                    message.destinationChain = reader.string();
                    break;
                case 4:
                    message.depositAddress = reader.string();
                    break;
                case 5:
                    message.asset = reader.string();
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
            commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.commandId !== undefined &&
            (obj.commandId = base64FromBytes(message.commandId !== undefined ? message.commandId : new Uint8Array()));
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress);
        message.asset !== undefined && (obj.asset = message.asset);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseBurnCommand();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.commandId = (_b = object.commandId) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.destinationChain = (_c = object.destinationChain) !== null && _c !== void 0 ? _c : "";
        message.depositAddress = (_d = object.depositAddress) !== null && _d !== void 0 ? _d : "";
        message.asset = (_e = object.asset) !== null && _e !== void 0 ? _e : "";
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