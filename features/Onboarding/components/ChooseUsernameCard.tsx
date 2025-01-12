import { ArrowBackIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";

import { useChain } from "@cosmos-kit/react";
import { useEffect, useState, useCallback } from "react";
import {
  IdentityserviceClient,
  IdentityserviceQueryClient,
} from "../../../client/Identityservice.client";
import { chainName } from "../../../config/defaults";
import OnboardingProgressIndicator from "./OnboardingProgressIndicator";
import { StdFee } from "@cosmjs/stargate";
import { WalletStatus } from "@cosmos-kit/core";
import {
  useIdentityserviceGetIdentityByNameQuery,
  useIdentityserviceRegisterUserMutation,
} from "../../../client/Identityservice.react-query";
import { IdentityError, validateName } from "../../../utils/identity";

const IDENTITY_SERVICE_CONTRACT = process.env
  .NEXT_PUBLIC_IDENTITY_SERVICE_CONTRACT as string;

const fee: StdFee = {
  amount: [
    {
      denom: "ujmes",
      amount: "2",
    },
  ],
  gas: "1000000",
};
interface ChooseUsernameCardProps {
  radioGroup: Array<String>;
  currentCard: String;
  setCurrentCard: Function;
  setIsInitalizing: Function;
  identityName: String;
}

const ChooseUsernameCard = ({
  radioGroup,
  currentCard,
  setCurrentCard,
  setIsInitalizing,
  identityName,
}: ChooseUsernameCardProps) => {
  const [identityNameInput, setIdentityNameInput] = useState("");
  const [isIdentityNameAvailable, setIsIdentityNameAvailable] = useState(false);
  const [isCreatingIdentity, setIsCreatingIdentity] = useState(false);
  const [cosmWasmClient, setCosmWasmClient] = useState<CosmWasmClient | null>(
    null
  );
  const [signingClient, setSigningClient] =
    useState<SigningCosmWasmClient | null>(null);
  const chainContext = useChain(chainName);
  const { address, status, getCosmWasmClient, getSigningCosmWasmClient } =
    chainContext;
  const validationResult: void | IdentityError =
    validateName(identityNameInput);
  const isIdentityNameValid = !validationResult?.name;
  const toast = useToast();

  const handleUpdateCard = (index: number) => {
    setCurrentCard(radioGroup[index + 1]);
    setIsInitalizing(false);
  };

  useEffect(() => {
    if (identityName?.length > 0) {
      setIdentityNameInput(identityName as string);
      setTimeout(() => {
        handleUpdateCard(radioGroup.indexOf(currentCard));
      }, 2000);
    }
  }, [identityName]);

  useEffect(() => {
    getCosmWasmClient()
      .then((cosmWasmClient) => {
        if (!cosmWasmClient || !address) {
          return;
        }
        setCosmWasmClient(cosmWasmClient);
      })
      .catch((error) => console.log(error));

    getSigningCosmWasmClient()
      .then((signingClient) => {
        if (!signingClient) {
          return;
        }
        setSigningClient(signingClient);
      })
      .catch((error) => console.log(error));
  }, [getCosmWasmClient, getSigningCosmWasmClient]);

  // useEffect(() => {
  //   if (address) {
  //     (async () => {
  //       try {
  //         const cosmWasmClient = await getCosmWasmClient();
  //         setCosmWasmClient(cosmWasmClient);
  //       } catch (error) {
  //         console.log(error);
  //       }

  //       try {
  //         const signingClient = await getSigningCosmWasmClient();
  //         setSigningClient(signingClient);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   }
  // }, [address]);

  const client: IdentityserviceQueryClient = new IdentityserviceQueryClient(
    cosmWasmClient as CosmWasmClient,
    IDENTITY_SERVICE_CONTRACT
  );

  const idClient: IdentityserviceClient = new IdentityserviceClient(
    signingClient as SigningCosmWasmClient,
    address as string,
    IDENTITY_SERVICE_CONTRACT
  );
  const identityMutation = useIdentityserviceRegisterUserMutation();

  const identityNameQuery = useIdentityserviceGetIdentityByNameQuery({
    client,
    args: { name: identityNameInput },
    options: {
      onSuccess: (data) => {
        if (!!!data?.identity?.name.toString()) {
          setIsIdentityNameAvailable(true);
        }
      },
      onError: (error) => {
        console.log(error); //this error
      },
      enabled: identityNameInput?.length > 2,
    },
  });

  return (
    <Box
      width={"500px"}
      height={"590px"}
      alignItems={"center"}
      marginTop={"-52.75px"}
    >
      <Flex>
        <Flex width={"100%"} justifyContent={"space-between"}>
          <IconButton
            aria-label=""
            background={"transparent"}
            color={"white"}
            icon={<ArrowBackIcon width={"24px"} height={"24px"} />}
            marginTop={"62.75px"}
            marginLeft={"8px"}
            _hover={{ backgroundColor: "transparent" }}
            onClick={() =>
              handleUpdateCard(radioGroup.indexOf(currentCard) - 2)
            }
          />
          <Image
            src="/Computer.svg"
            alt="icon"
            width={"288px"}
            height={"275.8px"}
            justifySelf={"center"}
          />
          <IconButton
            aria-label=""
            background={"transparent"}
            color={"white"}
            icon={<CloseIcon height={"24px"} />}
            marginTop={"62.75px"}
            marginRight={"8px"}
            _hover={{ backgroundColor: "transparent" }}
            onClick={() => handleUpdateCard(Infinity)}
          />
        </Flex>

        <Spacer />
      </Flex>
      <Flex>
        <Spacer />
        <Text
          color={"white"}
          fontWeight={"bold"}
          fontSize={28}
          marginTop={"4px"}
          fontFamily="DM Sans"
        >
          Choose a username
        </Text>
        <Spacer />
      </Flex>
      <Flex marginTop={"24px"}>
        <Spacer />
        <Box>
          <InputGroup justifyItems={"center"}>
            <Input
              disabled={status === WalletStatus.Connected ? false : true}
              width={"398px"}
              height={"49px"}
              backgroundColor="#5136C2"
              borderColor="#5136C2"
              borderRadius={12}
              alignItems="center"
              justifyContent="center"
              color="white"
              fontFamily="DM Sans"
              fontSize={"16px"}
              fontWeight="normal"
              value={identityNameInput}
              onChange={(event) => {
                setIdentityNameInput(event.target.value.trim());
              }}
              onBlur={() => {
                identityNameQuery.refetch();
              }}
            />
            <InputRightElement marginTop={"4px"}>
              {!!identityName &&
              identityNameQuery?.data?.identity?.name.toString() !==
                identityName ? (
                <CheckIcon color={"green"} />
              ) : (
                <></>
              )}
            </InputRightElement>
          </InputGroup>
          <Text
            marginBottom={"8px"}
            color="white"
            fontFamily={"DM Sans"}
            fontWeight="normal"
            fontSize={12}
            marginLeft={"18px"}
            marginTop={"8px"}
          >
            {identityNameInput.length > 0
              ? isIdentityNameValid
                ? identityNameQuery.isFetched
                  ? !isIdentityNameAvailable
                    ? "Name taken!"
                    : "Available"
                  : "Checking..."
                : validationResult.message
              : ""}
          </Text>
        </Box>
        <Spacer />
      </Flex>
      <Flex marginTop={"11px"} marginBottom={"25px"}>
        <Spacer />
        <Button
          disabled={!isIdentityNameAvailable || !isIdentityNameValid}
          // onClick={async () => await handleCreateIdentity()}
          onClick={() => {
            setIsCreatingIdentity(true);
            identityMutation
              .mutateAsync({
                client: idClient,
                msg: {
                  name: identityNameInput,
                },
                args: { fee },
              })
              .then((result) => {
                toast({
                  title: "Identity created.",
                  description: "We've created your Identity for you.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                  containerStyle: {
                    backgroundColor: "darkPurple",
                    borderRadius: 12,
                  },
                });
              })
              .catch((error) => {
                toast({
                  title: "Identity creation error",
                  description: error.toString(),
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                  containerStyle: {
                    backgroundColor: "red",
                    borderRadius: 12,
                  },
                });
              })
              .finally(() => setIsCreatingIdentity(false));
          }}
          backgroundColor={"green"}
          borderRadius={90}
          alignContent="end"
          width={"200px"}
          height={"48px"}
          _hover={{ bg: "green" }}
          _active={{ bg: "green" }}
          variant={"outline"}
          borderWidth={"1px"}
          borderColor={"rgba(0,0,0,0.1)"}
        >
          {!isCreatingIdentity ? (
            <Text
              color="midnight"
              fontFamily={"DM Sans"}
              fontWeight="medium"
              fontSize={14}
            >
              Create Identity
            </Text>
          ) : (
            <CircularProgress isIndeterminate size={"24px"} color="midnight" />
          )}
        </Button>
        <Spacer />
      </Flex>
      <Spacer />
      <OnboardingProgressIndicator activeCard="choose-username-card" />
    </Box>
  );
};

export default ChooseUsernameCard;
