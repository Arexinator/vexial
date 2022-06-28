const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'speakr',
    aliases: ["spr"],

    run: async (client, message, args, Discord) => {
        const allowedRoles = [
            '982556146055385099',
        ]
        const e1 = {
            "color": 0,
            "description": "<a:ec_no:990478311752859650> You do not have the required role(s) to run this command",
        }
        if (!message.member.roles.cache.hasAny(...allowedRoles)) {
            return message.channel.send({ embeds: [e1] })
        }

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const role = message.guild.roles.cache.find(role => role.id === '983036428646768661')

        if (!member) return message.reply({ content: 'Please specify the user', allowedMentions: { repliedUser: false }})

        let embed = new MessageEmbed()
        .setDescription(`<a:ec_yes:990478257851858974> The ${role} role has been removed from ${member}`)
        .setColor("#00000")

        await member.roles.remove(role)
        message.channel.send({ embeds: [embed] })
    }
}