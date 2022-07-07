const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const r1 = ('982922698508341278')
const r2 = ('982922699212984340')
const r3 = ('982922699720499270')

module.exports = {
    name: 'r1',

    run: async(client, message, args) => {
        const menu = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('pronouns')
                .setPlaceholder('Select a role')
                .addOptions([
                    {
                        label: 'he/him',
                        value: 'o1',
                        emoji: '988795966649954304'
                    },
                    {
                        label: 'she/her',
                        value: 'o2',
                        emoji: '988796005736656936'
                    },
                    {
                        label: 'they/them',
                        value: 'o3',
                        emoji: '988796343000645662'
                    },
                ]),
        )
        message.channel.send({ content: 'https://media.discordapp.net/attachments/989897745647165450/994527076566708264/ec_pronouns.png', components: [menu] })
    }
}