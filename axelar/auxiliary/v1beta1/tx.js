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
exports.BatchResponse_Response = exports.BatchResponse = exports.BatchRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
const abci_1 = require("../../../cosmos/base/abci/v1beta1/abci");
exports.protobufPackage = "axelar.auxiliary.v1beta1";
function createBaseBatchRequest() {
    return { sender: new Uint8Array(), messages: [] };
}
exports.BatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => any_1.Any.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        if (message.messages) {
            obj.messages = message.messages.map((e) => (e ? any_1.Any.toJSON(e) : undefined));
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBatchRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.messages = ((_b = object.messages) === null || _b === void 0 ? void 0 : _b.map((e) => any_1.Any.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBatchResponse() {
    return { responses: [] };
}
exports.BatchResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.responses) {
            exports.BatchResponse_Response.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.responses.push(exports.BatchResponse_Response.decode(reader, reader.uint32()));
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
            responses: Array.isArray(object === null || object === void 0 ? void 0 : object.responses)
                ? object.responses.map((e) => exports.BatchResponse_Response.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.responses) {
            obj.responses = message.responses.map((e) => (e ? exports.BatchResponse_Response.toJSON(e) : undefined));
        }
        else {
            obj.responses = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBatchResponse();
        message.responses = ((_a = object.responses) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BatchResponse_Response.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBatchResponse_Response() {
    return { result: undefined, err: undefined };
}
exports.BatchResponse_Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== undefined) {
            abci_1.Result.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        if (message.err !== undefined) {
            writer.uint32(18).string(message.err);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchResponse_Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = abci_1.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.err = reader.string();
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
            result: isSet(object.result) ? abci_1.Result.fromJSON(object.result) : undefined,
            err: isSet(object.err) ? String(object.err) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? abci_1.Result.toJSON(message.result) : undefined);
        message.err !== undefined && (obj.err = message.err);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBatchResponse_Response();
        message.result =
            object.result !== undefined && object.result !== null ? abci_1.Result.fromPartial(object.result) : undefined;
        message.err = (_a = object.err) !== null && _a !== void 0 ? _a : undefined;
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