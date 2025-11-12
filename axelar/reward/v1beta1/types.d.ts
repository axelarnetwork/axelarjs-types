/// <reference types="node" />
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
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    create<I extends {
        name?: string | undefined;
        rewards?: {
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        rewards?: ({
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            validator?: Buffer | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["rewards"][number]["coins"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_1 in Exclude<keyof I["rewards"][number]["coins"], "$type" | keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["rewards"][number], "$type" | "validator" | "coins">]: never; })[] & { [K_3 in Exclude<keyof I["rewards"], "$type" | keyof {
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "$type" | "name" | "rewards">]: never; }>(base?: I | undefined): Pool;
    fromPartial<I_1 extends {
        name?: string | undefined;
        rewards?: {
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        rewards?: ({
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            validator?: Buffer | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_5 in Exclude<keyof I_1["rewards"][number]["coins"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_6 in Exclude<keyof I_1["rewards"][number]["coins"], "$type" | keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["rewards"][number], "$type" | "validator" | "coins">]: never; })[] & { [K_8 in Exclude<keyof I_1["rewards"], "$type" | keyof {
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "$type" | "name" | "rewards">]: never; }>(object: I_1): Pool;
};
export declare const Pool_Reward: {
    $type: "axelar.reward.v1beta1.Pool.Reward";
    encode(message: Pool_Reward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Pool_Reward;
    fromJSON(object: any): Pool_Reward;
    toJSON(message: Pool_Reward): unknown;
    create<I extends {
        validator?: Buffer | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        validator?: Buffer | undefined;
        coins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coins"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_1 in Exclude<keyof I["coins"], "$type" | keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "validator" | "coins">]: never; }>(base?: I | undefined): Pool_Reward;
    fromPartial<I_1 extends {
        validator?: Buffer | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        validator?: Buffer | undefined;
        coins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["coins"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_4 in Exclude<keyof I_1["coins"], "$type" | keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "validator" | "coins">]: never; }>(object: I_1): Pool_Reward;
};
export declare const Refund: {
    $type: "axelar.reward.v1beta1.Refund";
    encode(message: Refund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Refund;
    fromJSON(object: any): Refund;
    toJSON(message: Refund): unknown;
    create<I extends {
        payer?: Buffer | undefined;
        fees?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        payer?: Buffer | undefined;
        fees?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["fees"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_1 in Exclude<keyof I["fees"], "$type" | keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "payer" | "fees">]: never; }>(base?: I | undefined): Refund;
    fromPartial<I_1 extends {
        payer?: Buffer | undefined;
        fees?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        payer?: Buffer | undefined;
        fees?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["fees"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_4 in Exclude<keyof I_1["fees"], "$type" | keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "payer" | "fees">]: never; }>(object: I_1): Refund;
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
