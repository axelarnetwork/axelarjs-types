/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.utils.v1beta1";
export interface QueueState {
    items: {
        [key: string]: QueueState_Item;
    };
}
export interface QueueState_Item {
    key: Buffer;
    value: Buffer;
}
export interface QueueState_ItemsEntry {
    key: string;
    value?: QueueState_Item | undefined;
}
export declare const QueueState: {
    encode(message: QueueState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueueState;
    fromJSON(object: any): QueueState;
    toJSON(message: QueueState): unknown;
    create<I extends {
        items?: {
            [x: string]: {
                key?: Buffer | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } | undefined;
    } & {
        items?: ({
            [x: string]: {
                key?: Buffer | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                key?: Buffer | undefined;
                value?: Buffer | undefined;
            } & {
                key?: Buffer | undefined;
                value?: Buffer | undefined;
            } & { [K in Exclude<keyof I["items"][string], keyof QueueState_Item>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["items"], string | number>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "items">]: never; }>(base?: I | undefined): QueueState;
    fromPartial<I_1 extends {
        items?: {
            [x: string]: {
                key?: Buffer | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } | undefined;
    } & {
        items?: ({
            [x: string]: {
                key?: Buffer | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                key?: Buffer | undefined;
                value?: Buffer | undefined;
            } & {
                key?: Buffer | undefined;
                value?: Buffer | undefined;
            } & { [K_3 in Exclude<keyof I_1["items"][string], keyof QueueState_Item>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I_1["items"], string | number>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "items">]: never; }>(object: I_1): QueueState;
};
export declare const QueueState_Item: {
    encode(message: QueueState_Item, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueueState_Item;
    fromJSON(object: any): QueueState_Item;
    toJSON(message: QueueState_Item): unknown;
    create<I extends {
        key?: Buffer | undefined;
        value?: Buffer | undefined;
    } & {
        key?: Buffer | undefined;
        value?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof QueueState_Item>]: never; }>(base?: I | undefined): QueueState_Item;
    fromPartial<I_1 extends {
        key?: Buffer | undefined;
        value?: Buffer | undefined;
    } & {
        key?: Buffer | undefined;
        value?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueueState_Item>]: never; }>(object: I_1): QueueState_Item;
};
export declare const QueueState_ItemsEntry: {
    encode(message: QueueState_ItemsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueueState_ItemsEntry;
    fromJSON(object: any): QueueState_ItemsEntry;
    toJSON(message: QueueState_ItemsEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: {
            key?: Buffer | undefined;
            value?: Buffer | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            key?: Buffer | undefined;
            value?: Buffer | undefined;
        } & {
            key?: Buffer | undefined;
            value?: Buffer | undefined;
        } & { [K in Exclude<keyof I["value"], keyof QueueState_Item>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueueState_ItemsEntry>]: never; }>(base?: I | undefined): QueueState_ItemsEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: {
            key?: Buffer | undefined;
            value?: Buffer | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            key?: Buffer | undefined;
            value?: Buffer | undefined;
        } & {
            key?: Buffer | undefined;
            value?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["value"], keyof QueueState_Item>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof QueueState_ItemsEntry>]: never; }>(object: I_1): QueueState_ItemsEntry;
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
