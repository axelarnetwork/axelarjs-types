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
exports.BatchedMessageFailed = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.auxiliary.v1beta1";
function createBaseBatchedMessageFailed() {
    return { index: 0, error: "" };
}
exports.BatchedMessageFailed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).int32(message.index);
        }
        if (message.error !== "") {
            writer.uint32(18).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchedMessageFailed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.error = reader.string();
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
            index: isSet(object.index) ? Number(object.index) : 0,
            error: isSet(object.error) ? String(object.error) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBatchedMessageFailed();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.error = (_b = object.error) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=events.js.map