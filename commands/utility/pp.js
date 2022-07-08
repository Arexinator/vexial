const Discord = module.require("discord.js");

module.exports = {
  name: "pp",

  run: async (client, message, args) => {
    let target = message.mentions.members.first() || message.author

    var ppSize = [
        `8D`,
        `8==D`,
        `8====D`,
        `8======D`,
        `8========D`,
        `8==========D`,
        `8============D`,
        `8==============D`,
        `8================D`,
        `8==================D`,
        `8====================D`,
        
    ]

    const ppSize2 = ppSize[Math.floor(Math.random() * ppSize.length)]

    const ppSizeEmbed = new Discord.MessageEmbed()
      .setDescription(`${target}'s pp \n ${ppSize2}`)
      .setColor("#00000");
    const ppSizeEmbed2 = new Discord.MessageEmbed()
      .setDescription(`${target}'s pp \n 8=================================================D`)
      .setColor("#00000");

      if (target.id !== '834781238132211733') return message.reply({ embeds: [ppSizeEmbed], allowedMentions: {repliedUsers: false}})
      message.reply({ embeds: [ppSizeEmbed2], allowedMentions: { repliedUsers: false}})
  },
};