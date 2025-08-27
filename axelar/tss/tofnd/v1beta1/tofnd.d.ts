/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.tss.tofnd.v1beta1";
/** File copied from golang tofnd with minor tweaks */
export interface RecoverRequest {
    keygenInit?: KeygenInit | undefined;
    keygenOutput?: KeygenOutput | undefined;
}
export interface RecoverResponse {
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
    /** pub_key; common for all parties */
    pubKey: Buffer;
    /** recover info of all parties' shares; common for all parties */
    groupRecoverInfo: Buffer;
    /** private recover info of this party's shares; unique for each party */
    privateRecoverInfo: Buffer;
}
export interface MessageIn {
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
    /** Success response */
    data?: KeygenOutput | undefined;
    /** Faiilure response */
    criminals?: MessageOut_CriminalList | undefined;
}
/** Sign's response types */
export interface MessageOut_SignResult {
    /** Success response */
    signature?: Buffer | undefined;
    /** Failure response */
    criminals?: MessageOut_CriminalList | undefined;
}
/** Keygen/Sign failure response message */
export interface MessageOut_CriminalList {
    criminals: MessageOut_CriminalList_Criminal[];
}
export interface MessageOut_CriminalList_Criminal {
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
    fromPartyUid: string;
    payload: Buffer;
    isBroadcast: boolean;
}
export interface TrafficOut {
    toPartyUid: string;
    payload: Buffer;
    isBroadcast: boolean;
}
export interface KeygenInit {
    newKeyUid: string;
    partyUids: string[];
    partyShareCounts: number[];
    /** parties[my_party_index] belongs to the server */
    myPartyIndex: number;
    threshold: number;
}
export interface SignInit {
    newSigUid: string;
    keyUid: string;
    /** TODO replace this with a subset of indices? */
    partyUids: string[];
    messageToSign: Buffer;
}
export declare const RecoverRequest: {
    encode(message: RecoverRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecoverRequest;
    fromJSON(object: any): RecoverRequest;
    toJSON(message: RecoverRequest): unknown;
    create<I extends {
        keygenInit?: {
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } | undefined;
        keygenOutput?: {
            pubKey?: Buffer | undefined;
            groupRecoverInfo?: Buffer | undefined;
            privateRecoverInfo?: Buffer | undefined;
        } | undefined;
    } & {
        keygenInit?: ({
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & {
            newKeyUid?: string | undefined;
            partyUids?: (string[] & string[] & { [K in Exclude<keyof I["keygenInit"]["partyUids"], keyof string[]>]: never; }) | undefined;
            partyShareCounts?: (number[] & number[] & { [K_1 in Exclude<keyof I["keygenInit"]["partyShareCounts"], keyof number[]>]: never; }) | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & { [K_2 in Exclude<keyof I["keygenInit"], keyof KeygenInit>]: never; }) | undefined;
        keygenOutput?: ({
            pubKey?: Buffer | undefined;
            groupRecoverInfo?: Buffer | undefined;
            privateRecoverInfo?: Buffer | undefined;
        } & {
            pubKey?: Buffer | undefined;
            groupRecoverInfo?: Buffer | undefined;
            privateRecoverInfo?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I["keygenOutput"], keyof KeygenOutput>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof RecoverRequest>]: never; }>(base?: I | undefined): RecoverRequest;
    fromPartial<I_1 extends {
        keygenInit?: {
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } | undefined;
        keygenOutput?: {
            pubKey?: Buffer | undefined;
            groupRecoverInfo?: Buffer | undefined;
            privateRecoverInfo?: Buffer | undefined;
        } | undefined;
    } & {
        keygenInit?: ({
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & {
            newKeyUid?: string | undefined;
            partyUids?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["keygenInit"]["partyUids"], keyof string[]>]: never; }) | undefined;
            partyShareCounts?: (number[] & number[] & { [K_6 in Exclude<keyof I_1["keygenInit"]["partyShareCounts"], keyof number[]>]: never; }) | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & { [K_7 in Exclude<keyof I_1["keygenInit"], keyof KeygenInit>]: never; }) | undefined;
        keygenOutput?: ({
            pubKey?: Buffer | undefined;
            groupRecoverInfo?: Buffer | undefined;
            privateRecoverInfo?: Buffer | undefined;
        } & {
            pubKey?: Buffer | undefined;
            groupRecoverInfo?: Buffer | undefined;
            privateRecoverInfo?: Buffer | undefined;
        } & { [K_8 in Exclude<keyof I_1["keygenOutput"], keyof KeygenOutput>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof RecoverRequest>]: never; }>(object: I_1): RecoverRequest;
};
export declare const RecoverResponse: {
    encode(message: RecoverResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecoverResponse;
    fromJSON(object: any): RecoverResponse;
    toJSON(message: RecoverResponse): unknown;
    create<I extends {
        response?: RecoverResponse_Response | undefined;
    } & {
        response?: RecoverResponse_Response | undefined;
    } & { [K in Exclude<keyof I, "response">]: never; }>(base?: I | undefined): RecoverResponse;
    fromPartial<I_1 extends {
        response?: RecoverResponse_Response | undefined;
    } & {
        response?: RecoverResponse_Response | undefined;
    } & { [K_1 in Exclude<keyof I_1, "response">]: never; }>(object: I_1): RecoverResponse;
};
export declare const KeygenOutput: {
    encode(message: KeygenOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOutput;
    fromJSON(object: any): KeygenOutput;
    toJSON(message: KeygenOutput): unknown;
    create<I extends {
        pubKey?: Buffer | undefined;
        groupRecoverInfo?: Buffer | undefined;
        privateRecoverInfo?: Buffer | undefined;
    } & {
        pubKey?: Buffer | undefined;
        groupRecoverInfo?: Buffer | undefined;
        privateRecoverInfo?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof KeygenOutput>]: never; }>(base?: I | undefined): KeygenOutput;
    fromPartial<I_1 extends {
        pubKey?: Buffer | undefined;
        groupRecoverInfo?: Buffer | undefined;
        privateRecoverInfo?: Buffer | undefined;
    } & {
        pubKey?: Buffer | undefined;
        groupRecoverInfo?: Buffer | undefined;
        privateRecoverInfo?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeygenOutput>]: never; }>(object: I_1): KeygenOutput;
};
export declare const MessageIn: {
    encode(message: MessageIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageIn;
    fromJSON(object: any): MessageIn;
    toJSON(message: MessageIn): unknown;
    create<I extends {
        keygenInit?: {
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } | undefined;
        signInit?: {
            newSigUid?: string | undefined;
            keyUid?: string | undefined;
            partyUids?: string[] | undefined;
            messageToSign?: Buffer | undefined;
        } | undefined;
        traffic?: {
            fromPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        abort?: boolean | undefined;
    } & {
        keygenInit?: ({
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & {
            newKeyUid?: string | undefined;
            partyUids?: (string[] & string[] & { [K in Exclude<keyof I["keygenInit"]["partyUids"], keyof string[]>]: never; }) | undefined;
            partyShareCounts?: (number[] & number[] & { [K_1 in Exclude<keyof I["keygenInit"]["partyShareCounts"], keyof number[]>]: never; }) | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & { [K_2 in Exclude<keyof I["keygenInit"], keyof KeygenInit>]: never; }) | undefined;
        signInit?: ({
            newSigUid?: string | undefined;
            keyUid?: string | undefined;
            partyUids?: string[] | undefined;
            messageToSign?: Buffer | undefined;
        } & {
            newSigUid?: string | undefined;
            keyUid?: string | undefined;
            partyUids?: (string[] & string[] & { [K_3 in Exclude<keyof I["signInit"]["partyUids"], keyof string[]>]: never; }) | undefined;
            messageToSign?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I["signInit"], keyof SignInit>]: never; }) | undefined;
        traffic?: ({
            fromPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            fromPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I["traffic"], keyof TrafficIn>]: never; }) | undefined;
        abort?: boolean | undefined;
    } & { [K_6 in Exclude<keyof I, keyof MessageIn>]: never; }>(base?: I | undefined): MessageIn;
    fromPartial<I_1 extends {
        keygenInit?: {
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } | undefined;
        signInit?: {
            newSigUid?: string | undefined;
            keyUid?: string | undefined;
            partyUids?: string[] | undefined;
            messageToSign?: Buffer | undefined;
        } | undefined;
        traffic?: {
            fromPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        abort?: boolean | undefined;
    } & {
        keygenInit?: ({
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & {
            newKeyUid?: string | undefined;
            partyUids?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["keygenInit"]["partyUids"], keyof string[]>]: never; }) | undefined;
            partyShareCounts?: (number[] & number[] & { [K_8 in Exclude<keyof I_1["keygenInit"]["partyShareCounts"], keyof number[]>]: never; }) | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & { [K_9 in Exclude<keyof I_1["keygenInit"], keyof KeygenInit>]: never; }) | undefined;
        signInit?: ({
            newSigUid?: string | undefined;
            keyUid?: string | undefined;
            partyUids?: string[] | undefined;
            messageToSign?: Buffer | undefined;
        } & {
            newSigUid?: string | undefined;
            keyUid?: string | undefined;
            partyUids?: (string[] & string[] & { [K_10 in Exclude<keyof I_1["signInit"]["partyUids"], keyof string[]>]: never; }) | undefined;
            messageToSign?: Buffer | undefined;
        } & { [K_11 in Exclude<keyof I_1["signInit"], keyof SignInit>]: never; }) | undefined;
        traffic?: ({
            fromPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            fromPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & { [K_12 in Exclude<keyof I_1["traffic"], keyof TrafficIn>]: never; }) | undefined;
        abort?: boolean | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof MessageIn>]: never; }>(object: I_1): MessageIn;
};
export declare const MessageOut: {
    encode(message: MessageOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut;
    fromJSON(object: any): MessageOut;
    toJSON(message: MessageOut): unknown;
    create<I extends {
        traffic?: {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        keygenResult?: {
            data?: {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        signResult?: {
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        needRecover?: boolean | undefined;
    } & {
        traffic?: ({
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & { [K in Exclude<keyof I["traffic"], keyof TrafficOut>]: never; }) | undefined;
        keygenResult?: ({
            data?: {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
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
            } & { [K_1 in Exclude<keyof I["keygenResult"]["data"], keyof KeygenOutput>]: never; }) | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & { [K_2 in Exclude<keyof I["keygenResult"]["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_3 in Exclude<keyof I["keygenResult"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["keygenResult"]["criminals"], "criminals">]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["keygenResult"], keyof MessageOut_KeygenResult>]: never; }) | undefined;
        signResult?: ({
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            signature?: Buffer | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & { [K_6 in Exclude<keyof I["signResult"]["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_7 in Exclude<keyof I["signResult"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["signResult"]["criminals"], "criminals">]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I["signResult"], keyof MessageOut_SignResult>]: never; }) | undefined;
        needRecover?: boolean | undefined;
    } & { [K_10 in Exclude<keyof I, keyof MessageOut>]: never; }>(base?: I | undefined): MessageOut;
    fromPartial<I_1 extends {
        traffic?: {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        keygenResult?: {
            data?: {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        signResult?: {
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        needRecover?: boolean | undefined;
    } & {
        traffic?: ({
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Buffer | undefined;
            isBroadcast?: boolean | undefined;
        } & { [K_11 in Exclude<keyof I_1["traffic"], keyof TrafficOut>]: never; }) | undefined;
        keygenResult?: ({
            data?: {
                pubKey?: Buffer | undefined;
                groupRecoverInfo?: Buffer | undefined;
                privateRecoverInfo?: Buffer | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
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
            } & { [K_12 in Exclude<keyof I_1["keygenResult"]["data"], keyof KeygenOutput>]: never; }) | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & { [K_13 in Exclude<keyof I_1["keygenResult"]["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_14 in Exclude<keyof I_1["keygenResult"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I_1["keygenResult"]["criminals"], "criminals">]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I_1["keygenResult"], keyof MessageOut_KeygenResult>]: never; }) | undefined;
        signResult?: ({
            signature?: Buffer | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            signature?: Buffer | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & { [K_17 in Exclude<keyof I_1["signResult"]["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_18 in Exclude<keyof I_1["signResult"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I_1["signResult"]["criminals"], "criminals">]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I_1["signResult"], keyof MessageOut_SignResult>]: never; }) | undefined;
        needRecover?: boolean | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof MessageOut>]: never; }>(object: I_1): MessageOut;
};
export declare const MessageOut_KeygenResult: {
    encode(message: MessageOut_KeygenResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut_KeygenResult;
    fromJSON(object: any): MessageOut_KeygenResult;
    toJSON(message: MessageOut_KeygenResult): unknown;
    create<I extends {
        data?: {
            pubKey?: Buffer | undefined;
            groupRecoverInfo?: Buffer | undefined;
            privateRecoverInfo?: Buffer | undefined;
        } | undefined;
        criminals?: {
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
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
        } & { [K in Exclude<keyof I["data"], keyof KeygenOutput>]: never; }) | undefined;
        criminals?: ({
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } & {
            criminals?: ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] & ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & { [K_1 in Exclude<keyof I["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_2 in Exclude<keyof I["criminals"]["criminals"], keyof {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["criminals"], "criminals">]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof MessageOut_KeygenResult>]: never; }>(base?: I | undefined): MessageOut_KeygenResult;
    fromPartial<I_1 extends {
        data?: {
            pubKey?: Buffer | undefined;
            groupRecoverInfo?: Buffer | undefined;
            privateRecoverInfo?: Buffer | undefined;
        } | undefined;
        criminals?: {
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
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
        } & { [K_5 in Exclude<keyof I_1["data"], keyof KeygenOutput>]: never; }) | undefined;
        criminals?: ({
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } & {
            criminals?: ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] & ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & { [K_6 in Exclude<keyof I_1["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_7 in Exclude<keyof I_1["criminals"]["criminals"], keyof {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I_1["criminals"], "criminals">]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof MessageOut_KeygenResult>]: never; }>(object: I_1): MessageOut_KeygenResult;
};
export declare const MessageOut_SignResult: {
    encode(message: MessageOut_SignResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut_SignResult;
    fromJSON(object: any): MessageOut_SignResult;
    toJSON(message: MessageOut_SignResult): unknown;
    create<I extends {
        signature?: Buffer | undefined;
        criminals?: {
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        signature?: Buffer | undefined;
        criminals?: ({
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } & {
            criminals?: ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] & ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & { [K in Exclude<keyof I["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_1 in Exclude<keyof I["criminals"]["criminals"], keyof {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["criminals"], "criminals">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MessageOut_SignResult>]: never; }>(base?: I | undefined): MessageOut_SignResult;
    fromPartial<I_1 extends {
        signature?: Buffer | undefined;
        criminals?: {
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        signature?: Buffer | undefined;
        criminals?: ({
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } & {
            criminals?: ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] & ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & { [K_4 in Exclude<keyof I_1["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_5 in Exclude<keyof I_1["criminals"]["criminals"], keyof {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["criminals"], "criminals">]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof MessageOut_SignResult>]: never; }>(object: I_1): MessageOut_SignResult;
};
export declare const MessageOut_CriminalList: {
    encode(message: MessageOut_CriminalList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut_CriminalList;
    fromJSON(object: any): MessageOut_CriminalList;
    toJSON(message: MessageOut_CriminalList): unknown;
    create<I extends {
        criminals?: {
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        }[] | undefined;
    } & {
        criminals?: ({
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        }[] & ({
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        } & {
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        } & { [K in Exclude<keyof I["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_1 in Exclude<keyof I["criminals"], keyof {
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "criminals">]: never; }>(base?: I | undefined): MessageOut_CriminalList;
    fromPartial<I_1 extends {
        criminals?: {
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        }[] | undefined;
    } & {
        criminals?: ({
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        }[] & ({
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        } & {
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        } & { [K_3 in Exclude<keyof I_1["criminals"][number], keyof MessageOut_CriminalList_Criminal>]: never; })[] & { [K_4 in Exclude<keyof I_1["criminals"], keyof {
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "criminals">]: never; }>(object: I_1): MessageOut_CriminalList;
};
export declare const MessageOut_CriminalList_Criminal: {
    encode(message: MessageOut_CriminalList_Criminal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut_CriminalList_Criminal;
    fromJSON(object: any): MessageOut_CriminalList_Criminal;
    toJSON(message: MessageOut_CriminalList_Criminal): unknown;
    create<I extends {
        partyUid?: string | undefined;
        crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
    } & {
        partyUid?: string | undefined;
        crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
    } & { [K in Exclude<keyof I, keyof MessageOut_CriminalList_Criminal>]: never; }>(base?: I | undefined): MessageOut_CriminalList_Criminal;
    fromPartial<I_1 extends {
        partyUid?: string | undefined;
        crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
    } & {
        partyUid?: string | undefined;
        crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MessageOut_CriminalList_Criminal>]: never; }>(object: I_1): MessageOut_CriminalList_Criminal;
};
export declare const TrafficIn: {
    encode(message: TrafficIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TrafficIn;
    fromJSON(object: any): TrafficIn;
    toJSON(message: TrafficIn): unknown;
    create<I extends {
        fromPartyUid?: string | undefined;
        payload?: Buffer | undefined;
        isBroadcast?: boolean | undefined;
    } & {
        fromPartyUid?: string | undefined;
        payload?: Buffer | undefined;
        isBroadcast?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof TrafficIn>]: never; }>(base?: I | undefined): TrafficIn;
    fromPartial<I_1 extends {
        fromPartyUid?: string | undefined;
        payload?: Buffer | undefined;
        isBroadcast?: boolean | undefined;
    } & {
        fromPartyUid?: string | undefined;
        payload?: Buffer | undefined;
        isBroadcast?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TrafficIn>]: never; }>(object: I_1): TrafficIn;
};
export declare const TrafficOut: {
    encode(message: TrafficOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TrafficOut;
    fromJSON(object: any): TrafficOut;
    toJSON(message: TrafficOut): unknown;
    create<I extends {
        toPartyUid?: string | undefined;
        payload?: Buffer | undefined;
        isBroadcast?: boolean | undefined;
    } & {
        toPartyUid?: string | undefined;
        payload?: Buffer | undefined;
        isBroadcast?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof TrafficOut>]: never; }>(base?: I | undefined): TrafficOut;
    fromPartial<I_1 extends {
        toPartyUid?: string | undefined;
        payload?: Buffer | undefined;
        isBroadcast?: boolean | undefined;
    } & {
        toPartyUid?: string | undefined;
        payload?: Buffer | undefined;
        isBroadcast?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TrafficOut>]: never; }>(object: I_1): TrafficOut;
};
export declare const KeygenInit: {
    encode(message: KeygenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenInit;
    fromJSON(object: any): KeygenInit;
    toJSON(message: KeygenInit): unknown;
    create<I extends {
        newKeyUid?: string | undefined;
        partyUids?: string[] | undefined;
        partyShareCounts?: number[] | undefined;
        myPartyIndex?: number | undefined;
        threshold?: number | undefined;
    } & {
        newKeyUid?: string | undefined;
        partyUids?: (string[] & string[] & { [K in Exclude<keyof I["partyUids"], keyof string[]>]: never; }) | undefined;
        partyShareCounts?: (number[] & number[] & { [K_1 in Exclude<keyof I["partyShareCounts"], keyof number[]>]: never; }) | undefined;
        myPartyIndex?: number | undefined;
        threshold?: number | undefined;
    } & { [K_2 in Exclude<keyof I, keyof KeygenInit>]: never; }>(base?: I | undefined): KeygenInit;
    fromPartial<I_1 extends {
        newKeyUid?: string | undefined;
        partyUids?: string[] | undefined;
        partyShareCounts?: number[] | undefined;
        myPartyIndex?: number | undefined;
        threshold?: number | undefined;
    } & {
        newKeyUid?: string | undefined;
        partyUids?: (string[] & string[] & { [K_3 in Exclude<keyof I_1["partyUids"], keyof string[]>]: never; }) | undefined;
        partyShareCounts?: (number[] & number[] & { [K_4 in Exclude<keyof I_1["partyShareCounts"], keyof number[]>]: never; }) | undefined;
        myPartyIndex?: number | undefined;
        threshold?: number | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof KeygenInit>]: never; }>(object: I_1): KeygenInit;
};
export declare const SignInit: {
    encode(message: SignInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignInit;
    fromJSON(object: any): SignInit;
    toJSON(message: SignInit): unknown;
    create<I extends {
        newSigUid?: string | undefined;
        keyUid?: string | undefined;
        partyUids?: string[] | undefined;
        messageToSign?: Buffer | undefined;
    } & {
        newSigUid?: string | undefined;
        keyUid?: string | undefined;
        partyUids?: (string[] & string[] & { [K in Exclude<keyof I["partyUids"], keyof string[]>]: never; }) | undefined;
        messageToSign?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SignInit>]: never; }>(base?: I | undefined): SignInit;
    fromPartial<I_1 extends {
        newSigUid?: string | undefined;
        keyUid?: string | undefined;
        partyUids?: string[] | undefined;
        messageToSign?: Buffer | undefined;
    } & {
        newSigUid?: string | undefined;
        keyUid?: string | undefined;
        partyUids?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["partyUids"], keyof string[]>]: never; }) | undefined;
        messageToSign?: Buffer | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SignInit>]: never; }>(object: I_1): SignInit;
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
