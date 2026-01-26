import Long from "long";
import _m0 from "protobufjs/minimal";
import { Role } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.permission.v1beta1";
export interface GovAccount {
    $type: "axelar.permission.v1beta1.GovAccount";
    address: Buffer;
    role: Role;
}
export declare const GovAccount: {
    $type: "axelar.permission.v1beta1.GovAccount";
    encode(message: GovAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GovAccount;
    fromJSON(object: any): GovAccount;
    toJSON(message: GovAccount): unknown;
    create<I extends Exact<DeepPartial<GovAccount>, I>>(base?: I): GovAccount;
    fromPartial<I extends Exact<DeepPartial<GovAccount>, I>>(object: I): GovAccount;
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
