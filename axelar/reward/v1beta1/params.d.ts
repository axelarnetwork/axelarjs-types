/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.reward.v1beta1";
/** Params represent the genesis parameters for the module */
export interface Params {
    externalChainVotingInflationRate: Buffer;
    keyMgmtRelativeInflationRate: Buffer;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create<I extends {
        externalChainVotingInflationRate?: Buffer | undefined;
        keyMgmtRelativeInflationRate?: Buffer | undefined;
    } & {
        externalChainVotingInflationRate?: Buffer | undefined;
        keyMgmtRelativeInflationRate?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof Params>]: never; }>(base?: I | undefined): Params;
    fromPartial<I_1 extends {
        externalChainVotingInflationRate?: Buffer | undefined;
        keyMgmtRelativeInflationRate?: Buffer | undefined;
    } & {
        externalChainVotingInflationRate?: Buffer | undefined;
        keyMgmtRelativeInflationRate?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Params>]: never; }>(object: I_1): Params;
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
