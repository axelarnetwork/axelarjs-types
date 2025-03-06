import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/reward/v1beta1/params";
import { Pool } from "../../../axelar/reward/v1beta1/types";
export declare const protobufPackage = "axelar.reward.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params?: Params;
    pools: Pool[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            externalChainVotingInflationRate?: Uint8Array | undefined;
            keyMgmtRelativeInflationRate?: Uint8Array | undefined;
        } | undefined;
        pools?: {
            name?: string | undefined;
            rewards?: {
                validator?: Uint8Array | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        params?: ({
            externalChainVotingInflationRate?: Uint8Array | undefined;
            keyMgmtRelativeInflationRate?: Uint8Array | undefined;
        } & {
            externalChainVotingInflationRate?: Uint8Array | undefined;
            keyMgmtRelativeInflationRate?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        pools?: ({
            name?: string | undefined;
            rewards?: {
                validator?: Uint8Array | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            name?: string | undefined;
            rewards?: {
                validator?: Uint8Array | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            name?: string | undefined;
            rewards?: ({
                validator?: Uint8Array | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                validator?: Uint8Array | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                validator?: Uint8Array | undefined;
                coins?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["pools"][number]["rewards"][number]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["pools"][number]["rewards"][number]["coins"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pools"][number]["rewards"][number], keyof import("../../../axelar/reward/v1beta1/types").Pool_Reward>, never>)[] & Record<Exclude<keyof I["pools"][number]["rewards"], keyof {
                validator?: Uint8Array | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["pools"][number], keyof Pool>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            name?: string | undefined;
            rewards?: {
                validator?: Uint8Array | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
