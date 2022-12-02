const { network, ethers } = require('hardhat')
const { expect } = require('chai')
const { toBN }  = require('@gazoblock/commonlibrary')

let accounts, token

before(async () => {
    accounts = await ethers.getSigners()
    const Token = await ethers.getContractFactory('Token')
    token = await Token.deploy('name', 'symbol')
})

describe('test', async () => {
    it('Test 1', async () => {
       expect(await token.name()).eq('name')
       expect(await token.symbol()).eq('symbol')
    })
})