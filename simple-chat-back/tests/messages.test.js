const { generateMessage, generateMessageLog } = require("../src/utils/messages")

describe('Add user tests', () => {

  it('should generate a message', () => {
    const username = "username"
    const text = "sample text"

    expect(generateMessage(username, text)).toHaveProperty('username', username)

    expect(generateMessage(username, text)).toHaveProperty('text', text)
  })

  it('should generate a message with id', () => {
    const username = "username"
    const text = "sample text"
    const id  = "10"

    expect(generateMessageLog(username, text, id)).toHaveProperty('username', username)

    expect(generateMessageLog(username, text, id)).toHaveProperty('text', text)

    expect(generateMessageLog(username, text, id)).toHaveProperty('_id', id)

  })


})