const r2 = ('982925222485323776')

module.exports = {
	id: "b2",

	run: async(interaction) => {
        if (interaction.member.roles.cache.some(role => role.id == r2)) {
            interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r2}>`, ephemeral: true})
            interaction.member.roles.remove(r2).catch(console.log)
        }
        else{
            interaction.member.roles.add(r2).catch(console.log)
            await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r2}>`, ephemeral: true })
        }
	},
};