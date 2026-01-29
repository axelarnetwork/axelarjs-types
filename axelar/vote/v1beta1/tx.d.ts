import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { PollKey, Vote } from "../exported/v1beta1/types";
import { Params } from "./params";
export declare const protobufPackage = "axelar.vote.v1beta1";
export interface VoteRequest {
    $type: "axelar.vote.v1beta1.VoteRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    /**
     * DEPRECATED: Removed in v0.21, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    pollKey?: PollKey | undefined;
    /**
     * DEPRECATED: Removed in v0.21, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    voteDeprecated?: Vote | undefined;
    pollId: Long;
    vote?: Any | undefined;
    sender: string;
}
export interface VoteResponse {
    $type: "axelar.vote.v1beta1.VoteResponse";
    log: string;
}
export interface UpdateParamsRequest {
    $type: "axelar.vote.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.vote.v1beta1.UpdateParamsResponse";
}
export declare const VoteRequest: {
    $type: "axelar.vote.v1beta1.VoteRequest";
    encode(message: VoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteRequest;
    fromJSON(object: any): VoteRequest;
    toJSON(message: VoteRequest): unknown;
    create<I extends Exact<DeepPartial<VoteRequest>, I>>(base?: I): VoteRequest;
    fromPartial<I extends Exact<DeepPartial<VoteRequest>, I>>(object: I): VoteRequest;
};
export declare const VoteResponse: {
    $type: "axelar.vote.v1beta1.VoteResponse";
    encode(message: VoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteResponse;
    fromJSON(object: any): VoteResponse;
    toJSON(message: VoteResponse): unknown;
    create<I extends Exact<DeepPartial<VoteResponse>, I>>(base?: I): VoteResponse;
    fromPartial<I extends Exact<DeepPartial<VoteResponse>, I>>(object: I): VoteResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.vote.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(base?: I): UpdateParamsRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.vote.v1beta1.UpdateParamsResponse";
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
