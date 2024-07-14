module.exports = {
    name: 'randomfuture',
    description: 'Gives you a random future',
    execute(message, args) {
        let randNum = Math.floor(Math.random() * 5);
        if (randNum === 0) {
            message.channel.send("You are going to die young. GG");
        }
        if (randNum === 1) {
            message.channel.send("You are going to be rich. Please give me some money");
        }
        if (randNum === 2) {
            message.channel.send("You are going to be homeless. Lol sucks to be you");
        }
        if (randNum === 3) {
            message.channel.send("You are going to be unemployed. Your mom will hate you.");
        }
        if (randNum === 4) {
            message.channel.send("You are going to get a super power. It'll probably be something trash lol.");
        }
        if (randNum === 5) {
            message.channel.send("You are going to spend your life on reddit. Get a life you loser.");
        }
    }
}