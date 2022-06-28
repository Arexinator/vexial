const discord = module.require("discord.js");

module.exports = {
  name: "ban",
  aliases: ["b"],

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
    const e2 = {
        "description": "<a:ec_no:990478311752859650> Please provide a user ",
        "color": 0
    }
    const e3 = {
        "description": "<a:ec_no:990478311752859650> You cannot ban yourself",
        "color": 0
    }

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "none";

    let target =  message.mentions.users.first() || message.guild.members.cache.get(args[0]);

    if (!target) {
      return message.reply({ embeds: [e2], allowedMentions: { repliedUser: false }})
    }
    if (target.id === message.author.id) {
      return message.reply({ embeds: [e3], allowedMentions: { repliedUser: false }})
    }

    const e4 = {
        "description": `<:e_dot:985270306308489356>**Offender**: ${target} (\`${target.id}\`)\n<:e_dot:985270306308489356>**Reason**: \`${reason}\`\n<:e_dot:985270306308489356>**Moderator**: ${message.author} (\`${message.author.id}\`)`,
        "color": 0,
        "title": "ban case"
    }
    const e6 = {
        "description": `You were banned in **Eclipse**. **Reason**: \`${reason}\`\n**[ban appeal](https://discord.gg/8gDDRre5Mv)**`,
        "color": 0,
    }

    target.send({ embeds: [e6]}).catch(console.log)
    target.ban({ reason }).catch(console.log)
    message.reply({ embeds: [e4], allowedMentions: {repliedUsers: false} });

    client.channels.cache.get("990817912229101568").send({ embeds: [e4] })


  },
};