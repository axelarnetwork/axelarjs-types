/// <reference types="node" />
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
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InflationRateRequest;
    fromJSON(object: any): InflationRateRequest;
    toJSON(message: InflationRateRequest): unknown;
    create<I extends {
        validator?: string | undefined;
    } & {
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "validator">]: never; }>(base?: I | undefined): InflationRateRequest;
    fromPartial<I_1 extends {
        validator?: string | undefined;
    } & {
        validator?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "validator">]: never; }>(object: I_1): InflationRateRequest;
};
export declare const InflationRateResponse: {
    $type: "axelar.reward.v1beta1.InflationRateResponse";
    encode(message: InflationRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InflationRateResponse;
    fromJSON(object: any): InflationRateResponse;
    toJSON(message: InflationRateResponse): unknown;
    create<I extends {
        inflationRate?: Buffer | undefined;
    } & {
        inflationRate?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "inflationRate">]: never; }>(base?: I | undefined): InflationRateResponse;
    fromPartial<I_1 extends {
        inflationRate?: Buffer | undefined;
    } & {
        inflationRate?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "inflationRate">]: never; }>(object: I_1): InflationRateResponse;
};
export declare const ParamsRequest: {
    $type: "axelar.reward.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.reward.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends {
        params?: {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } | undefined;
    } & {
        params?: ({
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & { [K in Exclude<keyof I["params"], "$type" | "externalChainVotingInflationRate" | "keyMgmtRelativeInflationRate">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "params">]: never; }>(base?: I | undefined): ParamsResponse;
    fromPartial<I_1 extends {
        params?: {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } | undefined;
    } & {
        params?: ({
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["params"], "$type" | "externalChainVotingInflationRate" | "keyMgmtRelativeInflationRate">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "params">]: never; }>(object: I_1): ParamsResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
