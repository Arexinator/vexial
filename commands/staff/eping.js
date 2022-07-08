module.exports = {
    name: 'ep',

    run: async(client, message, args) => {
        const allowedRoles = [
            '982556384749039626',
            '982556146055385099'
        ]
        const e2 = {
            "description": "<a:ec_no:990478311752859650> You do not have the required role(s) to run this command",
            "color": 16733525,
        }
        const e4 = {
            "description": "<a:ec_no:990478311752859650> This command is only enabled in <#982947900852174878>",
            "color": 16733525,
        }
        if (!message.member.roles.cache.hasAny(...allowedRoles)) {
            return message.reply({ embeds: [e2], allowedMentions: {repliedUsers: false} })
        }
        const error = {
            "description": "<:ec_whitedot:994567054222962811>`.ep [type of event] / [prize] / [donor id]`\n<:ec_whitedot:994567054222962811>`.ep rumble / 1 blob / 834781238132211733`",
            "color": 3553598,
            "title": "correct usage"
        }
        if (message.channel.id !== '982947900852174878') return message.reply({ embeds: [e4], allowedMentions: {repliedUsers: false}})
        const splitArgs = args.join(" ").split("/")
        const event = splitArgs[0]
        if (!event) return message.reply({ embeds: [error], allowedMentions: {repliedUsers: false}})
        const prize = splitArgs[1]
        const u1 = splitArgs[2]
        if (!ui) return u1 = message.author.id
        const user = `<@${u1}>`
        const e1 = {
            "description": `<:ec_whitedot:994567054222962811>**Sponsor**: ${user}\n<:ec_whitedot:994567054222962811>**Event**: \`${event}\`\n<:ec_whitedot:994567054222962811>**Prize**: \`${prize}\`\n<:ec_whitedot:994567054222962811>**Channel**: <#982947900852174878>`,
            "color": 3553598,
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