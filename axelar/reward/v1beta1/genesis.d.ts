import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Pool } from "./types";
export declare const protobufPackage = "axelar.reward.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    $type: "axelar.reward.v1beta1.GenesisState";
    params?: Params | undefined;
    pools: Pool[];
}
export declare const GenesisState: {
    $type: "axelar.reward.v1beta1.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        params?: {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } | undefined;
        pools?: {
            name?: string | undefined;
            rewards?: {
                validator?: Buffer | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        params?: ({
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & { [K in Exclude<keyof I["params"], "$type" | "externalChainVotingInflationRate" | "keyMgmtRelativeInflationRate">]: never; }) | undefined;
        pools?: ({
            name?: string | undefined;
            rewards?: {
                validator?: Buffer | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
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
                } & { [K_1 in Exclude<keyof I["pools"][number]["rewards"][number]["coins"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_2 in Exclude<keyof I["pools"][number]["rewards"][number]["coins"], "$type" | keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["pools"][number]["rewards"][number], "$type" | "validator" | "coins">]: never; })[] & { [K_4 in Exclude<keyof I["pools"][number]["rewards"], "$type" | keyof {
                validator?: Buffer | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["pools"][number], "$type" | "name" | "rewards">]: never; })[] & { [K_6 in Exclude<keyof I["pools"], "$type" | keyof {
            name?: string | undefined;
            rewards?: {
                validator?: Buffer | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, "$type" | "params" | "pools">]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        params?: {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } | undefined;
        pools?: {
            name?: string | undefined;
            rewards?: {
                validator?: Buffer | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        params?: ({
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & {
            externalChainVotingInflationRate?: Buffer | undefined;
            keyMgmtRelativeInflationRate?: Buffer | undefined;
        } & { [K_8 in Exclude<keyof I_1["params"], "$type" | "externalChainVotingInflationRate" | "keyMgmtRelativeInflationRate">]: never; }) | undefined;
        pools?: ({
            name?: string | undefined;
            rewards?: {
                validator?: Buffer | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
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
                } & { [K_9 in Exclude<keyof I_1["pools"][number]["rewards"][number]["coins"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_10 in Exclude<keyof I_1["pools"][number]["rewards"][number]["coins"], "$type" | keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I_1["pools"][number]["rewards"][number], "$type" | "validator" | "coins">]: never; })[] & { [K_12 in Exclude<keyof I_1["pools"][number]["rewards"], "$type" | keyof {
                validator?: Buffer | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["pools"][number], "$type" | "name" | "rewards">]: never; })[] & { [K_14 in Exclude<keyof I_1["pools"], "$type" | keyof {
            name?: string | undefined;
            rewards?: {
                validator?: Buffer | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, "$type" | "params" | "pools">]: never; }>(object: I_1): GenesisState;
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
