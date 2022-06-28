const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'elock',
    aliases: ["el"],
    description: 'Locks the specified channel.',
    userPermissions: ["MANAGE_MESSAGES"],

    run: async(client, message, args, Discord) => {
        const e1 = {
            "description": "<a:ec_no:990478311752859650> You do not have the required role(s) to run this command",
            "color": 0,
        }
        const e2 = {
            "description": "<a:ec_no:990478311752859650> This command is only enabled in <#982947900852174878>",
            "color": 0,
        }
        const allowedRoles = [
            '982556384749039626',
            '982556146055385099'
        ]
        if (!message.member.roles.cache.hasAny(...allowedRoles)) {
            return message.channel.send({ embeds: [e1] })
        }
        if (message.channel.id !== '982947900852174878') return message.reply({ embeds: [e2], allowedMentions: {repliedUsers: false}})
        
        const role = message.guild.roles.cache.find(role => role.name === "@everyone");
        const channel = message.channel

        channel.permissionOverwrites.edit(role, { SEND_MESSAGES: false });

        let embed = new MessageEmbed()
        .setDescription(`<a:ec_yes:990478257851858974> Locked ${channel}`)
        .setColor("#00000")

        message.reply({ embeds: [embed], allowedMentions: {repliedUsers: false}})
    }
}