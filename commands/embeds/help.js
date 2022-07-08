const { MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: 'help',

    run: async(client,message,args) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setURL('https://arex.ga')
            .setLabel('Arex')
            .setEmoji('995041398791344279')
            .setStyle('LINK'),
        )
        .addComponents(
            new MessageButton()
            .setURL('https://bit.ly/vexial')
            .setLabel('Github')
            .setEmoji('994982996853669909')
            .setStyle('LINK'),
        )
        const embed = {
            "title": "Help Menu",
            "description": "Hey, I'm Vexial, a custom coded bot for [eclipse](https://discord.gg/ecli). I am created by <@834781238132211733>. If you want to contribute to me, DM him!\n\n**Moderation**\n`.ban` `.unban` `.kick` `.lock` `.unlock` `.slowmode` `.purge` `.mute` `.unmute`\n\n**Utilities**\n`.8ball` `.choose` `.ping` `.serverinfo` `.pp` `.say` `.membercount`\n\n**Actions**\n`.bonk` `.bully` `.hug` `.kill` `.kiss` `.pat` `.poke` `.punch` `.slap` `.yeet`\n\n**Emotes**\n`.confused` `.cry` `.happy` `.sad` `.scream` `.smile` `.thinking` `.wave`",
            "color": 3553598,
            "author": {
              "name": "Vexial",
              "url": "https://discord.gg/ecli",
              "icon_url": "https://media.discordapp.net/attachments/989897745647165450/995038517065433098/vexial_f.jpg"
            }
        }
        message.reply({ embeds: [embed], allowedMentions: {repliedUser: false}, components: [row] })
    }
}