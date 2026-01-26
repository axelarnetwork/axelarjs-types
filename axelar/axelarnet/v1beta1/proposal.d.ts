import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/**
 * CallContractsProposal is a gov Content type for calling contracts on other
 * chains
 */
export interface CallContractsProposal {
    $type: "axelar.axelarnet.v1beta1.CallContractsProposal";
    title: string;
    description: string;
    contractCalls: ContractCall[];
}
export interface ContractCall {
    $type: "axelar.axelarnet.v1beta1.ContractCall";
    chain: string;
    contractAddress: string;
    payload: Buffer;
}
export declare const CallContractsProposal: {
    $type: "axelar.axelarnet.v1beta1.CallContractsProposal";
    encode(message: CallContractsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallContractsProposal;
    fromJSON(object: any): CallContractsProposal;
    toJSON(message: CallContractsProposal): unknown;
    create<I extends Exact<DeepPartial<CallContractsProposal>, I>>(base?: I): CallContractsProposal;
    fromPartial<I extends Exact<DeepPartial<CallContractsProposal>, I>>(object: I): CallContractsProposal;
};
export declare const ContractCall: {
    $type: "axelar.axelarnet.v1beta1.ContractCall";
    encode(message: ContractCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCall;
    fromJSON(object: any): ContractCall;
    toJSON(message: ContractCall): unknown;
    create<I extends Exact<DeepPartial<ContractCall>, I>>(base?: I): ContractCall;
    fromPartial<I extends Exact<DeepPartial<ContractCall>, I>>(object: I): ContractCall;
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
