package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/maingockien01/consumer/x/interoracle/types"
)

// SetOracleInfo set oracleInfo in the store
func (k Keeper) SetOracleInfo(ctx sdk.Context, oracleInfo types.OracleInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OracleInfoKey))
	b := k.cdc.MustMarshal(&oracleInfo)
	store.Set([]byte{0}, b)
}

// GetOracleInfo returns oracleInfo
func (k Keeper) GetOracleInfo(ctx sdk.Context) (val types.OracleInfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OracleInfoKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveOracleInfo removes oracleInfo from the store
func (k Keeper) RemoveOracleInfo(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OracleInfoKey))
	store.Delete([]byte{0})
}
