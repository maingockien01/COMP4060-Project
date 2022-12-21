package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateOracleInfo = "create_oracle_info"
	TypeMsgUpdateOracleInfo = "update_oracle_info"
	TypeMsgDeleteOracleInfo = "delete_oracle_info"
)

var _ sdk.Msg = &MsgCreateOracleInfo{}

func NewMsgCreateOracleInfo(creator string, requestSuccessNum uint64) *MsgCreateOracleInfo {
	return &MsgCreateOracleInfo{
		Creator:           creator,
		RequestSuccessNum: requestSuccessNum,
	}
}

func (msg *MsgCreateOracleInfo) Route() string {
	return RouterKey
}

func (msg *MsgCreateOracleInfo) Type() string {
	return TypeMsgCreateOracleInfo
}

func (msg *MsgCreateOracleInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateOracleInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateOracleInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateOracleInfo{}

func NewMsgUpdateOracleInfo(creator string, requestSuccessNum uint64) *MsgUpdateOracleInfo {
	return &MsgUpdateOracleInfo{
		Creator:           creator,
		RequestSuccessNum: requestSuccessNum,
	}
}

func (msg *MsgUpdateOracleInfo) Route() string {
	return RouterKey
}

func (msg *MsgUpdateOracleInfo) Type() string {
	return TypeMsgUpdateOracleInfo
}

func (msg *MsgUpdateOracleInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateOracleInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateOracleInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteOracleInfo{}

func NewMsgDeleteOracleInfo(creator string) *MsgDeleteOracleInfo {
	return &MsgDeleteOracleInfo{
		Creator: creator,
	}
}
func (msg *MsgDeleteOracleInfo) Route() string {
	return RouterKey
}

func (msg *MsgDeleteOracleInfo) Type() string {
	return TypeMsgDeleteOracleInfo
}

func (msg *MsgDeleteOracleInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteOracleInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteOracleInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
