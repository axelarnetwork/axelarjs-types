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
exports.WasmMessage = exports.GeneralMessage = exports.Asset = exports.FeeInfo = exports.TransferFee = exports.CrossChainTransfer = exports.CrossChainAddress = exports.Chain = exports.generalMessage_StatusToJSON = exports.generalMessage_StatusFromJSON = exports.GeneralMessage_Status = exports.transferDirectionToJSON = exports.transferDirectionFromJSON = exports.TransferDirection = exports.transferStateToJSON = exports.transferStateFromJSON = exports.TransferState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../../axelar/tss/exported/v1beta1/types");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "axelar.nexus.exported.v1beta1";
var TransferState;
(function (TransferState) {
    TransferState[TransferState["TRANSFER_STATE_UNSPECIFIED"] = 0] = "TRANSFER_STATE_UNSPECIFIED";
    TransferState[TransferState["TRANSFER_STATE_PENDING"] = 1] = "TRANSFER_STATE_PENDING";
    TransferState[TransferState["TRANSFER_STATE_ARCHIVED"] = 2] = "TRANSFER_STATE_ARCHIVED";
    TransferState[TransferState["TRANSFER_STATE_INSUFFICIENT_AMOUNT"] = 3] = "TRANSFER_STATE_INSUFFICIENT_AMOUNT";
    TransferState[TransferState["TRANSFER_STATE_FAILED"] = 4] = "TRANSFER_STATE_FAILED";
    TransferState[TransferState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TransferState = exports.TransferState || (exports.TransferState = {}));
function transferStateFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSFER_STATE_UNSPECIFIED":
            return TransferState.TRANSFER_STATE_UNSPECIFIED;
        case 1:
        case "TRANSFER_STATE_PENDING":
            return TransferState.TRANSFER_STATE_PENDING;
        case 2:
        case "TRANSFER_STATE_ARCHIVED":
            return TransferState.TRANSFER_STATE_ARCHIVED;
        case 3:
        case "TRANSFER_STATE_INSUFFICIENT_AMOUNT":
            return TransferState.TRANSFER_STATE_INSUFFICIENT_AMOUNT;
        case 4:
        case "TRANSFER_STATE_FAILED":
            return TransferState.TRANSFER_STATE_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TransferState.UNRECOGNIZED;
    }
}
exports.transferStateFromJSON = transferStateFromJSON;
function transferStateToJSON(object) {
    switch (object) {
        case TransferState.TRANSFER_STATE_UNSPECIFIED:
            return "TRANSFER_STATE_UNSPECIFIED";
        case TransferState.TRANSFER_STATE_PENDING:
            return "TRANSFER_STATE_PENDING";
        case TransferState.TRANSFER_STATE_ARCHIVED:
            return "TRANSFER_STATE_ARCHIVED";
        case TransferState.TRANSFER_STATE_INSUFFICIENT_AMOUNT:
            return "TRANSFER_STATE_INSUFFICIENT_AMOUNT";
        case TransferState.TRANSFER_STATE_FAILED:
            return "TRANSFER_STATE_FAILED";
        case TransferState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.transferStateToJSON = transferStateToJSON;
var TransferDirection;
(function (TransferDirection) {
    TransferDirection[TransferDirection["TRANSFER_DIRECTION_UNSPECIFIED"] = 0] = "TRANSFER_DIRECTION_UNSPECIFIED";
    TransferDirection[TransferDirection["TRANSFER_DIRECTION_FROM"] = 1] = "TRANSFER_DIRECTION_FROM";
    TransferDirection[TransferDirection["TRANSFER_DIRECTION_TO"] = 2] = "TRANSFER_DIRECTION_TO";
    TransferDirection[TransferDirection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TransferDirection = exports.TransferDirection || (exports.TransferDirection = {}));
function transferDirectionFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSFER_DIRECTION_UNSPECIFIED":
            return TransferDirection.TRANSFER_DIRECTION_UNSPECIFIED;
        case 1:
        case "TRANSFER_DIRECTION_FROM":
            return TransferDirection.TRANSFER_DIRECTION_FROM;
        case 2:
        case "TRANSFER_DIRECTION_TO":
            return TransferDirection.TRANSFER_DIRECTION_TO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TransferDirection.UNRECOGNIZED;
    }
}
exports.transferDirectionFromJSON = transferDirectionFromJSON;
function transferDirectionToJSON(object) {
    switch (object) {
        case TransferDirection.TRANSFER_DIRECTION_UNSPECIFIED:
            return "TRANSFER_DIRECTION_UNSPECIFIED";
        case TransferDirection.TRANSFER_DIRECTION_FROM:
            return "TRANSFER_DIRECTION_FROM";
        case TransferDirection.TRANSFER_DIRECTION_TO:
            return "TRANSFER_DIRECTION_TO";
        case TransferDirection.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.transferDirectionToJSON = transferDirectionToJSON;
var GeneralMessage_Status;
(function (GeneralMessage_Status) {
    GeneralMessage_Status[GeneralMessage_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    GeneralMessage_Status[GeneralMessage_Status["STATUS_APPROVED"] = 1] = "STATUS_APPROVED";
    GeneralMessage_Status[GeneralMessage_Status["STATUS_PROCESSING"] = 2] = "STATUS_PROCESSING";
    GeneralMessage_Status[GeneralMessage_Status["STATUS_EXECUTED"] = 3] = "STATUS_EXECUTED";
    GeneralMessage_Status[GeneralMessage_Status["STATUS_FAILED"] = 4] = "STATUS_FAILED";
    GeneralMessage_Status[GeneralMessage_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GeneralMessage_Status = exports.GeneralMessage_Status || (exports.GeneralMessage_Status = {}));
function generalMessage_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return GeneralMessage_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_APPROVED":
            return GeneralMessage_Status.STATUS_APPROVED;
        case 2:
        case "STATUS_PROCESSING":
            return GeneralMessage_Status.STATUS_PROCESSING;
        case 3:
        case "STATUS_EXECUTED":
            return GeneralMessage_Status.STATUS_EXECUTED;
        case 4:
        case "STATUS_FAILED":
            return GeneralMessage_Status.STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GeneralMessage_Status.UNRECOGNIZED;
    }
}
exports.generalMessage_StatusFromJSON = generalMessage_StatusFromJSON;
function generalMessage_StatusToJSON(object) {
    switch (object) {
        case GeneralMessage_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case GeneralMessage_Status.STATUS_APPROVED:
            return "STATUS_APPROVED";
        case GeneralMessage_Status.STATUS_PROCESSING:
            return "STATUS_PROCESSING";
        case GeneralMessage_Status.STATUS_EXECUTED:
            return "STATUS_EXECUTED";
        case GeneralMessage_Status.STATUS_FAILED:
            return "STATUS_FAILED";
        case GeneralMessage_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.generalMessage_StatusToJSON = generalMessage_StatusToJSON;
function createBaseChain() {
    return { name: "", supportsForeignAssets: false, keyType: 0, module: "" };
}
exports.Chain = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.supportsForeignAssets === true) {
            writer.uint32(24).bool(message.supportsForeignAssets);
        }
        if (message.keyType !== 0) {
            writer.uint32(32).int32(message.keyType);
        }
        if (message.module !== "") {
            writer.uint32(42).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.supportsForeignAssets = reader.bool();
                    break;
                case 4:
                    message.keyType = reader.int32();
                    break;
                case 5:
                    message.module = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            supportsForeignAssets: isSet(object.supportsForeignAssets)
                ? Boolean(object.supportsForeignAssets)
                : false,
            keyType: isSet(object.keyType) ? (0, types_1.keyTypeFromJSON)(object.keyType) : 0,
            module: isSet(object.module) ? String(object.module) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.supportsForeignAssets !== undefined &&
            (obj.supportsForeignAssets = message.supportsForeignAssets);
        message.keyType !== undefined && (obj.keyType = (0, types_1.keyTypeToJSON)(message.keyType));
        message.module !== undefined && (obj.module = message.module);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseChain();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.supportsForeignAssets = (_b = object.supportsForeignAssets) !== null && _b !== void 0 ? _b : false;
        message.keyType = (_c = object.keyType) !== null && _c !== void 0 ? _c : 0;
        message.module = (_d = object.module) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseCrossChainAddress() {
    return { chain: undefined, address: "" };
}
exports.CrossChainAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== undefined) {
            exports.Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCrossChainAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = exports.Chain.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.address = reader.string();
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
            chain: isSet(object.chain) ? exports.Chain.fromJSON(object.chain) : undefined,
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain ? exports.Chain.toJSON(message.chain) : undefined);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCrossChainAddress();
        message.chain =
            object.chain !== undefined && object.chain !== null ? exports.Chain.fromPartial(object.chain) : undefined;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCrossChainTransfer() {
    return { recipient: undefined, asset: undefined, id: long_1.default.UZERO, state: 0 };
}
exports.CrossChainTransfer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.recipient !== undefined) {
            exports.CrossChainAddress.encode(message.recipient, writer.uint32(10).fork()).ldelim();
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        if (!message.id.isZero()) {
            writer.uint32(24).uint64(message.id);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCrossChainTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipient = exports.CrossChainAddress.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.id = reader.uint64();
                    break;
                case 4:
                    message.state = reader.int32();
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
            recipient: isSet(object.recipient) ? exports.CrossChainAddress.fromJSON(object.recipient) : undefined,
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            state: isSet(object.state) ? transferStateFromJSON(object.state) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.recipient !== undefined &&
            (obj.recipient = message.recipient ? exports.CrossChainAddress.toJSON(message.recipient) : undefined);
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.state !== undefined && (obj.state = transferStateToJSON(message.state));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCrossChainTransfer();
        message.recipient =
            object.recipient !== undefined && object.recipient !== null
                ? exports.CrossChainAddress.fromPartial(object.recipient)
                : undefined;
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseTransferFee() {
    return { coins: [] };
}
exports.TransferFee = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTransferFee();
        message.coins = ((_a = object.coins) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeeInfo() {
    return {
        chain: "",
        asset: "",
        feeRate: new Uint8Array(),
        minFee: new Uint8Array(),
        maxFee: new Uint8Array(),
    };
}
exports.FeeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        if (message.feeRate.length !== 0) {
            writer.uint32(26).bytes(message.feeRate);
        }
        if (message.minFee.length !== 0) {
            writer.uint32(34).bytes(message.minFee);
        }
        if (message.maxFee.length !== 0) {
            writer.uint32(42).bytes(message.maxFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.asset = reader.string();
                    break;
                case 3:
                    message.feeRate = reader.bytes();
                    break;
                case 4:
                    message.minFee = reader.bytes();
                    break;
                case 5:
                    message.maxFee = reader.bytes();
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
            asset: isSet(object.asset) ? String(object.asset) : "",
            feeRate: isSet(object.feeRate) ? bytesFromBase64(object.feeRate) : new Uint8Array(),
            minFee: isSet(object.minFee) ? bytesFromBase64(object.minFee) : new Uint8Array(),
            maxFee: isSet(object.maxFee) ? bytesFromBase64(object.maxFee) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.asset !== undefined && (obj.asset = message.asset);
        message.feeRate !== undefined &&
            (obj.feeRate = base64FromBytes(message.feeRate !== undefined ? message.feeRate : new Uint8Array()));
        message.minFee !== undefined &&
            (obj.minFee = base64FromBytes(message.minFee !== undefined ? message.minFee : new Uint8Array()));
        message.maxFee !== undefined &&
            (obj.maxFee = base64FromBytes(message.maxFee !== undefined ? message.maxFee : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseFeeInfo();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.asset = (_b = object.asset) !== null && _b !== void 0 ? _b : "";
        message.feeRate = (_c = object.feeRate) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.minFee = (_d = object.minFee) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.maxFee = (_e = object.maxFee) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseAsset() {
    return { denom: "", isNativeAsset: false };
}
exports.Asset = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.isNativeAsset === true) {
            writer.uint32(24).bool(message.isNativeAsset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.isNativeAsset = reader.bool();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            isNativeAsset: isSet(object.isNativeAsset) ? Boolean(object.isNativeAsset) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.isNativeAsset !== undefined && (obj.isNativeAsset = message.isNativeAsset);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAsset();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.isNativeAsset = (_b = object.isNativeAsset) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseGeneralMessage() {
    return {
        id: "",
        sender: undefined,
        recipient: undefined,
        payloadHash: new Uint8Array(),
        status: 0,
        asset: undefined,
        sourceTxId: new Uint8Array(),
        sourceTxIndex: long_1.default.UZERO,
    };
}
exports.GeneralMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sender !== undefined) {
            exports.CrossChainAddress.encode(message.sender, writer.uint32(18).fork()).ldelim();
        }
        if (message.recipient !== undefined) {
            exports.CrossChainAddress.encode(message.recipient, writer.uint32(26).fork()).ldelim();
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(34).bytes(message.payloadHash);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(50).fork()).ldelim();
        }
        if (message.sourceTxId.length !== 0) {
            writer.uint32(58).bytes(message.sourceTxId);
        }
        if (!message.sourceTxIndex.isZero()) {
            writer.uint32(64).uint64(message.sourceTxIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneralMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sender = exports.CrossChainAddress.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.recipient = exports.CrossChainAddress.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.payloadHash = reader.bytes();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.sourceTxId = reader.bytes();
                    break;
                case 8:
                    message.sourceTxIndex = reader.uint64();
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
            sender: isSet(object.sender) ? exports.CrossChainAddress.fromJSON(object.sender) : undefined,
            recipient: isSet(object.recipient) ? exports.CrossChainAddress.fromJSON(object.recipient) : undefined,
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            status: isSet(object.status) ? generalMessage_StatusFromJSON(object.status) : 0,
            asset: isSet(object.asset) ? coin_1.Coin.fromJSON(object.asset) : undefined,
            sourceTxId: isSet(object.sourceTxId) ? bytesFromBase64(object.sourceTxId) : new Uint8Array(),
            sourceTxIndex: isSet(object.sourceTxIndex) ? long_1.default.fromValue(object.sourceTxIndex) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.sender !== undefined &&
            (obj.sender = message.sender ? exports.CrossChainAddress.toJSON(message.sender) : undefined);
        message.recipient !== undefined &&
            (obj.recipient = message.recipient ? exports.CrossChainAddress.toJSON(message.recipient) : undefined);
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        message.status !== undefined && (obj.status = generalMessage_StatusToJSON(message.status));
        message.asset !== undefined && (obj.asset = message.asset ? coin_1.Coin.toJSON(message.asset) : undefined);
        message.sourceTxId !== undefined &&
            (obj.sourceTxId = base64FromBytes(message.sourceTxId !== undefined ? message.sourceTxId : new Uint8Array()));
        message.sourceTxIndex !== undefined &&
            (obj.sourceTxIndex = (message.sourceTxIndex || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGeneralMessage();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? exports.CrossChainAddress.fromPartial(object.sender)
                : undefined;
        message.recipient =
            object.recipient !== undefined && object.recipient !== null
                ? exports.CrossChainAddress.fromPartial(object.recipient)
                : undefined;
        message.payloadHash = (_b = object.payloadHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        message.asset =
            object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        message.sourceTxId = (_d = object.sourceTxId) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.sourceTxIndex =
            object.sourceTxIndex !== undefined && object.sourceTxIndex !== null
                ? long_1.default.fromValue(object.sourceTxIndex)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseWasmMessage() {
    return {
        sourceChain: "",
        sourceAddress: "",
        destinationChain: "",
        destinationAddress: "",
        payloadHash: new Uint8Array(),
        sourceTxId: new Uint8Array(),
        sourceTxIndex: long_1.default.UZERO,
        sender: new Uint8Array(),
        id: "",
    };
}
exports.WasmMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourceChain !== "") {
            writer.uint32(10).string(message.sourceChain);
        }
        if (message.sourceAddress !== "") {
            writer.uint32(18).string(message.sourceAddress);
        }
        if (message.destinationChain !== "") {
            writer.uint32(26).string(message.destinationChain);
        }
        if (message.destinationAddress !== "") {
            writer.uint32(34).string(message.destinationAddress);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(42).bytes(message.payloadHash);
        }
        if (message.sourceTxId.length !== 0) {
            writer.uint32(50).bytes(message.sourceTxId);
        }
        if (!message.sourceTxIndex.isZero()) {
            writer.uint32(56).uint64(message.sourceTxIndex);
        }
        if (message.sender.length !== 0) {
            writer.uint32(66).bytes(message.sender);
        }
        if (message.id !== "") {
            writer.uint32(74).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceChain = reader.string();
                    break;
                case 2:
                    message.sourceAddress = reader.string();
                    break;
                case 3:
                    message.destinationChain = reader.string();
                    break;
                case 4:
                    message.destinationAddress = reader.string();
                    break;
                case 5:
                    message.payloadHash = reader.bytes();
                    break;
                case 6:
                    message.sourceTxId = reader.bytes();
                    break;
                case 7:
                    message.sourceTxIndex = reader.uint64();
                    break;
                case 8:
                    message.sender = reader.bytes();
                    break;
                case 9:
                    message.id = reader.string();
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
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            sourceAddress: isSet(object.sourceAddress) ? String(object.sourceAddress) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            sourceTxId: isSet(object.sourceTxId) ? bytesFromBase64(object.sourceTxId) : new Uint8Array(),
            sourceTxIndex: isSet(object.sourceTxIndex) ? long_1.default.fromValue(object.sourceTxIndex) : long_1.default.UZERO,
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.sourceAddress !== undefined && (obj.sourceAddress = message.sourceAddress);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        message.sourceTxId !== undefined &&
            (obj.sourceTxId = base64FromBytes(message.sourceTxId !== undefined ? message.sourceTxId : new Uint8Array()));
        message.sourceTxIndex !== undefined &&
            (obj.sourceTxIndex = (message.sourceTxIndex || long_1.default.UZERO).toString());
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseWasmMessage();
        message.sourceChain = (_a = object.sourceChain) !== null && _a !== void 0 ? _a : "";
        message.sourceAddress = (_b = object.sourceAddress) !== null && _b !== void 0 ? _b : "";
        message.destinationChain = (_c = object.destinationChain) !== null && _c !== void 0 ? _c : "";
        message.destinationAddress = (_d = object.destinationAddress) !== null && _d !== void 0 ? _d : "";
        message.payloadHash = (_e = object.payloadHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.sourceTxId = (_f = object.sourceTxId) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.sourceTxIndex =
            object.sourceTxIndex !== undefined && object.sourceTxIndex !== null
                ? long_1.default.fromValue(object.sourceTxIndex)
                : long_1.default.UZERO;
        message.sender = (_g = object.sender) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.id = (_h = object.id) !== null && _h !== void 0 ? _h : "";
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
//# sourceMappingURL=types.js.map