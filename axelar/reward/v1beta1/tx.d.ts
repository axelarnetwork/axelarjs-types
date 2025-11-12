/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./params";
export declare const protobufPackage = "axelar.reward.v1beta1";
export interface RefundMsgRequest {
    $type: "axelar.reward.v1beta1.RefundMsgRequest";
    innerMessage?: Any | undefined;
    sender: string;
}
export interface RefundMsgResponse {
    $type: "axelar.reward.v1beta1.RefundMsgResponse";
    data: Buffer;
    log: string;
}
export interface UpdateParamsRequest {
    $type: "axelar.reward.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.reward.v1beta1.UpdateParamsResponse";
}
export declare const RefundMsgRequest: {
    $type: "axelar.reward.v1beta1.RefundMsgRequest";
    encode(message: RefundMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RefundMsgRequest;
    fromJSON(object: any): RefundMsgRequest;
    toJSON(message: RefundMsgRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        innerMessage?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        innerMessage?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K in Exclude<keyof I["innerMessage"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "sender" | "innerMessage">]: never; }>(base?: I | undefined): RefundMsgRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        innerMessage?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        innerMessage?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["innerMessage"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "sender" | "innerMessage">]: never; }>(object: I_1): RefundMsgRequest;
};
export declare const RefundMsgResponse: {
    $type: "axelar.reward.v1beta1.RefundMsgResponse";
    encode(message: RefundMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RefundMsgResponse;
    fromJSON(object: any): RefundMsgResponse;
    toJSON(message: RefundMsgResponse): unknown;
    create<I extends {
        data?: Buffer | undefined;
        log?: string | undefined;
    } & {
        data?: Buffer | undefined;
        log?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "data" | "log">]: never; }>(base?: I | undefined): RefundMsgResponse;
    fromPartial<I_1 extends {
        data?: Buffer | undefined;
        log?: string | undefined;
    } & {
        data?: Buffer | undefined;
        log?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "data" | "log">]: never; }>(object: I_1): RefundMsgResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.reward.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends {
        params?: {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        params?: ({
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & { [K in Exclude<keyof I["params"], "$type" | "externalChainVotingInflationRate" | "keyMgmtRelativeInflationRate">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "params" | "authority">]: never; }>(base?: I | undefined): UpdateParamsRequest;
    fromPartial<I_1 extends {
        params?: {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        params?: ({
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["params"], "$type" | "externalChainVotingInflationRate" | "keyMgmtRelativeInflationRate">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "params" | "authority">]: never; }>(object: I_1): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.reward.v1beta1.UpdateParamsResponse";
    encode(_: UpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsResponse;
    fromJSON(_: any): UpdateParamsResponse;
    toJSON(_: UpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): UpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): UpdateParamsResponse;
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
