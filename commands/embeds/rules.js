const { MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: 'rules',

    run: async(client,message,args) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setURL('https://discord.gg/8gDDRre5Mv')
                .setLabel('Ban Appeal')
                .setEmoji('994982996853669909')
                .setStyle('LINK'),
        )
        const embed1 = {
            "color": 3553598,
            "image": {
              "url": "https://media.discordapp.net/attachments/989897745647165450/994979423440867399/unknown.png"
            }
        }
        const embed2 = {
            "title": "rules",
            "description": "<:n1:988795966649954304> **tos**\nfollow discord [tos](https://discord.com//tos), [guidelines](https://discord.com/guidelines) & [dank memer tos](https://dankmemer.lo)\n\n<:n2:988796005736656936> **behaviour**\nrespect everyone like how you would want to be treated. toxicity / extreme swearing or discrimination is not allowed. begging for nitro/dmc/staff is not allowed.\n\n<:n3:988796343000645662> **scamming**\nscamming or attempting to scam someone in this server is not allowed.\n\n<:n4:988796369894527017> **impersonation**\nimpersonating any member / bot is not allowed in the server.\n\n<:n5:988796406833770506> **language**\nno other language other than english will be allowed in the server\n\n<:n6:988796435833176065> **advertisement**\ndm ads or advertising anywhere in the server is a permanent ban\n\n<:n7:988796458776035328> **staff**\nrespect staff at all times. do not argue with them. they always have the final say.\n\n<:n8:988796521887715399> **nsfw**\nnsfw/gore is not allowed in the server\n\n<:n9:988796544042016828> **others**\n- use your common sense to know what to do and what not to\n- do not talk about sensitive topics\n- do not create drama in the server\n- do not argue with another member in the server, take it to dms\n- do not copy any banners/layouts/icons in this server",
            "color": 3553598,
            "image": {
              "url": "https://media.discordapp.net/attachments/989897745647165450/994979511567388712/Screenshot_78.png"
            }
        }
        message.channel.send({ embeds: [embed1, embed2], components: [row] })
    }
}