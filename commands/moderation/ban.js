module.exports = {
  name: "ban",
  aliases: ["b"],

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
    const e2 = {
        "description": "<a:ec_no:990478311752859650> Please provide a user ",
        "color": 16733525
    }
    const e3 = {
        "description": "<a:ec_no:990478311752859650> You cannot ban yourself",
        "color": 16733525
    }

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "nothing";

    let target =  message.mentions.users.first() || message.guild.members.cache.get(args[0])

    if (!target) {
      return message.reply({ embeds: [e2], allowedMentions: { repliedUser: false }})
    }
    if (target.id === message.author.id) {
      return message.reply({ embeds: [e3], allowedMentions: { repliedUser: false }})
    }

    const e4 = {
      "description": `<a:ec_yes:990478257851858974> Successfully banned ${target} for **${reason}**`,
      "color": 9961045,
    }
    const e6 = {
      "description": `You were banned in **eclipse** for **${reason}**. You can appeal [here](https://discord.gg/8gDDRre5Mv)`,
      "color": 3553598
    }
    const e7 = {
        "description": `> <:ec_whitedot:994567054222962811>**Offender**: ${target} (\`${target.id}\`)\n> <:ec_whitedot:994567054222962811>**Reason**: \`${reason}\`\n> <:ec_whitedot:994567054222962811>**Moderator**: ${message.author} (\`${message.author.id}\`)\n> <:ec_whitedot:994567054222962811>**Timestamp** <t:${Math.round((new Date()).getTime() / 1000)}:F>`,
        "color": 3553598,
        "title": "ban case"
    }

    target.send({ embeds: [e6]}).catch(console.log)
    target.ban({ reason }).catch(console.log)
    message.reply({ embeds: [e4], allowedMentions: {repliedUsers: false} });

    client.channels.cache.get("994527481027637258").send({ embeds: [e7] })
  },
};