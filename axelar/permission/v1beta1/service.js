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
exports.QueryClientImpl = exports.MsgClientImpl = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const tx_1 = require("../../../axelar/permission/v1beta1/tx");
const query_1 = require("../../../axelar/permission/v1beta1/query");
exports.protobufPackage = "axelar.permission.v1beta1";
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.RegisterController = this.RegisterController.bind(this);
        this.DeregisterController = this.DeregisterController.bind(this);
        this.UpdateGovernanceKey = this.UpdateGovernanceKey.bind(this);
    }
    RegisterController(request) {
        const data = tx_1.RegisterControllerRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "RegisterController", data);
        return promise.then((data) => tx_1.RegisterControllerResponse.decode(new _m0.Reader(data)));
    }
    DeregisterController(request) {
        const data = tx_1.DeregisterControllerRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "DeregisterController", data);
        return promise.then((data) => tx_1.DeregisterControllerResponse.decode(new _m0.Reader(data)));
    }
    UpdateGovernanceKey(request) {
        const data = tx_1.UpdateGovernanceKeyRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "UpdateGovernanceKey", data);
        return promise.then((data) => tx_1.UpdateGovernanceKeyResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GovernanceKey = this.GovernanceKey.bind(this);
        this.Params = this.Params.bind(this);
    }
    GovernanceKey(request) {
        const data = query_1.QueryGovernanceKeyRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Query", "GovernanceKey", data);
        return promise.then((data) => query_1.QueryGovernanceKeyResponse.decode(new _m0.Reader(data)));
    }
    Params(request) {
        const data = query_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Query", "Params", data);
        return promise.then((data) => query_1.ParamsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=service.js.map