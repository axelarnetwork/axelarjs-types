import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.vote.v1beta1";
export interface Voted {
    $type: "axelar.vote.v1beta1.Voted";
    module: string;
    action: string;
    poll: string;
    voter: string;
    state: string;
}
export declare const Voted: {
    $type: "axelar.vote.v1beta1.Voted";
    encode(message: Voted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Voted;
    fromJSON(object: any): Voted;
    toJSON(message: Voted): unknown;
    create<I extends {
        module?: string | undefined;
        state?: string | undefined;
        action?: string | undefined;
        poll?: string | undefined;
        voter?: string | undefined;
    } & {
        module?: string | undefined;
        state?: string | undefined;
        action?: string | undefined;
        poll?: string | undefined;
        voter?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "module" | "state" | "action" | "poll" | "voter">]: never; }>(base?: I | undefined): Voted;
    fromPartial<I_1 extends {
        module?: string | undefined;
        state?: string | undefined;
        action?: string | undefined;
        poll?: string | undefined;
        voter?: string | undefined;
    } & {
        module?: string | undefined;
        state?: string | undefined;
        action?: string | undefined;
        poll?: string | undefined;
        voter?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "module" | "state" | "action" | "poll" | "voter">]: never; }>(object: I_1): Voted;
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
