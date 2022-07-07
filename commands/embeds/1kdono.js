module.exports = {
    name: '1kdono',

    run: async(client, message, args) => {
        const embed = {
            "color": 3553598,
            "description": "<:e_dot:985270306308489356>min donation value is `⏣ 1,000,000` (dank only)\n<:e_dot:985270306308489356>ping <@817690037226700841> or <@834781238132211733> to donate \n<:e_dot:985270306308489356>item values and donations will be counted with <@783306479721512960>\n<:e_dot:985270306308489356>check <#992274653005496330> for more info\n \n",
            "title": "1k event donations",
            "footer": {
                "text": "thanks for donating"
            }
        }

        message.delete()
        message.channel.send({ embeds: [embed] })

    }
}