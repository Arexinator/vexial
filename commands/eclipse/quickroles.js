const { Discord, MessageEmbed } = require('discord.js')
const { ReactionRole } = require("discordjs-reaction-role");

module.exports = {
    name: 'qr',

    run: async(client, message, args) => {
        message.delete()
        let e = {
        "description": "react to the following emoji to receive the corresponding role\n\n<:n1:988795966649954304><@&982924781131288596>\n<:n2:988796005736656936><@&982925222485323776>\n<:n3:988796343000645662><@&982925223114469396>\n<:n4:988796369894527017><@&982925223689060382>\n<:n5:988796406833770506><@&982925225006096448>",
        "color": 0,
        "title": "quick roles",
    }
        let msg = await message.channel.send({ embeds: [e] })
        msg.react('988795966649954304')
        msg.react('988796005736656936')
        msg.react('988796343000645662')
        msg.react('988796369894527017')
        msg.react('988796406833770506')
        
        let msgID = msg.id

        const rr = new ReactionRole(client, [
            { messageId: `${msgID}`, reaction: "988795966649954304", roleId: "982924781131288596" },
            { messageId: `${msgID}`, reaction: "988796005736656936", roleId: "982925222485323776" },
            { messageId: `${msgID}`, reaction: "988796343000645662", roleId: "982925223114469396" },
            { messageId: `${msgID}`, reaction: "988796369894527017", roleId: "982925223689060382" },
            { messageId: `${msgID}`, reaction: "988796406833770506", roleId: "982925225006096448" },
        ]);

    }
}