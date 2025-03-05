import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/permission/v1beta1/params";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { GovAccount } from "../../../axelar/permission/v1beta1/types";
export declare const protobufPackage = "axelar.permission.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params?: Params;
    governanceKey?: LegacyAminoPubKey;
    govAccounts: GovAccount[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {} | undefined;
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
        govAccounts?: {
            address?: Uint8Array | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        }[] | undefined;
    } & {
        params?: ({} & {} & Record<Exclude<keyof I["params"], never>, never>) | undefined;
        governanceKey?: ({
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            threshold?: number | undefined;
            publicKeys?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["governanceKey"]["publicKeys"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["governanceKey"]["publicKeys"], keyof {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["governanceKey"], keyof LegacyAminoPubKey>, never>) | undefined;
        govAccounts?: ({
            address?: Uint8Array | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        }[] & ({
            address?: Uint8Array | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        } & {
            address?: Uint8Array | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
        } & Record<Exclude<keyof I["govAccounts"][number], keyof GovAccount>, never>)[] & Record<Exclude<keyof I["govAccounts"], keyof {
            address?: Uint8Array | undefined;
            role?: import("../exported/v1beta1/types").Role | undefined;
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
