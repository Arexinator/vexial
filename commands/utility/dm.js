const { Discord, Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: "dm",
    description: 'dms a user',

    run: async (client, message, args) => {
        const allowedRoles = [
            '982556146055385099'
        ]
        const e1 = {
            "color": 0,
            "description": "You do not have the required roles to be able to run this command",
        }
        if (!message.member.roles.cache.hasAny(...allowedRoles)) {
            return message.channel.send({ embeds: [e1] })
        }

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        const msg = args.slice(1).join(" ");

        const embed = {
            "color": 0,
            "description": `${msg}`,
        }
        
        await user.send({ content: "- sent from .gg/ecli", embeds: [embed] })
        message.react("990478257851858974")

    }
}