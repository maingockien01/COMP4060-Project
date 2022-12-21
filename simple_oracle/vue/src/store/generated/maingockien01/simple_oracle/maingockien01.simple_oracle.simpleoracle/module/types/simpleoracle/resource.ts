/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "maingockien01.simple_oracle.simpleoracle";

export interface Resource {
  index: string;
  path: string;
  value: string;
  lastUpdatedAt: number;
  creator: string;
}

const baseResource: object = {
  index: "",
  path: "",
  value: "",
  lastUpdatedAt: 0,
  creator: "",
};

export const Resource = {
  encode(message: Resource, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.lastUpdatedAt !== 0) {
      writer.uint32(32).int32(message.lastUpdatedAt);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResource } as Resource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.lastUpdatedAt = reader.int32();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    const message = { ...baseResource } as Resource;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.lastUpdatedAt !== undefined && object.lastUpdatedAt !== null) {
      message.lastUpdatedAt = Number(object.lastUpdatedAt);
    } else {
      message.lastUpdatedAt = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.path !== undefined && (obj.path = message.path);
    message.value !== undefined && (obj.value = message.value);
    message.lastUpdatedAt !== undefined &&
      (obj.lastUpdatedAt = message.lastUpdatedAt);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = { ...baseResource } as Resource;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.lastUpdatedAt !== undefined && object.lastUpdatedAt !== null) {
      message.lastUpdatedAt = object.lastUpdatedAt;
    } else {
      message.lastUpdatedAt = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
