module.exports = {
    name: 'ping',
    description: 'This sends ping',
    execute(message, args) {
        message.channel.send('pong');
    }
}