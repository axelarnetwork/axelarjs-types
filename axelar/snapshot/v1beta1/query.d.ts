import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
export interface QueryValidatorsResponse {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse";
    validators: QueryValidatorsResponse_Validator[];
}
export interface QueryValidatorsResponse_TssIllegibilityInfo {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse.TssIllegibilityInfo";
    tombstoned: boolean;
    jailed: boolean;
    missedTooManyBlocks: boolean;
    noProxyRegistered: boolean;
    tssSuspended: boolean;
    proxyInsuficientFunds: boolean;
    staleTssHeartbeat: boolean;
}
export interface QueryValidatorsResponse_Validator {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse.Validator";
    operatorAddress: string;
    moniker: string;
    tssIllegibilityInfo?: QueryValidatorsResponse_TssIllegibilityInfo | undefined;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.snapshot.v1beta1.ParamsRequest";
}
export interface ParamsResponse {
    $type: "axelar.snapshot.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
/**
 * OperatorByProxyRequest retrieves the operator address associated with a given
 * proxy address
 */
export interface OperatorByProxyRequest {
    $type: "axelar.snapshot.v1beta1.OperatorByProxyRequest";
    proxyAddress: string;
}
export interface OperatorByProxyResponse {
    $type: "axelar.snapshot.v1beta1.OperatorByProxyResponse";
    operatorAddress: string;
}
/**
 * ProxyByOperatorRequest retrieves the proxy address associated with a given
 * operator address
 */
export interface ProxyByOperatorRequest {
    $type: "axelar.snapshot.v1beta1.ProxyByOperatorRequest";
    operatorAddress: string;
}
export interface ProxyByOperatorResponse {
    $type: "axelar.snapshot.v1beta1.ProxyByOperatorResponse";
    proxyAddress: string;
    status: ProxyByOperatorResponse_Status;
}
export declare enum ProxyByOperatorResponse_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_ACTIVE = 1,
    STATUS_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function proxyByOperatorResponse_StatusFromJSON(object: any): ProxyByOperatorResponse_Status;
export declare function proxyByOperatorResponse_StatusToJSON(object: ProxyByOperatorResponse_Status): string;
export declare const QueryValidatorsResponse: {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse";
    encode(message: QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse;
    fromJSON(object: any): QueryValidatorsResponse;
    toJSON(message: QueryValidatorsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryValidatorsResponse>, I>>(base?: I): QueryValidatorsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse>, I>>(object: I): QueryValidatorsResponse;
};
export declare const QueryValidatorsResponse_TssIllegibilityInfo: {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse.TssIllegibilityInfo";
    encode(message: QueryValidatorsResponse_TssIllegibilityInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse_TssIllegibilityInfo;
    fromJSON(object: any): QueryValidatorsResponse_TssIllegibilityInfo;
    toJSON(message: QueryValidatorsResponse_TssIllegibilityInfo): unknown;
    create<I extends Exact<DeepPartial<QueryValidatorsResponse_TssIllegibilityInfo>, I>>(base?: I): QueryValidatorsResponse_TssIllegibilityInfo;
    fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse_TssIllegibilityInfo>, I>>(object: I): QueryValidatorsResponse_TssIllegibilityInfo;
};
export declare const QueryValidatorsResponse_Validator: {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse.Validator";
    encode(message: QueryValidatorsResponse_Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse_Validator;
    fromJSON(object: any): QueryValidatorsResponse_Validator;
    toJSON(message: QueryValidatorsResponse_Validator): unknown;
    create<I extends Exact<DeepPartial<QueryValidatorsResponse_Validator>, I>>(base?: I): QueryValidatorsResponse_Validator;
    fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse_Validator>, I>>(object: I): QueryValidatorsResponse_Validator;
};
export declare const ParamsRequest: {
    $type: "axelar.snapshot.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends Exact<DeepPartial<ParamsRequest>, I>>(base?: I): ParamsRequest;
    fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.snapshot.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends Exact<DeepPartial<ParamsResponse>, I>>(base?: I): ParamsResponse;
    fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse;
};
export declare const OperatorByProxyRequest: {
    $type: "axelar.snapshot.v1beta1.OperatorByProxyRequest";
    encode(message: OperatorByProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperatorByProxyRequest;
    fromJSON(object: any): OperatorByProxyRequest;
    toJSON(message: OperatorByProxyRequest): unknown;
    create<I extends Exact<DeepPartial<OperatorByProxyRequest>, I>>(base?: I): OperatorByProxyRequest;
    fromPartial<I extends Exact<DeepPartial<OperatorByProxyRequest>, I>>(object: I): OperatorByProxyRequest;
};
export declare const OperatorByProxyResponse: {
    $type: "axelar.snapshot.v1beta1.OperatorByProxyResponse";
    encode(message: OperatorByProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperatorByProxyResponse;
    fromJSON(object: any): OperatorByProxyResponse;
    toJSON(message: OperatorByProxyResponse): unknown;
    create<I extends Exact<DeepPartial<OperatorByProxyResponse>, I>>(base?: I): OperatorByProxyResponse;
    fromPartial<I extends Exact<DeepPartial<OperatorByProxyResponse>, I>>(object: I): OperatorByProxyResponse;
};
export declare const ProxyByOperatorRequest: {
    $type: "axelar.snapshot.v1beta1.ProxyByOperatorRequest";
    encode(message: ProxyByOperatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProxyByOperatorRequest;
    fromJSON(object: any): ProxyByOperatorRequest;
    toJSON(message: ProxyByOperatorRequest): unknown;
    create<I extends Exact<DeepPartial<ProxyByOperatorRequest>, I>>(base?: I): ProxyByOperatorRequest;
    fromPartial<I extends Exact<DeepPartial<ProxyByOperatorRequest>, I>>(object: I): ProxyByOperatorRequest;
};
export declare const ProxyByOperatorResponse: {
    $type: "axelar.snapshot.v1beta1.ProxyByOperatorResponse";
    encode(message: ProxyByOperatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProxyByOperatorResponse;
    fromJSON(object: any): ProxyByOperatorResponse;
    toJSON(message: ProxyByOperatorResponse): unknown;
    create<I extends Exact<DeepPartial<ProxyByOperatorResponse>, I>>(base?: I): ProxyByOperatorResponse;
    fromPartial<I extends Exact<DeepPartial<ProxyByOperatorResponse>, I>>(object: I): ProxyByOperatorResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
