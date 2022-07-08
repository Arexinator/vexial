const r1 = ('982924781131288596')

module.exports = {
	id: "b1",

	run: async(interaction) => {
        if (interaction.member.roles.cache.some(role => role.id == r1)) {
            interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r1}>` , ephemeral: true})
            interaction.member.roles.remove(r1).catch(console.log)
        }
        else{
            interaction.member.roles.add(r1).catch(console.log)
            await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r1}>`, ephemeral: true })
        }
	},
};