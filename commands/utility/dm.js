module.exports = {
    name: "dm",

    run: async (client, message, args) => {
        const allowedRoles = [
            '982556146055385099',
        ]
        const e1 = {
            "color": 16733525,
            "description": "<a:ec_no:990478311752859650> You do not have the required role(s) to run this command",
        }
        if (!message.member.roles.cache.hasAny(...allowedRoles)) {
            return message.channel.send({ embeds: [e1] })
        }

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        const msg = args.slice(1).join(" ");

        const embed = {
            "color": 0,
            "description": `${msg}`,
            "footer": {
                "text": `sent from .gg/ecli by ${message.author.tag}`
            }
        }
        
        await user.send({ embeds: [embed] })
        message.react("990478257851858974")

    }
}