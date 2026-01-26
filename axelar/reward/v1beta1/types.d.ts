import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "axelar.reward.v1beta1";
export interface Pool {
    $type: "axelar.reward.v1beta1.Pool";
    name: string;
    rewards: Pool_Reward[];
}
export interface Pool_Reward {
    $type: "axelar.reward.v1beta1.Pool.Reward";
    validator: Buffer;
    coins: Coin[];
}
export interface Refund {
    $type: "axelar.reward.v1beta1.Refund";
    payer: Buffer;
    fees: Coin[];
}
export declare const Pool: {
    $type: "axelar.reward.v1beta1.Pool";
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    create<I extends Exact<DeepPartial<Pool>, I>>(base?: I): Pool;
    fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool;
};
export declare const Pool_Reward: {
    $type: "axelar.reward.v1beta1.Pool.Reward";
    encode(message: Pool_Reward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool_Reward;
    fromJSON(object: any): Pool_Reward;
    toJSON(message: Pool_Reward): unknown;
    create<I extends Exact<DeepPartial<Pool_Reward>, I>>(base?: I): Pool_Reward;
    fromPartial<I extends Exact<DeepPartial<Pool_Reward>, I>>(object: I): Pool_Reward;
};
export declare const Refund: {
    $type: "axelar.reward.v1beta1.Refund";
    encode(message: Refund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Refund;
    fromJSON(object: any): Refund;
    toJSON(message: Refund): unknown;
    create<I extends Exact<DeepPartial<Refund>, I>>(base?: I): Refund;
    fromPartial<I extends Exact<DeepPartial<Refund>, I>>(object: I): Refund;
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
