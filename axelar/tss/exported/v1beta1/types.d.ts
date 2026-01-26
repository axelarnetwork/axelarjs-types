import Long from "long";
import _m0 from "protobufjs/minimal";
import { Threshold } from "../../../utils/v1beta1/threshold";
export declare const protobufPackage = "axelar.tss.exported.v1beta1";
export declare enum KeyRole {
    KEY_ROLE_UNSPECIFIED = 0,
    KEY_ROLE_MASTER_KEY = 1,
    KEY_ROLE_SECONDARY_KEY = 2,
    KEY_ROLE_EXTERNAL_KEY = 3,
    UNRECOGNIZED = -1
}
export declare function keyRoleFromJSON(object: any): KeyRole;
export declare function keyRoleToJSON(object: KeyRole): string;
export declare enum KeyType {
    KEY_TYPE_UNSPECIFIED = 0,
    KEY_TYPE_NONE = 1,
    KEY_TYPE_THRESHOLD = 2,
    KEY_TYPE_MULTISIG = 3,
    UNRECOGNIZED = -1
}
export declare function keyTypeFromJSON(object: any): KeyType;
export declare function keyTypeToJSON(object: KeyType): string;
export declare enum KeyShareDistributionPolicy {
    KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED = 0,
    KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE = 1,
    KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR = 2,
    UNRECOGNIZED = -1
}
export declare function keyShareDistributionPolicyFromJSON(object: any): KeyShareDistributionPolicy;
export declare function keyShareDistributionPolicyToJSON(object: KeyShareDistributionPolicy): string;
/** KeyRequirement defines requirements for keys */
export interface KeyRequirement {
    $type: "axelar.tss.exported.v1beta1.KeyRequirement";
    keyRole: KeyRole;
    keyType: KeyType;
    minKeygenThreshold?: Threshold | undefined;
    safetyThreshold?: Threshold | undefined;
    keyShareDistributionPolicy: KeyShareDistributionPolicy;
    maxTotalShareCount: Long;
    minTotalShareCount: Long;
    keygenVotingThreshold?: Threshold | undefined;
    signVotingThreshold?: Threshold | undefined;
    keygenTimeout: Long;
    signTimeout: Long;
}
/** PubKeyInfo holds a pubkey and a signature */
export interface SigKeyPair {
    $type: "axelar.tss.exported.v1beta1.SigKeyPair";
    pubKey: Buffer;
    signature: Buffer;
}
export declare const KeyRequirement: {
    $type: "axelar.tss.exported.v1beta1.KeyRequirement";
    encode(message: KeyRequirement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRequirement;
    fromJSON(object: any): KeyRequirement;
    toJSON(message: KeyRequirement): unknown;
    create<I extends Exact<DeepPartial<KeyRequirement>, I>>(base?: I): KeyRequirement;
    fromPartial<I extends Exact<DeepPartial<KeyRequirement>, I>>(object: I): KeyRequirement;
};
export declare const SigKeyPair: {
    $type: "axelar.tss.exported.v1beta1.SigKeyPair";
    encode(message: SigKeyPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigKeyPair;
    fromJSON(object: any): SigKeyPair;
    toJSON(message: SigKeyPair): unknown;
    create<I extends Exact<DeepPartial<SigKeyPair>, I>>(base?: I): SigKeyPair;
    fromPartial<I extends Exact<DeepPartial<SigKeyPair>, I>>(object: I): SigKeyPair;
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
