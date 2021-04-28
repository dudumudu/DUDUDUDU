const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

message.channel.send("İmparatorBot| Bu Komut Boştur...").then(message => {

    var FwhyCode = [

      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""

    ];

    var FwhyCode = FwhyCode[Math.floor(Math.random() * FwhyCode.length)];

    message.edit(`${FwhyCode}`);
  
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["", "", "", ""],
  permLevel: 0
}; 

exports.help = {
  name: "boşkomut",
  description: "boş komut",
  usage: "boşkomut" 
};