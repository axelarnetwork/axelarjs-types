import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.reward.v1beta1";
export interface RefundMsgRequest {
    sender: Uint8Array;
    innerMessage?: Any;
}
export interface RefundMsgResponse {
    data: Uint8Array;
    log: string;
}
export declare const RefundMsgRequest: {
    encode(message: RefundMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RefundMsgRequest;
    fromJSON(object: any): RefundMsgRequest;
    toJSON(message: RefundMsgRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        innerMessage?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        sender?: Uint8Array | undefined;
        innerMessage?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["innerMessage"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RefundMsgRequest>, never>>(object: I): RefundMsgRequest;
};
export declare const RefundMsgResponse: {
    encode(message: RefundMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RefundMsgResponse;
    fromJSON(object: any): RefundMsgResponse;
    toJSON(message: RefundMsgResponse): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
        log?: string | undefined;
    } & {
        data?: Uint8Array | undefined;
        log?: string | undefined;
    } & Record<Exclude<keyof I, keyof RefundMsgResponse>, never>>(object: I): RefundMsgResponse;
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
