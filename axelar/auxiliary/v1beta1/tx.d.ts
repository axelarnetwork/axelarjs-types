import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Result } from "../../../cosmos/base/abci/v1beta1/abci";
export declare const protobufPackage = "axelar.auxiliary.v1beta1";
export interface BatchRequest {
    sender: Uint8Array;
    messages: Any[];
}
export interface BatchResponse {
    responses: BatchResponse_Response[];
}
export interface BatchResponse_Response {
    result?: Result | undefined;
    err: string | undefined;
}
export declare const BatchRequest: {
    encode(message: BatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchRequest;
    fromJSON(object: any): BatchRequest;
    toJSON(message: BatchRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        messages?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        sender?: Uint8Array | undefined;
        messages?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["messages"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["messages"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof BatchRequest>, never>>(object: I): BatchRequest;
};
export declare const BatchResponse: {
    encode(message: BatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchResponse;
    fromJSON(object: any): BatchResponse;
    toJSON(message: BatchResponse): unknown;
    fromPartial<I extends {
        responses?: {
            result?: {
                data?: Uint8Array | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[] | undefined;
    } & {
        responses?: ({
            result?: {
                data?: Uint8Array | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[] & ({
            result?: {
                data?: Uint8Array | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        } & {
            result?: ({
                data?: Uint8Array | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                data?: Uint8Array | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[] & ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    } & Record<Exclude<keyof I["responses"][number]["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["responses"][number]["result"]["events"][number]["attributes"], keyof {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["responses"][number]["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>, never>)[] & Record<Exclude<keyof I["responses"][number]["result"]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["responses"][number]["result"], keyof Result>, never>) | undefined;
            err?: string | undefined;
        } & Record<Exclude<keyof I["responses"][number], keyof BatchResponse_Response>, never>)[] & Record<Exclude<keyof I["responses"], keyof {
            result?: {
                data?: Uint8Array | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "responses">, never>>(object: I): BatchResponse;
};
export declare const BatchResponse_Response: {
    encode(message: BatchResponse_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchResponse_Response;
    fromJSON(object: any): BatchResponse_Response;
    toJSON(message: BatchResponse_Response): unknown;
    fromPartial<I extends {
        result?: {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        err?: string | undefined;
    } & {
        result?: ({
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>, never>)[] & Record<Exclude<keyof I["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["result"], keyof Result>, never>) | undefined;
        err?: string | undefined;
    } & Record<Exclude<keyof I, keyof BatchResponse_Response>, never>>(object: I): BatchResponse_Response;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
