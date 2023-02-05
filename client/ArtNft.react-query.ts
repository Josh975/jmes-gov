/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { Expiration, Timestamp, Uint64, AllNftInfoResponse, OwnerOfResponse, Approval, NftInfoResponseForNullable_Empty, Empty, ApprovalResponse, ApprovalsResponse, ContractInfoResponse, ExecuteMsg, Binary, MintMsgForNullable_Empty, InstantiateMsg, MinterResponse, NftInfoResponse, NumTokensResponse, OperatorsResponse, QueryMsgForEmpty, TokensResponse } from "./ArtNft.types";
import { ArtNftClient } from "./ArtNft.client";
export interface ArtNftExtensionMutation {
  client: ArtNftClient;
  msg: {
    msg: Empty;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArtNftExtensionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArtNftExtensionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArtNftExtensionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.extension(msg, fee, memo, funds), options);
}
export interface ArtNftBurnMutation {
  client: ArtNftClient;
  msg: {
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArtNftBurnMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArtNftBurnMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArtNftBurnMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.burn(msg, fee, memo, funds), options);
}
export interface ArtNftMintMutation {
  client: ArtNftClient;
  msg: {
    extension?: Empty;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArtNftMintMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArtNftMintMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArtNftMintMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.mint(msg, fee, memo, funds), options);
}
export interface ArtNftRevokeAllMutation {
  client: ArtNftClient;
  msg: {
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArtNftRevokeAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArtNftRevokeAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArtNftRevokeAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revokeAll(msg, fee, memo, funds), options);
}
export interface ArtNftApproveAllMutation {
  client: ArtNftClient;
  msg: {
    expires?: Expiration;
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArtNftApproveAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArtNftApproveAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArtNftApproveAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approveAll(msg, fee, memo, funds), options);
}
export interface ArtNftRevokeMutation {
  client: ArtNftClient;
  msg: {
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArtNftRevokeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArtNftRevokeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArtNftRevokeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revoke(msg, fee, memo, funds), options);
}
export interface ArtNftApproveMutation {
  client: ArtNftClient;
  msg: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArtNftApproveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArtNftApproveMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArtNftApproveMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approve(msg, fee, memo, funds), options);
}
export interface ArtNftSendNftMutation {
  client: ArtNftClient;
  msg: {
    contract: string;
    msg: Binary;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArtNftSendNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArtNftSendNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArtNftSendNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.sendNft(msg, fee, memo, funds), options);
}
export interface ArtNftTransferNftMutation {
  client: ArtNftClient;
  msg: {
    recipient: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArtNftTransferNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArtNftTransferNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArtNftTransferNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.transferNft(msg, fee, memo, funds), options);
}