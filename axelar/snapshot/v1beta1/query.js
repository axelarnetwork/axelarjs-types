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
exports.ParamsResponse = exports.ParamsRequest = exports.QueryValidatorsResponse_Validator = exports.QueryValidatorsResponse_TssIllegibilityInfo = exports.QueryValidatorsResponse = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../axelar/snapshot/v1beta1/params");
exports.protobufPackage = "axelar.snapshot.v1beta1";
function createBaseQueryValidatorsResponse() {
    return { validators: [] };
}
exports.QueryValidatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            exports.QueryValidatorsResponse_Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.QueryValidatorsResponse_Validator.decode(reader, reader.uint32()));
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
                ? object.validators.map((e) => exports.QueryValidatorsResponse_Validator.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.QueryValidatorsResponse_Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorsResponse();
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryValidatorsResponse_Validator.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryValidatorsResponse_TssIllegibilityInfo() {
    return {
        tombstoned: false,
        jailed: false,
        missedTooManyBlocks: false,
        noProxyRegistered: false,
        tssSuspended: false,
        proxyInsuficientFunds: false,
        staleTssHeartbeat: false,
    };
}
exports.QueryValidatorsResponse_TssIllegibilityInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tombstoned === true) {
            writer.uint32(8).bool(message.tombstoned);
        }
        if (message.jailed === true) {
            writer.uint32(16).bool(message.jailed);
        }
        if (message.missedTooManyBlocks === true) {
            writer.uint32(24).bool(message.missedTooManyBlocks);
        }
        if (message.noProxyRegistered === true) {
            writer.uint32(32).bool(message.noProxyRegistered);
        }
        if (message.tssSuspended === true) {
            writer.uint32(40).bool(message.tssSuspended);
        }
        if (message.proxyInsuficientFunds === true) {
            writer.uint32(48).bool(message.proxyInsuficientFunds);
        }
        if (message.staleTssHeartbeat === true) {
            writer.uint32(56).bool(message.staleTssHeartbeat);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsResponse_TssIllegibilityInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tombstoned = reader.bool();
                    break;
                case 2:
                    message.jailed = reader.bool();
                    break;
                case 3:
                    message.missedTooManyBlocks = reader.bool();
                    break;
                case 4:
                    message.noProxyRegistered = reader.bool();
                    break;
                case 5:
                    message.tssSuspended = reader.bool();
                    break;
                case 6:
                    message.proxyInsuficientFunds = reader.bool();
                    break;
                case 7:
                    message.staleTssHeartbeat = reader.bool();
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
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            missedTooManyBlocks: isSet(object.missedTooManyBlocks) ? Boolean(object.missedTooManyBlocks) : false,
            noProxyRegistered: isSet(object.noProxyRegistered) ? Boolean(object.noProxyRegistered) : false,
            tssSuspended: isSet(object.tssSuspended) ? Boolean(object.tssSuspended) : false,
            proxyInsuficientFunds: isSet(object.proxyInsuficientFunds)
                ? Boolean(object.proxyInsuficientFunds)
                : false,
            staleTssHeartbeat: isSet(object.staleTssHeartbeat) ? Boolean(object.staleTssHeartbeat) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.missedTooManyBlocks !== undefined && (obj.missedTooManyBlocks = message.missedTooManyBlocks);
        message.noProxyRegistered !== undefined && (obj.noProxyRegistered = message.noProxyRegistered);
        message.tssSuspended !== undefined && (obj.tssSuspended = message.tssSuspended);
        message.proxyInsuficientFunds !== undefined &&
            (obj.proxyInsuficientFunds = message.proxyInsuficientFunds);
        message.staleTssHeartbeat !== undefined && (obj.staleTssHeartbeat = message.staleTssHeartbeat);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseQueryValidatorsResponse_TssIllegibilityInfo();
        message.tombstoned = (_a = object.tombstoned) !== null && _a !== void 0 ? _a : false;
        message.jailed = (_b = object.jailed) !== null && _b !== void 0 ? _b : false;
        message.missedTooManyBlocks = (_c = object.missedTooManyBlocks) !== null && _c !== void 0 ? _c : false;
        message.noProxyRegistered = (_d = object.noProxyRegistered) !== null && _d !== void 0 ? _d : false;
        message.tssSuspended = (_e = object.tssSuspended) !== null && _e !== void 0 ? _e : false;
        message.proxyInsuficientFunds = (_f = object.proxyInsuficientFunds) !== null && _f !== void 0 ? _f : false;
        message.staleTssHeartbeat = (_g = object.staleTssHeartbeat) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
function createBaseQueryValidatorsResponse_Validator() {
    return { operatorAddress: "", moniker: "", tssIllegibilityInfo: undefined };
}
exports.QueryValidatorsResponse_Validator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.moniker !== "") {
            writer.uint32(18).string(message.moniker);
        }
        if (message.tssIllegibilityInfo !== undefined) {
            exports.QueryValidatorsResponse_TssIllegibilityInfo.encode(message.tssIllegibilityInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsResponse_Validator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.moniker = reader.string();
                    break;
                case 3:
                    message.tssIllegibilityInfo = exports.QueryValidatorsResponse_TssIllegibilityInfo.decode(reader, reader.uint32());
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
            operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            tssIllegibilityInfo: isSet(object.tssIllegibilityInfo)
                ? exports.QueryValidatorsResponse_TssIllegibilityInfo.fromJSON(object.tssIllegibilityInfo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.tssIllegibilityInfo !== undefined &&
            (obj.tssIllegibilityInfo = message.tssIllegibilityInfo
                ? exports.QueryValidatorsResponse_TssIllegibilityInfo.toJSON(message.tssIllegibilityInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryValidatorsResponse_Validator();
        message.operatorAddress = (_a = object.operatorAddress) !== null && _a !== void 0 ? _a : "";
        message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
        message.tssIllegibilityInfo =
            object.tssIllegibilityInfo !== undefined && object.tssIllegibilityInfo !== null
                ? exports.QueryValidatorsResponse_TssIllegibilityInfo.fromPartial(object.tssIllegibilityInfo)
                : undefined;
        return message;
    },
};
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const message = createBaseParamsRequest();
        return message;
    },
};
function createBaseParamsResponse() {
    return { params: undefined };
}
exports.ParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
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
//# sourceMappingURL=query.js.map