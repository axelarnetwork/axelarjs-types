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
exports.Metadata = exports.metadata_TypeToJSON = exports.metadata_TypeFromJSON = exports.Metadata_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.axelarnet.v1beta1";
var Metadata_Type;
(function (Metadata_Type) {
    Metadata_Type[Metadata_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    Metadata_Type[Metadata_Type["TYPE_GENERAL_MESSAGE"] = 1] = "TYPE_GENERAL_MESSAGE";
    Metadata_Type[Metadata_Type["TYPE_GENERAL_MESSAGE_WITH_TOKEN"] = 2] = "TYPE_GENERAL_MESSAGE_WITH_TOKEN";
    Metadata_Type[Metadata_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Metadata_Type = exports.Metadata_Type || (exports.Metadata_Type = {}));
function metadata_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Metadata_Type.TYPE_UNSPECIFIED;
        case 1:
        case "TYPE_GENERAL_MESSAGE":
            return Metadata_Type.TYPE_GENERAL_MESSAGE;
        case 2:
        case "TYPE_GENERAL_MESSAGE_WITH_TOKEN":
            return Metadata_Type.TYPE_GENERAL_MESSAGE_WITH_TOKEN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Metadata_Type.UNRECOGNIZED;
    }
}
exports.metadata_TypeFromJSON = metadata_TypeFromJSON;
function metadata_TypeToJSON(object) {
    switch (object) {
        case Metadata_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Metadata_Type.TYPE_GENERAL_MESSAGE:
            return "TYPE_GENERAL_MESSAGE";
        case Metadata_Type.TYPE_GENERAL_MESSAGE_WITH_TOKEN:
            return "TYPE_GENERAL_MESSAGE_WITH_TOKEN";
        case Metadata_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.metadata_TypeToJSON = metadata_TypeToJSON;
function createBaseMetadata() {
    return { sender: "", sourceChain: "", payload: new Uint8Array(), type: 0, destChain: "", destAddress: "" };
}
exports.Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sourceChain !== "") {
            writer.uint32(18).string(message.sourceChain);
        }
        if (message.payload.length !== 0) {
            writer.uint32(26).bytes(message.payload);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.destChain !== "") {
            writer.uint32(42).string(message.destChain);
        }
        if (message.destAddress !== "") {
            writer.uint32(50).string(message.destAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.sourceChain = reader.string();
                    break;
                case 3:
                    message.payload = reader.bytes();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.destChain = reader.string();
                    break;
                case 6:
                    message.destAddress = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            type: isSet(object.type) ? metadata_TypeFromJSON(object.type) : 0,
            destChain: isSet(object.destChain) ? String(object.destChain) : "",
            destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.type !== undefined && (obj.type = metadata_TypeToJSON(message.type));
        message.destChain !== undefined && (obj.destChain = message.destChain);
        message.destAddress !== undefined && (obj.destAddress = message.destAddress);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMetadata();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.sourceChain = (_b = object.sourceChain) !== null && _b !== void 0 ? _b : "";
        message.payload = (_c = object.payload) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 0;
        message.destChain = (_e = object.destChain) !== null && _e !== void 0 ? _e : "";
        message.destAddress = (_f = object.destAddress) !== null && _f !== void 0 ? _f : "";
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
//# sourceMappingURL=gmp.js.map