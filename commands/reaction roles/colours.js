const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const r1 = ('982556390386192404')
const r2 = ('988784619522494545')
const r3 = ('982556390583304223')
const r4 = ('982556391921311794')
const r5 = ('982556391296368640')
const r6 = ('982556392730796072')
const r7 = ('982556393263472660')
const r8 = ('982729531737653289')
const r9 = ('982729532333256756')
const r10 = ('982729533121781810')

module.exports = {
    name: 'r7',

    run: async(client, message, args) => {
        const menu = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('colours')
                .setPlaceholder('Select a role')
                .addOptions([
                    {
                        label: 'red',
                        value: 'o1',
                        emoji: '993345119606554714'
                    },
                    {
                        label: 'orange',
                        value: 'o2',
                        emoji: '993345116825731132'
                    },
                    {
                        label: 'blue',
                        value: 'o3',
                        emoji: '993345114401427466'
                    },
                    {
                        label: 'green',
                        value: 'o4',
                        emoji: '993345112484610128'
                    },
                    {
                        label: 'yellow',
                        value: 'o5',
                        emoji: '993345110504906812'
                    },
                    {
                        label: 'pink',
                        value: 'o6',
                        emoji: '993345108630052994'
                    },
                    {
                        label: 'purple',
                        value: 'o7',
                        emoji: '993345106688090193'
                    },
                    {
                        label: 'white',
                        value: 'o8',
                        emoji: '993345104670629970'
                    },
                    {
                        label: 'gray',
                        value: 'o9',
                        emoji: '993345102997114930'
                    },
                    {
                        label: 'black',
                        value: 'o10',
                        emoji: '993345101243887616'
                    },

                ]),
        )
        message.channel.send({ content: 'https://media.discordapp.net/attachments/982940806291808276/993283434346729532/dfghjhgtre.jpg', components: [menu] })
    }
}