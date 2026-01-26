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
    decode(input: _m0.Reader | Uint8Array, length?: number): QueueState;
    fromJSON(object: any): QueueState;
    toJSON(message: QueueState): unknown;
    create<I extends Exact<DeepPartial<QueueState>, I>>(base?: I): QueueState;
    fromPartial<I extends Exact<DeepPartial<QueueState>, I>>(object: I): QueueState;
};
export declare const QueueState_Item: {
    $type: "axelar.utils.v1beta1.QueueState.Item";
    encode(message: QueueState_Item, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueueState_Item;
    fromJSON(object: any): QueueState_Item;
    toJSON(message: QueueState_Item): unknown;
    create<I extends Exact<DeepPartial<QueueState_Item>, I>>(base?: I): QueueState_Item;
    fromPartial<I extends Exact<DeepPartial<QueueState_Item>, I>>(object: I): QueueState_Item;
};
export declare const QueueState_ItemsEntry: {
    $type: "axelar.utils.v1beta1.QueueState.ItemsEntry";
    encode(message: QueueState_ItemsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueueState_ItemsEntry;
    fromJSON(object: any): QueueState_ItemsEntry;
    toJSON(message: QueueState_ItemsEntry): unknown;
    create<I extends Exact<DeepPartial<QueueState_ItemsEntry>, I>>(base?: I): QueueState_ItemsEntry;
    fromPartial<I extends Exact<DeepPartial<QueueState_ItemsEntry>, I>>(object: I): QueueState_ItemsEntry;
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
