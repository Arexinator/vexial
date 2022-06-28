const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'sdono',

    run: async(client, message, args) => {
        let e1 = {
            "description": "<:dot:974223455987826719>ping <@834781238132211733> or <@817690037226700841> before donating\n<:dot:974223455987826719>min donation value is `1,000,000`\n<:dot:974223455987826719>banknotes donated here will be counted `280,000` each",
            "color": 0,
            "title": "server donations",
        }
    
        message.channel.send({ embeds: [e1] })
        message.delete()

    }
}