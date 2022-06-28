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

      message.reply({ embeds: [ppSizeEmbed], allowedMentions: { repliedUsers: false}})
  },
};