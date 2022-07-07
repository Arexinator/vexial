const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ed',

    run: async(client, message, args) => {
        message.delete()
        const e1 = {
            "description": "`.ed event / msg / req / prize`\n`.ed rumble / hello there / level 5 / 1 blob`\n\n<:dot:974223455987826719>minimum donation value is `⏣ 1,000,000` (mafia is `⏣ 2,500,000`)\n<:dot:974223455987826719>use `none` if you don't want a msg or req",
            "color": 3553598,
            "title": "event donations"
        }
        const splitArgs = args.join(" ").split("/")
        const event = splitArgs[0]
        if (!event) {
            return message.channel.send({ embeds: [e1]})
          }
        const msg = splitArgs[1]
        const req = splitArgs[2]
        const prize = splitArgs[3]
        const e2 = {
            "description": `<:dot:974223455987826719>**Event**: ${event}\n<:dot:974223455987826719>**Message**: ${msg}\n<:dot:974223455987826719>**Requirement**: ${req}\n<:dot:974223455987826719>**Prize**: ${prize}`,
            "color": 3553598,
            "title": `${message.author.tag} wants to make a donation!`,
        }
        message.channel.send({ content: `<@&982556384749039626>`, embeds: [e2]})
    }
}