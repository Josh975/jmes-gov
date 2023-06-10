import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import { useChain } from "@cosmos-kit/react";
import { useState } from "react";
import {
  IdentityserviceClient,
  IdentityserviceQueryClient,
} from "../client/Identityservice.client";
import {
  useIdentityserviceGetIdentityByNameQuery,
  useIdentityserviceGetIdentityByOwnerQuery,
  useIdentityserviceRegisterUserMutation,
} from "../client/Identityservice.react-query";
import { IDENTITY_SERVICE_CONTRACT, chainName } from "../config/defaults";
import { IdentityError, validateName } from "../utils/identity";
import { StdFee } from "@cosmjs/amino";

const IDENTITY_HELPERS = {
  validateName: (name: string) => {
    const validationResult = validateName(name);
    return validationResult;
  },
  isIdentityNameValid: (validationResult: void | IdentityError) => {
    return !validationResult?.name;
  },
  isIdentityNameAvailable: (i: any) => {
    return !!!i?.data?.identity?.name.toString();
  },
  getIdentityByOwner: async (
    client: IdentityserviceQueryClient,
    address: string
  ) => {
    const identity = await client.getIdentityByOwner({ owner: address });
    return identity;
  },
  getIdentityByName: async (
    client: IdentityserviceQueryClient,
    name: string
  ) => {
    const identity = await client.getIdentityByName({ name });
    return identity;
  },
  handleMutation: async (
    idClient: IdentityserviceClient,
    identityNameInput: string
  ) => {
    const identity = await idClient.registerUser({ name: identityNameInput });
    return identity;
  },

  setCosmWasmClient: (cosmWasmClient: CosmWasmClient) => {
    const client = new IdentityserviceQueryClient(
      cosmWasmClient,
      IDENTITY_SERVICE_CONTRACT
    );
    return client;
  },
  setSigningClient: (signingClient: SigningCosmWasmClient, address: string) => {
    const idClient = new IdentityserviceClient(
      signingClient,
      address,
      IDENTITY_SERVICE_CONTRACT
    );
    return idClient;
  },
  setIdentityName: (identity: any) => {
    return identity?.data?.identity?.name as string;
  },
  setIdentityNameInput: (identityNameInput: string) => {
    return identityNameInput;
  },
};

interface IdentityHook {
  cosmWasmClient: CosmWasmClient;
  signingClient: SigningCosmWasmClient;
  identityNameInput: string;
  setIsIdentityNameAvailable: Function;
  validationResult: void | IdentityError;
  isIdentityNameAvailable: boolean;
}

const tx_fee: StdFee = {
  amount: [
    {
      denom: "ujmes",
      amount: "2",
    },
  ],
  gas: "1000000",
};

const useIdentity = async ({
  signingClient,
  identityNameInput,
  setIsIdentityNameAvailable,
  cosmWasmClient,
}: IdentityHook) => {
  const [identityName, setIdentityName] = useState<string>("");
  const { address } = useChain(chainName);
  const validationResult: void | IdentityError =
    validateName(identityNameInput);
  const client = new IdentityserviceQueryClient(
    cosmWasmClient,
    IDENTITY_SERVICE_CONTRACT
  );
  const idClient = new IdentityserviceClient(
    signingClient,
    address as string,
    IDENTITY_SERVICE_CONTRACT
  );
  const handleMutation = useIdentityserviceRegisterUserMutation();
  const getIdentityByOwner = useIdentityserviceGetIdentityByOwnerQuery({
    client: client,
    args: { owner: address ? address : "" },
    options: {
      refetchInterval: 5000,
      onSuccess: (data) => {
        setIdentityName(data?.identity?.name as string);
      },
    },
  });

  const getIdentityByName = useIdentityserviceGetIdentityByNameQuery({
    client,
    args: { name: identityNameInput },
    options: {
      onSuccess: (data) => {
        if (!!!data?.identity?.name.toString()) {
          setIsIdentityNameAvailable(true);
        }
      },
      enabled: identityNameInput?.length > 2,
    },
  });

  const identity = await handleMutation.mutateAsync({
    client: idClient,
    msg: { name: identityNameInput },
    args: { fee },
  });
  const isIdentityNameValid = !validationResult?.name;

  const fetchIdentity = async () => {
    const identity = await getIdentityByOwner.refetch();

    setIdentityName(identity?.data?.identity?.name as string);

    return identity;
  };

  return {
    fetchIdentity,
    tx_fee,
    getIdentityByOwner,
    getIdentityByName,
    identityName,
    identity,
    isIdentityNameValid,
    handleMutation,
    idClient,
    client,
    validationResult,
    setIsIdentityNameAvailable,
    identityNameInput,
    setIdentityName,
    cosmWasmClient,
    signingClient,
  };
};

export default useIdentity;
