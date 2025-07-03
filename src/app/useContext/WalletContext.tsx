"use client";

import React, { createContext, useContext } from "react";
import { useConnect, useAccount, useDisconnect } from "@starknet-react/core";

interface WalletContextProps {
  account: string | undefined;
  connectWallet: () => void;
  disconnectWallet: () => void;
  isConnected:boolean | undefined
}

const WalletContext = createContext<WalletContextProps>({
  account: undefined,
  connectWallet: () => {},
  disconnectWallet: () => { },
  isConnected:false,
});

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { connect, connectors } = useConnect();
  const { address,isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const connectWallet = () => {
    if (connectors && connectors.length > 0) {
      // Wrap the connector in an object as expected by connect()
      connect({ connector: connectors[0] });
    } else {
      console.error("No connectors available");
    }
  };

  return (
    <WalletContext.Provider
      value={{
        account: address , // convert undefined to null
        connectWallet,
        disconnectWallet: disconnect,
        isConnected
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);