import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.vote.v1beta1";
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVote {
    $type: "axelar.vote.v1beta1.TalliedVote";
    tally: Buffer;
    /**
     * DEPRECATED: Removed in v0.20, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    votersDeprecated: Buffer[];
    data?: Any | undefined;
    pollId: Long;
    isVoterLate: {
        [key: string]: boolean;
    };
}
export interface TalliedVote_IsVoterLateEntry {
    $type: "axelar.vote.v1beta1.TalliedVote.IsVoterLateEntry";
    key: string;
    value: boolean;
}
export declare const TalliedVote: {
    $type: "axelar.vote.v1beta1.TalliedVote";
    encode(message: TalliedVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TalliedVote;
    fromJSON(object: any): TalliedVote;
    toJSON(message: TalliedVote): unknown;
    create<I extends Exact<DeepPartial<TalliedVote>, I>>(base?: I): TalliedVote;
    fromPartial<I extends Exact<DeepPartial<TalliedVote>, I>>(object: I): TalliedVote;
};
export declare const TalliedVote_IsVoterLateEntry: {
    $type: "axelar.vote.v1beta1.TalliedVote.IsVoterLateEntry";
    encode(message: TalliedVote_IsVoterLateEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TalliedVote_IsVoterLateEntry;
    fromJSON(object: any): TalliedVote_IsVoterLateEntry;
    toJSON(message: TalliedVote_IsVoterLateEntry): unknown;
    create<I extends Exact<DeepPartial<TalliedVote_IsVoterLateEntry>, I>>(base?: I): TalliedVote_IsVoterLateEntry;
    fromPartial<I extends Exact<DeepPartial<TalliedVote_IsVoterLateEntry>, I>>(object: I): TalliedVote_IsVoterLateEntry;
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
