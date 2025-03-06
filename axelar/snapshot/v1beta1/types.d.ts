import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
export interface ProxiedValidator {
    validator: Uint8Array;
    proxy: Uint8Array;
    active: boolean;
}
export declare const ProxiedValidator: {
    encode(message: ProxiedValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProxiedValidator;
    fromJSON(object: any): ProxiedValidator;
    toJSON(message: ProxiedValidator): unknown;
    fromPartial<I extends {
        validator?: Uint8Array | undefined;
        proxy?: Uint8Array | undefined;
        active?: boolean | undefined;
    } & {
        validator?: Uint8Array | undefined;
        proxy?: Uint8Array | undefined;
        active?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof ProxiedValidator>, never>>(object: I): ProxiedValidator;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
