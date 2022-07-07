const ms = require('ms')

module.exports = {
  name: "unmute",
  aliases: ["um"],

  run: async(client, message, args) => {
    const allowedRoles = [
        '982556146055385099',
    ]
    const e1 = {
        "color": 16733525,
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
    const e3 = {
        "description": "<a:ec_no:990478311752859650> Please provide a time",
        "color": 0
    }
    const e4 = {
        "description": `<:e_dot:985270306308489356>**Offender**: ${member} (\`${member.id}\`)\n<:e_dot:985270306308489356>**Reason**: \`${reason}\`\n<:e_dot:985270306308489356>**Time**: \`${time}\`\n<:e_dot:985270306308489356>**Moderator**: ${message.author} (\`${message.author.id}\`)`,
        "color": 0,
        "title": "unmute"
    }

    if (!member) return message.reply({ embeds: [e2], allowedMentions: {repliedUsers: false} })
    if (!time) return message.reply({ embeds: [e3], allowedMentions: {repliedUsers: false} })
    if (!reason) return reason = "none"

    member.timeout(ms(time), `${reason}`).catch(console.log)

    message.reply({ embeds: [e4], allowedMentions: {repliedUsers: false} })
    client.channels.cache.get("990817912229101568").send({ embeds: [e4] })

  },
};