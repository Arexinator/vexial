module.exports = {
    name: 'membercount',
    aliases: ["mc"],

    run: async(client, message, args) => {
        const members = message.guild.members.cache
        const users = members.filter(member => !member.user.bot).size
        const bots = members.filter(member => member.user.bot).size
        const goal = 1000 - users
        const total = users + bots

        const e1 = {
            "color": 0,
            "description": `<:e_dot:985270306308489356>**Total**: \`${total}\`\n<:e_dot:985270306308489356>**Humans**: \`${users}\`\n<:e_dot:985270306308489356>**Bots**: \`${bots}\`\n<:e_dot:985270306308489356>**Goal**: \`1000\` (\`${goal}\`)`,
        }
        message.reply({ embeds: [e1], allowedMentions: { repliedUsers: false}})
    }
}