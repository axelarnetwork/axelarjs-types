import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.multisig.v1beta1";
export interface KeygenStarted {
    $type: "axelar.multisig.v1beta1.KeygenStarted";
    module: string;
    keyId: string;
    participants: Buffer[];
}
export interface KeygenCompleted {
    $type: "axelar.multisig.v1beta1.KeygenCompleted";
    module: string;
    keyId: string;
}
export interface KeygenExpired {
    $type: "axelar.multisig.v1beta1.KeygenExpired";
    module: string;
    keyId: string;
}
export interface PubKeySubmitted {
    $type: "axelar.multisig.v1beta1.PubKeySubmitted";
    module: string;
    keyId: string;
    participant: Buffer;
    pubKey: Buffer;
}
export interface SigningStarted {
    $type: "axelar.multisig.v1beta1.SigningStarted";
    module: string;
    sigId: Long;
    keyId: string;
    pubKeys: {
        [key: string]: Buffer;
    };
    payloadHash: Buffer;
    requestingModule: string;
}
export interface SigningStarted_PubKeysEntry {
    $type: "axelar.multisig.v1beta1.SigningStarted.PubKeysEntry";
    key: string;
    value: Buffer;
}
export interface SigningCompleted {
    $type: "axelar.multisig.v1beta1.SigningCompleted";
    module: string;
    sigId: Long;
}
export interface SigningExpired {
    $type: "axelar.multisig.v1beta1.SigningExpired";
    module: string;
    sigId: Long;
}
export interface SignatureSubmitted {
    $type: "axelar.multisig.v1beta1.SignatureSubmitted";
    module: string;
    sigId: Long;
    participant: Buffer;
    signature: Buffer;
}
export interface KeyAssigned {
    $type: "axelar.multisig.v1beta1.KeyAssigned";
    module: string;
    chain: string;
    keyId: string;
}
export interface KeyRotated {
    $type: "axelar.multisig.v1beta1.KeyRotated";
    module: string;
    chain: string;
    keyId: string;
}
export interface KeygenOptOut {
    $type: "axelar.multisig.v1beta1.KeygenOptOut";
    participant: Buffer;
}
export interface KeygenOptIn {
    $type: "axelar.multisig.v1beta1.KeygenOptIn";
    participant: Buffer;
}
export declare const KeygenStarted: {
    $type: "axelar.multisig.v1beta1.KeygenStarted";
    encode(message: KeygenStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenStarted;
    fromJSON(object: any): KeygenStarted;
    toJSON(message: KeygenStarted): unknown;
    create<I extends Exact<DeepPartial<KeygenStarted>, I>>(base?: I): KeygenStarted;
    fromPartial<I extends Exact<DeepPartial<KeygenStarted>, I>>(object: I): KeygenStarted;
};
export declare const KeygenCompleted: {
    $type: "axelar.multisig.v1beta1.KeygenCompleted";
    encode(message: KeygenCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenCompleted;
    fromJSON(object: any): KeygenCompleted;
    toJSON(message: KeygenCompleted): unknown;
    create<I extends Exact<DeepPartial<KeygenCompleted>, I>>(base?: I): KeygenCompleted;
    fromPartial<I extends Exact<DeepPartial<KeygenCompleted>, I>>(object: I): KeygenCompleted;
};
export declare const KeygenExpired: {
    $type: "axelar.multisig.v1beta1.KeygenExpired";
    encode(message: KeygenExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenExpired;
    fromJSON(object: any): KeygenExpired;
    toJSON(message: KeygenExpired): unknown;
    create<I extends Exact<DeepPartial<KeygenExpired>, I>>(base?: I): KeygenExpired;
    fromPartial<I extends Exact<DeepPartial<KeygenExpired>, I>>(object: I): KeygenExpired;
};
export declare const PubKeySubmitted: {
    $type: "axelar.multisig.v1beta1.PubKeySubmitted";
    encode(message: PubKeySubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKeySubmitted;
    fromJSON(object: any): PubKeySubmitted;
    toJSON(message: PubKeySubmitted): unknown;
    create<I extends Exact<DeepPartial<PubKeySubmitted>, I>>(base?: I): PubKeySubmitted;
    fromPartial<I extends Exact<DeepPartial<PubKeySubmitted>, I>>(object: I): PubKeySubmitted;
};
export declare const SigningStarted: {
    $type: "axelar.multisig.v1beta1.SigningStarted";
    encode(message: SigningStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningStarted;
    fromJSON(object: any): SigningStarted;
    toJSON(message: SigningStarted): unknown;
    create<I extends Exact<DeepPartial<SigningStarted>, I>>(base?: I): SigningStarted;
    fromPartial<I extends Exact<DeepPartial<SigningStarted>, I>>(object: I): SigningStarted;
};
export declare const SigningStarted_PubKeysEntry: {
    $type: "axelar.multisig.v1beta1.SigningStarted.PubKeysEntry";
    encode(message: SigningStarted_PubKeysEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningStarted_PubKeysEntry;
    fromJSON(object: any): SigningStarted_PubKeysEntry;
    toJSON(message: SigningStarted_PubKeysEntry): unknown;
    create<I extends Exact<DeepPartial<SigningStarted_PubKeysEntry>, I>>(base?: I): SigningStarted_PubKeysEntry;
    fromPartial<I extends Exact<DeepPartial<SigningStarted_PubKeysEntry>, I>>(object: I): SigningStarted_PubKeysEntry;
};
export declare const SigningCompleted: {
    $type: "axelar.multisig.v1beta1.SigningCompleted";
    encode(message: SigningCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningCompleted;
    fromJSON(object: any): SigningCompleted;
    toJSON(message: SigningCompleted): unknown;
    create<I extends Exact<DeepPartial<SigningCompleted>, I>>(base?: I): SigningCompleted;
    fromPartial<I extends Exact<DeepPartial<SigningCompleted>, I>>(object: I): SigningCompleted;
};
export declare const SigningExpired: {
    $type: "axelar.multisig.v1beta1.SigningExpired";
    encode(message: SigningExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningExpired;
    fromJSON(object: any): SigningExpired;
    toJSON(message: SigningExpired): unknown;
    create<I extends Exact<DeepPartial<SigningExpired>, I>>(base?: I): SigningExpired;
    fromPartial<I extends Exact<DeepPartial<SigningExpired>, I>>(object: I): SigningExpired;
};
export declare const SignatureSubmitted: {
    $type: "axelar.multisig.v1beta1.SignatureSubmitted";
    encode(message: SignatureSubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureSubmitted;
    fromJSON(object: any): SignatureSubmitted;
    toJSON(message: SignatureSubmitted): unknown;
    create<I extends Exact<DeepPartial<SignatureSubmitted>, I>>(base?: I): SignatureSubmitted;
    fromPartial<I extends Exact<DeepPartial<SignatureSubmitted>, I>>(object: I): SignatureSubmitted;
};
export declare const KeyAssigned: {
    $type: "axelar.multisig.v1beta1.KeyAssigned";
    encode(message: KeyAssigned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyAssigned;
    fromJSON(object: any): KeyAssigned;
    toJSON(message: KeyAssigned): unknown;
    create<I extends Exact<DeepPartial<KeyAssigned>, I>>(base?: I): KeyAssigned;
    fromPartial<I extends Exact<DeepPartial<KeyAssigned>, I>>(object: I): KeyAssigned;
};
export declare const KeyRotated: {
    $type: "axelar.multisig.v1beta1.KeyRotated";
    encode(message: KeyRotated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRotated;
    fromJSON(object: any): KeyRotated;
    toJSON(message: KeyRotated): unknown;
    create<I extends Exact<DeepPartial<KeyRotated>, I>>(base?: I): KeyRotated;
    fromPartial<I extends Exact<DeepPartial<KeyRotated>, I>>(object: I): KeyRotated;
};
export declare const KeygenOptOut: {
    $type: "axelar.multisig.v1beta1.KeygenOptOut";
    encode(message: KeygenOptOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptOut;
    fromJSON(object: any): KeygenOptOut;
    toJSON(message: KeygenOptOut): unknown;
    create<I extends Exact<DeepPartial<KeygenOptOut>, I>>(base?: I): KeygenOptOut;
    fromPartial<I extends Exact<DeepPartial<KeygenOptOut>, I>>(object: I): KeygenOptOut;
};
export declare const KeygenOptIn: {
    $type: "axelar.multisig.v1beta1.KeygenOptIn";
    encode(message: KeygenOptIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptIn;
    fromJSON(object: any): KeygenOptIn;
    toJSON(message: KeygenOptIn): unknown;
    create<I extends Exact<DeepPartial<KeygenOptIn>, I>>(base?: I): KeygenOptIn;
    fromPartial<I extends Exact<DeepPartial<KeygenOptIn>, I>>(object: I): KeygenOptIn;
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
