import Long from "long";
import _m0 from "protobufjs/minimal";
import { Threshold } from "../../utils/v1beta1/threshold";
import { KeyRequirement } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.tss.v1beta1";
/** Params is the parameter set for this module */
export interface Params {
    $type: "axelar.tss.v1beta1.Params";
    /** KeyRequirements defines the requirement for each key role */
    keyRequirements: KeyRequirement[];
    /**
     * SuspendDurationInBlocks defines the number of blocks a
     * validator is disallowed to participate in any TSS ceremony after
     * committing a malicious behaviour during signing
     */
    suspendDurationInBlocks: Long;
    /**
     * HeartBeatPeriodInBlocks defines the time period in blocks for tss to
     * emit the event asking validators to send their heartbeats
     */
    heartbeatPeriodInBlocks: Long;
    maxMissedBlocksPerWindow?: Threshold | undefined;
    unbondingLockingKeyRotationCount: Long;
    externalMultisigThreshold?: Threshold | undefined;
    maxSignQueueSize: Long;
    maxSimultaneousSignShares: Long;
    tssSignedBlocksWindow: Long;
}
export declare const Params: {
    $type: "axelar.tss.v1beta1.Params";
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
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
