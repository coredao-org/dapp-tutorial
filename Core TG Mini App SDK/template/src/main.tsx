import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { coreDao } from "@reown/appkit/networks";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

function Root() {
  createAppKit({
    adapters: [new EthersAdapter()],
    networks: [coreDao],
    metadata: {
      name: "Ton + Core starter",
      description: "AppKit Example",
      url: "https://reown.com/appkit", // origin must match your domain & subdomain
      icons: ["https://assets.reown.com/reown-profile-pic.png"],
    },
    projectId: "7594a316c1c467100dafe6fe766c3914",
  });

  return <App />;
}
