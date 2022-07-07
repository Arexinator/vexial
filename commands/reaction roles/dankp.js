const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const r1 = ('982925223114469396')
const r2 = ('982925223689060382')
const r3 = ('982925222485323776')

module.exports = {
    name: 'r5',

    run: async(client, message, args) => {
        const menu = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('dankp')
                .setPlaceholder('Select a role')
                .addOptions([
                    {
                        label: 'giveaways',
                        value: 'o1',
                        emoji: '988795966649954304'
                    },
                    {
                        label: 'heists',
                        value: 'o2',
                        emoji: '988796005736656936'
                    },
                    {
                        label: 'events',
                        value: 'o3',
                        emoji: '988796343000645662'
                    },
                ]),
        )
        message.channel.send({ content: 'https://media.discordapp.net/attachments/982940806291808276/993289988127064075/jyuthbgfvrcrt.jpg', components: [menu] })
    }
}