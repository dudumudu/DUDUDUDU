const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const { stripIndents } = require("common-tags");
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();

var prefix = ayarlar.prefix;

const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];

exports.run = async(client, message, args) => {

var NeonDev = slots[Math.floor(Math.random() * slots.length)];
var NeonDev = slots[Math.floor(Math.random() * slots.length)];
var NeonDev = slots[Math.floor(Math.random() * slots.length)];

  if (NeonDev === NeonDev && NeonDev === NeonDev) { return message.channel.send(stripIndents`**Tebrikler, kazandınız!** \n\n${NeonDev} **:** ${NeonDev} **:** ${NeonDev}`);

  } else {
   return message.channel.send(stripIndents`**Eyvah, kaybettin!** \n\n${NeonDev} **:** ${NeonDev} **:** ${NeonDev}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "slots",
  description: "Slots oyunu oynatır",
  usage: "slots"
};
