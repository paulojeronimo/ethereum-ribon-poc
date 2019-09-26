const RibonToken = artifacts.require('./RibonToken.sol')
const RibonTokenConfig = require('../RibonTokenConfig.json')

contract('RibonToken', (accounts) => {
  const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
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

  describe('transfer', () => {
    it('should not work if the recipient has a zero address', async () => {
      try {
        await token.transfer.call(ZERO_ADDRESS, 0)
        throw Error('transfer should generated an Error')
      } catch (error) {
        assert(error.message.indexOf('revert') >= 0, 'error message must contain revert')
      }
    })
    it("should not work for an amount larger than the sender's balance", async () => {
      try {
        await token.transfer.call(accounts[1], RibonTokenConfig.totalSupply + 1)
        throw Error('transfer should generated an Error')
      } catch (error) {
        assert(error.message.indexOf('revert') >= 0, 'error message must contain revert')
      }
    })
    it("should transfer the amount from sender to the receiving account", async () => {
      const amount = 1000
      const sender = accounts[0]
      const receiver = accounts[1]
      await token.transfer(receiver, amount, { from: sender })
      const senderFinalBalance = await token.balanceOf(sender)
      const receiverFinalBalance = await token.balanceOf(receiver)
      assert.equal(senderFinalBalance.toNumber(), RibonTokenConfig.totalSupply - amount)
      assert.equal(receiverFinalBalance.toNumber(), amount)
    })
    it("should emit a Transfer event", async () => {
      const amount = 1000
      const receipt = await token.transfer(accounts[1], amount, { from: accounts[0] })
      assert.equal(receipt.logs.length, 1, 'triggers one event')
      assert.equal(receipt.logs[0].event, 'Transfer', 'should be the "Transfer" event')
      const transfer = receipt.logs[0].args
      assert.equal(transfer.from, accounts[0], 'transfer from')
      assert.equal(transfer.to, accounts[1], 'transfer to')
      assert.equal(transfer.value, amount, 'transfer amount')
    })
    it("should return true", async () => {
      const result = await token.transfer.call(accounts[1], 0, { from: accounts[0] })
      assert.isTrue(result, 'transfer result')
    })
  })
})
