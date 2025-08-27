/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
export declare const protobufPackage = "axelar.permission.v1beta1";
export interface UpdateGovernanceKeyRequest {
    governanceKey?: LegacyAminoPubKey | undefined;
    sender: string;
}
export interface UpdateGovernanceKeyResponse {
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
    controller: Buffer;
    sender: string;
}
export interface RegisterControllerResponse {
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
    controller: Buffer;
    sender: string;
}
export interface DeregisterControllerResponse {
}
export declare const UpdateGovernanceKeyRequest: {
    encode(message: UpdateGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGovernanceKeyRequest;
    fromJSON(object: any): UpdateGovernanceKeyRequest;
    toJSON(message: UpdateGovernanceKeyRequest): unknown;
    create<I extends {
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        sender?: string | undefined;
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
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof UpdateGovernanceKeyRequest>]: never; }>(base?: I | undefined): UpdateGovernanceKeyRequest;
    fromPartial<I_1 extends {
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        sender?: string | undefined;
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
        sender?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof UpdateGovernanceKeyRequest>]: never; }>(object: I_1): UpdateGovernanceKeyRequest;
};
export declare const UpdateGovernanceKeyResponse: {
    encode(_: UpdateGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGovernanceKeyResponse;
    fromJSON(_: any): UpdateGovernanceKeyResponse;
    toJSON(_: UpdateGovernanceKeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): UpdateGovernanceKeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): UpdateGovernanceKeyResponse;
};
export declare const RegisterControllerRequest: {
    encode(message: RegisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterControllerRequest;
    fromJSON(object: any): RegisterControllerRequest;
    toJSON(message: RegisterControllerRequest): unknown;
    create<I extends {
        controller?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        controller?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RegisterControllerRequest>]: never; }>(base?: I | undefined): RegisterControllerRequest;
    fromPartial<I_1 extends {
        controller?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        controller?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RegisterControllerRequest>]: never; }>(object: I_1): RegisterControllerRequest;
};
export declare const RegisterControllerResponse: {
    encode(_: RegisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterControllerResponse;
    fromJSON(_: any): RegisterControllerResponse;
    toJSON(_: RegisterControllerResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RegisterControllerResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RegisterControllerResponse;
};
export declare const DeregisterControllerRequest: {
    encode(message: DeregisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterControllerRequest;
    fromJSON(object: any): DeregisterControllerRequest;
    toJSON(message: DeregisterControllerRequest): unknown;
    create<I extends {
        controller?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        controller?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeregisterControllerRequest>]: never; }>(base?: I | undefined): DeregisterControllerRequest;
    fromPartial<I_1 extends {
        controller?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        controller?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeregisterControllerRequest>]: never; }>(object: I_1): DeregisterControllerRequest;
};
export declare const DeregisterControllerResponse: {
    encode(_: DeregisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterControllerResponse;
    fromJSON(_: any): DeregisterControllerResponse;
    toJSON(_: DeregisterControllerResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): DeregisterControllerResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeregisterControllerResponse;
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
