const anime = require('discord-images')
const Discord = require('discord.js')

module.exports = {
    name: 'poke',

    run: async(client, message, args) => {
        const gif = await anime.poke()

        const e2 = {
            "description": "<a:ec_no:990478311752859650> Please provide a user",
            "color": 16733525
        }
        if(!args[0]) return message.reply({ embeds: [e2], allowedMentions: {repliedUser: false} })

        const u1 = message.mentions.users.first()
        const u2 = message.author
        
        const e1 = new Discord.MessageEmbed()
        .setColor("#36393E")
        .setAuthor({ name: `${u2.username} gives ${u1.username} a poke!`, iconURL: `${message.author.avatarURL()}`, url: `${gif}` })
        .setImage(`${gif}`)

    message.reply({ embeds: [e1], allowedMentions: {repliedUser: false} })
    }
}