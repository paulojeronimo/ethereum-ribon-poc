const Ribon = artifacts.require('./Ribon.sol')

contract('Ribon', function(accounts) {
  let ribon

  before(async () => {
    ribon = await Ribon.deployed()
  })

  describe('deployment', async () => {
    it('should be deployed successfuly', async () => {
      const address = await ribon.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
  })
})
