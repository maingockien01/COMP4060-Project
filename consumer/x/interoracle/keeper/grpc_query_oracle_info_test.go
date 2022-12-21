package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/maingockien01/consumer/testutil/keeper"
	"github.com/maingockien01/consumer/testutil/nullify"
	"github.com/maingockien01/consumer/x/interoracle/types"
)

func TestOracleInfoQuery(t *testing.T) {
	keeper, ctx := keepertest.InteroracleKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestOracleInfo(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetOracleInfoRequest
		response *types.QueryGetOracleInfoResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetOracleInfoRequest{},
			response: &types.QueryGetOracleInfoResponse{OracleInfo: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.OracleInfo(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
