const chalk = require('chalk')

module.exports = {
	name: "ready",
	once: true,

	run: async(client) => {
        const guild = client.guilds.cache.get('982552981423652884')
        client.user.setPresence({
            status: "dnd"
        });
        function randomstatus() {
            let status = [
                `${guild.memberCount} users | .help`,
            ];
            let rstatus = Math.floor(Math.random() * status.length);
            client.user.setActivity(status[rstatus], {
                type: "WATCHING"
            });
        };
        setInterval(randomstatus, 20000)

        client.logger.log(`Logged in as ${client.user.username}`, "success");
	},
};