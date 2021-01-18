class Messager {
  // eslint-disable-next-line class-methods-use-this
generateMessage(username,text){
  return {
    username,
    text,
    createdAt: new Date().getTime()
  }
}

// eslint-disable-next-line class-methods-use-this
generateMessageLog(username, text, _id){
  return {
    username,
    text,
    createdAt: new Date().getTime(),
    _id
  }
}
}

module.exports = new Messager()