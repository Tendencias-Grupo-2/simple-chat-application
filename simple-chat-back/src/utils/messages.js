class Messager {
  generateMessage = (username,text) =>({
    username,
    text,
    createdAt: new Date().getTime()
  })
  generateMessageLog = (username, text, _id) =>({
      username,
      text,
      createdAt: new Date().getTime(),
      _id
  })
}

module.exports = new Messager()