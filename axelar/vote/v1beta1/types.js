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
exports.TalliedVote_IsVoterLateEntry = exports.TalliedVote = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "axelar.vote.v1beta1";
function createBaseTalliedVote() {
    return { tally: new Uint8Array(), data: undefined, pollId: long_1.default.UZERO, isVoterLate: {} };
}
exports.TalliedVote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tally.length !== 0) {
            writer.uint32(10).bytes(message.tally);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        if (!message.pollId.isZero()) {
            writer.uint32(32).uint64(message.pollId);
        }
        Object.entries(message.isVoterLate).forEach(([key, value]) => {
            exports.TalliedVote_IsVoterLateEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTalliedVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = reader.bytes();
                    break;
                case 3:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pollId = reader.uint64();
                    break;
                case 5:
                    const entry5 = exports.TalliedVote_IsVoterLateEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.isVoterLate[entry5.key] = entry5.value;
                    }
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
            tally: isSet(object.tally) ? bytesFromBase64(object.tally) : new Uint8Array(),
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
            pollId: isSet(object.pollId) ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO,
            isVoterLate: isObject(object.isVoterLate)
                ? Object.entries(object.isVoterLate).reduce((acc, [key, value]) => {
                    acc[key] = Boolean(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined &&
            (obj.tally = base64FromBytes(message.tally !== undefined ? message.tally : new Uint8Array()));
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.pollId !== undefined && (obj.pollId = (message.pollId || long_1.default.UZERO).toString());
        obj.isVoterLate = {};
        if (message.isVoterLate) {
            Object.entries(message.isVoterLate).forEach(([k, v]) => {
                obj.isVoterLate[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTalliedVote();
        message.tally = (_a = object.tally) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.data =
            object.data !== undefined && object.data !== null ? any_1.Any.fromPartial(object.data) : undefined;
        message.pollId =
            object.pollId !== undefined && object.pollId !== null ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO;
        message.isVoterLate = Object.entries((_b = object.isVoterLate) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Boolean(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseTalliedVote_IsVoterLateEntry() {
    return { key: "", value: false };
}
exports.TalliedVote_IsVoterLateEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value === true) {
            writer.uint32(16).bool(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTalliedVote_IsVoterLateEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.bool();
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
            value: isSet(object.value) ? Boolean(object.value) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTalliedVote_IsVoterLateEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : false;
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
//# sourceMappingURL=types.js.map