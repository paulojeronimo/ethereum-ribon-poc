const RibonToken = artifacts.require('./RibonToken.sol')
const RibonTokenConfig = require('../RibonTokenConfig.json')

contract('RibonToken', (accounts) => {
  let token

  before(async () => {
    token = await RibonToken.deployed()
  })

  describe('deployment', async () => {
    it('should be deployed successfuly', async () => {
      const address = await token.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
    it('should have the correct attributes', async () => {
      assert.equal(RibonTokenConfig.name, await token.name())
      assert.equal(RibonTokenConfig.symbol, await token.symbol())
      const _decimals = await token.decimals()
      assert.equal(RibonTokenConfig.decimals, _decimals.toNumber())
    })
    it('should have the configured total supply', async () => {
      assert.equal(RibonTokenConfig.totalSupply, await token.totalSupply())
    })
    it('should allocates the initial supply to the admin account', async () => {
      const adminBalance = await token.balanceOf(accounts[0])
      assert.equal(RibonTokenConfig.totalSupply, adminBalance)
    })
  })
})
