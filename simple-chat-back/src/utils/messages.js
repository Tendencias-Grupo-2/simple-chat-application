const generateMessage = (username,text) =>({
    username,
    text,
    createdAt: new Date().getTime()
})
const generateMessageLog = (username, text, _id) =>({
    username,
    text,
    createdAt: new Date().getTime(),
    _id
})

module.exports = {
    generateMessage,
    generateMessageLog
}