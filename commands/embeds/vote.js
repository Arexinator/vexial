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
            "description": "<:ec_whitedot:994567054222962811><@&983022362138128434> for 12 hours\n<:ec_whitedot:994567054222962811> access `\"snipe` `\"esnipe`\n<:ec_whitedot:994567054222962811>access <#983022826254659664> & <#983022268332527626> (2x amari)\n<:ec_whitedot:994567054222962811>image + link permissions in <#982940806291808276>",
            "title": "vote for us",
            "color": 3553598
        }
        message.delete()
        message.channel.send({embeds: [embed], components: [row] });
    }
}