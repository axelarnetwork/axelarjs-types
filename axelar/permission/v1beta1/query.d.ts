import Long from "long";
import _m0 from "protobufjs/minimal";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { Params } from "./params";
export declare const protobufPackage = "axelar.permission.v1beta1";
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequest {
    $type: "axelar.permission.v1beta1.QueryGovernanceKeyRequest";
}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponse {
    $type: "axelar.permission.v1beta1.QueryGovernanceKeyResponse";
    governanceKey?: LegacyAminoPubKey | undefined;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.permission.v1beta1.ParamsRequest";
}
export interface ParamsResponse {
    $type: "axelar.permission.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
export declare const QueryGovernanceKeyRequest: {
    $type: "axelar.permission.v1beta1.QueryGovernanceKeyRequest";
    encode(_: QueryGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGovernanceKeyRequest;
    fromJSON(_: any): QueryGovernanceKeyRequest;
    toJSON(_: QueryGovernanceKeyRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGovernanceKeyRequest>, I>>(base?: I): QueryGovernanceKeyRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGovernanceKeyRequest>, I>>(_: I): QueryGovernanceKeyRequest;
};
export declare const QueryGovernanceKeyResponse: {
    $type: "axelar.permission.v1beta1.QueryGovernanceKeyResponse";
    encode(message: QueryGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGovernanceKeyResponse;
    fromJSON(object: any): QueryGovernanceKeyResponse;
    toJSON(message: QueryGovernanceKeyResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGovernanceKeyResponse>, I>>(base?: I): QueryGovernanceKeyResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGovernanceKeyResponse>, I>>(object: I): QueryGovernanceKeyResponse;
};
export declare const ParamsRequest: {
    $type: "axelar.permission.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends Exact<DeepPartial<ParamsRequest>, I>>(base?: I): ParamsRequest;
    fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.permission.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends Exact<DeepPartial<ParamsResponse>, I>>(base?: I): ParamsResponse;
    fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse;
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
