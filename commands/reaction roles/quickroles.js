const { MessageActionRow, MessageButton} = require('discord.js')

module.exports = {
    name: 'quickroles',
    aliases: ["qr"],

    run: async(client,message,args) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("b1")
                .setStyle('SECONDARY')
                .setEmoji('988795966649954304'),
        )
        .addComponents(
            new MessageButton()
                .setCustomId("b2")
                .setStyle('SECONDARY')
                .setEmoji('988796005736656936'),
        )
        .addComponents(
            new MessageButton()
                .setCustomId("b3")  
                .setStyle('SECONDARY')
                .setEmoji('988796343000645662'),
        )
        .addComponents(
            new MessageButton()
                .setCustomId("b4")
                .setStyle('SECONDARY')
                .setEmoji('988796369894527017'),
        )
        .addComponents(
            new MessageButton()
                .setCustomId("b5")
                .setEmoji('988796406833770506')
                .setStyle('SECONDARY'),
        )
        const embed = {
            "title": "quick roles",
            "description": "click the button to the following emoji to receive the corresponding role:\n<:n1:988795966649954304> <@&982924781131288596>\n<:n2:988796005736656936> <@&982925222485323776>\n<:n3:988796343000645662> <@&982925223114469396>\n<:n4:988796369894527017> <@&982925223689060382>\n<:n5:988796406833770506> <@&982925225006096448>",
            "color": 3553598
        }
        message.channel.send({ embeds: [embed], components: [row] })
    }
}