"use client";
import ConnectButton from "./ConnectButton";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">DEX Platform</h1>
        <ConnectButton />
      </header>
    </>
  );
};

export default Header;
