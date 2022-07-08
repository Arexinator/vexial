const anime = require('discord-images')
const Discord = require('discord.js')

module.exports = {
    name: 'scream',

    run: async(client, message, args) => {
        const gif = await anime.scream()

        const u1 = message.author
        
        const e1 = new Discord.MessageEmbed()
        .setColor("#36393E")
        .setAuthor({ name: `${u1.username} screams`, iconURL: `${message.author.avatarURL()}`, url: `${gif}` })
        .setImage(`${gif}`)

    message.reply({ embeds: [e1], allowedMentions: {repliedUser: false} })
    }
}