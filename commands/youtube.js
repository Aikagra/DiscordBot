module.exports = {
    name: 'youtube',
    description: 'sends the youtube link!',
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UCbW27TjsFUtkTsHO2yx-NpQ');
    }
}