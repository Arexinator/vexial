const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'unban',
    aliases: ["unb"],

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

        const e2 = new MessageEmbed()
        .setColor("#FF5555")
        .setDescription(`<a:ec_no:990478311752859650> Please enter a valid user ID`)
        const user = args[0]
        let reason = args[1]
        if (!user) return message.reply({ embeds: [e2], allowedMentions: {repliedUser: false} })
        if (!reason) return reason = "nothing"

        const e3 = {
            "description": "<a:ec_no:990478311752859650> User is not banned",
            "color": 16733525
        }

        message.guild.bans.fetch().then(bans => {
            let bUser = bans.find(b => b.user.id == user)
            if(!bUser) return message.reply({ embeds: [e3], allowedMentions: { repliedUser: false }})
            message.guild.members.unban(bUser.user).catch(console.log)
        })

        const e4 = {
            "description": `> <:ec_whitedot:994567054222962811>**Offender**: ${target} (\`${target.id}\`)\n> <:ec_whitedot:994567054222962811>**Reason**: \`${reason}\`\n> <:ec_whitedot:994567054222962811>**Moderator**: ${message.author} (\`${message.author.id}\`)\n> <:ec_whitedot:994567054222962811>**Timestamp** <t:${Math.round((new Date()).getTime() / 1000)}:F>`,
            "color": 3553598,
            "title": "unban case"
        }
        const e5 = {
            "description": `<a:ec_yes:990478257851858974> Successfully unbanned ${target}`,
            "color": 9961045,
        }

        message.reply({ embeds: [e5], allowedMentions: { repliedUser: false }})
        client.channels.cache.get("994527481027637258").send({ embeds: [e4] })
    }
}