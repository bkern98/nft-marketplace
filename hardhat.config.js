require('@nomiclabs/hardhat-waffle');
const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();
const projectId = '8acaccd5096247d087aa0da6497e2f74';

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: '0.8.4'
};
