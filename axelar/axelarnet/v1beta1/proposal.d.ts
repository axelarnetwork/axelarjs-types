/// <reference types="node" />
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
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CallContractsProposal;
    fromJSON(object: any): CallContractsProposal;
    toJSON(message: CallContractsProposal): unknown;
    create<I extends {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: {
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: ({
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        }[] & ({
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        } & {
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        } & { [K in Exclude<keyof I["contractCalls"][number], "$type" | "contractAddress" | "payload" | "chain">]: never; })[] & { [K_1 in Exclude<keyof I["contractCalls"], "$type" | keyof {
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "title" | "description" | "contractCalls">]: never; }>(base?: I | undefined): CallContractsProposal;
    fromPartial<I_1 extends {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: {
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: ({
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        }[] & ({
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        } & {
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["contractCalls"][number], "$type" | "contractAddress" | "payload" | "chain">]: never; })[] & { [K_4 in Exclude<keyof I_1["contractCalls"], "$type" | keyof {
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
            chain?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "title" | "description" | "contractCalls">]: never; }>(object: I_1): CallContractsProposal;
};
export declare const ContractCall: {
    $type: "axelar.axelarnet.v1beta1.ContractCall";
    encode(message: ContractCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractCall;
    fromJSON(object: any): ContractCall;
    toJSON(message: ContractCall): unknown;
    create<I extends {
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "contractAddress" | "payload" | "chain">]: never; }>(base?: I | undefined): ContractCall;
    fromPartial<I_1 extends {
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "contractAddress" | "payload" | "chain">]: never; }>(object: I_1): ContractCall;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
