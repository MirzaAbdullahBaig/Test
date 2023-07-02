import { FC } from "react";
import { useEthers, useEtherBalance, shortenIfAddress } from "@usedapp/core";
import { Button } from "@mui/material";

import { formatEtherToFixed } from "../utils";

export let connectedAddress: string | null = null; // Declare a variable to store the connected address

export const ConnectWallet: FC = () => {
  const { activateBrowserWallet, account } = useEthers();
  const ethBalance = useEtherBalance(account);

  if (account) {
    connectedAddress = account;
  }

  return (
    <div style={{ position: "absolute", right: "15px" }}>
      {!account && (
        <Button variant="contained" onClick={() => activateBrowserWallet()}>
          Connect wallet
        </Button>
      )}
      {ethBalance && (
        <div>
          <div>{shortenIfAddress(account)}</div>
          <div>{formatEtherToFixed(ethBalance)} ETH</div>
        </div>
      )}
    </div>
  );
};
