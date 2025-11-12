"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { client } from "../client";

const ConnectButtons = () => {
  return (
    <>

        <ConnectButton
          client={client}
          theme={lightTheme({
            colors: {
              primaryButtonBg: "white",
              primaryButtonText: "black",
            },
          })}
          connectButton={{
            label: "Connect Wallet",
            className:
              "bg-white hover:bg-gray-100 text-black border border-gray-200 flex items-center",
          }}
        />
    </>
  );
};

export default ConnectButtons;
