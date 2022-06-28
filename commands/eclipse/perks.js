const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'perks',

    run: async(client, message, args) => {
        const splitArgs = args.join(" ").split("/")
        const choice = splitArgs[0]

        const e1 = {
            "description": "<@&985103613993054299> - **1** boost\n<:dot:974223455987826719>pic + link perms\n<:dot:974223455987826719>2x amari on role\n<:dot:974223455987826719>access `\"snipe/esnipe` `?afk` `+afk` `.remindme` \n<:dot:974223455987826719>custom channel w/ 3 friends\n<:dot:974223455987826719>react perms in most channels\n<:dot:974223455987826719>access <#983009964727631922> (`3x` amari)",
            "color": 0
        }
        const e2 = {
            "description": "<@&982916611382067271> - **2** boosts\n<:dot:974223455987826719>custom role w/ 3 friends\n<:dot:974223455987826719>+3 friends to custom channel\n<:dot:974223455987826719>3x amari on role\n<:dot:974223455987826719>custom ar\n<:dot:974223455987826719>custom role icon\n<:dot:974223455987826719>bypass all giveaways\n<:dot:974223455987826719>access `,nick` and nick perms",
            "color": 0
        }
        const e3 = {
            "description": "<@&982916610648080464> - **3+** boosts\n<:dot:974223455987826719>+5 to custom channel\n<:dot:974223455987826719>+5 to custom role\n<:dot:974223455987826719>custom vc w/ 5 friends\n<:dot:974223455987826719>5x amari on role\n<:dot:974223455987826719>2x entries in all giveaways\n<:dot:974223455987826719>automod whitelist\n<:dot:974223455987826719>access <#983011208506511431> (`4x` amari)",
            "color": 0
        }
        const e4 = {
            "description": "<@&982916614343233586> \n<:dot:974223455987826719>access `,nick` and nick perms\n<:dot:974223455987826719>access `\"snipe/esnipe` `?afk` `+afk` `.remindme`\n<:dot:974223455987826719>2x amari on role\n<:dot:974223455987826719>custom role w/ 3 friends\n<:dot:974223455987826719>react perms\n<:dot:974223455987826719>bypass all giveaways\n<:dot:974223455987826719>access <#983009474845491260> and <#988983124375515136> (`3x` amari)",
            "color": 0
        }
        const e5 = {
            "description": "<@&982916613403729921>\n<:dot:974223455987826719>+5 friends to custom role\n<:dot:974223455987826719>custom channel w/ 5 friends\n<:dot:974223455987826719>custom ar\n<:dot:974223455987826719>custom role icon\n<:dot:974223455987826719>3x amari on role",
            "color": 0
        }
        const e6 = {
            "description": "<@&982916612741017601>\n <:dot:974223455987826719>+5 friends to custom role\n<:dot:974223455987826719>+3 friends to custom channel\n<:dot:974223455987826719>+1 custom ar\n<:dot:974223455987826719>custom vc w/ 5 friends\n<:dot:974223455987826719>4x amari on role",
            "color": 0
        }
        const e7 = {
            "description": "<@&982916612564848680>\n<:dot:974223455987826719>+5 friends to custom role\n<:dot:974223455987826719>+5 friends to custom channel\n<:dot:974223455987826719>+5 friends to custom vc\n<:dot:974223455987826719>+2 custom ar\n<:dot:974223455987826719>5x amari on role\n<:dot:974223455987826719>access <#983011208506511431> (`4x` amari)",
            "color": 0
        }
        const e8 = {
            "description": "<@&982922696507682848>\n<:dot:974223455987826719>pic + link perms",
            "color": 0
        }
        const e9 = {
            "description": "<@&982922695966617651>\n<:dot:974223455987826719>react perms in most channels\n<:dot:974223455987826719>`?afk` `+afk` perms",
            "color": 0
        }
        const e10 = {
            "description": "<@&982920880172707840>\n<:dot:974223455987826719>access `\"snipe/esnipe` `.remindme`\n<:dot:974223455987826719>access `,nick` and nick perms\n<:dot:974223455987826719>access <#983009474845491260> <#988983124375515136> (`2x` amari)",
            "color": 0
        }
        const e11 = {
            "description": "<@&982920879438716988>\n<:dot:974223455987826719>+3 amari levels\n<:dot:974223455987826719>2x amari on role",
            "color": 0
        }
        const e12 = {
            "description": "<@&982920879073804288>\n<:dot:974223455987826719>custom channel w/ 3 friends\n<:dot:974223455987826719>access <#983009964727631922> (`3x` amari)\n<:dot:974223455987826719>+5 amari levels\n",
            "color": 0
        }
        const e13 = {
            "description": "<@&982920877861654562>\n<:dot:974223455987826719>custom ar\n<:dot:974223455987826719>+3 friends to custom channel\n<:dot:974223455987826719>3x amari on role\n\n",
            "color": 0
        }
        const e14 = {
            "description": "<@&982920876276195328>\n<:dot:974223455987826719>bypass all giveaways\n<:dot:974223455987826719>custom role w/ 3 friends\n<:dot:974223455987826719>+3 friends to custom channel\n<:dot:974223455987826719>+10 amari levels\n<:dot:974223455987826719>+1 custom ar\n<:dot:974223455987826719>access <#983011208506511431> (`4x` amari)\n\n",
            "color": 0
        }
        const e15 = {
            "description": "<@&982920713017102367>\n<:dot:974223455987826719>custom role icon\n<:dot:974223455987826719>custom vc w/ 5 friends\n<:dot:974223455987826719>+5 friends to custom role\n<:dot:974223455987826719>+5 friends to custom vc\n<:dot:974223455987826719>+20 amari levels\n<:dot:974223455987826719>5x amari on role\n\n",
            "color": 0
        }


        if (choice === 'boost 1'){
            return message.channel.send({ embeds: [e1]})
        }
        if (choice === 'boost 2'){
            return message.channel.send({ embeds: [e2]})
        }
        if (choice === 'boost 3'){
            return message.channel.send({ embeds: [e3]})
        }
        if (choice === 'invest $5'){
            return message.channel.send({ embeds: [e4]})
        }
        if (choice === 'invest $15'){
            return message.channel.send({ embeds: [e5]})
        }
        if (choice === 'invest $25'){
            return message.channel.send({ embeds: [e6]})
        }
        if (choice === 'invest $50'){
            return message.channel.send({ embeds: [e7]})
        }
        if (choice === 'dono 10m'){
            return message.channel.send({ embeds: [e8]})
        }
        if (choice === 'dono 25m'){
            return message.channel.send({ embeds: [e9]})
        }
        if (choice === 'dono 50m'){
            return message.channel.send({ embeds: [e10]})
        }
        if (choice === 'dono 100m'){
            return message.channel.send({ embeds: [e11]})
        }
        if (choice === 'dono 250m'){
            return message.channel.send({ embeds: [e12]})
        }
        if (choice === 'dono 500m '){
            return message.channel.send({ embeds: [e13]})
        }
        if (choice === 'dono 1b'){
            return message.channel.send({ embeds: [e14]})
        }
        if (choice === 'dono 2b'){
            return message.channel.send({ embeds: [e15]})
        }
        
    }
}