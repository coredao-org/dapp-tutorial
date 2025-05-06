"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MintButton from "./MintButton";

const SwapTab = ({amountOne, setAmountOne, addressOne, addressTwo, setAddressOne, setAddressTwo}: {amountOne: string, setAmountOne: (amount: string) => void, addressOne: string, addressTwo: string, setAddressOne: (address: string) => void, setAddressTwo: (address: string) => void}) => {
  return (
    <>
      <Card>
                  <CardHeader>
                    <CardTitle>Minting...</CardTitle>
                    <CardDescription>
                      Provides Minting of Tokens
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="token-a">Address To be Minted</Label>
                        <div className="flex mt-1">
                          <Input
                            id="token-a"
                            placeholder="0.0"
                            className="rounded-r-none"
                          value={addressOne}
                  onChange={(e) => setAddressOne(e.target.value)}
                />
                <Select onValueChange={(value) => setAddressTwo(value)}>
                  <SelectTrigger className="w-40 rounded-l-none">
                    <SelectValue placeholder="Select token" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0x650ADf6aA8b4e5764273E7f2001B2A3f792859a5">APT</SelectItem>
                    <SelectItem value="0xc04229AC77a2A66c52Cc9cB09dCEfE9e89d47bFa">CHT</SelectItem>
                    <SelectItem value="0xAA4CA018D432b66c65c85467FEb08036B860362d">WCORE</SelectItem>
                  </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="token-b">Amount to be Minted</Label>
                        <div className="flex mt-1">
                          <Input
                            id="token-b"
                            placeholder="0.0"
                            className="rounded-r-none"
                          value={amountOne}
                  onChange={(e) => setAmountOne(e.target.value)}
                />
                        </div>
                      </div>
                     <MintButton addressOne={addressOne} addressTwo={addressTwo} setAddressOne={setAddressOne} amountOne={amountOne} setAmountOne={setAmountOne}/>
                    </div>
                  </CardContent>
                </Card>
    </>
  );
};

export default SwapTab;
