import Long from "long";
import _m0 from "protobufjs/minimal";
import { Chain, CrossChainTransfer, FeeInfo, GeneralMessage, TransferFee } from "../exported/v1beta1/types";
import { Params } from "./params";
import { ChainState, LinkedAddresses, RateLimit, TransferEpoch } from "./types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    $type: "axelar.nexus.v1beta1.GenesisState";
    params?: Params | undefined;
    nonce: Long;
    chains: Chain[];
    chainStates: ChainState[];
    linkedAddresses: LinkedAddresses[];
    transfers: CrossChainTransfer[];
    fee?: TransferFee | undefined;
    feeInfos: FeeInfo[];
    rateLimits: RateLimit[];
    transferEpochs: TransferEpoch[];
    messages: GeneralMessage[];
    messageNonce: Long;
}
export declare const GenesisState: {
    $type: "axelar.nexus.v1beta1.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
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
