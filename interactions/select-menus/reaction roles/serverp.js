const r1 = ('982924781131288596')
const r2 = ('982924781814951936')
const r3 = ('982925225006096448')
const r4 = ('982925224448258068')

module.exports = {
	id: "serverp",

	run: async(interaction) => {
        let choice = interaction.values[0] 
        const member = interaction.member
        if(choice == 'o1'){
            if (member.roles.cache.some(role => role.id == r1)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r1}>` , ephemeral: true})
                member.roles.remove(r1).catch(console.log)
            }
            else{
                member.roles.add(r1).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r1}>`, ephemeral: true })}
            }
            else if(choice == 'o2'){
                if (member.roles.cache.some(role => role.id == r2)) {
                    interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r2}>`, ephemeral: true})
                    member.roles.remove(r2).catch(console.log)
                }
                else{
                    member.roles.add(r2).catch(console.log)
                    await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r2}>`, ephemeral: true })}
                }
                else if(choice == 'o3'){
                    if (member.roles.cache.some(role => role.id == r3)) {
                        interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r3}>`, ephemeral: true})
                        member.roles.remove(r3).catch(console.log)
                    }
                    else{
                        member.roles.add(r3)
                        await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r3}>`, ephemeral: true })}
                    }
                    else if(choice == 'o4'){
                        if (member.roles.cache.some(role => role.id == r4)) {
                            interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r4}>`, ephemeral: true})
                            member.roles.remove(r4).catch(console.log)
                        }
                        else{
                            member.roles.add(r4).catch(console.log)
                            await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r4}>`, ephemeral: true })}
                        }  
	},
};