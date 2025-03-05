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
const params_1 = require("../../../axelar/permission/v1beta1/params");
const keys_1 = require("../../../cosmos/crypto/multisig/keys");
const types_1 = require("../../../axelar/permission/v1beta1/types");
exports.protobufPackage = "axelar.permission.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, governanceKey: undefined, govAccounts: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.governanceKey !== undefined) {
            keys_1.LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.govAccounts) {
            types_1.GovAccount.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.governanceKey = keys_1.LegacyAminoPubKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.govAccounts.push(types_1.GovAccount.decode(reader, reader.uint32()));
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
            governanceKey: isSet(object.governanceKey)
                ? keys_1.LegacyAminoPubKey.fromJSON(object.governanceKey)
                : undefined,
            govAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.govAccounts)
                ? object.govAccounts.map((e) => types_1.GovAccount.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.governanceKey !== undefined &&
            (obj.governanceKey = message.governanceKey
                ? keys_1.LegacyAminoPubKey.toJSON(message.governanceKey)
                : undefined);
        if (message.govAccounts) {
            obj.govAccounts = message.govAccounts.map((e) => (e ? types_1.GovAccount.toJSON(e) : undefined));
        }
        else {
            obj.govAccounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.governanceKey =
            object.governanceKey !== undefined && object.governanceKey !== null
                ? keys_1.LegacyAminoPubKey.fromPartial(object.governanceKey)
                : undefined;
        message.govAccounts = ((_a = object.govAccounts) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.GovAccount.fromPartial(e))) || [];
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