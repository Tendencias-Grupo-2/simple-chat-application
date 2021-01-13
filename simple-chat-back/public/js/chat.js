const socket = io()

const $messagesForm = document.querySelector("#message-form")
const $messagesFormInput = $messagesForm.querySelector('input')
const $messagesFormButton = $messagesForm.querySelector('button')

const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })


socket.on('message', (message) => {
    console.log(message)
})
socket.on('roomData', ({ room, users }) => {
    console.log(room)
    console.log(users)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value

    socket.emit('sendMessage', message)
})

socket.emit('join', { username, room }, (error) => {
    if (error) {
        alert(error)
        location.href = '/'
    }
})