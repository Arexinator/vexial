const anime = require('discord-images')
const Discord = require('discord.js')

module.exports = {
    name: 'sad',

    run: async(client, message, args) => {
        const gif = await anime.sad()

        const u1 = message.author
        
        const e1 = new Discord.MessageEmbed()
        .setColor("#36393E")
        .setAuthor({ name: `${u1.username} is sad`, iconURL: `${message.author.avatarURL()}`, url: `${gif}` })
        .setImage(`${gif}`)

    message.reply({ embeds: [e1], allowedMentions: {repliedUser: false} })
    }
}