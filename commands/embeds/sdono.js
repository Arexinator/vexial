module.exports = {
    name: 'sdono',

    run: async(client, message, args) => {
        let e1 = {
            "description": "<:ec_whitedot:994567054222962811>ping <@834781238132211733> or <@817690037226700841> before donating\n<:ec_whitedot:994567054222962811>min donation value is `⏣ 1,000,000`\n<:ec_whitedot:994567054222962811>banknotes donated here will be counted `⏣ 300,000` each",
            "color": 3553598,
            "title": "server donations",
        }
    
        message.channel.send({ embeds: [e1] })
        message.delete()

    }
}