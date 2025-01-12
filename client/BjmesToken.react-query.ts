/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Uint128, Logo, EmbeddedLogo, Binary, InstantiateMsg, Cw20Coin, InstantiateMarketingInfo, MinterResponse, ExecuteMsg, Expiration, Timestamp, Uint64, QueryMsg, AllAccountsResponse, AllAllowancesResponse, AllowanceInfo, AllSpenderAllowancesResponse, SpenderAllowanceInfo, AllowanceResponse, BalanceResponse, DownloadLogoResponse, LogoInfo, Addr, MarketingInfoResponse, TokenInfoResponse } from "./BjmesToken.types";
import { BjmesTokenQueryClient, BjmesTokenClient } from "./BjmesToken.client";
export const bjmesTokenQueryKeys = {
  contract: ([{
    contract: "bjmesToken"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...bjmesTokenQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  balance: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "balance",
    args
  }] as const),
  balanceAt: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "balance_at",
    args
  }] as const),
  totalSupplyAt: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "total_supply_at",
    args
  }] as const),
  tokenInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "token_info",
    args
  }] as const),
  minter: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "minter",
    args
  }] as const),
  allowance: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "allowance",
    args
  }] as const),
  allAllowances: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "all_allowances",
    args
  }] as const),
  allSpenderAllowances: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "all_spender_allowances",
    args
  }] as const),
  allAccounts: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "all_accounts",
    args
  }] as const),
  marketingInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "marketing_info",
    args
  }] as const),
  downloadLogo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bjmesTokenQueryKeys.address(contractAddress)[0],
    method: "download_logo",
    args
  }] as const)
};
export interface BjmesTokenReactQuery<TResponse, TData = TResponse> {
  client: BjmesTokenQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface BjmesTokenDownloadLogoQuery<TData> extends BjmesTokenReactQuery<DownloadLogoResponse, TData> {}
export function useBjmesTokenDownloadLogoQuery<TData = DownloadLogoResponse>({
  client,
  options
}: BjmesTokenDownloadLogoQuery<TData>) {
  return useQuery<DownloadLogoResponse, Error, TData>(bjmesTokenQueryKeys.downloadLogo(client?.contractAddress), () => client ? client.downloadLogo() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenMarketingInfoQuery<TData> extends BjmesTokenReactQuery<MarketingInfoResponse, TData> {}
export function useBjmesTokenMarketingInfoQuery<TData = MarketingInfoResponse>({
  client,
  options
}: BjmesTokenMarketingInfoQuery<TData>) {
  return useQuery<MarketingInfoResponse, Error, TData>(bjmesTokenQueryKeys.marketingInfo(client?.contractAddress), () => client ? client.marketingInfo() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenAllAccountsQuery<TData> extends BjmesTokenReactQuery<AllAccountsResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useBjmesTokenAllAccountsQuery<TData = AllAccountsResponse>({
  client,
  args,
  options
}: BjmesTokenAllAccountsQuery<TData>) {
  return useQuery<AllAccountsResponse, Error, TData>(bjmesTokenQueryKeys.allAccounts(client?.contractAddress, args), () => client ? client.allAccounts({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenAllSpenderAllowancesQuery<TData> extends BjmesTokenReactQuery<AllSpenderAllowancesResponse, TData> {
  args: {
    limit?: number;
    spender: string;
    startAfter?: string;
  };
}
export function useBjmesTokenAllSpenderAllowancesQuery<TData = AllSpenderAllowancesResponse>({
  client,
  args,
  options
}: BjmesTokenAllSpenderAllowancesQuery<TData>) {
  return useQuery<AllSpenderAllowancesResponse, Error, TData>(bjmesTokenQueryKeys.allSpenderAllowances(client?.contractAddress, args), () => client ? client.allSpenderAllowances({
    limit: args.limit,
    spender: args.spender,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenAllAllowancesQuery<TData> extends BjmesTokenReactQuery<AllAllowancesResponse, TData> {
  args: {
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useBjmesTokenAllAllowancesQuery<TData = AllAllowancesResponse>({
  client,
  args,
  options
}: BjmesTokenAllAllowancesQuery<TData>) {
  return useQuery<AllAllowancesResponse, Error, TData>(bjmesTokenQueryKeys.allAllowances(client?.contractAddress, args), () => client ? client.allAllowances({
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenAllowanceQuery<TData> extends BjmesTokenReactQuery<AllowanceResponse, TData> {
  args: {
    owner: string;
    spender: string;
  };
}
export function useBjmesTokenAllowanceQuery<TData = AllowanceResponse>({
  client,
  args,
  options
}: BjmesTokenAllowanceQuery<TData>) {
  return useQuery<AllowanceResponse, Error, TData>(bjmesTokenQueryKeys.allowance(client?.contractAddress, args), () => client ? client.allowance({
    owner: args.owner,
    spender: args.spender
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenMinterQuery<TData> extends BjmesTokenReactQuery<MinterResponse, TData> {}
export function useBjmesTokenMinterQuery<TData = MinterResponse>({
  client,
  options
}: BjmesTokenMinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(bjmesTokenQueryKeys.minter(client?.contractAddress), () => client ? client.minter() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenTokenInfoQuery<TData> extends BjmesTokenReactQuery<TokenInfoResponse, TData> {}
export function useBjmesTokenTokenInfoQuery<TData = TokenInfoResponse>({
  client,
  options
}: BjmesTokenTokenInfoQuery<TData>) {
  return useQuery<TokenInfoResponse, Error, TData>(bjmesTokenQueryKeys.tokenInfo(client?.contractAddress), () => client ? client.tokenInfo() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenTotalSupplyAtQuery<TData> extends BjmesTokenReactQuery<Uint128, TData> {
  args: {
    block: number;
  };
}
export function useBjmesTokenTotalSupplyAtQuery<TData = Uint128>({
  client,
  args,
  options
}: BjmesTokenTotalSupplyAtQuery<TData>) {
  return useQuery<Uint128, Error, TData>(bjmesTokenQueryKeys.totalSupplyAt(client?.contractAddress, args), () => client ? client.totalSupplyAt({
    block: args.block
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenBalanceAtQuery<TData> extends BjmesTokenReactQuery<BalanceResponse, TData> {
  args: {
    address: string;
    block: number;
  };
}
export function useBjmesTokenBalanceAtQuery<TData = BalanceResponse>({
  client,
  args,
  options
}: BjmesTokenBalanceAtQuery<TData>) {
  return useQuery<BalanceResponse, Error, TData>(bjmesTokenQueryKeys.balanceAt(client?.contractAddress, args), () => client ? client.balanceAt({
    address: args.address,
    block: args.block
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenBalanceQuery<TData> extends BjmesTokenReactQuery<BalanceResponse, TData> {
  args: {
    address: string;
  };
}
export function useBjmesTokenBalanceQuery<TData = BalanceResponse>({
  client,
  args,
  options
}: BjmesTokenBalanceQuery<TData>) {
  return useQuery<BalanceResponse, Error, TData>(bjmesTokenQueryKeys.balance(client?.contractAddress, args), () => client ? client.balance({
    address: args.address
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BjmesTokenUploadLogoMutation {
  client: BjmesTokenClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenUploadLogoMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenUploadLogoMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenUploadLogoMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.uploadLogo(fee, memo, funds), options);
}
export interface BjmesTokenUpdateMarketingMutation {
  client: BjmesTokenClient;
  msg: {
    description?: string;
    marketing?: string;
    project?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenUpdateMarketingMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenUpdateMarketingMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenUpdateMarketingMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateMarketing(msg, fee, memo, funds), options);
}
export interface BjmesTokenUpdateMinterMutation {
  client: BjmesTokenClient;
  msg: {
    newMinter?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenUpdateMinterMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenUpdateMinterMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenUpdateMinterMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateMinter(msg, fee, memo, funds), options);
}
export interface BjmesTokenMintMutation {
  client: BjmesTokenClient;
  msg: {
    amount: Uint128;
    recipient: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenMintMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenMintMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenMintMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.mint(msg, fee, memo, funds), options);
}
export interface BjmesTokenBurnFromMutation {
  client: BjmesTokenClient;
  msg: {
    amount: Uint128;
    owner: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenBurnFromMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenBurnFromMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenBurnFromMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.burnFrom(msg, fee, memo, funds), options);
}
export interface BjmesTokenSendFromMutation {
  client: BjmesTokenClient;
  msg: {
    amount: Uint128;
    contract: string;
    msg: Binary;
    owner: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenSendFromMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenSendFromMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenSendFromMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.sendFrom(msg, fee, memo, funds), options);
}
export interface BjmesTokenTransferFromMutation {
  client: BjmesTokenClient;
  msg: {
    amount: Uint128;
    owner: string;
    recipient: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenTransferFromMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenTransferFromMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenTransferFromMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.transferFrom(msg, fee, memo, funds), options);
}
export interface BjmesTokenDecreaseAllowanceMutation {
  client: BjmesTokenClient;
  msg: {
    amount: Uint128;
    expires?: Expiration;
    spender: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenDecreaseAllowanceMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenDecreaseAllowanceMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenDecreaseAllowanceMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.decreaseAllowance(msg, fee, memo, funds), options);
}
export interface BjmesTokenIncreaseAllowanceMutation {
  client: BjmesTokenClient;
  msg: {
    amount: Uint128;
    expires?: Expiration;
    spender: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenIncreaseAllowanceMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenIncreaseAllowanceMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenIncreaseAllowanceMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.increaseAllowance(msg, fee, memo, funds), options);
}
export interface BjmesTokenSendMutation {
  client: BjmesTokenClient;
  msg: {
    amount: Uint128;
    contract: string;
    msg: Binary;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenSendMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenSendMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenSendMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.send(msg, fee, memo, funds), options);
}
export interface BjmesTokenBurnMutation {
  client: BjmesTokenClient;
  msg: {
    amount: Uint128;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenBurnMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenBurnMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenBurnMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.burn(msg, fee, memo, funds), options);
}
export interface BjmesTokenTransferMutation {
  client: BjmesTokenClient;
  msg: {
    amount: Uint128;
    recipient: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBjmesTokenTransferMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BjmesTokenTransferMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BjmesTokenTransferMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.transfer(msg, fee, memo, funds), options);
}