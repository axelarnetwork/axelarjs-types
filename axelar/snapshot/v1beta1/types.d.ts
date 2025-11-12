/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
export interface ProxiedValidator {
    $type: "axelar.snapshot.v1beta1.ProxiedValidator";
    validator: Buffer;
    proxy: Buffer;
    active: boolean;
}
export declare const ProxiedValidator: {
    $type: "axelar.snapshot.v1beta1.ProxiedValidator";
    encode(message: ProxiedValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProxiedValidator;
    fromJSON(object: any): ProxiedValidator;
    toJSON(message: ProxiedValidator): unknown;
    create<I extends {
        validator?: Buffer | undefined;
        proxy?: Buffer | undefined;
        active?: boolean | undefined;
    } & {
        validator?: Buffer | undefined;
        proxy?: Buffer | undefined;
        active?: boolean | undefined;
    } & { [K in Exclude<keyof I, "$type" | "validator" | "proxy" | "active">]: never; }>(base?: I | undefined): ProxiedValidator;
    fromPartial<I_1 extends {
        validator?: Buffer | undefined;
        proxy?: Buffer | undefined;
        active?: boolean | undefined;
    } & {
        validator?: Buffer | undefined;
        proxy?: Buffer | undefined;
        active?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "validator" | "proxy" | "active">]: never; }>(object: I_1): ProxiedValidator;
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
