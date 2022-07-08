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
        "color": 16733525
    }
    const e4 = {
        "description": `> <:ec_whitedot:994567054222962811>**Offender**: ${member} (\`${member.id}\`)\n> <:ec_whitedot:994567054222962811>**Moderator**: ${message.author} (\`${message.author.id}\`)\n> <:ec_whitedot:994567054222962811>**Moderator**: ${message.author} (\`${message.author.id}\`)\n> <:ec_whitedot:994567054222962811>**Timestamp** <t:${Math.round((new Date()).getTime() / 1000)}:F>`,
        "color": 3553598,
        "title": "unmute case"
    }
    const e6 = {
        "description": `You were unmuted in **eclipse**.`,
        "color": 3553598
    }
    const e5 = {
        "description": `<a:ec_yes:990478257851858974> Successfully unmuted ${member}`,
        "color": 9961045,
    }

    if (!member) return message.reply({ embeds: [e2], allowedMentions: {repliedUsers: false} })

    member.timeout(ms(time), `${reason}`).catch(console.log)

    member.send({ embeds: [e6]}).catch(console.log)
    message.reply({ embeds: [e5], allowedMentions: {repliedUsers: false} })
    client.channels.cache.get("994527481027637258").send({ embeds: [e4] })

  },
};