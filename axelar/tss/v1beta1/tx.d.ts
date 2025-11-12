/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PollKey } from "../../vote/exported/v1beta1/types";
import { KeyRole, SigKeyPair } from "../exported/v1beta1/types";
import { MessageOut_KeygenResult, MessageOut_SignResult, TrafficOut } from "../tofnd/v1beta1/tofnd";
import { Params } from "./params";
import { KeyInfo } from "./types";
export declare const protobufPackage = "axelar.tss.v1beta1";
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequest {
    $type: "axelar.tss.v1beta1.StartKeygenRequest";
    sender: string;
    keyInfo?: KeyInfo | undefined;
}
export interface StartKeygenResponse {
    $type: "axelar.tss.v1beta1.StartKeygenResponse";
}
export interface RotateKeyRequest {
    $type: "axelar.tss.v1beta1.RotateKeyRequest";
    chain: string;
    keyRole: KeyRole;
    keyId: string;
    sender: string;
}
export interface RotateKeyResponse {
    $type: "axelar.tss.v1beta1.RotateKeyResponse";
}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequest {
    $type: "axelar.tss.v1beta1.ProcessKeygenTrafficRequest";
    sessionId: string;
    payload?: TrafficOut | undefined;
    sender: string;
}
export interface ProcessKeygenTrafficResponse {
    $type: "axelar.tss.v1beta1.ProcessKeygenTrafficResponse";
}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequest {
    $type: "axelar.tss.v1beta1.ProcessSignTrafficRequest";
    sessionId: string;
    payload?: TrafficOut | undefined;
    sender: string;
}
export interface ProcessSignTrafficResponse {
    $type: "axelar.tss.v1beta1.ProcessSignTrafficResponse";
}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequest {
    $type: "axelar.tss.v1beta1.VotePubKeyRequest";
    pollKey?: PollKey | undefined;
    result?: MessageOut_KeygenResult | undefined;
    sender: string;
}
export interface VotePubKeyResponse {
    $type: "axelar.tss.v1beta1.VotePubKeyResponse";
    log: string;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequest {
    $type: "axelar.tss.v1beta1.VoteSigRequest";
    pollKey?: PollKey | undefined;
    result?: MessageOut_SignResult | undefined;
    sender: string;
}
export interface VoteSigResponse {
    $type: "axelar.tss.v1beta1.VoteSigResponse";
    log: string;
}
export interface HeartBeatRequest {
    $type: "axelar.tss.v1beta1.HeartBeatRequest";
    /**
     * Deprecated: this field will be removed in the next release
     *
     * @deprecated
     */
    keyIds: string[];
    sender: string;
}
export interface HeartBeatResponse {
    $type: "axelar.tss.v1beta1.HeartBeatResponse";
}
export interface RegisterExternalKeysRequest {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysRequest";
    chain: string;
    externalKeys: RegisterExternalKeysRequest_ExternalKey[];
    sender: string;
}
export interface RegisterExternalKeysRequest_ExternalKey {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysRequest.ExternalKey";
    id: string;
    pubKey: Buffer;
}
export interface RegisterExternalKeysResponse {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysResponse";
}
export interface SubmitMultisigPubKeysRequest {
    $type: "axelar.tss.v1beta1.SubmitMultisigPubKeysRequest";
    keyId: string;
    sigKeyPairs: SigKeyPair[];
    sender: string;
}
export interface SubmitMultisigPubKeysResponse {
    $type: "axelar.tss.v1beta1.SubmitMultisigPubKeysResponse";
}
export interface SubmitMultisigSignaturesRequest {
    $type: "axelar.tss.v1beta1.SubmitMultisigSignaturesRequest";
    sigId: string;
    signatures: Buffer[];
    sender: string;
}
export interface SubmitMultisigSignaturesResponse {
    $type: "axelar.tss.v1beta1.SubmitMultisigSignaturesResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.tss.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.tss.v1beta1.UpdateParamsResponse";
}
export declare const StartKeygenRequest: {
    $type: "axelar.tss.v1beta1.StartKeygenRequest";
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenRequest;
    fromJSON(object: any): StartKeygenRequest;
    toJSON(message: StartKeygenRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        keyInfo?: {
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
            keyId?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        keyInfo?: ({
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
            keyId?: string | undefined;
        } & {
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
            keyId?: string | undefined;
        } & { [K in Exclude<keyof I["keyInfo"], "$type" | "keyRole" | "keyType" | "keyId">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "sender" | "keyInfo">]: never; }>(base?: I | undefined): StartKeygenRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        keyInfo?: {
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
            keyId?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        keyInfo?: ({
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
            keyId?: string | undefined;
        } & {
            keyRole?: KeyRole | undefined;
            keyType?: import("../exported/v1beta1/types").KeyType | undefined;
            keyId?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["keyInfo"], "$type" | "keyRole" | "keyType" | "keyId">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "sender" | "keyInfo">]: never; }>(object: I_1): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    $type: "axelar.tss.v1beta1.StartKeygenResponse";
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenResponse;
    fromJSON(_: any): StartKeygenResponse;
    toJSON(_: StartKeygenResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): StartKeygenResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): StartKeygenResponse;
};
export declare const RotateKeyRequest: {
    $type: "axelar.tss.v1beta1.RotateKeyRequest";
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyRequest;
    fromJSON(object: any): RotateKeyRequest;
    toJSON(message: RotateKeyRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "chain" | "keyRole" | "keyId">]: never; }>(base?: I | undefined): RotateKeyRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "chain" | "keyRole" | "keyId">]: never; }>(object: I_1): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    $type: "axelar.tss.v1beta1.RotateKeyResponse";
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyResponse;
    fromJSON(_: any): RotateKeyResponse;
    toJSON(_: RotateKeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RotateKeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RotateKeyResponse;
};
export declare const ProcessKeygenTrafficRequest: {
    $type: "axelar.tss.v1beta1.ProcessKeygenTrafficRequest";
    encode(message: ProcessKeygenTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessKeygenTrafficRequest;
    fromJSON(object: any): ProcessKeygenTrafficRequest;
    toJSON(message: ProcessKeygenTrafficRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        payload?: {
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } | undefined;
        sessionId?: string | undefined;
    } & {
        sender?: string | undefined;
        payload?: ({
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } & {
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } & { [K in Exclude<keyof I["payload"], "$type" | "payload" | "isBroadcast" | "toPartyUid">]: never; }) | undefined;
        sessionId?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "sender" | "payload" | "sessionId">]: never; }>(base?: I | undefined): ProcessKeygenTrafficRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        payload?: {
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } | undefined;
        sessionId?: string | undefined;
    } & {
        sender?: string | undefined;
        payload?: ({
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } & {
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["payload"], "$type" | "payload" | "isBroadcast" | "toPartyUid">]: never; }) | undefined;
        sessionId?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "sender" | "payload" | "sessionId">]: never; }>(object: I_1): ProcessKeygenTrafficRequest;
};
export declare const ProcessKeygenTrafficResponse: {
    $type: "axelar.tss.v1beta1.ProcessKeygenTrafficResponse";
    encode(_: ProcessKeygenTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessKeygenTrafficResponse;
    fromJSON(_: any): ProcessKeygenTrafficResponse;
    toJSON(_: ProcessKeygenTrafficResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ProcessKeygenTrafficResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ProcessKeygenTrafficResponse;
};
export declare const ProcessSignTrafficRequest: {
    $type: "axelar.tss.v1beta1.ProcessSignTrafficRequest";
    encode(message: ProcessSignTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessSignTrafficRequest;
    fromJSON(object: any): ProcessSignTrafficRequest;
    toJSON(message: ProcessSignTrafficRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        payload?: {
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } | undefined;
        sessionId?: string | undefined;
    } & {
        sender?: string | undefined;
        payload?: ({
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } & {
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } & { [K in Exclude<keyof I["payload"], "$type" | "payload" | "isBroadcast" | "toPartyUid">]: never; }) | undefined;
        sessionId?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "sender" | "payload" | "sessionId">]: never; }>(base?: I | undefined): ProcessSignTrafficRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        payload?: {
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } | undefined;
        sessionId?: string | undefined;
    } & {
        sender?: string | undefined;
        payload?: ({
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } & {
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
            toPartyUid?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["payload"], "$type" | "payload" | "isBroadcast" | "toPartyUid">]: never; }) | undefined;
        sessionId?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "sender" | "payload" | "sessionId">]: never; }>(object: I_1): ProcessSignTrafficRequest;
};
export declare const ProcessSignTrafficResponse: {
    $type: "axelar.tss.v1beta1.ProcessSignTrafficResponse";
    encode(_: ProcessSignTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessSignTrafficResponse;
    fromJSON(_: any): ProcessSignTrafficResponse;
    toJSON(_: ProcessSignTrafficResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ProcessSignTrafficResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ProcessSignTrafficResponse;
};
export declare const VotePubKeyRequest: {
    $type: "axelar.tss.v1beta1.VotePubKeyRequest";
    encode(message: VotePubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VotePubKeyRequest;
    fromJSON(object: any): VotePubKeyRequest;
    toJSON(message: VotePubKeyRequest): unknown;
    create<I extends {
        sender?: string | undefined;
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
        pollKey?: {
            id?: string | undefined;
            module?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
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
            } & { [K in Exclude<keyof I["result"]["data"], "$type" | "pubKey" | "groupRecoverInfo" | "privateRecoverInfo">]: never; }) | undefined;
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
                } & { [K_1 in Exclude<keyof I["result"]["criminals"]["criminals"][number], "$type" | "partyUid" | "crimeType">]: never; })[] & { [K_2 in Exclude<keyof I["result"]["criminals"]["criminals"], "$type" | keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["result"]["criminals"], "$type" | "criminals">]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["result"], "$type" | "data" | "criminals">]: never; }) | undefined;
        pollKey?: ({
            id?: string | undefined;
            module?: string | undefined;
        } & {
            id?: string | undefined;
            module?: string | undefined;
        } & { [K_5 in Exclude<keyof I["pollKey"], "$type" | "id" | "module">]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, "$type" | "sender" | "result" | "pollKey">]: never; }>(base?: I | undefined): VotePubKeyRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
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
        pollKey?: {
            id?: string | undefined;
            module?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
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
            } & { [K_7 in Exclude<keyof I_1["result"]["data"], "$type" | "pubKey" | "groupRecoverInfo" | "privateRecoverInfo">]: never; }) | undefined;
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
                } & { [K_8 in Exclude<keyof I_1["result"]["criminals"]["criminals"][number], "$type" | "partyUid" | "crimeType">]: never; })[] & { [K_9 in Exclude<keyof I_1["result"]["criminals"]["criminals"], "$type" | keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I_1["result"]["criminals"], "$type" | "criminals">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I_1["result"], "$type" | "data" | "criminals">]: never; }) | undefined;
        pollKey?: ({
            id?: string | undefined;
            module?: string | undefined;
        } & {
            id?: string | undefined;
            module?: string | undefined;
        } & { [K_12 in Exclude<keyof I_1["pollKey"], "$type" | "id" | "module">]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, "$type" | "sender" | "result" | "pollKey">]: never; }>(object: I_1): VotePubKeyRequest;
};
export declare const VotePubKeyResponse: {
    $type: "axelar.tss.v1beta1.VotePubKeyResponse";
    encode(message: VotePubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VotePubKeyResponse;
    fromJSON(object: any): VotePubKeyResponse;
    toJSON(message: VotePubKeyResponse): unknown;
    create<I extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "log">]: never; }>(base?: I | undefined): VotePubKeyResponse;
    fromPartial<I_1 extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "log">]: never; }>(object: I_1): VotePubKeyResponse;
};
export declare const VoteSigRequest: {
    $type: "axelar.tss.v1beta1.VoteSigRequest";
    encode(message: VoteSigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSigRequest;
    fromJSON(object: any): VoteSigRequest;
    toJSON(message: VoteSigRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        result?: {
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        pollKey?: {
            id?: string | undefined;
            module?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
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
                } & { [K in Exclude<keyof I["result"]["criminals"]["criminals"][number], "$type" | "partyUid" | "crimeType">]: never; })[] & { [K_1 in Exclude<keyof I["result"]["criminals"]["criminals"], "$type" | keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["result"]["criminals"], "$type" | "criminals">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["result"], "$type" | "signature" | "criminals">]: never; }) | undefined;
        pollKey?: ({
            id?: string | undefined;
            module?: string | undefined;
        } & {
            id?: string | undefined;
            module?: string | undefined;
        } & { [K_4 in Exclude<keyof I["pollKey"], "$type" | "id" | "module">]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "$type" | "sender" | "result" | "pollKey">]: never; }>(base?: I | undefined): VoteSigRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        result?: {
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        pollKey?: {
            id?: string | undefined;
            module?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
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
                } & { [K_6 in Exclude<keyof I_1["result"]["criminals"]["criminals"][number], "$type" | "partyUid" | "crimeType">]: never; })[] & { [K_7 in Exclude<keyof I_1["result"]["criminals"]["criminals"], "$type" | keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I_1["result"]["criminals"], "$type" | "criminals">]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["result"], "$type" | "signature" | "criminals">]: never; }) | undefined;
        pollKey?: ({
            id?: string | undefined;
            module?: string | undefined;
        } & {
            id?: string | undefined;
            module?: string | undefined;
        } & { [K_10 in Exclude<keyof I_1["pollKey"], "$type" | "id" | "module">]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "$type" | "sender" | "result" | "pollKey">]: never; }>(object: I_1): VoteSigRequest;
};
export declare const VoteSigResponse: {
    $type: "axelar.tss.v1beta1.VoteSigResponse";
    encode(message: VoteSigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSigResponse;
    fromJSON(object: any): VoteSigResponse;
    toJSON(message: VoteSigResponse): unknown;
    create<I extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "log">]: never; }>(base?: I | undefined): VoteSigResponse;
    fromPartial<I_1 extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "log">]: never; }>(object: I_1): VoteSigResponse;
};
export declare const HeartBeatRequest: {
    $type: "axelar.tss.v1beta1.HeartBeatRequest";
    encode(message: HeartBeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeartBeatRequest;
    fromJSON(object: any): HeartBeatRequest;
    toJSON(message: HeartBeatRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        keyIds?: string[] | undefined;
    } & {
        sender?: string | undefined;
        keyIds?: (string[] & string[] & { [K in Exclude<keyof I["keyIds"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "sender" | "keyIds">]: never; }>(base?: I | undefined): HeartBeatRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        keyIds?: string[] | undefined;
    } & {
        sender?: string | undefined;
        keyIds?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["keyIds"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "sender" | "keyIds">]: never; }>(object: I_1): HeartBeatRequest;
};
export declare const HeartBeatResponse: {
    $type: "axelar.tss.v1beta1.HeartBeatResponse";
    encode(_: HeartBeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeartBeatResponse;
    fromJSON(_: any): HeartBeatResponse;
    toJSON(_: HeartBeatResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): HeartBeatResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): HeartBeatResponse;
};
export declare const RegisterExternalKeysRequest: {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysRequest";
    encode(message: RegisterExternalKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysRequest;
    fromJSON(object: any): RegisterExternalKeysRequest;
    toJSON(message: RegisterExternalKeysRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        chain?: string | undefined;
        externalKeys?: {
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        chain?: string | undefined;
        externalKeys?: ({
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        }[] & ({
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        } & {
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        } & { [K in Exclude<keyof I["externalKeys"][number], "$type" | "pubKey" | "id">]: never; })[] & { [K_1 in Exclude<keyof I["externalKeys"], "$type" | keyof {
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "sender" | "chain" | "externalKeys">]: never; }>(base?: I | undefined): RegisterExternalKeysRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        chain?: string | undefined;
        externalKeys?: {
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        chain?: string | undefined;
        externalKeys?: ({
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        }[] & ({
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        } & {
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["externalKeys"][number], "$type" | "pubKey" | "id">]: never; })[] & { [K_4 in Exclude<keyof I_1["externalKeys"], "$type" | keyof {
            pubKey?: Buffer | undefined;
            id?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "sender" | "chain" | "externalKeys">]: never; }>(object: I_1): RegisterExternalKeysRequest;
};
export declare const RegisterExternalKeysRequest_ExternalKey: {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysRequest.ExternalKey";
    encode(message: RegisterExternalKeysRequest_ExternalKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysRequest_ExternalKey;
    fromJSON(object: any): RegisterExternalKeysRequest_ExternalKey;
    toJSON(message: RegisterExternalKeysRequest_ExternalKey): unknown;
    create<I extends {
        pubKey?: Buffer | undefined;
        id?: string | undefined;
    } & {
        pubKey?: Buffer | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "pubKey" | "id">]: never; }>(base?: I | undefined): RegisterExternalKeysRequest_ExternalKey;
    fromPartial<I_1 extends {
        pubKey?: Buffer | undefined;
        id?: string | undefined;
    } & {
        pubKey?: Buffer | undefined;
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "pubKey" | "id">]: never; }>(object: I_1): RegisterExternalKeysRequest_ExternalKey;
};
export declare const RegisterExternalKeysResponse: {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysResponse";
    encode(_: RegisterExternalKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysResponse;
    fromJSON(_: any): RegisterExternalKeysResponse;
    toJSON(_: RegisterExternalKeysResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RegisterExternalKeysResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RegisterExternalKeysResponse;
};
export declare const SubmitMultisigPubKeysRequest: {
    $type: "axelar.tss.v1beta1.SubmitMultisigPubKeysRequest";
    encode(message: SubmitMultisigPubKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigPubKeysRequest;
    fromJSON(object: any): SubmitMultisigPubKeysRequest;
    toJSON(message: SubmitMultisigPubKeysRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        keyId?: string | undefined;
        sigKeyPairs?: {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
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
        } & { [K in Exclude<keyof I["sigKeyPairs"][number], "$type" | "pubKey" | "signature">]: never; })[] & { [K_1 in Exclude<keyof I["sigKeyPairs"], "$type" | keyof {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "sender" | "keyId" | "sigKeyPairs">]: never; }>(base?: I | undefined): SubmitMultisigPubKeysRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        keyId?: string | undefined;
        sigKeyPairs?: {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
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
        } & { [K_3 in Exclude<keyof I_1["sigKeyPairs"][number], "$type" | "pubKey" | "signature">]: never; })[] & { [K_4 in Exclude<keyof I_1["sigKeyPairs"], "$type" | keyof {
            pubKey?: Buffer | undefined;
            signature?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "sender" | "keyId" | "sigKeyPairs">]: never; }>(object: I_1): SubmitMultisigPubKeysRequest;
};
export declare const SubmitMultisigPubKeysResponse: {
    $type: "axelar.tss.v1beta1.SubmitMultisigPubKeysResponse";
    encode(_: SubmitMultisigPubKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigPubKeysResponse;
    fromJSON(_: any): SubmitMultisigPubKeysResponse;
    toJSON(_: SubmitMultisigPubKeysResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): SubmitMultisigPubKeysResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): SubmitMultisigPubKeysResponse;
};
export declare const SubmitMultisigSignaturesRequest: {
    $type: "axelar.tss.v1beta1.SubmitMultisigSignaturesRequest";
    encode(message: SubmitMultisigSignaturesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigSignaturesRequest;
    fromJSON(object: any): SubmitMultisigSignaturesRequest;
    toJSON(message: SubmitMultisigSignaturesRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        signatures?: Buffer[] | undefined;
        sigId?: string | undefined;
    } & {
        sender?: string | undefined;
        signatures?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["signatures"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        sigId?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "sender" | "signatures" | "sigId">]: never; }>(base?: I | undefined): SubmitMultisigSignaturesRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        signatures?: Buffer[] | undefined;
        sigId?: string | undefined;
    } & {
        sender?: string | undefined;
        signatures?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I_1["signatures"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        sigId?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "sender" | "signatures" | "sigId">]: never; }>(object: I_1): SubmitMultisigSignaturesRequest;
};
export declare const SubmitMultisigSignaturesResponse: {
    $type: "axelar.tss.v1beta1.SubmitMultisigSignaturesResponse";
    encode(_: SubmitMultisigSignaturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigSignaturesResponse;
    fromJSON(_: any): SubmitMultisigSignaturesResponse;
    toJSON(_: SubmitMultisigSignaturesResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): SubmitMultisigSignaturesResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): SubmitMultisigSignaturesResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.tss.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends {
        params?: {
            keyRequirements?: {
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[] | undefined;
            suspendDurationInBlocks?: string | number | Long.Long | undefined;
            heartbeatPeriodInBlocks?: string | number | Long.Long | undefined;
            maxMissedBlocksPerWindow?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            unbondingLockingKeyRotationCount?: string | number | Long.Long | undefined;
            externalMultisigThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            maxSignQueueSize?: string | number | Long.Long | undefined;
            maxSimultaneousSignShares?: string | number | Long.Long | undefined;
            tssSignedBlocksWindow?: string | number | Long.Long | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        params?: ({
            keyRequirements?: {
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[] | undefined;
            suspendDurationInBlocks?: string | number | Long.Long | undefined;
            heartbeatPeriodInBlocks?: string | number | Long.Long | undefined;
            maxMissedBlocksPerWindow?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            unbondingLockingKeyRotationCount?: string | number | Long.Long | undefined;
            externalMultisigThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            maxSignQueueSize?: string | number | Long.Long | undefined;
            maxSimultaneousSignShares?: string | number | Long.Long | undefined;
            tssSignedBlocksWindow?: string | number | Long.Long | undefined;
        } & {
            keyRequirements?: ({
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[] & ({
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            } & {
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K in Exclude<keyof I["params"]["keyRequirements"][number]["minKeygenThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_1 in Exclude<keyof I["params"]["keyRequirements"][number]["minKeygenThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["params"]["keyRequirements"][number]["minKeygenThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                safetyThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_3 in Exclude<keyof I["params"]["keyRequirements"][number]["safetyThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_4 in Exclude<keyof I["params"]["keyRequirements"][number]["safetyThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["params"]["keyRequirements"][number]["safetyThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_6 in Exclude<keyof I["params"]["keyRequirements"][number]["maxTotalShareCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
                minTotalShareCount?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_7 in Exclude<keyof I["params"]["keyRequirements"][number]["minTotalShareCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
                keygenVotingThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_8 in Exclude<keyof I["params"]["keyRequirements"][number]["keygenVotingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_9 in Exclude<keyof I["params"]["keyRequirements"][number]["keygenVotingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["params"]["keyRequirements"][number]["keygenVotingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                signVotingThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_11 in Exclude<keyof I["params"]["keyRequirements"][number]["signVotingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_12 in Exclude<keyof I["params"]["keyRequirements"][number]["signVotingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_13 in Exclude<keyof I["params"]["keyRequirements"][number]["signVotingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                keygenTimeout?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_14 in Exclude<keyof I["params"]["keyRequirements"][number]["keygenTimeout"], "$type" | keyof Long.Long>]: never; }) | undefined;
                signTimeout?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_15 in Exclude<keyof I["params"]["keyRequirements"][number]["signTimeout"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["params"]["keyRequirements"][number], "$type" | "keyRole" | "keyType" | "minKeygenThreshold" | "safetyThreshold" | "keyShareDistributionPolicy" | "maxTotalShareCount" | "minTotalShareCount" | "keygenVotingThreshold" | "signVotingThreshold" | "keygenTimeout" | "signTimeout">]: never; })[] & { [K_17 in Exclude<keyof I["params"]["keyRequirements"], "$type" | keyof {
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            suspendDurationInBlocks?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_18 in Exclude<keyof I["params"]["suspendDurationInBlocks"], "$type" | keyof Long.Long>]: never; }) | undefined;
            heartbeatPeriodInBlocks?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_19 in Exclude<keyof I["params"]["heartbeatPeriodInBlocks"], "$type" | keyof Long.Long>]: never; }) | undefined;
            maxMissedBlocksPerWindow?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_20 in Exclude<keyof I["params"]["maxMissedBlocksPerWindow"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                denominator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_21 in Exclude<keyof I["params"]["maxMissedBlocksPerWindow"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["params"]["maxMissedBlocksPerWindow"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            unbondingLockingKeyRotationCount?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_23 in Exclude<keyof I["params"]["unbondingLockingKeyRotationCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
            externalMultisigThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_24 in Exclude<keyof I["params"]["externalMultisigThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                denominator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_25 in Exclude<keyof I["params"]["externalMultisigThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_26 in Exclude<keyof I["params"]["externalMultisigThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            maxSignQueueSize?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_27 in Exclude<keyof I["params"]["maxSignQueueSize"], "$type" | keyof Long.Long>]: never; }) | undefined;
            maxSimultaneousSignShares?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_28 in Exclude<keyof I["params"]["maxSimultaneousSignShares"], "$type" | keyof Long.Long>]: never; }) | undefined;
            tssSignedBlocksWindow?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_29 in Exclude<keyof I["params"]["tssSignedBlocksWindow"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_30 in Exclude<keyof I["params"], "$type" | "keyRequirements" | "suspendDurationInBlocks" | "heartbeatPeriodInBlocks" | "maxMissedBlocksPerWindow" | "unbondingLockingKeyRotationCount" | "externalMultisigThreshold" | "maxSignQueueSize" | "maxSimultaneousSignShares" | "tssSignedBlocksWindow">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_31 in Exclude<keyof I, "$type" | "params" | "authority">]: never; }>(base?: I | undefined): UpdateParamsRequest;
    fromPartial<I_1 extends {
        params?: {
            keyRequirements?: {
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[] | undefined;
            suspendDurationInBlocks?: string | number | Long.Long | undefined;
            heartbeatPeriodInBlocks?: string | number | Long.Long | undefined;
            maxMissedBlocksPerWindow?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            unbondingLockingKeyRotationCount?: string | number | Long.Long | undefined;
            externalMultisigThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            maxSignQueueSize?: string | number | Long.Long | undefined;
            maxSimultaneousSignShares?: string | number | Long.Long | undefined;
            tssSignedBlocksWindow?: string | number | Long.Long | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        params?: ({
            keyRequirements?: {
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[] | undefined;
            suspendDurationInBlocks?: string | number | Long.Long | undefined;
            heartbeatPeriodInBlocks?: string | number | Long.Long | undefined;
            maxMissedBlocksPerWindow?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            unbondingLockingKeyRotationCount?: string | number | Long.Long | undefined;
            externalMultisigThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            maxSignQueueSize?: string | number | Long.Long | undefined;
            maxSimultaneousSignShares?: string | number | Long.Long | undefined;
            tssSignedBlocksWindow?: string | number | Long.Long | undefined;
        } & {
            keyRequirements?: ({
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[] & ({
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            } & {
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_32 in Exclude<keyof I_1["params"]["keyRequirements"][number]["minKeygenThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_33 in Exclude<keyof I_1["params"]["keyRequirements"][number]["minKeygenThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_34 in Exclude<keyof I_1["params"]["keyRequirements"][number]["minKeygenThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                safetyThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_35 in Exclude<keyof I_1["params"]["keyRequirements"][number]["safetyThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_36 in Exclude<keyof I_1["params"]["keyRequirements"][number]["safetyThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["params"]["keyRequirements"][number]["safetyThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_38 in Exclude<keyof I_1["params"]["keyRequirements"][number]["maxTotalShareCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
                minTotalShareCount?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_39 in Exclude<keyof I_1["params"]["keyRequirements"][number]["minTotalShareCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
                keygenVotingThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_40 in Exclude<keyof I_1["params"]["keyRequirements"][number]["keygenVotingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_41 in Exclude<keyof I_1["params"]["keyRequirements"][number]["keygenVotingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_42 in Exclude<keyof I_1["params"]["keyRequirements"][number]["keygenVotingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                signVotingThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_43 in Exclude<keyof I_1["params"]["keyRequirements"][number]["signVotingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & { [K_44 in Exclude<keyof I_1["params"]["keyRequirements"][number]["signVotingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_45 in Exclude<keyof I_1["params"]["keyRequirements"][number]["signVotingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                keygenTimeout?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_46 in Exclude<keyof I_1["params"]["keyRequirements"][number]["keygenTimeout"], "$type" | keyof Long.Long>]: never; }) | undefined;
                signTimeout?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_47 in Exclude<keyof I_1["params"]["keyRequirements"][number]["signTimeout"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_48 in Exclude<keyof I_1["params"]["keyRequirements"][number], "$type" | "keyRole" | "keyType" | "minKeygenThreshold" | "safetyThreshold" | "keyShareDistributionPolicy" | "maxTotalShareCount" | "minTotalShareCount" | "keygenVotingThreshold" | "signVotingThreshold" | "keygenTimeout" | "signTimeout">]: never; })[] & { [K_49 in Exclude<keyof I_1["params"]["keyRequirements"], "$type" | keyof {
                keyRole?: KeyRole | undefined;
                keyType?: import("../exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            suspendDurationInBlocks?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_50 in Exclude<keyof I_1["params"]["suspendDurationInBlocks"], "$type" | keyof Long.Long>]: never; }) | undefined;
            heartbeatPeriodInBlocks?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_51 in Exclude<keyof I_1["params"]["heartbeatPeriodInBlocks"], "$type" | keyof Long.Long>]: never; }) | undefined;
            maxMissedBlocksPerWindow?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_52 in Exclude<keyof I_1["params"]["maxMissedBlocksPerWindow"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                denominator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_53 in Exclude<keyof I_1["params"]["maxMissedBlocksPerWindow"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_54 in Exclude<keyof I_1["params"]["maxMissedBlocksPerWindow"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            unbondingLockingKeyRotationCount?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_55 in Exclude<keyof I_1["params"]["unbondingLockingKeyRotationCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
            externalMultisigThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_56 in Exclude<keyof I_1["params"]["externalMultisigThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                denominator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_57 in Exclude<keyof I_1["params"]["externalMultisigThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_58 in Exclude<keyof I_1["params"]["externalMultisigThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            maxSignQueueSize?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_59 in Exclude<keyof I_1["params"]["maxSignQueueSize"], "$type" | keyof Long.Long>]: never; }) | undefined;
            maxSimultaneousSignShares?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_60 in Exclude<keyof I_1["params"]["maxSimultaneousSignShares"], "$type" | keyof Long.Long>]: never; }) | undefined;
            tssSignedBlocksWindow?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_61 in Exclude<keyof I_1["params"]["tssSignedBlocksWindow"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_62 in Exclude<keyof I_1["params"], "$type" | "keyRequirements" | "suspendDurationInBlocks" | "heartbeatPeriodInBlocks" | "maxMissedBlocksPerWindow" | "unbondingLockingKeyRotationCount" | "externalMultisigThreshold" | "maxSignQueueSize" | "maxSimultaneousSignShares" | "tssSignedBlocksWindow">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_63 in Exclude<keyof I_1, "$type" | "params" | "authority">]: never; }>(object: I_1): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.tss.v1beta1.UpdateParamsResponse";
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
