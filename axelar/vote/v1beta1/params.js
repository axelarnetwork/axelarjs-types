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
const threshold_1 = require("../../../axelar/utils/v1beta1/threshold");
exports.protobufPackage = "axelar.vote.v1beta1";
function createBaseParams() {
    return { defaultVotingThreshold: undefined, endBlockerLimit: long_1.default.ZERO };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.defaultVotingThreshold !== undefined) {
            threshold_1.Threshold.encode(message.defaultVotingThreshold, writer.uint32(10).fork()).ldelim();
        }
        if (!message.endBlockerLimit.isZero()) {
            writer.uint32(16).int64(message.endBlockerLimit);
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
                    message.defaultVotingThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.endBlockerLimit = reader.int64();
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
            defaultVotingThreshold: isSet(object.defaultVotingThreshold)
                ? threshold_1.Threshold.fromJSON(object.defaultVotingThreshold)
                : undefined,
            endBlockerLimit: isSet(object.endBlockerLimit) ? long_1.default.fromValue(object.endBlockerLimit) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.defaultVotingThreshold !== undefined &&
            (obj.defaultVotingThreshold = message.defaultVotingThreshold
                ? threshold_1.Threshold.toJSON(message.defaultVotingThreshold)
                : undefined);
        message.endBlockerLimit !== undefined &&
            (obj.endBlockerLimit = (message.endBlockerLimit || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.defaultVotingThreshold =
            object.defaultVotingThreshold !== undefined && object.defaultVotingThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.defaultVotingThreshold)
                : undefined;
        message.endBlockerLimit =
            object.endBlockerLimit !== undefined && object.endBlockerLimit !== null
                ? long_1.default.fromValue(object.endBlockerLimit)
                : long_1.default.ZERO;
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
//# sourceMappingURL=params.js.map