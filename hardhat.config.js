require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require("@nomiclabs/hardhat-etherscan")
require('@nomicfoundation/hardhat-chai-matchers')
require('@openzeppelin/hardhat-upgrades')
require('dotenv').config()

// "https://bsc.biswap.org"
// "https://bsc-dataseed.binance.org"
// "https://bscrpc.com"

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		localhost: {
			url: "http://127.0.0.1:8545"
		},
		remotehost: {
			blockGasLimit: 99999999,
			url: "http://192.168.100.76:8545",
			forking: {
				url: "http://192.168.100.76:8545",
			}
		},
		hardhat: {
			blockGasLimit: 99999999,
			forking: {
				url: "https://bsc-dataseed.binance.org",
			}
		},
		testnetBSC: {
			url: "https://data-seed-prebsc-1-s1.binance.org:8545",
			chainId: 97,
			gasPrice: 20e9,
			accounts: []//[process.env.PRIVATE_KEY]
		},
		mainnetBSC: {
			url: "https://bsc-dataseed.binance.org/",
			chainId: 56,
			gasPrice: 5e9,
			accounts: []//[process.env.PRIVATE_KEY]
		},
		testnetMatic: {
			url: "https://rpc-mumbai.maticvigil.com/",
			chainId: 80001,
			gasPrice: 20000000000,
			accounts: { mnemonic: process.env.MNEMONIC || ''}
		}
	},
	etherscan: {
		apiKey: process.env.BSCSCAN_APIKEY
	},
	solidity: {
		compilers: [
			{
				version: "0.6.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200
					}
				}
			},
			{
				version: "0.8.9",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200
					}
				}
			},
			{
				version: "0.8.4",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200
					}
				}
			},
			{
				version: "0.8.15",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200
					}
				}
			}
		],
		outputSelection: {
			"*": {
				"*": ["storageLayout"]
			}
		}
	},
	paths: {
		sources: "./contracts",
		tests: "./test",
		cache: "./cache",
		artifacts: "./artifacts"
	},
	mocha: {
		timeout: 2000000
	}
};
