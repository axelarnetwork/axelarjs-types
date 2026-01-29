import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "axelar.reward.v1beta1";
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method. Ideally, this would use ValAddress as the validator
 * field type. However, this makes it awkward for REST-based calls, because it
 * would expect a byte array as part of the url. So, the bech32 encoded address
 * string is used for this request instead.
 */
export interface InflationRateRequest {
    $type: "axelar.reward.v1beta1.InflationRateRequest";
    validator: string;
}
export interface InflationRateResponse {
    $type: "axelar.reward.v1beta1.InflationRateResponse";
    inflationRate: Buffer;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.reward.v1beta1.ParamsRequest";
}
export interface ParamsResponse {
    $type: "axelar.reward.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
export declare const InflationRateRequest: {
    $type: "axelar.reward.v1beta1.InflationRateRequest";
    encode(message: InflationRateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InflationRateRequest;
    fromJSON(object: any): InflationRateRequest;
    toJSON(message: InflationRateRequest): unknown;
    create<I extends Exact<DeepPartial<InflationRateRequest>, I>>(base?: I): InflationRateRequest;
    fromPartial<I extends Exact<DeepPartial<InflationRateRequest>, I>>(object: I): InflationRateRequest;
};
export declare const InflationRateResponse: {
    $type: "axelar.reward.v1beta1.InflationRateResponse";
    encode(message: InflationRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InflationRateResponse;
    fromJSON(object: any): InflationRateResponse;
    toJSON(message: InflationRateResponse): unknown;
    create<I extends Exact<DeepPartial<InflationRateResponse>, I>>(base?: I): InflationRateResponse;
    fromPartial<I extends Exact<DeepPartial<InflationRateResponse>, I>>(object: I): InflationRateResponse;
};
export declare const ParamsRequest: {
    $type: "axelar.reward.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends Exact<DeepPartial<ParamsRequest>, I>>(base?: I): ParamsRequest;
    fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.reward.v1beta1.ParamsResponse";
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
