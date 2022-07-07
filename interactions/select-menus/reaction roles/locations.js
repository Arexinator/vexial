const r1 = ('982922702081900604')
const r2 = ('982924778761519214')
const r3 = ('982924779759730689')
const r4 = ('982924779369684992')
const r5 = ('982924781005447198')

module.exports = {
	id: "locations",

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
                    else if(choice == 'o5'){
                        if (member.roles.cache.some(role => role.id == r5)) {
                            interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r5}>`, ephemeral: true})
                            member.roles.remove(r5).catch(console.log)
                        }
                        else{
                            member.roles.add(r5).catch(console.log)
                            await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r5}>`, ephemeral: true })}
                  }
    
	},
};