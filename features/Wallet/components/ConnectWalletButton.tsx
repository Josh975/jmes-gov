import { Button, Icon } from "@chakra-ui/react";
import { WalletStatus } from "@cosmos-kit/core";

import { ConnectWalletType } from "../../types";
import { IoWallet } from "react-icons/io5";
export const ConnectWalletButton = ({
  buttonText,
  isLoading,
  isDisabled,
  icon,
  onClickConnectBtn,
}: ConnectWalletType) => {
  return (
    <Button
      backgroundColor={"green"}
      borderRadius={90}
      alignContent="end"
      width={"159px"}
      height={"48px"}
      alignSelf="center"
      _hover={{ bg: "green" }}
      variant={"outline"}
      borderWidth={"1px"}
      borderColor={"rgba(0,0,0,0.1)"}
      _active={{
        bgImage:
          "linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)",
        opacity: 0.9,
      }}
      isLoading={isLoading}
      isDisabled={isDisabled}
      onClick={onClickConnectBtn}
    >
      <Icon as={icon ? icon : IoWallet} mr={2} />
      {buttonText ? buttonText : "Connect Wallet"}
    </Button>
  );
};
