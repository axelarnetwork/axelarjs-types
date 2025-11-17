/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { Params } from "./params";
export declare const protobufPackage = "axelar.permission.v1beta1";
export interface UpdateGovernanceKeyRequest {
    $type: "axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    governanceKey?: LegacyAminoPubKey | undefined;
    sender: string;
}
export interface UpdateGovernanceKeyResponse {
    $type: "axelar.permission.v1beta1.UpdateGovernanceKeyResponse";
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
    $type: "axelar.permission.v1beta1.RegisterControllerRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    controller: Buffer;
    sender: string;
}
export interface RegisterControllerResponse {
    $type: "axelar.permission.v1beta1.RegisterControllerResponse";
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
    $type: "axelar.permission.v1beta1.DeregisterControllerRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    controller: Buffer;
    sender: string;
}
export interface DeregisterControllerResponse {
    $type: "axelar.permission.v1beta1.DeregisterControllerResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.permission.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.permission.v1beta1.UpdateParamsResponse";
}
export declare const UpdateGovernanceKeyRequest: {
    $type: "axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
    encode(message: UpdateGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGovernanceKeyRequest;
    fromJSON(object: any): UpdateGovernanceKeyRequest;
    toJSON(message: UpdateGovernanceKeyRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
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
            } & { [K in Exclude<keyof I["governanceKey"]["publicKeys"][number], "$type" | "typeUrl" | "value">]: never; })[] & { [K_1 in Exclude<keyof I["governanceKey"]["publicKeys"], "$type" | keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["governanceKey"], "$type" | "threshold" | "publicKeys">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "governanceKey">]: never; }>(base?: I | undefined): UpdateGovernanceKeyRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
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
            } & { [K_4 in Exclude<keyof I_1["governanceKey"]["publicKeys"][number], "$type" | "typeUrl" | "value">]: never; })[] & { [K_5 in Exclude<keyof I_1["governanceKey"]["publicKeys"], "$type" | keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["governanceKey"], "$type" | "threshold" | "publicKeys">]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "governanceKey">]: never; }>(object: I_1): UpdateGovernanceKeyRequest;
};
export declare const UpdateGovernanceKeyResponse: {
    $type: "axelar.permission.v1beta1.UpdateGovernanceKeyResponse";
    encode(_: UpdateGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGovernanceKeyResponse;
    fromJSON(_: any): UpdateGovernanceKeyResponse;
    toJSON(_: UpdateGovernanceKeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): UpdateGovernanceKeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): UpdateGovernanceKeyResponse;
};
export declare const RegisterControllerRequest: {
    $type: "axelar.permission.v1beta1.RegisterControllerRequest";
    encode(message: RegisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterControllerRequest;
    fromJSON(object: any): RegisterControllerRequest;
    toJSON(message: RegisterControllerRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        controller?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        controller?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "controller">]: never; }>(base?: I | undefined): RegisterControllerRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        controller?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        controller?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "controller">]: never; }>(object: I_1): RegisterControllerRequest;
};
export declare const RegisterControllerResponse: {
    $type: "axelar.permission.v1beta1.RegisterControllerResponse";
    encode(_: RegisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterControllerResponse;
    fromJSON(_: any): RegisterControllerResponse;
    toJSON(_: RegisterControllerResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RegisterControllerResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RegisterControllerResponse;
};
export declare const DeregisterControllerRequest: {
    $type: "axelar.permission.v1beta1.DeregisterControllerRequest";
    encode(message: DeregisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterControllerRequest;
    fromJSON(object: any): DeregisterControllerRequest;
    toJSON(message: DeregisterControllerRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        controller?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        controller?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "controller">]: never; }>(base?: I | undefined): DeregisterControllerRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        controller?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        controller?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "controller">]: never; }>(object: I_1): DeregisterControllerRequest;
};
export declare const DeregisterControllerResponse: {
    $type: "axelar.permission.v1beta1.DeregisterControllerResponse";
    encode(_: DeregisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterControllerResponse;
    fromJSON(_: any): DeregisterControllerResponse;
    toJSON(_: DeregisterControllerResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): DeregisterControllerResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): DeregisterControllerResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.permission.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends {
        params?: {} | undefined;
        authority?: string | undefined;
    } & {
        params?: ({} & {} & { [K in Exclude<keyof I["params"], "$type">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "params" | "authority">]: never; }>(base?: I | undefined): UpdateParamsRequest;
    fromPartial<I_1 extends {
        params?: {} | undefined;
        authority?: string | undefined;
    } & {
        params?: ({} & {} & { [K_2 in Exclude<keyof I_1["params"], "$type">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "params" | "authority">]: never; }>(object: I_1): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.permission.v1beta1.UpdateParamsResponse";
    encode(_: UpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsResponse;
    fromJSON(_: any): UpdateParamsResponse;
    toJSON(_: UpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): UpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): UpdateParamsResponse;
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
