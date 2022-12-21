package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/maingockien01/consumer/testutil/keeper"
	"github.com/maingockien01/consumer/testutil/nullify"
	"github.com/maingockien01/consumer/x/interoracle/keeper"
	"github.com/maingockien01/consumer/x/interoracle/types"
)

func createTestOracleInfo(keeper *keeper.Keeper, ctx sdk.Context) types.OracleInfo {
	item := types.OracleInfo{}
	keeper.SetOracleInfo(ctx, item)
	return item
}

func TestOracleInfoGet(t *testing.T) {
	keeper, ctx := keepertest.InteroracleKeeper(t)
	item := createTestOracleInfo(keeper, ctx)
	rst, found := keeper.GetOracleInfo(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestOracleInfoRemove(t *testing.T) {
	keeper, ctx := keepertest.InteroracleKeeper(t)
	createTestOracleInfo(keeper, ctx)
	keeper.RemoveOracleInfo(ctx)
	_, found := keeper.GetOracleInfo(ctx)
	require.False(t, found)
}
