import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Snapshot } from "../../snapshot/exported/v1beta1/types";
import { Threshold } from "../../utils/v1beta1/threshold";
import { KeyState, MultisigState } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.multisig.v1beta1";
export interface Key {
    $type: "axelar.multisig.v1beta1.Key";
    id: string;
    snapshot?: Snapshot | undefined;
    pubKeys: {
        [key: string]: Buffer;
    };
    signingThreshold?: Threshold | undefined;
    state: KeyState;
}
export interface Key_PubKeysEntry {
    $type: "axelar.multisig.v1beta1.Key.PubKeysEntry";
    key: string;
    value: Buffer;
}
export interface KeygenSession {
    $type: "axelar.multisig.v1beta1.KeygenSession";
    key?: Key | undefined;
    state: MultisigState;
    keygenThreshold?: Threshold | undefined;
    expiresAt: Long;
    completedAt: Long;
    isPubKeyReceived: {
        [key: string]: boolean;
    };
    gracePeriod: Long;
}
export interface KeygenSession_IsPubKeyReceivedEntry {
    $type: "axelar.multisig.v1beta1.KeygenSession.IsPubKeyReceivedEntry";
    key: string;
    value: boolean;
}
export interface MultiSig {
    $type: "axelar.multisig.v1beta1.MultiSig";
    keyId: string;
    payloadHash: Buffer;
    sigs: {
        [key: string]: Buffer;
    };
}
export interface MultiSig_SigsEntry {
    $type: "axelar.multisig.v1beta1.MultiSig.SigsEntry";
    key: string;
    value: Buffer;
}
export interface SigningSession {
    $type: "axelar.multisig.v1beta1.SigningSession";
    id: Long;
    multiSig?: MultiSig | undefined;
    state: MultisigState;
    key?: Key | undefined;
    expiresAt: Long;
    completedAt: Long;
    gracePeriod: Long;
    module: string;
    moduleMetadata?: Any | undefined;
}
export interface KeyEpoch {
    $type: "axelar.multisig.v1beta1.KeyEpoch";
    epoch: Long;
    chain: string;
    keyId: string;
}
export declare const Key: {
    $type: "axelar.multisig.v1beta1.Key";
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    create<I extends Exact<DeepPartial<Key>, I>>(base?: I): Key;
    fromPartial<I extends Exact<DeepPartial<Key>, I>>(object: I): Key;
};
export declare const Key_PubKeysEntry: {
    $type: "axelar.multisig.v1beta1.Key.PubKeysEntry";
    encode(message: Key_PubKeysEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key_PubKeysEntry;
    fromJSON(object: any): Key_PubKeysEntry;
    toJSON(message: Key_PubKeysEntry): unknown;
    create<I extends Exact<DeepPartial<Key_PubKeysEntry>, I>>(base?: I): Key_PubKeysEntry;
    fromPartial<I extends Exact<DeepPartial<Key_PubKeysEntry>, I>>(object: I): Key_PubKeysEntry;
};
export declare const KeygenSession: {
    $type: "axelar.multisig.v1beta1.KeygenSession";
    encode(message: KeygenSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSession;
    fromJSON(object: any): KeygenSession;
    toJSON(message: KeygenSession): unknown;
    create<I extends Exact<DeepPartial<KeygenSession>, I>>(base?: I): KeygenSession;
    fromPartial<I extends Exact<DeepPartial<KeygenSession>, I>>(object: I): KeygenSession;
};
export declare const KeygenSession_IsPubKeyReceivedEntry: {
    $type: "axelar.multisig.v1beta1.KeygenSession.IsPubKeyReceivedEntry";
    encode(message: KeygenSession_IsPubKeyReceivedEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSession_IsPubKeyReceivedEntry;
    fromJSON(object: any): KeygenSession_IsPubKeyReceivedEntry;
    toJSON(message: KeygenSession_IsPubKeyReceivedEntry): unknown;
    create<I extends Exact<DeepPartial<KeygenSession_IsPubKeyReceivedEntry>, I>>(base?: I): KeygenSession_IsPubKeyReceivedEntry;
    fromPartial<I extends Exact<DeepPartial<KeygenSession_IsPubKeyReceivedEntry>, I>>(object: I): KeygenSession_IsPubKeyReceivedEntry;
};
export declare const MultiSig: {
    $type: "axelar.multisig.v1beta1.MultiSig";
    encode(message: MultiSig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSig;
    fromJSON(object: any): MultiSig;
    toJSON(message: MultiSig): unknown;
    create<I extends Exact<DeepPartial<MultiSig>, I>>(base?: I): MultiSig;
    fromPartial<I extends Exact<DeepPartial<MultiSig>, I>>(object: I): MultiSig;
};
export declare const MultiSig_SigsEntry: {
    $type: "axelar.multisig.v1beta1.MultiSig.SigsEntry";
    encode(message: MultiSig_SigsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSig_SigsEntry;
    fromJSON(object: any): MultiSig_SigsEntry;
    toJSON(message: MultiSig_SigsEntry): unknown;
    create<I extends Exact<DeepPartial<MultiSig_SigsEntry>, I>>(base?: I): MultiSig_SigsEntry;
    fromPartial<I extends Exact<DeepPartial<MultiSig_SigsEntry>, I>>(object: I): MultiSig_SigsEntry;
};
export declare const SigningSession: {
    $type: "axelar.multisig.v1beta1.SigningSession";
    encode(message: SigningSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningSession;
    fromJSON(object: any): SigningSession;
    toJSON(message: SigningSession): unknown;
    create<I extends Exact<DeepPartial<SigningSession>, I>>(base?: I): SigningSession;
    fromPartial<I extends Exact<DeepPartial<SigningSession>, I>>(object: I): SigningSession;
};
export declare const KeyEpoch: {
    $type: "axelar.multisig.v1beta1.KeyEpoch";
    encode(message: KeyEpoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyEpoch;
    fromJSON(object: any): KeyEpoch;
    toJSON(message: KeyEpoch): unknown;
    create<I extends Exact<DeepPartial<KeyEpoch>, I>>(base?: I): KeyEpoch;
    fromPartial<I extends Exact<DeepPartial<KeyEpoch>, I>>(object: I): KeyEpoch;
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
