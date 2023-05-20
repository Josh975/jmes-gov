import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GovernanceQueryClient } from "../client/Governance.client";
import { useGovernanceProposalsQuery } from "../client/Governance.react-query";
import { IdentityserviceQueryClient } from "../client/Identityservice.client";
import { useIdentityserviceGetIdentityByOwnerQuery } from "../client/Identityservice.react-query";
import { GovHeader } from "../components";
import {
  ProposalHeader,
  ProposalList,
} from "../components/react/proposal-list";
import { chainName } from "../config/defaults";
import { useChain } from "@cosmos-kit/react";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import PeriodInfo from "../components/react/period-info";
import { ConnectWalletSection } from "../components/react/connect-wallet-section";
import { CreateDaoForm } from "../components/react/create-dao-form";

const IDENTITY_SERVICE_CONTRACT = process.env
  .NEXT_PUBLIC_IDENTITY_SERVICE_CONTRACT as string;
const NEXT_PUBLIC_GOVERNANCE_CONTRACT = process.env
  .NEXT_PUBLIC_GOVERNANCE_CONTRACT as string;

export default function CreateDao({
  identityName,
  identityBalance,
  isConnectButtonClicked,
  setConnectButtonClicked,
  setCreateDaoSelected,
}: {
  identityName: string;
  identityBalance: string;
  isConnectButtonClicked: boolean;
  setConnectButtonClicked: Function;
  setCreateDaoSelected: Function;
}) {
  const { address, status, getCosmWasmClient } = useChain(chainName);

  const [viewDimension, setViewDimension] = useState(Array());
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setViewDimension([innerWidth, innerHeight]);
  }, []);

  const [cosmWasmClient, setCosmWasmClient] = useState<CosmWasmClient | null>(
    null
  );
  useEffect(() => {
    if (address) {
      getCosmWasmClient()
        .then((cosmWasmClient) => {
          if (!cosmWasmClient) {
            return;
          }
          setCosmWasmClient(cosmWasmClient);
        })
        .catch((error) => console.log(error));
    }
  }, [address, getCosmWasmClient]);

  const governanceQueryClient = new GovernanceQueryClient(
    cosmWasmClient as CosmWasmClient,
    NEXT_PUBLIC_GOVERNANCE_CONTRACT
  );
  const identityserviceQueryClient: IdentityserviceQueryClient =
    new IdentityserviceQueryClient(
      cosmWasmClient as CosmWasmClient,
      IDENTITY_SERVICE_CONTRACT
    );

  const args = { owner: address ? address : "" };
  const client: IdentityserviceQueryClient = new IdentityserviceQueryClient(
    cosmWasmClient as CosmWasmClient,
    IDENTITY_SERVICE_CONTRACT
  );

  const identityOwnerQuery = useIdentityserviceGetIdentityByOwnerQuery({
    client,
    args,
  });

  const governanceProposalQuery = useGovernanceProposalsQuery({
    client: governanceQueryClient,
    args: {},
    options: {
      refetchInterval: 10,
    },
  });

  return (
    <Box
      width={"100%"}
      height={"100%"}
      paddingLeft={"54px"}
      paddingTop={"25px"}
      paddingRight={"54px"}
      overflowY="scroll"
    >
      <Flex width={"100%"}>
        <PeriodInfo />
        <Spacer />
        <ConnectWalletSection
          identityName={identityName}
          identityBalance={identityBalance}
          isConnectButtonClicked={isConnectButtonClicked}
          setConnectButtonClicked={setConnectButtonClicked}
        />
      </Flex>
      <Flex height={"47px"} />
      <Text
        color={"darkPurple"}
        fontWeight="bold"
        fontSize={28}
        fontFamily="DM Sans"
      >
        Create DAO
      </Text>
      <Flex height={"75px"} />
      <CreateDaoForm
        daoOwner={{
          name: identityName,
          address: address as string,
          votingPower: 0,
        }}
        setCreateDaoSelected={setCreateDaoSelected}
      />
    </Box>
  );
}