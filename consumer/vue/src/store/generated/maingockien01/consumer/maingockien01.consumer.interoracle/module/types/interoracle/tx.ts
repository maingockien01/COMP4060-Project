/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "maingockien01.consumer.interoracle";

export interface MsgSendRequestIndex {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  index: string;
}

export interface MsgSendRequestIndexResponse {}

export interface MsgCreateOracleInfo {
  creator: string;
  requestSuccessNum: number;
}

export interface MsgCreateOracleInfoResponse {}

export interface MsgUpdateOracleInfo {
  creator: string;
  requestSuccessNum: number;
}

export interface MsgUpdateOracleInfoResponse {}

export interface MsgDeleteOracleInfo {
  creator: string;
}

export interface MsgDeleteOracleInfoResponse {}

const baseMsgSendRequestIndex: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  index: "",
};

export const MsgSendRequestIndex = {
  encode(
    message: MsgSendRequestIndex,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.index !== "") {
      writer.uint32(42).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendRequestIndex {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendRequestIndex } as MsgSendRequestIndex;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendRequestIndex {
    const message = { ...baseMsgSendRequestIndex } as MsgSendRequestIndex;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgSendRequestIndex): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendRequestIndex>): MsgSendRequestIndex {
    const message = { ...baseMsgSendRequestIndex } as MsgSendRequestIndex;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgSendRequestIndexResponse: object = {};

export const MsgSendRequestIndexResponse = {
  encode(
    _: MsgSendRequestIndexResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendRequestIndexResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendRequestIndexResponse,
    } as MsgSendRequestIndexResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendRequestIndexResponse {
    const message = {
      ...baseMsgSendRequestIndexResponse,
    } as MsgSendRequestIndexResponse;
    return message;
  },

  toJSON(_: MsgSendRequestIndexResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendRequestIndexResponse>
  ): MsgSendRequestIndexResponse {
    const message = {
      ...baseMsgSendRequestIndexResponse,
    } as MsgSendRequestIndexResponse;
    return message;
  },
};

const baseMsgCreateOracleInfo: object = { creator: "", requestSuccessNum: 0 };

export const MsgCreateOracleInfo = {
  encode(
    message: MsgCreateOracleInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.requestSuccessNum !== 0) {
      writer.uint32(24).uint64(message.requestSuccessNum);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOracleInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOracleInfo } as MsgCreateOracleInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.requestSuccessNum = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOracleInfo {
    const message = { ...baseMsgCreateOracleInfo } as MsgCreateOracleInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.requestSuccessNum !== undefined &&
      object.requestSuccessNum !== null
    ) {
      message.requestSuccessNum = Number(object.requestSuccessNum);
    } else {
      message.requestSuccessNum = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateOracleInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.requestSuccessNum !== undefined &&
      (obj.requestSuccessNum = message.requestSuccessNum);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOracleInfo>): MsgCreateOracleInfo {
    const message = { ...baseMsgCreateOracleInfo } as MsgCreateOracleInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.requestSuccessNum !== undefined &&
      object.requestSuccessNum !== null
    ) {
      message.requestSuccessNum = object.requestSuccessNum;
    } else {
      message.requestSuccessNum = 0;
    }
    return message;
  },
};

const baseMsgCreateOracleInfoResponse: object = {};

export const MsgCreateOracleInfoResponse = {
  encode(
    _: MsgCreateOracleInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateOracleInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateOracleInfoResponse,
    } as MsgCreateOracleInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateOracleInfoResponse {
    const message = {
      ...baseMsgCreateOracleInfoResponse,
    } as MsgCreateOracleInfoResponse;
    return message;
  },

  toJSON(_: MsgCreateOracleInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateOracleInfoResponse>
  ): MsgCreateOracleInfoResponse {
    const message = {
      ...baseMsgCreateOracleInfoResponse,
    } as MsgCreateOracleInfoResponse;
    return message;
  },
};

const baseMsgUpdateOracleInfo: object = { creator: "", requestSuccessNum: 0 };

export const MsgUpdateOracleInfo = {
  encode(
    message: MsgUpdateOracleInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.requestSuccessNum !== 0) {
      writer.uint32(24).uint64(message.requestSuccessNum);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOracleInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOracleInfo } as MsgUpdateOracleInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.requestSuccessNum = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOracleInfo {
    const message = { ...baseMsgUpdateOracleInfo } as MsgUpdateOracleInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.requestSuccessNum !== undefined &&
      object.requestSuccessNum !== null
    ) {
      message.requestSuccessNum = Number(object.requestSuccessNum);
    } else {
      message.requestSuccessNum = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateOracleInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.requestSuccessNum !== undefined &&
      (obj.requestSuccessNum = message.requestSuccessNum);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateOracleInfo>): MsgUpdateOracleInfo {
    const message = { ...baseMsgUpdateOracleInfo } as MsgUpdateOracleInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.requestSuccessNum !== undefined &&
      object.requestSuccessNum !== null
    ) {
      message.requestSuccessNum = object.requestSuccessNum;
    } else {
      message.requestSuccessNum = 0;
    }
    return message;
  },
};

