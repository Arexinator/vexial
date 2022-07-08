const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "purge",
    description: "delete the given number of messages",

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
        const fetched = message.channel
        const amount = parseInt(args[0]) + 1

        const e2 = new MessageEmbed()
        .setColor('#FF5555')
        .setDescription('<a:ec_no:990478311752859650> Please enter a number from 1-99')

        const e3 = new MessageEmbed()
        .setColor('#FF5555')
        .setDescription('<a:ec_no:990478311752859650> Please enter a number from 1-99')
        
        if (isNaN(amount)) {
            return message.reply({ embeds: [e2], allowedMentions: {repliedUser: false}  })
        } else if (amount <= 1 || amount > 100) {
            return message.reply({ embeds: [e3], allowedMentions: {repliedUser: false} })
        }
        
        fetched.bulkDelete(amount);
        
        total = amount - 1
        let embed = new MessageEmbed()
        .setDescription(`Successfully purged **${total}** message(s)`)
        .setColor('#97FE55')
        
        let msg = await message.reply({ embeds: [embed], allowedMentions: {repliedUser: false}  })
        setTimeout(() => {
            msg.delete().catch(console.log)
        }, 2000)

    },
  };