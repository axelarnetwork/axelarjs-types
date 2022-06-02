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
exports.Snapshot = exports.Validator = exports.validatorIllegibilityToJSON = exports.validatorIllegibilityFromJSON = exports.ValidatorIllegibility = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../../google/protobuf/any");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const types_1 = require("../../../../axelar/tss/exported/v1beta1/types");
exports.protobufPackage = "axelar.snapshot.exported.v1beta1";
var ValidatorIllegibility;
(function (ValidatorIllegibility) {
    /**
     * VALIDATOR_ILLEGIBILITY_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
     * be powers of 2
     */
    ValidatorIllegibility[ValidatorIllegibility["VALIDATOR_ILLEGIBILITY_UNSPECIFIED"] = 0] = "VALIDATOR_ILLEGIBILITY_UNSPECIFIED";
    ValidatorIllegibility[ValidatorIllegibility["VALIDATOR_ILLEGIBILITY_TOMBSTONED"] = 1] = "VALIDATOR_ILLEGIBILITY_TOMBSTONED";
    ValidatorIllegibility[ValidatorIllegibility["VALIDATOR_ILLEGIBILITY_JAILED"] = 2] = "VALIDATOR_ILLEGIBILITY_JAILED";
    ValidatorIllegibility[ValidatorIllegibility["VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS"] = 4] = "VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS";
    ValidatorIllegibility[ValidatorIllegibility["VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED"] = 8] = "VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED";
    ValidatorIllegibility[ValidatorIllegibility["VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED"] = 16] = "VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED";
    ValidatorIllegibility[ValidatorIllegibility["VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS"] = 32] = "VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS";
    ValidatorIllegibility[ValidatorIllegibility["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ValidatorIllegibility = exports.ValidatorIllegibility || (exports.ValidatorIllegibility = {}));
function validatorIllegibilityFromJSON(object) {
    switch (object) {
        case 0:
        case "VALIDATOR_ILLEGIBILITY_UNSPECIFIED":
            return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_UNSPECIFIED;
        case 1:
        case "VALIDATOR_ILLEGIBILITY_TOMBSTONED":
            return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_TOMBSTONED;
        case 2:
        case "VALIDATOR_ILLEGIBILITY_JAILED":
            return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_JAILED;
        case 4:
        case "VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS":
            return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS;
        case 8:
        case "VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED":
            return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED;
        case 16:
        case "VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED":
            return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED;
        case 32:
        case "VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS":
            return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ValidatorIllegibility.UNRECOGNIZED;
    }
}
exports.validatorIllegibilityFromJSON = validatorIllegibilityFromJSON;
function validatorIllegibilityToJSON(object) {
    switch (object) {
        case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_UNSPECIFIED:
            return "VALIDATOR_ILLEGIBILITY_UNSPECIFIED";
        case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_TOMBSTONED:
            return "VALIDATOR_ILLEGIBILITY_TOMBSTONED";
        case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_JAILED:
            return "VALIDATOR_ILLEGIBILITY_JAILED";
        case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS:
            return "VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS";
        case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED:
            return "VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED";
        case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED:
            return "VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED";
        case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS:
            return "VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS";
        case ValidatorIllegibility.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.validatorIllegibilityToJSON = validatorIllegibilityToJSON;
function createBaseValidator() {
    return { sdkValidator: undefined, shareCount: long_1.default.ZERO };
}
exports.Validator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sdkValidator !== undefined) {
            any_1.Any.encode(message.sdkValidator, writer.uint32(10).fork()).ldelim();
        }
        if (!message.shareCount.isZero()) {
            writer.uint32(16).int64(message.shareCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sdkValidator = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.shareCount = reader.int64();
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
            sdkValidator: isSet(object.sdkValidator) ? any_1.Any.fromJSON(object.sdkValidator) : undefined,
            shareCount: isSet(object.shareCount) ? long_1.default.fromValue(object.shareCount) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sdkValidator !== undefined &&
            (obj.sdkValidator = message.sdkValidator ? any_1.Any.toJSON(message.sdkValidator) : undefined);
        message.shareCount !== undefined && (obj.shareCount = (message.shareCount || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.sdkValidator =
            object.sdkValidator !== undefined && object.sdkValidator !== null
                ? any_1.Any.fromPartial(object.sdkValidator)
                : undefined;
        message.shareCount =
            object.shareCount !== undefined && object.shareCount !== null
                ? long_1.default.fromValue(object.shareCount)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseSnapshot() {
    return {
        validators: [],
        timestamp: undefined,
        height: long_1.default.ZERO,
        totalShareCount: new Uint8Array(),
        counter: long_1.default.ZERO,
        keyShareDistributionPolicy: 0,
        corruptionThreshold: long_1.default.ZERO,
    };
}
exports.Snapshot = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.totalShareCount.length !== 0) {
            writer.uint32(34).bytes(message.totalShareCount);
        }
        if (!message.counter.isZero()) {
            writer.uint32(40).int64(message.counter);
        }
        if (message.keyShareDistributionPolicy !== 0) {
            writer.uint32(48).int32(message.keyShareDistributionPolicy);
        }
        if (!message.corruptionThreshold.isZero()) {
            writer.uint32(56).int64(message.corruptionThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.totalShareCount = reader.bytes();
                    break;
                case 5:
                    message.counter = reader.int64();
                    break;
                case 6:
                    message.keyShareDistributionPolicy = reader.int32();
                    break;
                case 7:
                    message.corruptionThreshold = reader.int64();
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
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map((e) => exports.Validator.fromJSON(e))
                : [],
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
            totalShareCount: isSet(object.totalShareCount)
                ? bytesFromBase64(object.totalShareCount)
                : new Uint8Array(),
            counter: isSet(object.counter) ? long_1.default.fromValue(object.counter) : long_1.default.ZERO,
            keyShareDistributionPolicy: isSet(object.keyShareDistributionPolicy)
                ? (0, types_1.keyShareDistributionPolicyFromJSON)(object.keyShareDistributionPolicy)
                : 0,
            corruptionThreshold: isSet(object.corruptionThreshold)
                ? long_1.default.fromValue(object.corruptionThreshold)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => (e ? exports.Validator.toJSON(e) : undefined));
        }
        else {
            obj.validators = [];
        }
        message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
        message.height !== undefined && (obj.height = (message.height || long_1.default.ZERO).toString());
        message.totalShareCount !== undefined &&
            (obj.totalShareCount = base64FromBytes(message.totalShareCount !== undefined ? message.totalShareCount : new Uint8Array()));
        message.counter !== undefined && (obj.counter = (message.counter || long_1.default.ZERO).toString());
        message.keyShareDistributionPolicy !== undefined &&
            (obj.keyShareDistributionPolicy = (0, types_1.keyShareDistributionPolicyToJSON)(message.keyShareDistributionPolicy));
        message.corruptionThreshold !== undefined &&
            (obj.corruptionThreshold = (message.corruptionThreshold || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSnapshot();
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Validator.fromPartial(e))) || [];
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? timestamp_1.Timestamp.fromPartial(object.timestamp)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null ? long_1.default.fromValue(object.height) : long_1.default.ZERO;
        message.totalShareCount = (_b = object.totalShareCount) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.counter =
            object.counter !== undefined && object.counter !== null ? long_1.default.fromValue(object.counter) : long_1.default.ZERO;
        message.keyShareDistributionPolicy = (_c = object.keyShareDistributionPolicy) !== null && _c !== void 0 ? _c : 0;
        message.corruptionThreshold =
            object.corruptionThreshold !== undefined && object.corruptionThreshold !== null
                ? long_1.default.fromValue(object.corruptionThreshold)
                : long_1.default.ZERO;
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
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return toTimestamp(o);
    }
    else if (typeof o === "string") {
        return toTimestamp(new Date(o));
    }
    else {
        return timestamp_1.Timestamp.fromJSON(o);
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map