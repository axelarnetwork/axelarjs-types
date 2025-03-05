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
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.reward.v1beta1";
function createBaseParams() {
    return {
        externalChainVotingInflationRate: new Uint8Array(),
        keyMgmtRelativeInflationRate: new Uint8Array(),
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.externalChainVotingInflationRate.length !== 0) {
            writer.uint32(10).bytes(message.externalChainVotingInflationRate);
        }
        if (message.keyMgmtRelativeInflationRate.length !== 0) {
            writer.uint32(18).bytes(message.keyMgmtRelativeInflationRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalChainVotingInflationRate = reader.bytes();
                    break;
                case 2:
                    message.keyMgmtRelativeInflationRate = reader.bytes();
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
            externalChainVotingInflationRate: isSet(object.externalChainVotingInflationRate)
                ? bytesFromBase64(object.externalChainVotingInflationRate)
                : new Uint8Array(),
            keyMgmtRelativeInflationRate: isSet(object.keyMgmtRelativeInflationRate)
                ? bytesFromBase64(object.keyMgmtRelativeInflationRate)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.externalChainVotingInflationRate !== undefined &&
            (obj.externalChainVotingInflationRate = base64FromBytes(message.externalChainVotingInflationRate !== undefined
                ? message.externalChainVotingInflationRate
                : new Uint8Array()));
        message.keyMgmtRelativeInflationRate !== undefined &&
            (obj.keyMgmtRelativeInflationRate = base64FromBytes(message.keyMgmtRelativeInflationRate !== undefined
                ? message.keyMgmtRelativeInflationRate
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseParams();
        message.externalChainVotingInflationRate = (_a = object.externalChainVotingInflationRate) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.keyMgmtRelativeInflationRate = (_b = object.keyMgmtRelativeInflationRate) !== null && _b !== void 0 ? _b : new Uint8Array();
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
//# sourceMappingURL=params.js.map