/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "maingockien01.simple_oracle.interoracle";

export interface InteroraclePacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  requestIndexPacket: RequestIndexPacketData | undefined;
}

export interface NoData {}

/** RequestIndexPacketData defines a struct for the packet payload */
export interface RequestIndexPacketData {
  index: string;
}

/** RequestIndexPacketAck defines a struct for the packet acknowledgment */
export interface RequestIndexPacketAck {
  index: string;
  value: string;
  path: string;
  lastUpdatedAt: number;
}

const baseInteroraclePacketData: object = {};

export const InteroraclePacketData = {
  encode(
    message: InteroraclePacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.requestIndexPacket !== undefined) {
      RequestIndexPacketData.encode(
        message.requestIndexPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InteroraclePacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInteroraclePacketData } as InteroraclePacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.requestIndexPacket = RequestIndexPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InteroraclePacketData {
    const message = { ...baseInteroraclePacketData } as InteroraclePacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.requestIndexPacket !== undefined &&
      object.requestIndexPacket !== null
    ) {
      message.requestIndexPacket = RequestIndexPacketData.fromJSON(
        object.requestIndexPacket
      );
    } else {
      message.requestIndexPacket = undefined;
    }
    return message;
  },

  toJSON(message: InteroraclePacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.requestIndexPacket !== undefined &&
      (obj.requestIndexPacket = message.requestIndexPacket
        ? RequestIndexPacketData.toJSON(message.requestIndexPacket)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InteroraclePacketData>
  ): InteroraclePacketData {
    const message = { ...baseInteroraclePacketData } as InteroraclePacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.requestIndexPacket !== undefined &&
      object.requestIndexPacket !== null
    ) {
      message.requestIndexPacket = RequestIndexPacketData.fromPartial(
        object.requestIndexPacket
      );
    } else {
      message.requestIndexPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseRequestIndexPacketData: object = { index: "" };

export const RequestIndexPacketData = {
  encode(
    message: RequestIndexPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RequestIndexPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestIndexPacketData } as RequestIndexPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestIndexPacketData {
    const message = { ...baseRequestIndexPacketData } as RequestIndexPacketData;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: RequestIndexPacketData): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestIndexPacketData>
  ): RequestIndexPacketData {
    const message = { ...baseRequestIndexPacketData } as RequestIndexPacketData;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseRequestIndexPacketAck: object = {
  index: "",
  value: "",
  path: "",
  lastUpdatedAt: 0,
};

export const RequestIndexPacketAck = {
  encode(
    message: RequestIndexPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.lastUpdatedAt !== 0) {
      writer.uint32(32).int32(message.lastUpdatedAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RequestIndexPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestIndexPacketAck } as RequestIndexPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.lastUpdatedAt = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestIndexPacketAck {
    const message = { ...baseRequestIndexPacketAck } as RequestIndexPacketAck;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = "";
    }
    if (object.lastUpdatedAt !== undefined && object.lastUpdatedAt !== null) {
      message.lastUpdatedAt = Number(object.lastUpdatedAt);
    } else {
      message.lastUpdatedAt = 0;
    }
    return message;
  },

  toJSON(message: RequestIndexPacketAck): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.value !== undefined && (obj.value = message.value);
    message.path !== undefined && (obj.path = message.path);
    message.lastUpdatedAt !== undefined &&
      (obj.lastUpdatedAt = message.lastUpdatedAt);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestIndexPacketAck>
  ): RequestIndexPacketAck {
    const message = { ...baseRequestIndexPacketAck } as RequestIndexPacketAck;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.lastUpdatedAt !== undefined && object.lastUpdatedAt !== null) {
      message.lastUpdatedAt = object.lastUpdatedAt;
    } else {
      message.lastUpdatedAt = 0;
    }
    return message;
  },
};

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
