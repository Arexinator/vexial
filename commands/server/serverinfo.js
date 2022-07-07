module.exports = {
    name: 'serverinfo',
    aliases: ["si"],

    run: async(client, message, args) => {
        const e1 =  {
            "description": `<:e_dot:985270306308489356>**ID**: ${message.guild.id}\n<:e_dot:985270306308489356>**Owner**: <@${message.guild.ownerId}> (\`${message.guild.ownerId}\`)\n<:e_dot:985270306308489356>**Created**: <t:${Math.round(message.guild.createdTimestamp / 1000)}:f> (<t:${Math.round(message.guild.createdTimestamp / 1000)}:R>)`,
            "title": `${message.guild.name}`,
            "fields": [
                {
                    "name": "Membercount",
                    "value": `Total: \`${message.guild.memberCount}\``,
                    "inline": true
                },
                {
                    "name": "Channels",
                    "value": `${message.guild.channels.cache.size}`,
                    "inline": true
                },
                {
                    "name": "Roles",
                    "value": `${message.guild.roles.cache.size}`,
                    "inline": true
                }
            ],
            "thumbnail": {
                "url": `${message.guild.iconURL()}`
            },
            "image": {
                "url": `https://media.discordapp.net/attachments/989897745647165450/993465647436664892/eclipse_banner.jpg?width=1191&height=670`
            }
        }
        message.reply({ embeds: [e1], allowedMentions: {repliedUser: false} })    
    }
}