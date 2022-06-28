const { Discord, MessageEmbed } = require('discord.js')
const { MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    name: 'vote',

    run: async(client, message, args) => {
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://top.gg/servers/982552981423652884/vote')
					.setLabel('Vote here')
					.setStyle('LINK'),
			);

		const embed = {
            "description": "<:dot:974223455987826719><@&983022362138128434> for 12 hours\n<:dot:974223455987826719> access `\"snipe` `\"esnipe`\n<:dot:974223455987826719>access <#983022826254659664> & <#983022268332527626> (2x amari)\n<:dot:974223455987826719>image + link permissions in <#982940806291808276>",
            "title": "vote for us",
            "color": 0
        }
        message.delete()
		message.channel.send({embeds: [embed], components: [row] });
    }
}