/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.reward.v1beta1";
export interface RefundMsgRequest {
    innerMessage?: Any | undefined;
    sender: string;
}
export interface RefundMsgResponse {
    data: Buffer;
    log: string;
}
export declare const RefundMsgRequest: {
    encode(message: RefundMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RefundMsgRequest;
    fromJSON(object: any): RefundMsgRequest;
    toJSON(message: RefundMsgRequest): unknown;
    create<I extends {
        innerMessage?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        innerMessage?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K in Exclude<keyof I["innerMessage"], keyof Any>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof RefundMsgRequest>]: never; }>(base?: I | undefined): RefundMsgRequest;
    fromPartial<I_1 extends {
        innerMessage?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        innerMessage?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["innerMessage"], keyof Any>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof RefundMsgRequest>]: never; }>(object: I_1): RefundMsgRequest;
};
export declare const RefundMsgResponse: {
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
    } & { [K in Exclude<keyof I, keyof RefundMsgResponse>]: never; }>(base?: I | undefined): RefundMsgResponse;
    fromPartial<I_1 extends {
        data?: Buffer | undefined;
        log?: string | undefined;
    } & {
        data?: Buffer | undefined;
        log?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RefundMsgResponse>]: never; }>(object: I_1): RefundMsgResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
