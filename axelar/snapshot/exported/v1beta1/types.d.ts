import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
export declare const protobufPackage = "axelar.snapshot.exported.v1beta1";
export interface Participant {
    $type: "axelar.snapshot.exported.v1beta1.Participant";
    address: Buffer;
    weight: Buffer;
}
export interface Snapshot {
    $type: "axelar.snapshot.exported.v1beta1.Snapshot";
    timestamp?: Timestamp | undefined;
    height: Long;
    participants: {
        [key: string]: Participant;
    };
    bondedWeight: Buffer;
}
export interface Snapshot_ParticipantsEntry {
    $type: "axelar.snapshot.exported.v1beta1.Snapshot.ParticipantsEntry";
    key: string;
    value?: Participant | undefined;
}
export declare const Participant: {
    $type: "axelar.snapshot.exported.v1beta1.Participant";
    encode(message: Participant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Participant;
    fromJSON(object: any): Participant;
    toJSON(message: Participant): unknown;
    create<I extends Exact<DeepPartial<Participant>, I>>(base?: I): Participant;
    fromPartial<I extends Exact<DeepPartial<Participant>, I>>(object: I): Participant;
};
export declare const Snapshot: {
    $type: "axelar.snapshot.exported.v1beta1.Snapshot";
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    create<I extends Exact<DeepPartial<Snapshot>, I>>(base?: I): Snapshot;
    fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot;
};
export declare const Snapshot_ParticipantsEntry: {
    $type: "axelar.snapshot.exported.v1beta1.Snapshot.ParticipantsEntry";
    encode(message: Snapshot_ParticipantsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot_ParticipantsEntry;
    fromJSON(object: any): Snapshot_ParticipantsEntry;
    toJSON(message: Snapshot_ParticipantsEntry): unknown;
    create<I extends Exact<DeepPartial<Snapshot_ParticipantsEntry>, I>>(base?: I): Snapshot_ParticipantsEntry;
    fromPartial<I extends Exact<DeepPartial<Snapshot_ParticipantsEntry>, I>>(object: I): Snapshot_ParticipantsEntry;
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
