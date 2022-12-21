package simpleoracle

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/maingockien01/simple_oracle/x/simpleoracle/keeper"
	"github.com/maingockien01/simple_oracle/x/simpleoracle/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the resource
	for _, elem := range genState.ResourceList {
		k.SetResource(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ResourceList = k.GetAllResource(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
