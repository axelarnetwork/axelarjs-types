import Long from "long";
import _m0 from "protobufjs/minimal";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { Params } from "./params";
export declare const protobufPackage = "axelar.permission.v1beta1";
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequest {
}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponse {
    governanceKey?: LegacyAminoPubKey | undefined;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
export interface ParamsResponse {
    params?: Params | undefined;
}
export declare const QueryGovernanceKeyRequest: {
    encode(_: QueryGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGovernanceKeyRequest;
    fromJSON(_: any): QueryGovernanceKeyRequest;
    toJSON(_: QueryGovernanceKeyRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): QueryGovernanceKeyRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryGovernanceKeyRequest;
};
export declare const QueryGovernanceKeyResponse: {
    encode(message: QueryGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGovernanceKeyResponse;
    fromJSON(object: any): QueryGovernanceKeyResponse;
    toJSON(message: QueryGovernanceKeyResponse): unknown;
    create<I extends {
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
    } & {
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
            } & { [K in Exclude<keyof I["governanceKey"]["publicKeys"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_1 in Exclude<keyof I["governanceKey"]["publicKeys"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["governanceKey"], keyof LegacyAminoPubKey>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "governanceKey">]: never; }>(base?: I | undefined): QueryGovernanceKeyResponse;
    fromPartial<I_1 extends {
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
    } & {
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
            } & { [K_4 in Exclude<keyof I_1["governanceKey"]["publicKeys"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_5 in Exclude<keyof I_1["governanceKey"]["publicKeys"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["governanceKey"], keyof LegacyAminoPubKey>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "governanceKey">]: never; }>(object: I_1): QueryGovernanceKeyResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends {
        params?: {} | undefined;
    } & {
        params?: ({} & {} & { [K in Exclude<keyof I["params"], never>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I | undefined): ParamsResponse;
    fromPartial<I_1 extends {
        params?: {} | undefined;
    } & {
        params?: ({} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): ParamsResponse;
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
