const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'temprole',
    aliases: ["tr"],

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
        const e2 = {
            "description": "<a:ec_no:990478311752859650> Please provide a user",
            "color": 0
        }
        const e3 = {
            "description": "<a:ec_no:990478311752859650> Please provide a role",
            "color": 0
        }
        const e4 = {
            "description": "<a:ec_no:990478311752859650> Please provide a time",
            "color": 0
        }

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let time = args[1];
        let r = '・' + args.slice(2).join(" ")

		let role = message.guild.roles.cache.find(role => role.name === r) || message.guild.roles.cache.find(role => role.name.toLowerCase() === r) || message.guild.roles.cache.find(role => role.id === args.slice(2).join(" "))

        if (!member) return message.reply({ embeds: [e2], allowedMentions: { repliedUser: false }})
        if (!time) return message.reply({ embeds: [e4], allowedMentions: { repliedUser: false }})
        if (!role) return message.reply({ embeds: [e3], allowedMentions: { repliedUser: false }})

        let embed = new MessageEmbed()
        .setDescription(`<a:ec_yes:990478257851858974> ${member} has been given the ${role} for **${ms(ms(`${args[1]}`), { long: true })}**`)
        .setColor("#00000")

        await member.roles.add(role)
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }})

        setTimeout(() => {
            member.roles.remove(role)
        }, ms(time))

    }
}