module.exports = {
    name: 'support',

    run: async(client, message, args) => {
        const embed = {
            "description": "<:dot:974223455987826719>please state your question **clearly**\n<:dot:974223455987826719>add **screenshots** when necessary\n<:dot:974223455987826719>**look around** in the server before asking your question\n<:dot:974223455987826719>no **idle chatting** and **mini-modding** \n<:dot:974223455987826719>you are allowed to ping **one** online staff",
            "color": 3553598,
            "title": "support"
        }

        message.delete()
        message.channel.send({ embeds: [embed] })
    }
}