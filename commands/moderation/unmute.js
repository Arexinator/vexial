const discord = module.require("discord.js");
const ms = require('ms')

module.exports = {
  name: "unmute",
  aliases: ["um"],

  run: async (client, message, args) => {
    const allowedRoles = [
        '982556146055385099',
    ]
    const e1 = {
        "color": 0,
        "description": "<a:ec_no:990478311752859650> You do not have the required role(s) to run this command",
    }
    if (!message.member.roles.cache.hasAny(...allowedRoles)) {
        return message.channel.send({ embeds: [e1] })
    }

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    const e2 = {
        "description": "<a:ec_no:990478311752859650> Please provide a user ",
        "color": 0
    }
    const e4 = {
        "description": `<:e_dot:985270306308489356>**Offender**: ${member} (\`${member.id}\`)\n<:e_dot:985270306308489356>**Moderator**: ${message.author} (\`${message.author.id}\`)`,
        "color": 0,
        "title": "unmute case"
    }

    if (!member) return message.reply({ embeds: [e2], allowedMentions: {repliedUsers: false} })

    member.timeout(0).catch(console.log)

    message.reply({ embeds: [e4], allowedMentions: {repliedUsers: false} })
    client.channels.cache.get("990817912229101568").send({ embeds: [e4] })

  },
};