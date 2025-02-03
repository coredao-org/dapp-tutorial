'use client'

import React from 'react'
import Link from 'next/link';
import { client } from "./client";
import {useActiveAccount } from "thirdweb/react";

const LinkDash = () => {

    const activeAccount = useActiveAccount();
  return (
    <>
    <div>
        <Link
                href={activeAccount?.address ? "/dashboard" : "#"}
                className={`transition-colors ${
                  activeAccount?.address
                    ? "hover:text-neon-green"
                    : "text-gray-500 pointer-events-none"
                }`}
              >
                Dashboard
              </Link>
    </div>
    </>
  )
}

export default LinkDash