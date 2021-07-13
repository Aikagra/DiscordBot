module.exports = {
    name: 'clear',
    description: 'Clear Message',
    async execute(message, args){
       if(!args[0]) return message.reply('Specify how many messages you want to delete you noob');
       if(isNaN(args[0])) return message.reply('Enter a frickin real number you noob');

       if(args[0] > 100) return message.reply('You cannot delete more than 100 you noob');
       if(args[0] < 1) return message.reply('Delete atleast one message you noob!');

       await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
       });
    }
}