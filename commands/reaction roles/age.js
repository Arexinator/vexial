const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const r1 = ('982922700567744562')
const r2 = ('982922701305950211')

module.exports = {
    name: 'r2',

    run: async(client, message, args) => {
        const menu = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('age')
                .setPlaceholder('Select a role')
                .addOptions([
                    {
                        label: 'below 18',
                        value: 'o1',
                        emoji: '988795966649954304'
                    },
                    {
                        label: 'above 18',
                        value: 'o2',
                        emoji: '988796005736656936'
                    },
                ]),
        )
        message.channel.send({ content: 'https://media.discordapp.net/attachments/989897745647165450/994525794456055838/ec_age.png', components: [menu] })
    }
}