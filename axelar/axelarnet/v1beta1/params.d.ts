import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/** Params represent the genesis parameters for the module */
export interface Params {
    $type: "axelar.axelarnet.v1beta1.Params";
    /** IBC packet route timeout window */
    routeTimeoutWindow: Long;
    transferLimit: Long;
    endBlockerLimit: Long;
    callContractsProposalMinDeposits: CallContractProposalMinDeposit[];
}
export interface CallContractProposalMinDeposit {
    $type: "axelar.axelarnet.v1beta1.CallContractProposalMinDeposit";
    chain: string;
    contractAddress: string;
    minDeposits: Coin[];
}
export declare const Params: {
    $type: "axelar.axelarnet.v1beta1.Params";
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
export declare const CallContractProposalMinDeposit: {
    $type: "axelar.axelarnet.v1beta1.CallContractProposalMinDeposit";
    encode(message: CallContractProposalMinDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallContractProposalMinDeposit;
    fromJSON(object: any): CallContractProposalMinDeposit;
    toJSON(message: CallContractProposalMinDeposit): unknown;
    create<I extends Exact<DeepPartial<CallContractProposalMinDeposit>, I>>(base?: I): CallContractProposalMinDeposit;
    fromPartial<I extends Exact<DeepPartial<CallContractProposalMinDeposit>, I>>(object: I): CallContractProposalMinDeposit;
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
