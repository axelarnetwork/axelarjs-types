/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.utils.v1beta1";
export interface QueueState {
    $type: "axelar.utils.v1beta1.QueueState";
    items: {
        [key: string]: QueueState_Item;
    };
}
export interface QueueState_Item {
    $type: "axelar.utils.v1beta1.QueueState.Item";
    key: Buffer;
    value: Buffer;
}
export interface QueueState_ItemsEntry {
    $type: "axelar.utils.v1beta1.QueueState.ItemsEntry";
    key: string;
    value?: QueueState_Item | undefined;
}
export declare const QueueState: {
    $type: "axelar.utils.v1beta1.QueueState";
    encode(message: QueueState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueueState;
    fromJSON(object: any): QueueState;
    toJSON(message: QueueState): unknown;
    create<I extends {
        items?: {
            [x: string]: {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } | undefined;
            [x: number]: {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } | undefined;
        } | undefined;
    } & {
        items?: ({
            [x: string]: {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } | undefined;
            [x: number]: {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } & {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } & { [K in Exclude<keyof I["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
            [x: number]: ({
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } & {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } & { [K_1 in Exclude<keyof I["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["items"], string | number>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "items">]: never; }>(base?: I | undefined): QueueState;
    fromPartial<I_1 extends {
        items?: {
            [x: string]: {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } | undefined;
            [x: number]: {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } | undefined;
        } | undefined;
    } & {
        items?: ({
            [x: string]: {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } | undefined;
            [x: number]: {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } & {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } & { [K_4 in Exclude<keyof I_1["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
            [x: number]: ({
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } & {
                value?: Buffer | undefined;
                key?: Buffer | undefined;
            } & { [K_5 in Exclude<keyof I_1["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["items"], string | number>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "items">]: never; }>(object: I_1): QueueState;
};
export declare const QueueState_Item: {
    $type: "axelar.utils.v1beta1.QueueState.Item";
    encode(message: QueueState_Item, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueueState_Item;
    fromJSON(object: any): QueueState_Item;
    toJSON(message: QueueState_Item): unknown;
    create<I extends {
        value?: Buffer | undefined;
        key?: Buffer | undefined;
    } & {
        value?: Buffer | undefined;
        key?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "value" | "key">]: never; }>(base?: I | undefined): QueueState_Item;
    fromPartial<I_1 extends {
        value?: Buffer | undefined;
        key?: Buffer | undefined;
    } & {
        value?: Buffer | undefined;
        key?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "value" | "key">]: never; }>(object: I_1): QueueState_Item;
};
export declare const QueueState_ItemsEntry: {
    $type: "axelar.utils.v1beta1.QueueState.ItemsEntry";
    encode(message: QueueState_ItemsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueueState_ItemsEntry;
    fromJSON(object: any): QueueState_ItemsEntry;
    toJSON(message: QueueState_ItemsEntry): unknown;
    create<I extends {
        value?: {
            value?: Buffer | undefined;
            key?: Buffer | undefined;
        } | undefined;
        key?: string | undefined;
    } & {
        value?: ({
            value?: Buffer | undefined;
            key?: Buffer | undefined;
        } & {
            value?: Buffer | undefined;
            key?: Buffer | undefined;
        } & { [K in Exclude<keyof I["value"], "$type" | "value" | "key">]: never; }) | undefined;
        key?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "value" | "key">]: never; }>(base?: I | undefined): QueueState_ItemsEntry;
    fromPartial<I_1 extends {
        value?: {
            value?: Buffer | undefined;
            key?: Buffer | undefined;
        } | undefined;
        key?: string | undefined;
    } & {
        value?: ({
            value?: Buffer | undefined;
            key?: Buffer | undefined;
        } & {
            value?: Buffer | undefined;
            key?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["value"], "$type" | "value" | "key">]: never; }) | undefined;
        key?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "value" | "key">]: never; }>(object: I_1): QueueState_ItemsEntry;
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
