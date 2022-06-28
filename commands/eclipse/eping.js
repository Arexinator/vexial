const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ep',

    run: async(client, message, args) => {
        const allowedRoles = [
            '982556384749039626',
            '982556146055385099'
        ]
        const e2 = {
            "description": "<a:ec_no:990478311752859650> You do not have the required role(s) to run this command",
            "color": 0,
        }
        if (!message.member.roles.cache.hasAny(...allowedRoles)) {
            return message.reply({ embeds: [e2], allowedMentions: {repliedUsers: false} })
        }
        const error = {
            "description": "<:e_dot:985270306308489356>`v!ep [type of event] / [prize] / [donor id]`\n<:e_dot:985270306308489356>`v!ep rumble / 1 blob / 834781238132211733`",
            "color": 0,
            "title": "correct usage"
        }
        const splitArgs = args.join(" ").split("/ ")
        const event = splitArgs[0]
        if (!event) return message.reply({ embeds: [error], allowedMentions: {repliedUsers: false}})
        const prize = splitArgs[1]
        const u1 = splitArgs[2]
        const user = `<@${u1}>`
        const e1 = {
            "description": `<:dot:974223455987826719>**Sponsor**: ${user}\n<:dot:974223455987826719>**Event**: \`${event}\`\n<:dot:974223455987826719>**Prize**: \`${prize}\`\n<:dot:974223455987826719>**Channel**: <#982947900852174878>`,
            "color": 0,
            "title": "events",
            "footer": {
                "text": `Hosted by: ${message.author.tag}`
            }
        }
        const r1 = '982925222485323776'
        message.delete()
        message.channel.send({ content: `<@&${r1}>`, embeds: [e1]})
    }
}