import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.tss.tofnd.v1beta1";
/** File copied from golang tofnd with minor tweaks */
export interface RecoverRequest {
    $type: "axelar.tss.tofnd.v1beta1.RecoverRequest";
    keygenInit?: KeygenInit | undefined;
    keygenOutput?: KeygenOutput | undefined;
}
export interface RecoverResponse {
    $type: "axelar.tss.tofnd.v1beta1.RecoverResponse";
    response: RecoverResponse_Response;
}
export declare enum RecoverResponse_Response {
    RESPONSE_UNSPECIFIED = 0,
    RESPONSE_SUCCESS = 1,
    RESPONSE_FAIL = 2,
    UNRECOGNIZED = -1
}
export declare function recoverResponse_ResponseFromJSON(object: any): RecoverResponse_Response;
export declare function recoverResponse_ResponseToJSON(object: RecoverResponse_Response): string;
/** Keygen's success response */
export interface KeygenOutput {
    $type: "axelar.tss.tofnd.v1beta1.KeygenOutput";
    /** pub_key; common for all parties */
    pubKey: Buffer;
    /** recover info of all parties' shares; common for all parties */
    groupRecoverInfo: Buffer;
    /** private recover info of this party's shares; unique for each party */
    privateRecoverInfo: Buffer;
}
export interface MessageIn {
    $type: "axelar.tss.tofnd.v1beta1.MessageIn";
    /** first message only, Keygen */
    keygenInit?: KeygenInit | undefined;
    /** first message only, Sign */
    signInit?: SignInit | undefined;
    /** all subsequent messages */
    traffic?: TrafficIn | undefined;
    /** abort the protocol, ignore the bool value */
    abort?: boolean | undefined;
}
export interface MessageOut {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut";
    /** all but final message */
    traffic?: TrafficOut | undefined;
    /** final message only, Keygen */
    keygenResult?: MessageOut_KeygenResult | undefined;
    /** final message only, Sign */
    signResult?: MessageOut_SignResult | undefined;
    /** issue recover from client */
    needRecover?: boolean | undefined;
}
/** Keygen's response types */
export interface MessageOut_KeygenResult {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut.KeygenResult";
    /** Success response */
    data?: KeygenOutput | undefined;
    /** Faiilure response */
    criminals?: MessageOut_CriminalList | undefined;
}
/** Sign's response types */
export interface MessageOut_SignResult {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut.SignResult";
    /** Success response */
    signature?: Buffer | undefined;
    /** Failure response */
    criminals?: MessageOut_CriminalList | undefined;
}
/** Keygen/Sign failure response message */
export interface MessageOut_CriminalList {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut.CriminalList";
    criminals: MessageOut_CriminalList_Criminal[];
}
export interface MessageOut_CriminalList_Criminal {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut.CriminalList.Criminal";
    partyUid: string;
    crimeType: MessageOut_CriminalList_Criminal_CrimeType;
}
export declare enum MessageOut_CriminalList_Criminal_CrimeType {
    CRIME_TYPE_UNSPECIFIED = 0,
    CRIME_TYPE_NON_MALICIOUS = 1,
    CRIME_TYPE_MALICIOUS = 2,
    UNRECOGNIZED = -1
}
export declare function messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): MessageOut_CriminalList_Criminal_CrimeType;
export declare function messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: MessageOut_CriminalList_Criminal_CrimeType): string;
export interface TrafficIn {
    $type: "axelar.tss.tofnd.v1beta1.TrafficIn";
    fromPartyUid: string;
    payload: Buffer;
    isBroadcast: boolean;
}
export interface TrafficOut {
    $type: "axelar.tss.tofnd.v1beta1.TrafficOut";
    toPartyUid: string;
    payload: Buffer;
    isBroadcast: boolean;
}
export interface KeygenInit {
    $type: "axelar.tss.tofnd.v1beta1.KeygenInit";
    newKeyUid: string;
    partyUids: string[];
    partyShareCounts: number[];
    /** parties[my_party_index] belongs to the server */
    myPartyIndex: number;
    threshold: number;
}
export interface SignInit {
    $type: "axelar.tss.tofnd.v1beta1.SignInit";
    newSigUid: string;
    keyUid: string;
    /** TODO replace this with a subset of indices? */
    partyUids: string[];
    messageToSign: Buffer;
}
export declare const RecoverRequest: {
    $type: "axelar.tss.tofnd.v1beta1.RecoverRequest";
    encode(message: RecoverRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecoverRequest;
    fromJSON(object: any): RecoverRequest;
    toJSON(message: RecoverRequest): unknown;
    create<I extends Exact<DeepPartial<RecoverRequest>, I>>(base?: I): RecoverRequest;
    fromPartial<I extends Exact<DeepPartial<RecoverRequest>, I>>(object: I): RecoverRequest;
};
export declare const RecoverResponse: {
    $type: "axelar.tss.tofnd.v1beta1.RecoverResponse";
    encode(message: RecoverResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecoverResponse;
    fromJSON(object: any): RecoverResponse;
    toJSON(message: RecoverResponse): unknown;
    create<I extends Exact<DeepPartial<RecoverResponse>, I>>(base?: I): RecoverResponse;
    fromPartial<I extends Exact<DeepPartial<RecoverResponse>, I>>(object: I): RecoverResponse;
};
export declare const KeygenOutput: {
    $type: "axelar.tss.tofnd.v1beta1.KeygenOutput";
    encode(message: KeygenOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOutput;
    fromJSON(object: any): KeygenOutput;
    toJSON(message: KeygenOutput): unknown;
    create<I extends Exact<DeepPartial<KeygenOutput>, I>>(base?: I): KeygenOutput;
    fromPartial<I extends Exact<DeepPartial<KeygenOutput>, I>>(object: I): KeygenOutput;
};
export declare const MessageIn: {
    $type: "axelar.tss.tofnd.v1beta1.MessageIn";
    encode(message: MessageIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageIn;
    fromJSON(object: any): MessageIn;
    toJSON(message: MessageIn): unknown;
    create<I extends Exact<DeepPartial<MessageIn>, I>>(base?: I): MessageIn;
    fromPartial<I extends Exact<DeepPartial<MessageIn>, I>>(object: I): MessageIn;
};
export declare const MessageOut: {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut";
    encode(message: MessageOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut;
    fromJSON(object: any): MessageOut;
    toJSON(message: MessageOut): unknown;
    create<I extends Exact<DeepPartial<MessageOut>, I>>(base?: I): MessageOut;
    fromPartial<I extends Exact<DeepPartial<MessageOut>, I>>(object: I): MessageOut;
};
export declare const MessageOut_KeygenResult: {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut.KeygenResult";
    encode(message: MessageOut_KeygenResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_KeygenResult;
    fromJSON(object: any): MessageOut_KeygenResult;
    toJSON(message: MessageOut_KeygenResult): unknown;
    create<I extends Exact<DeepPartial<MessageOut_KeygenResult>, I>>(base?: I): MessageOut_KeygenResult;
    fromPartial<I extends Exact<DeepPartial<MessageOut_KeygenResult>, I>>(object: I): MessageOut_KeygenResult;
};
export declare const MessageOut_SignResult: {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut.SignResult";
    encode(message: MessageOut_SignResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_SignResult;
    fromJSON(object: any): MessageOut_SignResult;
    toJSON(message: MessageOut_SignResult): unknown;
    create<I extends Exact<DeepPartial<MessageOut_SignResult>, I>>(base?: I): MessageOut_SignResult;
    fromPartial<I extends Exact<DeepPartial<MessageOut_SignResult>, I>>(object: I): MessageOut_SignResult;
};
export declare const MessageOut_CriminalList: {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut.CriminalList";
    encode(message: MessageOut_CriminalList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_CriminalList;
    fromJSON(object: any): MessageOut_CriminalList;
    toJSON(message: MessageOut_CriminalList): unknown;
    create<I extends Exact<DeepPartial<MessageOut_CriminalList>, I>>(base?: I): MessageOut_CriminalList;
    fromPartial<I extends Exact<DeepPartial<MessageOut_CriminalList>, I>>(object: I): MessageOut_CriminalList;
};
export declare const MessageOut_CriminalList_Criminal: {
    $type: "axelar.tss.tofnd.v1beta1.MessageOut.CriminalList.Criminal";
    encode(message: MessageOut_CriminalList_Criminal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_CriminalList_Criminal;
    fromJSON(object: any): MessageOut_CriminalList_Criminal;
    toJSON(message: MessageOut_CriminalList_Criminal): unknown;
    create<I extends Exact<DeepPartial<MessageOut_CriminalList_Criminal>, I>>(base?: I): MessageOut_CriminalList_Criminal;
    fromPartial<I extends Exact<DeepPartial<MessageOut_CriminalList_Criminal>, I>>(object: I): MessageOut_CriminalList_Criminal;
};
export declare const TrafficIn: {
    $type: "axelar.tss.tofnd.v1beta1.TrafficIn";
    encode(message: TrafficIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrafficIn;
    fromJSON(object: any): TrafficIn;
    toJSON(message: TrafficIn): unknown;
    create<I extends Exact<DeepPartial<TrafficIn>, I>>(base?: I): TrafficIn;
    fromPartial<I extends Exact<DeepPartial<TrafficIn>, I>>(object: I): TrafficIn;
};
export declare const TrafficOut: {
    $type: "axelar.tss.tofnd.v1beta1.TrafficOut";
    encode(message: TrafficOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrafficOut;
    fromJSON(object: any): TrafficOut;
    toJSON(message: TrafficOut): unknown;
    create<I extends Exact<DeepPartial<TrafficOut>, I>>(base?: I): TrafficOut;
    fromPartial<I extends Exact<DeepPartial<TrafficOut>, I>>(object: I): TrafficOut;
};
export declare const KeygenInit: {
    $type: "axelar.tss.tofnd.v1beta1.KeygenInit";
    encode(message: KeygenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenInit;
    fromJSON(object: any): KeygenInit;
    toJSON(message: KeygenInit): unknown;
    create<I extends Exact<DeepPartial<KeygenInit>, I>>(base?: I): KeygenInit;
    fromPartial<I extends Exact<DeepPartial<KeygenInit>, I>>(object: I): KeygenInit;
};
export declare const SignInit: {
    $type: "axelar.tss.tofnd.v1beta1.SignInit";
    encode(message: SignInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignInit;
    fromJSON(object: any): SignInit;
    toJSON(message: SignInit): unknown;
    create<I extends Exact<DeepPartial<SignInit>, I>>(base?: I): SignInit;
    fromPartial<I extends Exact<DeepPartial<SignInit>, I>>(object: I): SignInit;
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
