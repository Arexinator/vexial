const discord = module.require("discord.js");

module.exports = {
  name: "unban",

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
        "description": "<a:ec_no:990478311752859650> User is not banned in the server",
        "color": 0
    }

    let userID = args[0]  

    const e4 = {
        "description": `<:e_dot:985270306308489356>**Offender**: <@${userID}> (\`${userID}\`)\n<:e_dot:985270306308489356>**Moderator**: ${message.author} (\`${message.author.id}\`)`,
        "color": 0,
        "title": "unban case"
    }

    if (!userID) return message.reply({ embeds: [e2], allowedMentions: { repliedUser: false }})

    message.guild.bans.fetch().then(bans => {
        let bUser = bans.find(b => b.user.id == userID)
        if(!bUser) return message.reply({ embeds: [e3], allowedMentions: { repliedUser: false }})
        message.guild.members.unban(bUser.user).catch(console.log)
    })

    message.reply({ embeds: [e4], allowedMentions: { repliedUser: false }})
    client.channels.cache.get("990817912229101568").send({ embeds: [e4] })
}
}