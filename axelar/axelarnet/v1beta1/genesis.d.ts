import Long from "long";
import _m0 from "protobufjs/minimal";
import { QueueState } from "../../utils/v1beta1/queuer";
import { Params } from "./params";
import { CosmosChain, IBCTransfer } from "./types";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
export interface GenesisState {
    $type: "axelar.axelarnet.v1beta1.GenesisState";
    params?: Params | undefined;
    collectorAddress: Buffer;
    chains: CosmosChain[];
    transferQueue?: QueueState | undefined;
    ibcTransfers: IBCTransfer[];
    seqIdMapping: {
        [key: string]: Long;
    };
}
export interface GenesisState_SeqIdMappingEntry {
    $type: "axelar.axelarnet.v1beta1.GenesisState.SeqIdMappingEntry";
    key: string;
    value: Long;
}
export declare const GenesisState: {
    $type: "axelar.axelarnet.v1beta1.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const GenesisState_SeqIdMappingEntry: {
    $type: "axelar.axelarnet.v1beta1.GenesisState.SeqIdMappingEntry";
    encode(message: GenesisState_SeqIdMappingEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_SeqIdMappingEntry;
    fromJSON(object: any): GenesisState_SeqIdMappingEntry;
    toJSON(message: GenesisState_SeqIdMappingEntry): unknown;
    create<I extends Exact<DeepPartial<GenesisState_SeqIdMappingEntry>, I>>(base?: I): GenesisState_SeqIdMappingEntry;
    fromPartial<I extends Exact<DeepPartial<GenesisState_SeqIdMappingEntry>, I>>(object: I): GenesisState_SeqIdMappingEntry;
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
