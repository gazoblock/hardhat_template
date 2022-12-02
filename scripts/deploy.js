const { sleep, lastNonce } = require('@gazoblock/commonlibrary')

const main = async() => {
    const [deployer] = await hre.ethers.getSigners()
    console.log(`Deployer address: ${deployer.address}`)
    let nonce = await lastNonce(deployer.address) - 1
    const Token = await hre.ethers.getContractFactory('Token')
    const token = await Token.deploy('name', 'symbol', {nonce: ++nonce})
    await token.deployed()
    await sleep(15000)
    await hre.run('verify:verify', {
        address: token.address,
        constructorArguments: ['name', 'symbol'],
        optimizationFlag: true
    })
}


main().catch(e => console.error(e) && process.exit(1))
