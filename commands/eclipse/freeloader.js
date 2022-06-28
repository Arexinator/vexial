const { Discord, MessageEmbed } = require('discord.js')
const { MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    name: 'freeloader',

    run: async(client, message, args) => {
		const embed = {
            "description": "<:dot:974223455987826719>free ban by <@907491552702644246>\n<:dot:974223455987826719>miss daily 50m heists\n<:dot:974223455987826719>miss daily giveaways worth 100m+\n<:dot:974223455987826719>miss nitro giveaways ",
            "title": "freeloader perks",
            "color": 0
        }
        message.delete()
		message.channel.send({embeds: [embed] });
    }
}