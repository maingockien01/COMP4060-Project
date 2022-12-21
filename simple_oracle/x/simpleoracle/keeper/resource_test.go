package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/maingockien01/simple_oracle/testutil/keeper"
	"github.com/maingockien01/simple_oracle/testutil/nullify"
	"github.com/maingockien01/simple_oracle/x/simpleoracle/keeper"
	"github.com/maingockien01/simple_oracle/x/simpleoracle/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNResource(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Resource {
	items := make([]types.Resource, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetResource(ctx, items[i])
	}
	return items
}

func TestResourceGet(t *testing.T) {
	keeper, ctx := keepertest.SimpleoracleKeeper(t)
	items := createNResource(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetResource(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestResourceRemove(t *testing.T) {
	keeper, ctx := keepertest.SimpleoracleKeeper(t)
	items := createNResource(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveResource(ctx,
			item.Index,
		)
		_, found := keeper.GetResource(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestResourceGetAll(t *testing.T) {
	keeper, ctx := keepertest.SimpleoracleKeeper(t)
	items := createNResource(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllResource(ctx)),
	)
}
