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
exports.Refund = exports.Pool_Reward = exports.Pool = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "axelar.reward.v1beta1";
function createBasePool() {
    return { name: "", rewards: [] };
}
exports.Pool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.rewards) {
            exports.Pool_Reward.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.rewards.push(exports.Pool_Reward.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => exports.Pool_Reward.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => (e ? exports.Pool_Reward.toJSON(e) : undefined));
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePool();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.rewards = ((_b = object.rewards) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Pool_Reward.fromPartial(e))) || [];
        return message;
    },
};
function createBasePool_Reward() {
    return { validator: new Uint8Array(), coins: [] };
}
exports.Pool_Reward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator.length !== 0) {
            writer.uint32(10).bytes(message.validator);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool_Reward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.bytes();
                    break;
                case 2:
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
            validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = base64FromBytes(message.validator !== undefined ? message.validator : new Uint8Array()));
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePool_Reward();
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRefund() {
    return { payer: new Uint8Array(), fees: [] };
}
exports.Refund = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payer.length !== 0) {
            writer.uint32(10).bytes(message.payer);
        }
        for (const v of message.fees) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRefund();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payer = reader.bytes();
                    break;
                case 2:
                    message.fees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            payer: isSet(object.payer) ? bytesFromBase64(object.payer) : new Uint8Array(),
            fees: Array.isArray(object === null || object === void 0 ? void 0 : object.fees) ? object.fees.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payer !== undefined &&
            (obj.payer = base64FromBytes(message.payer !== undefined ? message.payer : new Uint8Array()));
        if (message.fees) {
            obj.fees = message.fees.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.fees = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRefund();
        message.payer = (_a = object.payer) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.fees = ((_b = object.fees) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
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