package interoracle_test

import (
	"testing"

	keepertest "github.com/maingockien01/simple_oracle/testutil/keeper"
	"github.com/maingockien01/simple_oracle/testutil/nullify"
	"github.com/maingockien01/simple_oracle/x/interoracle"
	"github.com/maingockien01/simple_oracle/x/interoracle/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.InteroracleKeeper(t)
	interoracle.InitGenesis(ctx, *k, genesisState)
	got := interoracle.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	// this line is used by starport scaffolding # genesis/test/assert
}
