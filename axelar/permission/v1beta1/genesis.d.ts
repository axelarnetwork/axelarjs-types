import Long from "long";
import _m0 from "protobufjs/minimal";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { Params } from "./params";
import { GovAccount } from "./types";
export declare const protobufPackage = "axelar.permission.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params?: Params | undefined;
    governanceKey?: LegacyAminoPubKey | undefined;
    govAccounts: GovAccount[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        params?: {} | undefined;
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        govAccounts?: {
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        }[] | undefined;
    } & {
        params?: ({} & {} & { [K in Exclude<keyof I["params"], never>]: never; }) | undefined;
        governanceKey?: ({
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            threshold?: number | undefined;
            publicKeys?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_1 in Exclude<keyof I["governanceKey"]["publicKeys"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_2 in Exclude<keyof I["governanceKey"]["publicKeys"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["governanceKey"], keyof LegacyAminoPubKey>]: never; }) | undefined;
        govAccounts?: ({
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        }[] & ({
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        } & {
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        } & { [K_4 in Exclude<keyof I["govAccounts"][number], keyof GovAccount>]: never; })[] & { [K_5 in Exclude<keyof I["govAccounts"], keyof {
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        params?: {} | undefined;
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        govAccounts?: {
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        }[] | undefined;
    } & {
        params?: ({} & {} & { [K_7 in Exclude<keyof I_1["params"], never>]: never; }) | undefined;
        governanceKey?: ({
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            threshold?: number | undefined;
            publicKeys?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_8 in Exclude<keyof I_1["governanceKey"]["publicKeys"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_9 in Exclude<keyof I_1["governanceKey"]["publicKeys"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["governanceKey"], keyof LegacyAminoPubKey>]: never; }) | undefined;
        govAccounts?: ({
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        }[] & ({
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        } & {
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        } & { [K_11 in Exclude<keyof I_1["govAccounts"][number], keyof GovAccount>]: never; })[] & { [K_12 in Exclude<keyof I_1["govAccounts"], keyof {
            address?: Buffer | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
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
