module.exports = {
    name: 'support',

    run: async(client, message, args) => {
        const embed = {
            "description": "<:ec_whitedot:994567054222962811>please state your question **clearly**\n<:ec_whitedot:994567054222962811>add **screenshots** when necessary\n<:ec_whitedot:994567054222962811>**look around** in the server before asking your question\n<:ec_whitedot:994567054222962811>no **idle chatting** and **mini-modding** \n<:ec_whitedot:994567054222962811>you are allowed to ping **one** online staff",
            "color": 3553598,
            "title": "support"
        }

        message.delete()
        message.channel.send({ embeds: [embed] })
    }
}