/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "axelar.reward.v1beta1";
export interface Pool {
    name: string;
    rewards: Pool_Reward[];
}
export interface Pool_Reward {
    validator: Buffer;
    coins: Coin[];
}
export interface Refund {
    payer: Buffer;
    fees: Coin[];
}
export declare const Pool: {
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
            } & { [K in Exclude<keyof I["rewards"][number]["coins"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["rewards"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["rewards"][number], keyof Pool_Reward>]: never; })[] & { [K_3 in Exclude<keyof I["rewards"], keyof {
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Pool>]: never; }>(base?: I | undefined): Pool;
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
            } & { [K_5 in Exclude<keyof I_1["rewards"][number]["coins"][number], keyof Coin>]: never; })[] & { [K_6 in Exclude<keyof I_1["rewards"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["rewards"][number], keyof Pool_Reward>]: never; })[] & { [K_8 in Exclude<keyof I_1["rewards"], keyof {
            validator?: Buffer | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Pool>]: never; }>(object: I_1): Pool;
};
export declare const Pool_Reward: {
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
        } & { [K in Exclude<keyof I["coins"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Pool_Reward>]: never; }>(base?: I | undefined): Pool_Reward;
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
        } & { [K_3 in Exclude<keyof I_1["coins"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Pool_Reward>]: never; }>(object: I_1): Pool_Reward;
};
export declare const Refund: {
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
        } & { [K in Exclude<keyof I["fees"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["fees"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Refund>]: never; }>(base?: I | undefined): Refund;
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
        } & { [K_3 in Exclude<keyof I_1["fees"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["fees"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Refund>]: never; }>(object: I_1): Refund;
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
