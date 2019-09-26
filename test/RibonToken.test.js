const RibonToken = artifacts.require('./RibonToken.sol')

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
  })
})
