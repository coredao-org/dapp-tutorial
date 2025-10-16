# Guestbook Subgraph

This repository contains the subgraph for the Guestbook application on the Core Network. The subgraph indexes events and data from the Guestbook smart contract, allowing for easy querying using GraphQL.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Clone the Repository](#clone-the-repository)
- [Configuration](#configuration)
- [Install Dependencies](#install-dependencies)
- [Deploying with Docker](#deploying-with-docker)
- [Deploying the Subgraph](#deploying-the-subgraph)
- [Interacting with the Subgraph](#interacting-with-the-subgraph)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Clone the Repository

To clone the repository locally, run the following commands:

```bash
git clone https://github.com/coredao-org/dapp-tutorial.git
cd dapp-tutorial/06-Subgraphs-on-Core
```

## Configuration

### Environment Variables

You need to set up the following environment variables to configure deployment:

Create a .env file in the root directory:

```bash
touch.env
```

2. Add the necessary environment variables to the .env file:

```env
GRAPH_NODE=https://thegraph-node.test.btcs.network/
IPFS_NODE=https://thegraph-ipfs.test.btcs.network/
GRAPH_ACCESS_TOKEN=your_access_token_here
```

### Subgraph Configuration

Ensure your subgraph.yaml file is correctly set up with the necessary contract addresses and start blocks.

```zsh
npm install
```

This will install all required packages including @graphprotocol/graph-cli and @graphprotocol/graph-ts.

## Deploying with Docker

You can deploy your subgraph using Docker to simulate a local environment.

1. <b>Build and Start Docker Containers:</b>

```zsh
docker-compose up -d
```

2. <b>Check Docker Containers:</b>

```zsh
docker ps
```

Ensure all necessary containers are running.

## Deploying the Subgraph

### Authenticate with Graph Node

If not already authenticated, authenticate your deployment key:

```zsh
export GRAPH_ACCESS_TOKEN=08e38ec0513b40fd9b6a4428923d06ac
```


### Generate code and build the subgraph:

```bash
graph codegen
graph build
```

### Create and Deploy Subgraph

```
graph create \
  --node $GRAPH_NODE \
  --access-token $GRAPH_ACCESS_TOKEN \
  your-subgraph-name
```

```
graph deploy \
  --node $GRAPH_NODE \
  --ipfs $IPFS_NODE \
  --access-token $GRAPH_ACCESS_TOKEN \
  your-subgraph-name
```

Replace your-subgraph-name with your deployment target.

### Query the Subgraph
After deployment, your subgraph will be available at the query endpoint (e.g., https://thegraph.test2.btcs.network/subgraphs/name/guestbook-subgraph).

Example query:

```
{
  entrySigneds(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
    id
    name
    message
    blockNumber
    blockTimestamp
    transactionHash
  }
}
```

You can use GraphQL, Apollo Client, or any GraphQL tool to query your data.









