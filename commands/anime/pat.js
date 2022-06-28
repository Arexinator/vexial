const Discord = module.require("discord.js");
const Anime = require('discord-images')

module.exports = {
  name: "pat",
  run: async (client, message, args) => {
    const e2 = {
        "description": "<a:ec_no:990478311752859650> Please provide a user",
        "color": 0
    }
    if(!args[0]) return message.reply({ embeds: [e2], allowedMentions: {repliedUser: false} })

    const u1 = message.mentions.users.first()
    const u2 = message.author
    let gif = await Anime.pat()

    const e1 = new Discord.MessageEmbed()
    .setColor("#00000")
    .setAuthor({ name: `${u2.username} pats ${u1.username}`, iconURL: `${message.author.avatarURL()}`, url: `${gif}` })
    .setImage(`${gif}`)

    message.reply({ embeds: [e1], allowedMentions: {repliedUser: false} })

  },
};