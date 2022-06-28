const { Discord, Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: "removerole",
    aliases: ["rr"],

    run: async (client, message, args) => {
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

		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
		if(!user) return message.reply({ embeds: [e2], allowedMentions: { repliedUser: false }})
        let role = args.slice(1).join(" ")
        let r = '・' + args.slice(1).join(" ")

		let role2 = message.guild.roles.cache.find(role => role.name === r) || message.guild.roles.cache.find(role => role.name.toLowerCase() === r) || message.guild.roles.cache.find(role => role.id === args.slice(1).join(" "))
        if(!role2) return message.reply({ embeds: [e3], allowedMentions: { repliedUser: false }})
		if (message.guild.me.roles.highest.comparePositionTo(role2) <= 0) return message.channel.reply({ content: 'The role is above my current role', allowedMentions: {repliedUsers: false} })

        let embed = new MessageEmbed()
        .setDescription(`<a:ec_yes:990478257851858974> The ${role2} role has been removed from ${user}`)
        .setColor("00000")

		user.roles.remove(role2).catch(console.log)
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }})
    }
}