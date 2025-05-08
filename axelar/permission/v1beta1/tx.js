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
exports.DeregisterControllerResponse = exports.DeregisterControllerRequest = exports.RegisterControllerResponse = exports.RegisterControllerRequest = exports.UpdateGovernanceKeyResponse = exports.UpdateGovernanceKeyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const keys_1 = require("../../../cosmos/crypto/multisig/keys");
exports.protobufPackage = "axelar.permission.v1beta1";
function createBaseUpdateGovernanceKeyRequest() {
    return { senderBz: new Uint8Array(), governanceKey: undefined, sender: "" };
}
exports.UpdateGovernanceKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderBz.length !== 0) {
            writer.uint32(10).bytes(message.senderBz);
        }
        if (message.governanceKey !== undefined) {
            keys_1.LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateGovernanceKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderBz = reader.bytes();
                    break;
                case 2:
                    message.governanceKey = keys_1.LegacyAminoPubKey.decode(reader, reader.uint32());
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
            governanceKey: isSet(object.governanceKey)
                ? keys_1.LegacyAminoPubKey.fromJSON(object.governanceKey)
                : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderBz !== undefined &&
            (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
        message.governanceKey !== undefined &&
            (obj.governanceKey = message.governanceKey
                ? keys_1.LegacyAminoPubKey.toJSON(message.governanceKey)
                : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateGovernanceKeyRequest();
        message.senderBz = (_a = object.senderBz) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.governanceKey =
            object.governanceKey !== undefined && object.governanceKey !== null
                ? keys_1.LegacyAminoPubKey.fromPartial(object.governanceKey)
                : undefined;
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateGovernanceKeyResponse() {
    return {};
}
exports.UpdateGovernanceKeyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateGovernanceKeyResponse();
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
        const message = createBaseUpdateGovernanceKeyResponse();
        return message;
    },
};
function createBaseRegisterControllerRequest() {
    return { senderBz: new Uint8Array(), controller: new Uint8Array(), sender: "" };
}
exports.RegisterControllerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderBz.length !== 0) {
            writer.uint32(10).bytes(message.senderBz);
        }
        if (message.controller.length !== 0) {
            writer.uint32(18).bytes(message.controller);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterControllerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderBz = reader.bytes();
                    break;
                case 2:
                    message.controller = reader.bytes();
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
            controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderBz !== undefined &&
            (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
        message.controller !== undefined &&
            (obj.controller = base64FromBytes(message.controller !== undefined ? message.controller : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisterControllerRequest();
        message.senderBz = (_a = object.senderBz) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.controller = (_b = object.controller) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisterControllerResponse() {
    return {};
}
exports.RegisterControllerResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterControllerResponse();
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
        const message = createBaseRegisterControllerResponse();
        return message;
    },
};
function createBaseDeregisterControllerRequest() {
    return { senderBz: new Uint8Array(), controller: new Uint8Array(), sender: "" };
}
exports.DeregisterControllerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderBz.length !== 0) {
            writer.uint32(10).bytes(message.senderBz);
        }
        if (message.controller.length !== 0) {
            writer.uint32(18).bytes(message.controller);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeregisterControllerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderBz = reader.bytes();
                    break;
                case 2:
                    message.controller = reader.bytes();
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
            controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderBz !== undefined &&
            (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
        message.controller !== undefined &&
            (obj.controller = base64FromBytes(message.controller !== undefined ? message.controller : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDeregisterControllerRequest();
        message.senderBz = (_a = object.senderBz) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.controller = (_b = object.controller) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseDeregisterControllerResponse() {
    return {};
}
exports.DeregisterControllerResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeregisterControllerResponse();
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
        const message = createBaseDeregisterControllerResponse();
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