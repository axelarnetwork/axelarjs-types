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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../axelar/multisig/v1beta1/params");
const types_1 = require("../../../axelar/multisig/v1beta1/types");
exports.protobufPackage = "axelar.multisig.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, keygenSessions: [], signingSessions: [], keys: [], keyEpochs: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.keygenSessions) {
            types_1.KeygenSession.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signingSessions) {
            types_1.SigningSession.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.keys) {
            types_1.Key.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.keyEpochs) {
            types_1.KeyEpoch.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.keygenSessions.push(types_1.KeygenSession.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.signingSessions.push(types_1.SigningSession.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.keys.push(types_1.Key.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.keyEpochs.push(types_1.KeyEpoch.decode(reader, reader.uint32()));
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
            keygenSessions: Array.isArray(object === null || object === void 0 ? void 0 : object.keygenSessions)
                ? object.keygenSessions.map((e) => types_1.KeygenSession.fromJSON(e))
                : [],
            signingSessions: Array.isArray(object === null || object === void 0 ? void 0 : object.signingSessions)
                ? object.signingSessions.map((e) => types_1.SigningSession.fromJSON(e))
                : [],
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map((e) => types_1.Key.fromJSON(e)) : [],
            keyEpochs: Array.isArray(object === null || object === void 0 ? void 0 : object.keyEpochs)
                ? object.keyEpochs.map((e) => types_1.KeyEpoch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.keygenSessions) {
            obj.keygenSessions = message.keygenSessions.map((e) => (e ? types_1.KeygenSession.toJSON(e) : undefined));
        }
        else {
            obj.keygenSessions = [];
        }
        if (message.signingSessions) {
            obj.signingSessions = message.signingSessions.map((e) => (e ? types_1.SigningSession.toJSON(e) : undefined));
        }
        else {
            obj.signingSessions = [];
        }
        if (message.keys) {
            obj.keys = message.keys.map((e) => (e ? types_1.Key.toJSON(e) : undefined));
        }
        else {
            obj.keys = [];
        }
        if (message.keyEpochs) {
            obj.keyEpochs = message.keyEpochs.map((e) => (e ? types_1.KeyEpoch.toJSON(e) : undefined));
        }
        else {
            obj.keyEpochs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.keygenSessions = ((_a = object.keygenSessions) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.KeygenSession.fromPartial(e))) || [];
        message.signingSessions = ((_b = object.signingSessions) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.SigningSession.fromPartial(e))) || [];
        message.keys = ((_c = object.keys) === null || _c === void 0 ? void 0 : _c.map((e) => types_1.Key.fromPartial(e))) || [];
        message.keyEpochs = ((_d = object.keyEpochs) === null || _d === void 0 ? void 0 : _d.map((e) => types_1.KeyEpoch.fromPartial(e))) || [];
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
//# sourceMappingURL=genesis.js.map