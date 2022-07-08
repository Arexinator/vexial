module.exports = {
    name: 'ping',

    run: async(client,message,args) => {
        message.reply({ content: `**${client.ws.ping}** ms`, allowedMentions: {repliedUsers: false} })
    }
}