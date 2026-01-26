import Long from "long";
import _m0 from "protobufjs/minimal";
import { KeyRole, KeyType } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.tss.v1beta1";
export interface KeygenVoteData {
    $type: "axelar.tss.v1beta1.KeygenVoteData";
    pubKey: Buffer;
    groupRecoveryInfo: Buffer;
}
/** KeyInfo holds information about a key */
export interface KeyInfo {
    $type: "axelar.tss.v1beta1.KeyInfo";
    keyId: string;
    keyRole: KeyRole;
    keyType: KeyType;
}
export interface MultisigInfo {
    $type: "axelar.tss.v1beta1.MultisigInfo";
    id: string;
    timeout: Long;
    targetNum: Long;
    infos: MultisigInfo_Info[];
}
export interface MultisigInfo_Info {
    $type: "axelar.tss.v1beta1.MultisigInfo.Info";
    participant: Buffer;
    data: Buffer[];
}
export interface KeyRecoveryInfo {
    $type: "axelar.tss.v1beta1.KeyRecoveryInfo";
    keyId: string;
    public: Buffer;
    private: {
        [key: string]: Buffer;
    };
}
export interface KeyRecoveryInfo_PrivateEntry {
    $type: "axelar.tss.v1beta1.KeyRecoveryInfo.PrivateEntry";
    key: string;
    value: Buffer;
}
export interface ExternalKeys {
    $type: "axelar.tss.v1beta1.ExternalKeys";
    chain: string;
    keyIds: string[];
}
export interface ValidatorStatus {
    $type: "axelar.tss.v1beta1.ValidatorStatus";
    validator: Buffer;
    suspendedUntil: Long;
}
export declare const KeygenVoteData: {
    $type: "axelar.tss.v1beta1.KeygenVoteData";
    encode(message: KeygenVoteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenVoteData;
    fromJSON(object: any): KeygenVoteData;
    toJSON(message: KeygenVoteData): unknown;
    create<I extends Exact<DeepPartial<KeygenVoteData>, I>>(base?: I): KeygenVoteData;
    fromPartial<I extends Exact<DeepPartial<KeygenVoteData>, I>>(object: I): KeygenVoteData;
};
export declare const KeyInfo: {
    $type: "axelar.tss.v1beta1.KeyInfo";
    encode(message: KeyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyInfo;
    fromJSON(object: any): KeyInfo;
    toJSON(message: KeyInfo): unknown;
    create<I extends Exact<DeepPartial<KeyInfo>, I>>(base?: I): KeyInfo;
    fromPartial<I extends Exact<DeepPartial<KeyInfo>, I>>(object: I): KeyInfo;
};
export declare const MultisigInfo: {
    $type: "axelar.tss.v1beta1.MultisigInfo";
    encode(message: MultisigInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultisigInfo;
    fromJSON(object: any): MultisigInfo;
    toJSON(message: MultisigInfo): unknown;
    create<I extends Exact<DeepPartial<MultisigInfo>, I>>(base?: I): MultisigInfo;
    fromPartial<I extends Exact<DeepPartial<MultisigInfo>, I>>(object: I): MultisigInfo;
};
export declare const MultisigInfo_Info: {
    $type: "axelar.tss.v1beta1.MultisigInfo.Info";
    encode(message: MultisigInfo_Info, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultisigInfo_Info;
    fromJSON(object: any): MultisigInfo_Info;
    toJSON(message: MultisigInfo_Info): unknown;
    create<I extends Exact<DeepPartial<MultisigInfo_Info>, I>>(base?: I): MultisigInfo_Info;
    fromPartial<I extends Exact<DeepPartial<MultisigInfo_Info>, I>>(object: I): MultisigInfo_Info;
};
export declare const KeyRecoveryInfo: {
    $type: "axelar.tss.v1beta1.KeyRecoveryInfo";
    encode(message: KeyRecoveryInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRecoveryInfo;
    fromJSON(object: any): KeyRecoveryInfo;
    toJSON(message: KeyRecoveryInfo): unknown;
    create<I extends Exact<DeepPartial<KeyRecoveryInfo>, I>>(base?: I): KeyRecoveryInfo;
    fromPartial<I extends Exact<DeepPartial<KeyRecoveryInfo>, I>>(object: I): KeyRecoveryInfo;
};
export declare const KeyRecoveryInfo_PrivateEntry: {
    $type: "axelar.tss.v1beta1.KeyRecoveryInfo.PrivateEntry";
    encode(message: KeyRecoveryInfo_PrivateEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRecoveryInfo_PrivateEntry;
    fromJSON(object: any): KeyRecoveryInfo_PrivateEntry;
    toJSON(message: KeyRecoveryInfo_PrivateEntry): unknown;
    create<I extends Exact<DeepPartial<KeyRecoveryInfo_PrivateEntry>, I>>(base?: I): KeyRecoveryInfo_PrivateEntry;
    fromPartial<I extends Exact<DeepPartial<KeyRecoveryInfo_PrivateEntry>, I>>(object: I): KeyRecoveryInfo_PrivateEntry;
};
export declare const ExternalKeys: {
    $type: "axelar.tss.v1beta1.ExternalKeys";
    encode(message: ExternalKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalKeys;
    fromJSON(object: any): ExternalKeys;
    toJSON(message: ExternalKeys): unknown;
    create<I extends Exact<DeepPartial<ExternalKeys>, I>>(base?: I): ExternalKeys;
    fromPartial<I extends Exact<DeepPartial<ExternalKeys>, I>>(object: I): ExternalKeys;
};
export declare const ValidatorStatus: {
    $type: "axelar.tss.v1beta1.ValidatorStatus";
    encode(message: ValidatorStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorStatus;
    fromJSON(object: any): ValidatorStatus;
    toJSON(message: ValidatorStatus): unknown;
    create<I extends Exact<DeepPartial<ValidatorStatus>, I>>(base?: I): ValidatorStatus;
    fromPartial<I extends Exact<DeepPartial<ValidatorStatus>, I>>(object: I): ValidatorStatus;
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
