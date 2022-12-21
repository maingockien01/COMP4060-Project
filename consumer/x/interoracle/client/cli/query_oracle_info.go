package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/maingockien01/consumer/x/interoracle/types"
	"github.com/spf13/cobra"
)

func CmdShowOracleInfo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-oracle-info",
		Short: "shows OracleInfo",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetOracleInfoRequest{}

			res, err := queryClient.OracleInfo(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
