const Ribon = artifacts.require('./Ribon.sol')

contract('Ribon', (accounts) => {
  let ribon
  let publisher

  before(async () => {
    ribon = await Ribon.deployed()
    publisher = accounts[0]
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

  describe('addStory', async () => {
    let story, storyCount

    before(async () => {
      story = await ribon.addStory('We need your help on this problem ...', { from: publisher })
      storyCount = await ribon.storyCount()
    })

    it('should create a story with a generated id', async () => {
      assert.equal(storyCount, 1)
    })
  })
})
