/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/**
 * CallContractsProposal is a gov Content type for calling contracts on other
 * chains
 */
export interface CallContractsProposal {
    title: string;
    description: string;
    contractCalls: ContractCall[];
}
export interface ContractCall {
    chain: string;
    contractAddress: string;
    payload: Buffer;
}
export declare const CallContractsProposal: {
    encode(message: CallContractsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CallContractsProposal;
    fromJSON(object: any): CallContractsProposal;
    toJSON(message: CallContractsProposal): unknown;
    create<I extends {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: {
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: ({
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        }[] & ({
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        } & {
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        } & { [K in Exclude<keyof I["contractCalls"][number], keyof ContractCall>]: never; })[] & { [K_1 in Exclude<keyof I["contractCalls"], keyof {
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof CallContractsProposal>]: never; }>(base?: I | undefined): CallContractsProposal;
    fromPartial<I_1 extends {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: {
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: ({
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        }[] & ({
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        } & {
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I_1["contractCalls"][number], keyof ContractCall>]: never; })[] & { [K_4 in Exclude<keyof I_1["contractCalls"], keyof {
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof CallContractsProposal>]: never; }>(object: I_1): CallContractsProposal;
};
export declare const ContractCall: {
    encode(message: ContractCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractCall;
    fromJSON(object: any): ContractCall;
    toJSON(message: ContractCall): unknown;
    create<I extends {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
    } & {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof ContractCall>]: never; }>(base?: I | undefined): ContractCall;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
    } & {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ContractCall>]: never; }>(object: I_1): ContractCall;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
