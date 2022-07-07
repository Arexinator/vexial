const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const r1 = ('982924781131288596')
const r2 = ('982924781814951936')
const r3 = ('982925225006096448')
const r4 = ('982925224448258068')

module.exports = {
    name: 'r4',

    run: async(client, message, args) => {
        const menu = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('serverp')
                .setPlaceholder('Select a role')
                .addOptions([
                    {
                        label: 'announcement',
                        value: 'o1',
                        emoji: '988795966649954304'
                    },
                    {
                        label: 'updates',
                        value: 'o2',
                        emoji: '988796005736656936'
                    },
                    {
                        label: 'nitro giveaways',
                        value: 'o3',
                        emoji: '988796343000645662'
                    },
                    {
                        label: 'chat revive',
                        value: 'o4',
                        emoji: '988796369894527017'
                    },
                ]),
        )
        message.delete()
        message.channel.send({ content: 'https://media.discordapp.net/attachments/982940806291808276/993289988458418206/hngfbvdcxw.jpg', components: [menu] })
    }
}