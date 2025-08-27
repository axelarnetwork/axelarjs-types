import Long from "long";
import _m0 from "protobufjs/minimal";
import { Result } from "../../../cosmos/base/abci/v1beta1/abci";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.auxiliary.v1beta1";
export interface BatchRequest {
    messages: Any[];
    sender: string;
}
export interface BatchResponse {
    responses: BatchResponse_Response[];
}
export interface BatchResponse_Response {
    result?: Result | undefined;
    err?: string | undefined;
}
export declare const BatchRequest: {
    encode(message: BatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchRequest;
    fromJSON(object: any): BatchRequest;
    toJSON(message: BatchRequest): unknown;
    create<I extends {
        messages?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] | undefined;
        sender?: string | undefined;
    } & {
        messages?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K in Exclude<keyof I["messages"][number], keyof Any>]: never; })[] & { [K_1 in Exclude<keyof I["messages"], keyof {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof BatchRequest>]: never; }>(base?: I | undefined): BatchRequest;
    fromPartial<I_1 extends {
        messages?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] | undefined;
        sender?: string | undefined;
    } & {
        messages?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I_1["messages"][number], keyof Any>]: never; })[] & { [K_4 in Exclude<keyof I_1["messages"], keyof {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof BatchRequest>]: never; }>(object: I_1): BatchRequest;
};
export declare const BatchResponse: {
    encode(message: BatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchResponse;
    fromJSON(object: any): BatchResponse;
    toJSON(message: BatchResponse): unknown;
    create<I extends {
        responses?: {
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[] | undefined;
    } & {
        responses?: ({
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[] & ({
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        } & {
            result?: ({
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    } & { [K in Exclude<keyof I["responses"][number]["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["responses"][number]["result"]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["responses"][number]["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_3 in Exclude<keyof I["responses"][number]["result"]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                msgResponses?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_4 in Exclude<keyof I["responses"][number]["result"]["msgResponses"][number], keyof Any>]: never; })[] & { [K_5 in Exclude<keyof I["responses"][number]["result"]["msgResponses"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["responses"][number]["result"], keyof Result>]: never; }) | undefined;
            err?: string | undefined;
        } & { [K_7 in Exclude<keyof I["responses"][number], keyof BatchResponse_Response>]: never; })[] & { [K_8 in Exclude<keyof I["responses"], keyof {
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, "responses">]: never; }>(base?: I | undefined): BatchResponse;
    fromPartial<I_1 extends {
        responses?: {
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[] | undefined;
    } & {
        responses?: ({
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[] & ({
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        } & {
            result?: ({
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    } & { [K_10 in Exclude<keyof I_1["responses"][number]["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_11 in Exclude<keyof I_1["responses"][number]["result"]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_12 in Exclude<keyof I_1["responses"][number]["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_13 in Exclude<keyof I_1["responses"][number]["result"]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                msgResponses?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_14 in Exclude<keyof I_1["responses"][number]["result"]["msgResponses"][number], keyof Any>]: never; })[] & { [K_15 in Exclude<keyof I_1["responses"][number]["result"]["msgResponses"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I_1["responses"][number]["result"], keyof Result>]: never; }) | undefined;
            err?: string | undefined;
        } & { [K_17 in Exclude<keyof I_1["responses"][number], keyof BatchResponse_Response>]: never; })[] & { [K_18 in Exclude<keyof I_1["responses"], keyof {
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I_1, "responses">]: never; }>(object: I_1): BatchResponse;
};
export declare const BatchResponse_Response: {
    encode(message: BatchResponse_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchResponse_Response;
    fromJSON(object: any): BatchResponse_Response;
    toJSON(message: BatchResponse_Response): unknown;
    create<I extends {
        result?: {
            data?: Buffer | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        err?: string | undefined;
    } & {
        result?: ({
            data?: Buffer | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            data?: Buffer | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & { [K in Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_3 in Exclude<keyof I["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            msgResponses?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_4 in Exclude<keyof I["result"]["msgResponses"][number], keyof Any>]: never; })[] & { [K_5 in Exclude<keyof I["result"]["msgResponses"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["result"], keyof Result>]: never; }) | undefined;
        err?: string | undefined;
    } & { [K_7 in Exclude<keyof I, keyof BatchResponse_Response>]: never; }>(base?: I | undefined): BatchResponse_Response;
    fromPartial<I_1 extends {
        result?: {
            data?: Buffer | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        err?: string | undefined;
    } & {
        result?: ({
            data?: Buffer | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            data?: Buffer | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                } & { [K_8 in Exclude<keyof I_1["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_9 in Exclude<keyof I_1["result"]["events"][number]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I_1["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_11 in Exclude<keyof I_1["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            msgResponses?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_12 in Exclude<keyof I_1["result"]["msgResponses"][number], keyof Any>]: never; })[] & { [K_13 in Exclude<keyof I_1["result"]["msgResponses"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I_1["result"], keyof Result>]: never; }) | undefined;
        err?: string | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof BatchResponse_Response>]: never; }>(object: I_1): BatchResponse_Response;
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
