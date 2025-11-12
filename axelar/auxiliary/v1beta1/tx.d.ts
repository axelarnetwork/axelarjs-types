import Long from "long";
import _m0 from "protobufjs/minimal";
import { Result } from "../../../cosmos/base/abci/v1beta1/abci";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.auxiliary.v1beta1";
export interface BatchRequest {
    $type: "axelar.auxiliary.v1beta1.BatchRequest";
    messages: Any[];
    sender: string;
}
export interface BatchResponse {
    $type: "axelar.auxiliary.v1beta1.BatchResponse";
    responses: BatchResponse_Response[];
}
export interface BatchResponse_Response {
    $type: "axelar.auxiliary.v1beta1.BatchResponse.Response";
    result?: Result | undefined;
    err?: string | undefined;
}
export declare const BatchRequest: {
    $type: "axelar.auxiliary.v1beta1.BatchRequest";
    encode(message: BatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchRequest;
    fromJSON(object: any): BatchRequest;
    toJSON(message: BatchRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        messages?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        messages?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K in Exclude<keyof I["messages"][number], "$type" | "typeUrl" | "value">]: never; })[] & { [K_1 in Exclude<keyof I["messages"], "$type" | keyof {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "sender" | "messages">]: never; }>(base?: I | undefined): BatchRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        messages?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        messages?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I_1["messages"][number], "$type" | "typeUrl" | "value">]: never; })[] & { [K_4 in Exclude<keyof I_1["messages"], "$type" | keyof {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "sender" | "messages">]: never; }>(object: I_1): BatchRequest;
};
export declare const BatchResponse: {
    $type: "axelar.auxiliary.v1beta1.BatchResponse";
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
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[] & ({
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    } & {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    } & { [K in Exclude<keyof I["responses"][number]["result"]["events"][number]["attributes"][number], "$type" | "index" | "value" | "key">]: never; })[] & { [K_1 in Exclude<keyof I["responses"][number]["result"]["events"][number]["attributes"], "$type" | keyof {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["responses"][number]["result"]["events"][number], "$type" | "type" | "attributes">]: never; })[] & { [K_3 in Exclude<keyof I["responses"][number]["result"]["events"], "$type" | keyof {
                    type?: string | undefined;
                    attributes?: {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                } & { [K_4 in Exclude<keyof I["responses"][number]["result"]["msgResponses"][number], "$type" | "typeUrl" | "value">]: never; })[] & { [K_5 in Exclude<keyof I["responses"][number]["result"]["msgResponses"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["responses"][number]["result"], "$type" | "data" | "log" | "events" | "msgResponses">]: never; }) | undefined;
            err?: string | undefined;
        } & { [K_7 in Exclude<keyof I["responses"][number], "$type" | "result" | "err">]: never; })[] & { [K_8 in Exclude<keyof I["responses"], "$type" | keyof {
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, "$type" | "responses">]: never; }>(base?: I | undefined): BatchResponse;
    fromPartial<I_1 extends {
        responses?: {
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[] & ({
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    } & {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    } & { [K_10 in Exclude<keyof I_1["responses"][number]["result"]["events"][number]["attributes"][number], "$type" | "index" | "value" | "key">]: never; })[] & { [K_11 in Exclude<keyof I_1["responses"][number]["result"]["events"][number]["attributes"], "$type" | keyof {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_12 in Exclude<keyof I_1["responses"][number]["result"]["events"][number], "$type" | "type" | "attributes">]: never; })[] & { [K_13 in Exclude<keyof I_1["responses"][number]["result"]["events"], "$type" | keyof {
                    type?: string | undefined;
                    attributes?: {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
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
                } & { [K_14 in Exclude<keyof I_1["responses"][number]["result"]["msgResponses"][number], "$type" | "typeUrl" | "value">]: never; })[] & { [K_15 in Exclude<keyof I_1["responses"][number]["result"]["msgResponses"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I_1["responses"][number]["result"], "$type" | "data" | "log" | "events" | "msgResponses">]: never; }) | undefined;
            err?: string | undefined;
        } & { [K_17 in Exclude<keyof I_1["responses"][number], "$type" | "result" | "err">]: never; })[] & { [K_18 in Exclude<keyof I_1["responses"], "$type" | keyof {
            result?: {
                data?: Buffer | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        index?: boolean | undefined;
                        value?: string | undefined;
                        key?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                msgResponses?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            err?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I_1, "$type" | "responses">]: never; }>(object: I_1): BatchResponse;
};
export declare const BatchResponse_Response: {
    $type: "axelar.auxiliary.v1beta1.BatchResponse.Response";
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
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
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
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
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
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                }[] & ({
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                } & {
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                } & { [K in Exclude<keyof I["result"]["events"][number]["attributes"][number], "$type" | "index" | "value" | "key">]: never; })[] & { [K_1 in Exclude<keyof I["result"]["events"][number]["attributes"], "$type" | keyof {
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["result"]["events"][number], "$type" | "type" | "attributes">]: never; })[] & { [K_3 in Exclude<keyof I["result"]["events"], "$type" | keyof {
                type?: string | undefined;
                attributes?: {
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
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
            } & { [K_4 in Exclude<keyof I["result"]["msgResponses"][number], "$type" | "typeUrl" | "value">]: never; })[] & { [K_5 in Exclude<keyof I["result"]["msgResponses"], "$type" | keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["result"], "$type" | "data" | "log" | "events" | "msgResponses">]: never; }) | undefined;
        err?: string | undefined;
    } & { [K_7 in Exclude<keyof I, "$type" | "result" | "err">]: never; }>(base?: I | undefined): BatchResponse_Response;
    fromPartial<I_1 extends {
        result?: {
            data?: Buffer | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
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
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
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
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                }[] & ({
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                } & {
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                } & { [K_8 in Exclude<keyof I_1["result"]["events"][number]["attributes"][number], "$type" | "index" | "value" | "key">]: never; })[] & { [K_9 in Exclude<keyof I_1["result"]["events"][number]["attributes"], "$type" | keyof {
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I_1["result"]["events"][number], "$type" | "type" | "attributes">]: never; })[] & { [K_11 in Exclude<keyof I_1["result"]["events"], "$type" | keyof {
                type?: string | undefined;
                attributes?: {
                    index?: boolean | undefined;
                    value?: string | undefined;
                    key?: string | undefined;
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
            } & { [K_12 in Exclude<keyof I_1["result"]["msgResponses"][number], "$type" | "typeUrl" | "value">]: never; })[] & { [K_13 in Exclude<keyof I_1["result"]["msgResponses"], "$type" | keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I_1["result"], "$type" | "data" | "log" | "events" | "msgResponses">]: never; }) | undefined;
        err?: string | undefined;
    } & { [K_15 in Exclude<keyof I_1, "$type" | "result" | "err">]: never; }>(object: I_1): BatchResponse_Response;
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
