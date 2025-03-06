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
exports.Voted = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.vote.v1beta1";
function createBaseVoted() {
    return { module: "", action: "", poll: "", voter: "", state: "" };
}
exports.Voted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.action !== "") {
            writer.uint32(18).string(message.action);
        }
        if (message.poll !== "") {
            writer.uint32(26).string(message.poll);
        }
        if (message.voter !== "") {
            writer.uint32(34).string(message.voter);
        }
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.action = reader.string();
                    break;
                case 3:
                    message.poll = reader.string();
                    break;
                case 4:
                    message.voter = reader.string();
                    break;
                case 5:
                    message.state = reader.string();
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
            module: isSet(object.module) ? String(object.module) : "",
            action: isSet(object.action) ? String(object.action) : "",
            poll: isSet(object.poll) ? String(object.poll) : "",
            voter: isSet(object.voter) ? String(object.voter) : "",
            state: isSet(object.state) ? String(object.state) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.action !== undefined && (obj.action = message.action);
        message.poll !== undefined && (obj.poll = message.poll);
        message.voter !== undefined && (obj.voter = message.voter);
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseVoted();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.action = (_b = object.action) !== null && _b !== void 0 ? _b : "";
        message.poll = (_c = object.poll) !== null && _c !== void 0 ? _c : "";
        message.voter = (_d = object.voter) !== null && _d !== void 0 ? _d : "";
        message.state = (_e = object.state) !== null && _e !== void 0 ? _e : "";
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