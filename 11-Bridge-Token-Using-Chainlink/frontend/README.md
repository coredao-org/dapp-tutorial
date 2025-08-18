## FRONTEND OF CROSSCHAIN BRIDGE

This is the frontend of the Crosschain Bridge project built with Next.js. It interacts with the smart contracts on **Core Testnet 2** and **Sepolia**. The frontend allows users to bridge tokens between the two networks and view relevant information.

### Run the Development Server

First, navigate to the `frontend` directory and install the required dependencies:

```bash
npm install
```

Once the dependencies are installed, run the development server:

```bash
npm run dev
```

This will start the Next.js development server. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Interacting with the Bridge

On the frontend, users can:

1. Select the token and amount they want to bridge.
2. Interact with the smart contracts to perform token approval and bridging transactions.
3. View the status of their transactions on the selected network.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
