const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'gd',

    run: async(client, message, args) => {
        message.delete()
        const e1 = {
            "description": "`.gd time / winners / requirement / prize / message`\n`.gd 1h / 1 / level 5 / hello there`\n\n<:ec_whitedot:994567054222962811>minimum donation value is `⏣ 1,000,000`\n<:ec_whitedot:994567054222962811>all donations values will be counted with the current trade price\n<:ec_whitedot:994567054222962811>use `none` if you don't want a msg or req",
            "color": 3553598,
            "title": "giveaway donations"
        }
        const splitArgs = args.join(" ").split("/")
        const time = splitArgs[0]
        if (!time) {
            return message.channel.send({ embeds: [e1]})
          }
        const winners = splitArgs[1]
        const req = splitArgs[2]
        const prize = splitArgs[3]
        const msg = splitArgs[4]
        const e2 = {
            "description": `<:ec_whitedot:994567054222962811>**Time**: ${time}\n<:ec_whitedot:994567054222962811>**Winners**: ${winners}\n<:ec_whitedot:994567054222962811>**Requirement**: ${req}\n<:ec_whitedot:994567054222962811>**Prize**: ${prize}\n<:ec_whitedot:994567054222962811>**Message**: ${msg}`,
            "color": 3553598,
            "title": `${message.author.tag} wants to make a donation!`,
        }
        message.channel.send({ content: `<@&982556384191205446>`, embeds: [e2]})
    }
}