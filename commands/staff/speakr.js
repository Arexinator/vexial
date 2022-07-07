const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'speakr',
    aliases: ["spr"],

    run: async (client, message, args) => {
        const allowedRoles = [
            '982556146055385099',
        ]
        const e1 = {
            "color": 16733525,
            "description": "<a:ec_no:990478311752859650> You do not have the required role(s) to run this command",
        }
        const e2 = {
            "description": "<a:ec_no:990478311752859650> Please provide a user ",
            "color": 16733525
        }
        if (!message.member.roles.cache.hasAny(...allowedRoles)) {
            return message.channel.send({ embeds: [e1] })
        }

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const role = message.guild.roles.cache.find(role => role.id === '983036428646768661')

        if (!member) return message.reply({ embeds: [e2], allowedMentions: { repliedUser: false }})

        let embed = new MessageEmbed()
        .setDescription(`<a:ec_yes:990478257851858974> The ${role} role has been removed from ${member}`)
        .setColor("#97FE55")

        await member.roles.remove(role)
        message.channel.send({ embeds: [embed] })
    }
}