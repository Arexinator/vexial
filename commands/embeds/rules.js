const { MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: 'rules',

    run: async(client,message,args) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setURL('https://top.gg/servers/982552981423652884/vote')
                .setLabel('Ban Appeal')
                .setEmoji('994599712760021002')
                .setStyle('LINK'),
        );
    }
}