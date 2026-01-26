import Long from "long";
import _m0 from "protobufjs/minimal";
import { Chain } from "../../nexus/exported/v1beta1/types";
import { Threshold } from "../../utils/v1beta1/threshold";
import { NetworkInfo } from "./types";
export declare const protobufPackage = "axelar.evm.v1beta1";
/** Params is the parameter set for this module */
export interface Params {
    $type: "axelar.evm.v1beta1.Params";
    chain: string;
    confirmationHeight: Long;
    network: string;
    tokenCode: Buffer;
    burnable: Buffer;
    revoteLockingPeriod: Long;
    networks: NetworkInfo[];
    votingThreshold?: Threshold | undefined;
    minVoterCount: Long;
    commandsGasLimit: number;
    votingGracePeriod: Long;
    endBlockerLimit: Long;
    transferLimit: Long;
}
export interface PendingChain {
    $type: "axelar.evm.v1beta1.PendingChain";
    params?: Params | undefined;
    chain?: Chain | undefined;
}
export declare const Params: {
    $type: "axelar.evm.v1beta1.Params";
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
export declare const PendingChain: {
    $type: "axelar.evm.v1beta1.PendingChain";
    encode(message: PendingChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingChain;
    fromJSON(object: any): PendingChain;
    toJSON(message: PendingChain): unknown;
    create<I extends Exact<DeepPartial<PendingChain>, I>>(base?: I): PendingChain;
    fromPartial<I extends Exact<DeepPartial<PendingChain>, I>>(object: I): PendingChain;
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
