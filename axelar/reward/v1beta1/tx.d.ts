import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./params";
export declare const protobufPackage = "axelar.reward.v1beta1";
export interface RefundMsgRequest {
    $type: "axelar.reward.v1beta1.RefundMsgRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
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
    decode(input: _m0.Reader | Uint8Array, length?: number): RefundMsgRequest;
    fromJSON(object: any): RefundMsgRequest;
    toJSON(message: RefundMsgRequest): unknown;
    create<I extends Exact<DeepPartial<RefundMsgRequest>, I>>(base?: I): RefundMsgRequest;
    fromPartial<I extends Exact<DeepPartial<RefundMsgRequest>, I>>(object: I): RefundMsgRequest;
};
export declare const RefundMsgResponse: {
    $type: "axelar.reward.v1beta1.RefundMsgResponse";
    encode(message: RefundMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefundMsgResponse;
    fromJSON(object: any): RefundMsgResponse;
    toJSON(message: RefundMsgResponse): unknown;
    create<I extends Exact<DeepPartial<RefundMsgResponse>, I>>(base?: I): RefundMsgResponse;
    fromPartial<I extends Exact<DeepPartial<RefundMsgResponse>, I>>(object: I): RefundMsgResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.reward.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(base?: I): UpdateParamsRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.reward.v1beta1.UpdateParamsResponse";
    encode(_: UpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsResponse;
    fromJSON(_: any): UpdateParamsResponse;
    toJSON(_: UpdateParamsResponse): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsResponse>, I>>(base?: I): UpdateParamsResponse;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsResponse>, I>>(_: I): UpdateParamsResponse;
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