const baseMsgUpdateOracleInfoResponse: object = {};

export const MsgUpdateOracleInfoResponse = {
  encode(
    _: MsgUpdateOracleInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateOracleInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateOracleInfoResponse,
    } as MsgUpdateOracleInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateOracleInfoResponse {
    const message = {
      ...baseMsgUpdateOracleInfoResponse,
    } as MsgUpdateOracleInfoResponse;
    return message;
  },

  toJSON(_: MsgUpdateOracleInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateOracleInfoResponse>
  ): MsgUpdateOracleInfoResponse {
    const message = {
      ...baseMsgUpdateOracleInfoResponse,
    } as MsgUpdateOracleInfoResponse;
    return message;
  },
};

const baseMsgDeleteOracleInfo: object = { creator: "" };

export const MsgDeleteOracleInfo = {
  encode(
    message: MsgDeleteOracleInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOracleInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOracleInfo } as MsgDeleteOracleInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteOracleInfo {
    const message = { ...baseMsgDeleteOracleInfo } as MsgDeleteOracleInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteOracleInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteOracleInfo>): MsgDeleteOracleInfo {
    const message = { ...baseMsgDeleteOracleInfo } as MsgDeleteOracleInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteOracleInfoResponse: object = {};

export const MsgDeleteOracleInfoResponse = {
  encode(
    _: MsgDeleteOracleInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteOracleInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteOracleInfoResponse,
    } as MsgDeleteOracleInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteOracleInfoResponse {
    const message = {
      ...baseMsgDeleteOracleInfoResponse,
    } as MsgDeleteOracleInfoResponse;
    return message;
  },

  toJSON(_: MsgDeleteOracleInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteOracleInfoResponse>
  ): MsgDeleteOracleInfoResponse {
    const message = {
      ...baseMsgDeleteOracleInfoResponse,
    } as MsgDeleteOracleInfoResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SendRequestIndex(
    request: MsgSendRequestIndex
  ): Promise<MsgSendRequestIndexResponse>;
  CreateOracleInfo(
    request: MsgCreateOracleInfo
  ): Promise<MsgCreateOracleInfoResponse>;
  UpdateOracleInfo(
    request: MsgUpdateOracleInfo
  ): Promise<MsgUpdateOracleInfoResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteOracleInfo(
    request: MsgDeleteOracleInfo
  ): Promise<MsgDeleteOracleInfoResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SendRequestIndex(
    request: MsgSendRequestIndex
  ): Promise<MsgSendRequestIndexResponse> {
    const data = MsgSendRequestIndex.encode(request).finish();
    const promise = this.rpc.request(
      "maingockien01.consumer.interoracle.Msg",
      "SendRequestIndex",
      data
    );
    return promise.then((data) =>
      MsgSendRequestIndexResponse.decode(new Reader(data))
    );
  }

  CreateOracleInfo(
    request: MsgCreateOracleInfo
  ): Promise<MsgCreateOracleInfoResponse> {
    const data = MsgCreateOracleInfo.encode(request).finish();
    const promise = this.rpc.request(
      "maingockien01.consumer.interoracle.Msg",
      "CreateOracleInfo",
      data
    );
    return promise.then((data) =>
      MsgCreateOracleInfoResponse.decode(new Reader(data))
    );
  }

  UpdateOracleInfo(
    request: MsgUpdateOracleInfo
  ): Promise<MsgUpdateOracleInfoResponse> {
    const data = MsgUpdateOracleInfo.encode(request).finish();
    const promise = this.rpc.request(
      "maingockien01.consumer.interoracle.Msg",
      "UpdateOracleInfo",
      data
    );
    return promise.then((data) =>
      MsgUpdateOracleInfoResponse.decode(new Reader(data))
    );
  }

  DeleteOracleInfo(
    request: MsgDeleteOracleInfo
  ): Promise<MsgDeleteOracleInfoResponse> {
    const data = MsgDeleteOracleInfo.encode(request).finish();
    const promise = this.rpc.request(
      "maingockien01.consumer.interoracle.Msg",
      "DeleteOracleInfo",
      data
    );
    return promise.then((data) =>
      MsgDeleteOracleInfoResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
