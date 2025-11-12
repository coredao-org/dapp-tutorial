"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { RefreshCcw, Coins, BarChart3 } from "lucide-react";


const Cardd = ({activeTab, setActiveTab}: {activeTab: string, setActiveTab: (tab: string) => void}) => {


  return (
    <>
      <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "swap" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("swap")}
                  >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Swap
                  </Button>
                  <Button
                    variant={activeTab === "liquidity" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("liquidity")}
                  >
                    <Coins className="mr-2 h-4 w-4" />
                    Liquidity
                  </Button>
                  <Button
                    variant={activeTab === "investments" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("investments")}
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Investments
                  </Button>
                  <Button
                    variant={activeTab === "mint" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("mint")}
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Mint
                  </Button>
                </nav>
              </CardContent>
            </Card>
    </>
  );
};

export default Cardd;
