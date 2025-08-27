/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PollKey } from "../../vote/exported/v1beta1/types";
import { KeyRole, SigKeyPair } from "../exported/v1beta1/types";
import { MessageOut_KeygenResult, MessageOut_SignResult, TrafficOut } from "../tofnd/v1beta1/tofnd";
import { KeyInfo } from "./types";
export declare const protobufPackage = "axelar.tss.v1beta1";
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequest {
    sender: string;
    keyInfo?: KeyInfo | undefined;
}
export interface StartKeygenResponse {
}
export interface RotateKeyRequest {
    chain: string;
    keyRole: KeyRole;
    keyId: string;
    sender: string;
}
export interface RotateKeyResponse {
}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequest {
    sessionId: string;
    payload?: TrafficOut | undefined;
    sender: string;
}
export interface ProcessKeygenTrafficResponse {
}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequest {
    sessionId: string;
    payload?: TrafficOut | undefined;
    sender: string;
}
export interface ProcessSignTrafficResponse {
}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequest {
    pollKey?: PollKey | undefined;
    result?: MessageOut_KeygenResult | undefined;
    sender: string;
}
export interface VotePubKeyResponse {
    log: string;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequest {
    pollKey?: PollKey | undefined;
    result?: MessageOut_SignResult | undefined;
    sender: string;
}
export interface VoteSigResponse {
    log: string;
}
export interface HeartBeatRequest {
    /**
     * Deprecated: this field will be removed in the next release
     *
     * @deprecated
     */
    keyIds: string[];
    sender: string;
}
export interface HeartBeatResponse {
}
export interface RegisterExternalKeysRequest {
    chain: string;
    externalKeys: RegisterExternalKeysRequest_ExternalKey[];
    sender: string;
}
export interface RegisterExternalKeysRequest_ExternalKey {
    id: string;
    pubKey: Buffer;
}
export interface RegisterExternalKeysResponse {
}
export interface SubmitMultisigPubKeysRequest {
    keyId: string;
    sigKeyPairs: SigKeyPair[];
    sender: string;
}
export interface SubmitMultisigPubKeysResponse {
}
export interface SubmitMultisigSignaturesRequest {
    sigId: string;
    signatures: Buffer[];
    sender: string;
}
export interface SubmitMultisigSignaturesResponse {
}
export declare const StartKeygenRequest: {
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenRequest;
    fromJSON(object: any): StartKeygenRequest;
    toJSON(message: StartKeygenRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        keyInfo?: {
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        keyInfo?: ({
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
        } & {
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
        } & { [K in Exclude<keyof I["keyInfo"], keyof KeyInfo>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof StartKeygenRequest>]: never; }>(base?: I | undefined): StartKeygenRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        keyInfo?: {
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        keyInfo?: ({
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
        } & {
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
        } & { [K_2 in Exclude<keyof I_1["keyInfo"], keyof KeyInfo>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof StartKeygenRequest>]: never; }>(object: I_1): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenResponse;
    fromJSON(_: any): StartKeygenResponse;
    toJSON(_: StartKeygenResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): StartKeygenResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): StartKeygenResponse;
};
export declare const RotateKeyRequest: {
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyRequest;
    fromJSON(object: any): RotateKeyRequest;
    toJSON(message: RotateKeyRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RotateKeyRequest>]: never; }>(base?: I | undefined): RotateKeyRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RotateKeyRequest>]: never; }>(object: I_1): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyResponse;
    fromJSON(_: any): RotateKeyResponse;
    toJSON(_: RotateKeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RotateKeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RotateKeyResponse;
};
export declare const ProcessKeygenTrafficRequest: {
    encode(message: ProcessKeygenTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessKeygenTrafficRequest;
    fromJSON(object: any): ProcessKeygenTrafficRequest;
    toJSON(message: ProcessKeygenTrafficRequest): unknown;
    create<I extends {
        sessionId?: string | undefined;
        payload?: {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        sessionId?: string | undefined;
        payload?: ({
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & { [K in Exclude<keyof I["payload"], keyof TrafficOut>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ProcessKeygenTrafficRequest>]: never; }>(base?: I | undefined): ProcessKeygenTrafficRequest;
    fromPartial<I_1 extends {
        sessionId?: string | undefined;
        payload?: {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        sessionId?: string | undefined;
        payload?: ({
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I_1["payload"], keyof TrafficOut>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ProcessKeygenTrafficRequest>]: never; }>(object: I_1): ProcessKeygenTrafficRequest;
};
export declare const ProcessKeygenTrafficResponse: {
    encode(_: ProcessKeygenTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessKeygenTrafficResponse;
    fromJSON(_: any): ProcessKeygenTrafficResponse;
    toJSON(_: ProcessKeygenTrafficResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ProcessKeygenTrafficResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ProcessKeygenTrafficResponse;
};
export declare const ProcessSignTrafficRequest: {
    encode(message: ProcessSignTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessSignTrafficRequest;
    fromJSON(object: any): ProcessSignTrafficRequest;
    toJSON(message: ProcessSignTrafficRequest): unknown;
    create<I extends {
        sessionId?: string | undefined;
        payload?: {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        sessionId?: string | undefined;
        payload?: ({
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & { [K in Exclude<keyof I["payload"], keyof TrafficOut>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ProcessSignTrafficRequest>]: never; }>(base?: I | undefined): ProcessSignTrafficRequest;
    fromPartial<I_1 extends {
        sessionId?: string | undefined;
        payload?: {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        sessionId?: string | undefined;
        payload?: ({
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I_1["payload"], keyof TrafficOut>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ProcessSignTrafficRequest>]: never; }>(object: I_1): ProcessSignTrafficRequest;
};
export declare const ProcessSignTrafficResponse: {
    encode(_: ProcessSignTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessSignTrafficResponse;
    fromJSON(_: any): ProcessSignTrafficResponse;
    toJSON(_: ProcessSignTrafficResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ProcessSignTrafficResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ProcessSignTrafficResponse;
};
export declare const VotePubKeyRequest: {
    encode(message: VotePubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VotePubKeyRequest;
    fromJSON(object: any): VotePubKeyRequest;
    toJSON(message: VotePubKeyRequest): unknown;
    create<I extends {
        pollKey?: {
            module?: string | undefined;
            id?: string | undefined;
        } | undefined;
        result?: {
            data?: {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        pollKey?: ({
            module?: string | undefined;
            id?: string | undefined;
        } & {
            module?: string | undefined;
            id?: string | undefined;
        } & { [K in Exclude<keyof I["pollKey"], keyof PollKey>]: never; }) | undefined;
        result?: ({
            data?: {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            data?: ({
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } & {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } & { [K_1 in Exclude<keyof I["result"]["data"], keyof import("../tofnd/v1beta1/tofnd").KeygenOutput>]: never; }) | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & { [K_2 in Exclude<keyof I["result"]["criminals"]["criminals"][number], keyof import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal>]: never; })[] & { [K_3 in Exclude<keyof I["result"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["result"]["criminals"], "criminals">]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["result"], keyof MessageOut_KeygenResult>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_6 in Exclude<keyof I, keyof VotePubKeyRequest>]: never; }>(base?: I | undefined): VotePubKeyRequest;
    fromPartial<I_1 extends {
        pollKey?: {
            module?: string | undefined;
            id?: string | undefined;
        } | undefined;
        result?: {
            data?: {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        pollKey?: ({
            module?: string | undefined;
            id?: string | undefined;
        } & {
            module?: string | undefined;
            id?: string | undefined;
        } & { [K_7 in Exclude<keyof I_1["pollKey"], keyof PollKey>]: never; }) | undefined;
        result?: ({
            data?: {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            data?: ({
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } & {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } & { [K_8 in Exclude<keyof I_1["result"]["data"], keyof import("../tofnd/v1beta1/tofnd").KeygenOutput>]: never; }) | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & { [K_9 in Exclude<keyof I_1["result"]["criminals"]["criminals"][number], keyof import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal>]: never; })[] & { [K_10 in Exclude<keyof I_1["result"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I_1["result"]["criminals"], "criminals">]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I_1["result"], keyof MessageOut_KeygenResult>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof VotePubKeyRequest>]: never; }>(object: I_1): VotePubKeyRequest;
};
export declare const VotePubKeyResponse: {
    encode(message: VotePubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VotePubKeyResponse;
    fromJSON(object: any): VotePubKeyResponse;
    toJSON(message: VotePubKeyResponse): unknown;
    create<I extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & { [K in Exclude<keyof I, "log">]: never; }>(base?: I | undefined): VotePubKeyResponse;
    fromPartial<I_1 extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "log">]: never; }>(object: I_1): VotePubKeyResponse;
};
export declare const VoteSigRequest: {
    encode(message: VoteSigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSigRequest;
    fromJSON(object: any): VoteSigRequest;
    toJSON(message: VoteSigRequest): unknown;
    create<I extends {
        pollKey?: {
            module?: string | undefined;
            id?: string | undefined;
        } | undefined;
        result?: {
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        pollKey?: ({
            module?: string | undefined;
            id?: string | undefined;
        } & {
            module?: string | undefined;
            id?: string | undefined;
        } & { [K in Exclude<keyof I["pollKey"], keyof PollKey>]: never; }) | undefined;
        result?: ({
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            signature?: Buffer | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & { [K_1 in Exclude<keyof I["result"]["criminals"]["criminals"][number], keyof import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal>]: never; })[] & { [K_2 in Exclude<keyof I["result"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["result"]["criminals"], "criminals">]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["result"], keyof MessageOut_SignResult>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_5 in Exclude<keyof I, keyof VoteSigRequest>]: never; }>(base?: I | undefined): VoteSigRequest;
    fromPartial<I_1 extends {
        pollKey?: {
            module?: string | undefined;
            id?: string | undefined;
        } | undefined;
        result?: {
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        pollKey?: ({
            module?: string | undefined;
            id?: string | undefined;
        } & {
            module?: string | undefined;
            id?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["pollKey"], keyof PollKey>]: never; }) | undefined;
        result?: ({
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            signature?: Buffer | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & { [K_7 in Exclude<keyof I_1["result"]["criminals"]["criminals"][number], keyof import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal>]: never; })[] & { [K_8 in Exclude<keyof I_1["result"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I_1["result"]["criminals"], "criminals">]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["result"], keyof MessageOut_SignResult>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof VoteSigRequest>]: never; }>(object: I_1): VoteSigRequest;
};
export declare const VoteSigResponse: {
    encode(message: VoteSigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSigResponse;
    fromJSON(object: any): VoteSigResponse;
    toJSON(message: VoteSigResponse): unknown;
    create<I extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & { [K in Exclude<keyof I, "log">]: never; }>(base?: I | undefined): VoteSigResponse;
    fromPartial<I_1 extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "log">]: never; }>(object: I_1): VoteSigResponse;
};
export declare const HeartBeatRequest: {
    encode(message: HeartBeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeartBeatRequest;
    fromJSON(object: any): HeartBeatRequest;
    toJSON(message: HeartBeatRequest): unknown;
    create<I extends {
        keyIds?: string[] | undefined;
        sender?: string | undefined;
    } & {
        keyIds?: (string[] & string[] & { [K in Exclude<keyof I["keyIds"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof HeartBeatRequest>]: never; }>(base?: I | undefined): HeartBeatRequest;
    fromPartial<I_1 extends {
        keyIds?: string[] | undefined;
        sender?: string | undefined;
    } & {
        keyIds?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["keyIds"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof HeartBeatRequest>]: never; }>(object: I_1): HeartBeatRequest;
};
export declare const HeartBeatResponse: {
    encode(_: HeartBeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeartBeatResponse;
    fromJSON(_: any): HeartBeatResponse;
    toJSON(_: HeartBeatResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): HeartBeatResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): HeartBeatResponse;
};
export declare const RegisterExternalKeysRequest: {
    encode(message: RegisterExternalKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysRequest;
    fromJSON(object: any): RegisterExternalKeysRequest;
    toJSON(message: RegisterExternalKeysRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        externalKeys?: {
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        }[] | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        externalKeys?: ({
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        }[] & ({
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        } & {
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        } & { [K in Exclude<keyof I["externalKeys"][number], keyof RegisterExternalKeysRequest_ExternalKey>]: never; })[] & { [K_1 in Exclude<keyof I["externalKeys"], keyof {
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof RegisterExternalKeysRequest>]: never; }>(base?: I | undefined): RegisterExternalKeysRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        externalKeys?: {
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        }[] | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        externalKeys?: ({
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        }[] & ({
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        } & {
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I_1["externalKeys"][number], keyof RegisterExternalKeysRequest_ExternalKey>]: never; })[] & { [K_4 in Exclude<keyof I_1["externalKeys"], keyof {
            id?: string | undefined;
            pubKey?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof RegisterExternalKeysRequest>]: never; }>(object: I_1): RegisterExternalKeysRequest;
};
export declare const RegisterExternalKeysRequest_ExternalKey: {
    encode(message: RegisterExternalKeysRequest_ExternalKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysRequest_ExternalKey;
    fromJSON(object: any): RegisterExternalKeysRequest_ExternalKey;
    toJSON(message: RegisterExternalKeysRequest_ExternalKey): unknown;
    create<I extends {
        id?: string | undefined;
        pubKey?: Buffer | undefined;
    } & {
        id?: string | undefined;
        pubKey?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof RegisterExternalKeysRequest_ExternalKey>]: never; }>(base?: I | undefined): RegisterExternalKeysRequest_ExternalKey;
    fromPartial<I_1 extends {
        id?: string | undefined;
        pubKey?: Buffer | undefined;
    } & {
        id?: string | undefined;
        pubKey?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RegisterExternalKeysRequest_ExternalKey>]: never; }>(object: I_1): RegisterExternalKeysRequest_ExternalKey;
};
export declare const RegisterExternalKeysResponse: {
    encode(_: RegisterExternalKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysResponse;
    fromJSON(_: any): RegisterExternalKeysResponse;
    toJSON(_: RegisterExternalKeysResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RegisterExternalKeysResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RegisterExternalKeysResponse;
};
export declare const SubmitMultisigPubKeysRequest: {
    encode(message: SubmitMultisigPubKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigPubKeysRequest;
    fromJSON(object: any): SubmitMultisigPubKeysRequest;
    toJSON(message: SubmitMultisigPubKeysRequest): unknown;
    create<I extends {
        keyId?: string | undefined;
        sigKeyPairs?: {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[] | undefined;
        sender?: string | undefined;
    } & {
        keyId?: string | undefined;
        sigKeyPairs?: ({
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[] & ({
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        } & {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        } & { [K in Exclude<keyof I["sigKeyPairs"][number], keyof SigKeyPair>]: never; })[] & { [K_1 in Exclude<keyof I["sigKeyPairs"], keyof {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SubmitMultisigPubKeysRequest>]: never; }>(base?: I | undefined): SubmitMultisigPubKeysRequest;
    fromPartial<I_1 extends {
        keyId?: string | undefined;
        sigKeyPairs?: {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[] | undefined;
        sender?: string | undefined;
    } & {
        keyId?: string | undefined;
        sigKeyPairs?: ({
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[] & ({
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        } & {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I_1["sigKeyPairs"][number], keyof SigKeyPair>]: never; })[] & { [K_4 in Exclude<keyof I_1["sigKeyPairs"], keyof {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SubmitMultisigPubKeysRequest>]: never; }>(object: I_1): SubmitMultisigPubKeysRequest;
};
export declare const SubmitMultisigPubKeysResponse: {
    encode(_: SubmitMultisigPubKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigPubKeysResponse;
    fromJSON(_: any): SubmitMultisigPubKeysResponse;
    toJSON(_: SubmitMultisigPubKeysResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): SubmitMultisigPubKeysResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SubmitMultisigPubKeysResponse;
};
export declare const SubmitMultisigSignaturesRequest: {
    encode(message: SubmitMultisigSignaturesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigSignaturesRequest;
    fromJSON(object: any): SubmitMultisigSignaturesRequest;
    toJSON(message: SubmitMultisigSignaturesRequest): unknown;
    create<I extends {
        sigId?: string | undefined;
        signatures?: Buffer[] | undefined;
        sender?: string | undefined;
    } & {
        sigId?: string | undefined;
        signatures?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["signatures"], keyof Buffer[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SubmitMultisigSignaturesRequest>]: never; }>(base?: I | undefined): SubmitMultisigSignaturesRequest;
    fromPartial<I_1 extends {
        sigId?: string | undefined;
        signatures?: Buffer[] | undefined;
        sender?: string | undefined;
    } & {
        sigId?: string | undefined;
        signatures?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I_1["signatures"], keyof Buffer[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SubmitMultisigSignaturesRequest>]: never; }>(object: I_1): SubmitMultisigSignaturesRequest;
};
export declare const SubmitMultisigSignaturesResponse: {
    encode(_: SubmitMultisigSignaturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigSignaturesResponse;
    fromJSON(_: any): SubmitMultisigSignaturesResponse;
    toJSON(_: SubmitMultisigSignaturesResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): SubmitMultisigSignaturesResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SubmitMultisigSignaturesResponse;
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
