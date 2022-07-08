module.exports = {
    name: '1kdono',

    run: async(client, message, args) => {
        const embed = {
            "color": 3553598,
            "description": "<:ec_whitedot:994567054222962811>min donation value is `⏣ 1,000,000` (dank only)\n<:ec_whitedot:994567054222962811>ping <@817690037226700841> or <@834781238132211733> to donate \n<:ec_whitedot:994567054222962811>item values and donations will be counted with <@783306479721512960>\n<:ec_whitedot:994567054222962811>check <#992274653005496330> for more info",
            "title": "1k event donations",
            "footer": {
                "text": "thanks for donating"
            }
        }

        message.delete()
        message.channel.send({ embeds: [embed] })

    }
}