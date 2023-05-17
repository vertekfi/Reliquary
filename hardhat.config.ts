import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-local-networks-config-plugin";
// import "@openzeppelin/hardhat-upgrades";
// import "@matterlabs/hardhat-zksync-deploy";
// import "@matterlabs/hardhat-zksync-solc";

dotenv.config();

const zkSyncTestnet = {
  url: "http://localhost:3050",
  ethNetwork: "http://localhost:8545",
  zksync: true,
};
//  {
//     url: "https://testnet.era.zksync.dev",
//     ethNetwork: "goerli",
//     zksync: true,
//  };

const ZKSYNC_TEST_WALLET_PK = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";
const accounts = process.env.DEV_KEY !== undefined ? [process.env.DEV_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.15",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  // zksolc: {
  //   version: "1.3.8",
  //   compilerSource: "binary",
  //   settings: {},
  // },

  // networks: {
  //   hardhat: {
  //     zksync: true,
  //     accounts: [
  //       {
  //         privateKey: ZKSYNC_TEST_WALLET_PK,
  //         balance: "10000",
  //       },
  //     ],
  //   },
  //   zkSyncTestnet,
  //   zkSync: {
  //     url: "https://testnet.era.zksync.dev",
  //     ethNetwork: "mainnet",
  //     zksync: true,
  //   },

  //   bsc: {
  //     url: process.env.BSC_RPC || "",
  //     accounts,
  //   },
  //   arbitrum: {
  //     url: process.env.ARBITRUM_RPC || "",
  //     accounts,
  //   },
  // },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
