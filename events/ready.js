const settings = require("../settings.json");

module.exports = async (client) => {

    client.user.setPresence({
        status: "dnd"
    });
    function randomstatus() {
        let status = [
            `Daddy Arex`,
        ];
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {
            type: "LISTENING"
        });
    };
    setInterval(randomstatus, 15000);
    
    client.logger.log(`> 🔍 • Check All Server is ${client.guilds.cache.size} Server 🌐`, "info");
    client.logger.log(`> ✅ • Successfully logged on as ${client.user.username}\n\n======================================`, "success");

};