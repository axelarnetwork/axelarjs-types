import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Snapshot } from "../../../snapshot/exported/v1beta1/types";
import { Threshold } from "../../../utils/v1beta1/threshold";
export declare const protobufPackage = "axelar.vote.exported.v1beta1";
export declare enum PollState {
    POLL_STATE_UNSPECIFIED = 0,
    POLL_STATE_PENDING = 1,
    POLL_STATE_COMPLETED = 2,
    POLL_STATE_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function pollStateFromJSON(object: any): PollState;
export declare function pollStateToJSON(object: PollState): string;
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadata {
    $type: "axelar.vote.exported.v1beta1.PollMetadata";
    expiresAt: Long;
    result?: Any | undefined;
    votingThreshold?: Threshold | undefined;
    state: PollState;
    minVoterCount: Long;
    rewardPoolName: string;
    gracePeriod: Long;
    completedAt: Long;
    id: Long;
    snapshot?: Snapshot | undefined;
    module: string;
    moduleMetadata?: Any | undefined;
}
/**
 * PollKey represents the key data for a poll
 *
 * @deprecated
 */
export interface PollKey {
    $type: "axelar.vote.exported.v1beta1.PollKey";
    module: string;
    id: string;
}
/**
 * Vote represents a vote result - kept for backward compatibility
 *
 * @deprecated
 */
export interface Vote {
    $type: "axelar.vote.exported.v1beta1.Vote";
    /**
     * DEPRECATED: Removed in v0.18, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    resultsDeprecated: Any[];
    result?: Any | undefined;
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipants {
    $type: "axelar.vote.exported.v1beta1.PollParticipants";
    pollId: Long;
    participants: Buffer[];
}
export declare const PollMetadata: {
    $type: "axelar.vote.exported.v1beta1.PollMetadata";
    encode(message: PollMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollMetadata;
    fromJSON(object: any): PollMetadata;
    toJSON(message: PollMetadata): unknown;
    create<I extends Exact<DeepPartial<PollMetadata>, I>>(base?: I): PollMetadata;
    fromPartial<I extends Exact<DeepPartial<PollMetadata>, I>>(object: I): PollMetadata;
};
export declare const PollKey: {
    $type: "axelar.vote.exported.v1beta1.PollKey";
    encode(message: PollKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollKey;
    fromJSON(object: any): PollKey;
    toJSON(message: PollKey): unknown;
    create<I extends Exact<DeepPartial<PollKey>, I>>(base?: I): PollKey;
    fromPartial<I extends Exact<DeepPartial<PollKey>, I>>(object: I): PollKey;
};
export declare const Vote: {
    $type: "axelar.vote.exported.v1beta1.Vote";
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    create<I extends Exact<DeepPartial<Vote>, I>>(base?: I): Vote;
    fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote;
};
export declare const PollParticipants: {
    $type: "axelar.vote.exported.v1beta1.PollParticipants";
    encode(message: PollParticipants, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollParticipants;
    fromJSON(object: any): PollParticipants;
    toJSON(message: PollParticipants): unknown;
    create<I extends Exact<DeepPartial<PollParticipants>, I>>(base?: I): PollParticipants;
    fromPartial<I extends Exact<DeepPartial<PollParticipants>, I>>(object: I): PollParticipants;
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
