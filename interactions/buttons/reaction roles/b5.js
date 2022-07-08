const r5 = ('982925225006096448')

module.exports = {
	id: "b5",

	run: async(interaction) => {
        if (interaction.member.roles.cache.some(role => role.id == r5)) {
            interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r5}>`, ephemeral: true})
            interaction.member.roles.remove(r5).catch(console.log)
        }
        else{
            interaction.member.roles.add(r5).catch(console.log)
            await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r5}>`, ephemeral: true })
        }
	},
};