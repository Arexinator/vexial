const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const r1 = ('982922702081900604')
const r2 = ('982924778761519214')
const r3 = ('982924779759730689')
const r4 = ('982924779369684992')
const r5 = ('982924781005447198')

module.exports = {
    name: 'r3',

    run: async(client, message, args) => {
        const menu = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('locations')
                .setPlaceholder('Select a role')
                .addOptions([
                    {
                        label: 'africa',
                        value: 'o1',
                        emoji: '988795966649954304'
                    },
                    {
                        label: 'asia',
                        value: 'o2',
                        emoji: '988796005736656936'
                    },
                    {
                        label: 'america',
                        value: 'o3',
                        emoji: '988796343000645662'
                    },
                    {
                        label: 'europe',
                        value: 'o4',
                        emoji: '988796369894527017'
                    },
                    {
                        label: 'oceania',
                        value: 'o5',
                        emoji: '988796406833770506'
                    },
                ]),
        )
        message.channel.send({ content: 'https://media.discordapp.net/attachments/982940806291808276/993283435084910653/rttbgfedrfg.jpg', components: [menu] })
    }
}