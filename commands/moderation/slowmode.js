const {  MessageEmbed } = require("discord.js")

module.exports = {
    name: 'slowmode',
    aliases: ["sm"],

    run: async(client,message,args) => {
        const allowedRoles = [
            '982556146055385099',
        ]
        const e1 = {
            "color": 16733525,
            "description": "<a:ec_no:990478311752859650> You do not have the required role(s) to run this command",
        }
        if (!message.member.roles.cache.hasAny(...allowedRoles)) {
            return message.channel.send({ embeds: [e1] })
        }

        const a = args[0]
        const e2 = new MessageEmbed()
        .setColor("97FE55")
        .setDescription("<a:ec_yes:990478257851858974> Successfully reset the slowmode")
        if (!a) return message.channel.setRateLimitPerUser(0).then(message.reply({ embeds: [e2], allowedMentions: {repliedUser: false}}))
     
        message.channel.setRateLimitPerUser(a).catch(console.log)

        const e3 = new MessageEmbed()
        .setColor("#97FE55")
        .setDescription(`<a:ec_yes:990478257851858974> Successfully set slowmode to **${a}s**`)
        message.channel.send({ embeds: [e3], allowedMentions: {repliedUser: false} })
    }
}