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
    const storyText = 'We need your help on this problem ...'

    before(async () => {
      story = await ribon.addStory(storyText, { from: publisher })
      storyCount = await ribon.storyCount()
    })

    it('should create a story with a generated id', async () => {
      assert.equal(storyCount, 1)
    })

    it('should emit an event containing the story created', async () => {
      const event = story.logs[0].args
      assert.equal(event.id.toNumber(), storyCount.toNumber(), 'id is correct')
      assert.equal(event.text, storyText, 'text is correct')
      assert.equal(event.publisher, publisher, 'publisher is correct')
    })
  })
})
