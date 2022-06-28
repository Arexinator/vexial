module.exports = {
    name: 'ping',

    run: async(client,   message) => {
        message.reply({ content: `**${client.ws.ping}** ms`, allowedMentions: {repliedUsers: false} })
    }
}