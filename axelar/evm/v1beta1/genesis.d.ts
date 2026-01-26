import Long from "long";
import _m0 from "protobufjs/minimal";
import { QueueState } from "../../utils/v1beta1/queuer";
import { Params } from "./params";
import { BurnerInfo, CommandBatchMetadata, ERC20Deposit, ERC20TokenMetadata, Event, Gateway } from "./types";
export declare const protobufPackage = "axelar.evm.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    $type: "axelar.evm.v1beta1.GenesisState";
    chains: GenesisState_Chain[];
}
export interface GenesisState_Chain {
    $type: "axelar.evm.v1beta1.GenesisState.Chain";
    params?: Params | undefined;
    burnerInfos: BurnerInfo[];
    commandQueue?: QueueState | undefined;
    confirmedDeposits: ERC20Deposit[];
    burnedDeposits: ERC20Deposit[];
    commandBatches: CommandBatchMetadata[];
    gateway?: Gateway | undefined;
    tokens: ERC20TokenMetadata[];
    events: Event[];
    confirmedEventQueue?: QueueState | undefined;
    legacyConfirmedDeposits: ERC20Deposit[];
    legacyBurnedDeposits: ERC20Deposit[];
}
export declare const GenesisState: {
    $type: "axelar.evm.v1beta1.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const GenesisState_Chain: {
    $type: "axelar.evm.v1beta1.GenesisState.Chain";
    encode(message: GenesisState_Chain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_Chain;
    fromJSON(object: any): GenesisState_Chain;
    toJSON(message: GenesisState_Chain): unknown;
    create<I extends Exact<DeepPartial<GenesisState_Chain>, I>>(base?: I): GenesisState_Chain;
    fromPartial<I extends Exact<DeepPartial<GenesisState_Chain>, I>>(object: I): GenesisState_Chain;
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
