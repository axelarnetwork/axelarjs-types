import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.vote.v1beta1";
export interface Voted {
    module: string;
    action: string;
    poll: string;
    voter: string;
    state: string;
}
export declare const Voted: {
    encode(message: Voted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Voted;
    fromJSON(object: any): Voted;
    toJSON(message: Voted): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        action?: string | undefined;
        poll?: string | undefined;
        voter?: string | undefined;
        state?: string | undefined;
    } & {
        module?: string | undefined;
        action?: string | undefined;
        poll?: string | undefined;
        voter?: string | undefined;
        state?: string | undefined;
    } & Record<Exclude<keyof I, keyof Voted>, never>>(object: I): Voted;
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
