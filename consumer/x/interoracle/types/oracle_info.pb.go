// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: interoracle/oracle_info.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type OracleInfo struct {
	RequestSuccessNum uint64 `protobuf:"varint,1,opt,name=requestSuccessNum,proto3" json:"requestSuccessNum,omitempty"`
	Creator           string `protobuf:"bytes,2,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *OracleInfo) Reset()         { *m = OracleInfo{} }
func (m *OracleInfo) String() string { return proto.CompactTextString(m) }
func (*OracleInfo) ProtoMessage()    {}
func (*OracleInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c8292cf99ef094b, []int{0}
}
func (m *OracleInfo) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *OracleInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_OracleInfo.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *OracleInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OracleInfo.Merge(m, src)
}
func (m *OracleInfo) XXX_Size() int {
	return m.Size()
}
func (m *OracleInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_OracleInfo.DiscardUnknown(m)
}

var xxx_messageInfo_OracleInfo proto.InternalMessageInfo

func (m *OracleInfo) GetRequestSuccessNum() uint64 {
	if m != nil {
		return m.RequestSuccessNum
	}
	return 0
}

func (m *OracleInfo) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*OracleInfo)(nil), "maingockien01.consumer.interoracle.OracleInfo")
}

func init() { proto.RegisterFile("interoracle/oracle_info.proto", fileDescriptor_4c8292cf99ef094b) }

var fileDescriptor_4c8292cf99ef094b = []byte{
	// 200 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xcd, 0xcc, 0x2b, 0x49,
	0x2d, 0xca, 0x2f, 0x4a, 0x4c, 0xce, 0x49, 0xd5, 0x87, 0x50, 0xf1, 0x99, 0x79, 0x69, 0xf9, 0x7a,
	0x05, 0x45, 0xf9, 0x25, 0xf9, 0x42, 0x4a, 0xb9, 0x89, 0x99, 0x79, 0xe9, 0xf9, 0xc9, 0xd9, 0x99,
	0xa9, 0x79, 0x06, 0x86, 0x7a, 0xc9, 0xf9, 0x79, 0xc5, 0xa5, 0xb9, 0xa9, 0x45, 0x7a, 0x48, 0xba,
	0x94, 0x42, 0xb8, 0xb8, 0xfc, 0xc1, 0x2c, 0xcf, 0xbc, 0xb4, 0x7c, 0x21, 0x1d, 0x2e, 0xc1, 0xa2,
	0xd4, 0xc2, 0xd2, 0xd4, 0xe2, 0x92, 0xe0, 0xd2, 0xe4, 0xe4, 0xd4, 0xe2, 0x62, 0xbf, 0xd2, 0x5c,
	0x09, 0x46, 0x05, 0x46, 0x0d, 0x96, 0x20, 0x4c, 0x09, 0x21, 0x09, 0x2e, 0xf6, 0xe4, 0xa2, 0xd4,
	0xc4, 0x92, 0xfc, 0x22, 0x09, 0x26, 0x05, 0x46, 0x0d, 0xce, 0x20, 0x18, 0xd7, 0xc9, 0xff, 0xc4,
	0x23, 0x39, 0xc6, 0x0b, 0x8f, 0xe4, 0x18, 0x1f, 0x3c, 0x92, 0x63, 0x9c, 0xf0, 0x58, 0x8e, 0xe1,
	0xc2, 0x63, 0x39, 0x86, 0x1b, 0x8f, 0xe5, 0x18, 0xa2, 0x4c, 0xd3, 0x33, 0x4b, 0x32, 0x4a, 0x93,
	0xf4, 0x92, 0xf3, 0x73, 0xf5, 0x51, 0x9c, 0xa7, 0x0f, 0x73, 0x9e, 0x7e, 0x85, 0x3e, 0xb2, 0xb7,
	0x4a, 0x2a, 0x0b, 0x52, 0x8b, 0x93, 0xd8, 0xc0, 0x3e, 0x32, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff,
	0x64, 0xd4, 0x0c, 0xbf, 0xf2, 0x00, 0x00, 0x00,
}

func (m *OracleInfo) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *OracleInfo) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *OracleInfo) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintOracleInfo(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x12
	}
	if m.RequestSuccessNum != 0 {
		i = encodeVarintOracleInfo(dAtA, i, uint64(m.RequestSuccessNum))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintOracleInfo(dAtA []byte, offset int, v uint64) int {
	offset -= sovOracleInfo(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *OracleInfo) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.RequestSuccessNum != 0 {
		n += 1 + sovOracleInfo(uint64(m.RequestSuccessNum))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovOracleInfo(uint64(l))
	}
	return n
}

func sovOracleInfo(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozOracleInfo(x uint64) (n int) {
	return sovOracleInfo(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *OracleInfo) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowOracleInfo
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: OracleInfo: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: OracleInfo: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field RequestSuccessNum", wireType)
			}
			m.RequestSuccessNum = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowOracleInfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.RequestSuccessNum |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowOracleInfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthOracleInfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthOracleInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipOracleInfo(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthOracleInfo
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipOracleInfo(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowOracleInfo
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowOracleInfo
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowOracleInfo
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthOracleInfo
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupOracleInfo
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthOracleInfo
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthOracleInfo        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowOracleInfo          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupOracleInfo = fmt.Errorf("proto: unexpected end of group")
)
