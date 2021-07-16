module.exports = {
    name: 'rules',
    description: 'Embeds!',
    execute(message, args, Discord) {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#304281')
      .setTitle('Rules')
      .setURL('https://www.youtube.com/channel/UCbW27TjsFUtkTsHO2yx-NpQ')
      .setDescription('Please read the rules if you are new :D')
      .addFields(
        {name: 'Rule 1', value: 'Be Nice'},
        {name: 'Rule 2', value: 'sub to youtube'},
        {name: 'Rule 3', value: 'no memes in general'}

      )

      .setImage('https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg')
      .setFooter('Make sure to check out the rules channel');

      message.channel.send(newEmbed);

    }

    

}