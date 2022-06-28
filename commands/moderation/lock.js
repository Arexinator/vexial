const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'lock',
    aliases: ["l"],

    run: async(client, message, args, Discord) => {
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
        
        const role = message.guild.roles.cache.find(role => role.name === "@everyone");
        const channel = message.channel

        channel.permissionOverwrites.edit(role, { SEND_MESSAGES: false }).catch(console.log)

        let embed = new MessageEmbed()
        .setDescription(`<a:ec_yes:990478257851858974> Locked ${channel}`)
        .setColor("#00000")

        message.reply({ embeds: [embed], allowedMentions: {repliedUsers: false} });
    }
}