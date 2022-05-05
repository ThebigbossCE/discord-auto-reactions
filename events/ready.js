const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} Bot Online!`)
    client.user.setActivity(`Reacting to messages`)
});
