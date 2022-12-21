package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/maingockien01/consumer/testutil/keeper"
	"github.com/maingockien01/consumer/x/interoracle/keeper"
	"github.com/maingockien01/consumer/x/interoracle/types"
)

func TestOracleInfoMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.InteroracleKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateOracleInfo{Creator: creator}
	_, err := srv.CreateOracleInfo(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetOracleInfo(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestOracleInfoMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateOracleInfo
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateOracleInfo{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateOracleInfo{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.InteroracleKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateOracleInfo{Creator: creator}
			_, err := srv.CreateOracleInfo(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateOracleInfo(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetOracleInfo(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestOracleInfoMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteOracleInfo
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteOracleInfo{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteOracleInfo{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.InteroracleKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateOracleInfo(wctx, &types.MsgCreateOracleInfo{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteOracleInfo(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetOracleInfo(ctx)
				require.False(t, found)
			}
		})
	}
}
