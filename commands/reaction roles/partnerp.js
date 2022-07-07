const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const r1 = ('982925224876052550')
const r2 = ('983608934344589382')

module.exports = {
    name: 'r6',

    run: async(client, message, args) => {
        const menu = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('dankp')
                .setPlaceholder('Select a role')
                .addOptions([
                    {
                        label: 'partners',
                        value: 'o1',
                        emoji: '988795966649954304'
                    },
                    {
                        label: 'no partners',
                        value: 'o2',
                        emoji: '990478311752859650'
                    },
                ]),
        )
        message.channel.send({ content: 'https://media.discordapp.net/attachments/982940806291808276/993289987908968458/grtberbvrtbtbty.jpg', components: [menu] })
    }
}