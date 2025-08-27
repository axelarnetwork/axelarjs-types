/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Role } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.permission.v1beta1";
export interface GovAccount {
    address: Buffer;
    role: Role;
}
export declare const GovAccount: {
    encode(message: GovAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GovAccount;
    fromJSON(object: any): GovAccount;
    toJSON(message: GovAccount): unknown;
    create<I extends {
        address?: Buffer | undefined;
        role?: Role | undefined;
    } & {
        address?: Buffer | undefined;
        role?: Role | undefined;
    } & { [K in Exclude<keyof I, keyof GovAccount>]: never; }>(base?: I | undefined): GovAccount;
    fromPartial<I_1 extends {
        address?: Buffer | undefined;
        role?: Role | undefined;
    } & {
        address?: Buffer | undefined;
        role?: Role | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GovAccount>]: never; }>(object: I_1): GovAccount;
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
