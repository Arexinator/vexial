const Discord = require("discord.js")

module.exports = {
    name: 'userinfo',
    aliases: ["ui"],

    run: async(message,args) => {
        const a = message.member && message.author
        if (!a) return a = message.guild.members.cache.get(args[0]).catch(console.log)
        if (!args[0]) return b = message.author
        const e1 = new Discord.MessageEmbed()
        .setDescription(`${b.createdAt}\n${a.joinedAt}`)
        message.channel.send({ embed: [e1]}).catch(console.log)
    }
}