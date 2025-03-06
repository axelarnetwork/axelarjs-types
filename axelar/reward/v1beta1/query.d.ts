import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/reward/v1beta1/params";
export declare const protobufPackage = "axelar.reward.v1beta1";
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method. Ideally, this would use ValAddress as the validator
 * field type. However, this makes it awkward for REST-based calls, because it
 * would expect a byte array as part of the url. So, the bech32 encoded address
 * string is used for this request instead.
 */
export interface InflationRateRequest {
    validator: string;
}
export interface InflationRateResponse {
    inflationRate: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
export interface ParamsResponse {
    params?: Params;
}
export declare const InflationRateRequest: {
    encode(message: InflationRateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InflationRateRequest;
    fromJSON(object: any): InflationRateRequest;
    toJSON(message: InflationRateRequest): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
    } & {
        validator?: string | undefined;
    } & Record<Exclude<keyof I, "validator">, never>>(object: I): InflationRateRequest;
};
export declare const InflationRateResponse: {
    encode(message: InflationRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InflationRateResponse;
    fromJSON(object: any): InflationRateResponse;
    toJSON(message: InflationRateResponse): unknown;
    fromPartial<I extends {
        inflationRate?: Uint8Array | undefined;
    } & {
        inflationRate?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "inflationRate">, never>>(object: I): InflationRateResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            externalChainVotingInflationRate?: Uint8Array | undefined;
            keyMgmtRelativeInflationRate?: Uint8Array | undefined;
        } | undefined;
    } & {
        params?: ({
            externalChainVotingInflationRate?: Uint8Array | undefined;
            keyMgmtRelativeInflationRate?: Uint8Array | undefined;
        } & {
            externalChainVotingInflationRate?: Uint8Array | undefined;
            keyMgmtRelativeInflationRate?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): ParamsResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
