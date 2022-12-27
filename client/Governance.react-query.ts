/**
* This file was automatically generated by @jmes-cosmwasm/ts-codegen@0.14.2.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @jmes-cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Addr, Uint128, ConfigResponse, Decimal, CoreSlotsResponse, SlotVoteResult, ExecuteMsg, ProposalMsg, Feature, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, WasmMsg, Binary, CoreSlot, VoteOption, Coin, Empty, RevokeCoreSlot, InstantiateMsg, ProposalPeriod, PeriodInfoResponse, ProposalType, ProposalStatus, ProposalResponse, ProposalsResponse, QueryMsg } from "./Governance.types";
import { GovernanceQueryClient, GovernanceClient } from "./Governance.client";
import { Coins, WaitTxBroadcastResult } from "@terra-money/terra.js";
export const governanceQueryKeys = {
  contract: ([{
    contract: "governance"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...governanceQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...governanceQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  periodInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...governanceQueryKeys.address(contractAddress)[0],
    method: "period_info",
    args
  }] as const),
  proposal: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...governanceQueryKeys.address(contractAddress)[0],
    method: "proposal",
    args
  }] as const),
  proposals: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...governanceQueryKeys.address(contractAddress)[0],
    method: "proposals",
    args
  }] as const),
  coreSlots: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...governanceQueryKeys.address(contractAddress)[0],
    method: "core_slots",
    args
  }] as const)
};
export interface GovernanceReactQuery<TResponse, TData = TResponse> {
  client: GovernanceQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface GovernanceCoreSlotsQuery<TData> extends GovernanceReactQuery<CoreSlotsResponse, TData> {}
export function useGovernanceCoreSlotsQuery<TData = CoreSlotsResponse>({
  client,
  options
}: GovernanceCoreSlotsQuery<TData>) {
  return useQuery<CoreSlotsResponse, Error, TData>(governanceQueryKeys.coreSlots(client?.contractAddress), () => client ? client.coreSlots() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface GovernanceProposalsQuery<TData> extends GovernanceReactQuery<ProposalsResponse, TData> {
  args: {
    limit?: number;
    start?: number;
  };
}
export function useGovernanceProposalsQuery<TData = ProposalsResponse>({
  client,
  args,
  options
}: GovernanceProposalsQuery<TData>) {
  return useQuery<ProposalsResponse, Error, TData>(governanceQueryKeys.proposals(client?.contractAddress, args), () => client ? client.proposals({
    limit: args.limit,
    start: args.start
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface GovernanceProposalQuery<TData> extends GovernanceReactQuery<ProposalResponse, TData> {
  args: {
    id: number;
  };
}
export function useGovernanceProposalQuery<TData = ProposalResponse>({
  client,
  args,
  options
}: GovernanceProposalQuery<TData>) {
  return useQuery<ProposalResponse, Error, TData>(governanceQueryKeys.proposal(client?.contractAddress, args), () => client ? client.proposal({
    id: args.id
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface GovernancePeriodInfoQuery<TData> extends GovernanceReactQuery<PeriodInfoResponse, TData> {}
export function useGovernancePeriodInfoQuery<TData = PeriodInfoResponse>({
  client,
  options
}: GovernancePeriodInfoQuery<TData>) {
  return useQuery<PeriodInfoResponse, Error, TData>(governanceQueryKeys.periodInfo(client?.contractAddress), () => client ? client.periodInfo() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface GovernanceConfigQuery<TData> extends GovernanceReactQuery<ConfigResponse, TData> {}
export function useGovernanceConfigQuery<TData = ConfigResponse>({
  client,
  options
}: GovernanceConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(governanceQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface GovernanceResignCoreSlotMutation {
  client: GovernanceClient;
  msg: {
    note: string;
    slot: CoreSlot;
  };
  args?: {
    coins?: Coins;
  };
}
export function useGovernanceResignCoreSlotMutation(options?: Omit<UseMutationOptions<WaitTxBroadcastResult, Error, GovernanceResignCoreSlotMutation>, "mutationFn">) {
  return useMutation<WaitTxBroadcastResult, Error, GovernanceResignCoreSlotMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.resignCoreSlot(msg, coins), options);
}
export interface GovernanceUnsetCoreSlotMutation {
  client: GovernanceClient;
  msg: {
    proposalId: number;
  };
  args?: {
    coins?: Coins;
  };
}
export function useGovernanceUnsetCoreSlotMutation(options?: Omit<UseMutationOptions<WaitTxBroadcastResult, Error, GovernanceUnsetCoreSlotMutation>, "mutationFn">) {
  return useMutation<WaitTxBroadcastResult, Error, GovernanceUnsetCoreSlotMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.unsetCoreSlot(msg, coins), options);
}
export interface GovernanceSetCoreSlotMutation {
  client: GovernanceClient;
  msg: {
    proposalId: number;
  };
  args?: {
    coins?: Coins;
  };
}
export function useGovernanceSetCoreSlotMutation(options?: Omit<UseMutationOptions<WaitTxBroadcastResult, Error, GovernanceSetCoreSlotMutation>, "mutationFn">) {
  return useMutation<WaitTxBroadcastResult, Error, GovernanceSetCoreSlotMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.setCoreSlot(msg, coins), options);
}
export interface GovernanceSetContractMutation {
  client: GovernanceClient;
  msg: {
    artistCurator: string;
    distribution: string;
    identityservice: string;
  };
  args?: {
    coins?: Coins;
  };
}
export function useGovernanceSetContractMutation(options?: Omit<UseMutationOptions<WaitTxBroadcastResult, Error, GovernanceSetContractMutation>, "mutationFn">) {
  return useMutation<WaitTxBroadcastResult, Error, GovernanceSetContractMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.setContract(msg, coins), options);
}
export interface GovernanceConcludeMutation {
  client: GovernanceClient;
  msg: {
    id: number;
  };
  args?: {
    coins?: Coins;
  };
}
export function useGovernanceConcludeMutation(options?: Omit<UseMutationOptions<WaitTxBroadcastResult, Error, GovernanceConcludeMutation>, "mutationFn">) {
  return useMutation<WaitTxBroadcastResult, Error, GovernanceConcludeMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.conclude(msg, coins), options);
}
export interface GovernanceVoteMutation {
  client: GovernanceClient;
  msg: {
    id: number;
    vote: VoteOption;
  };
  args?: {
    coins?: Coins;
  };
}
export function useGovernanceVoteMutation(options?: Omit<UseMutationOptions<WaitTxBroadcastResult, Error, GovernanceVoteMutation>, "mutationFn">) {
  return useMutation<WaitTxBroadcastResult, Error, GovernanceVoteMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.vote(msg, coins), options);
}
export interface GovernanceProposeMutation {
  client: GovernanceClient;
  msg: ProposalMsg;
  args?: {
    coins?: Coins;
  };
}
export function useGovernanceProposeMutation(options?: Omit<UseMutationOptions<WaitTxBroadcastResult, Error, GovernanceProposeMutation>, "mutationFn">) {
  return useMutation<WaitTxBroadcastResult, Error, GovernanceProposeMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.propose(msg, coins), options);
}