const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  message.react("✔️");

};
exports.conf = {
  aliases: ['r']
};

exports.help = {
  name: "react"
};
