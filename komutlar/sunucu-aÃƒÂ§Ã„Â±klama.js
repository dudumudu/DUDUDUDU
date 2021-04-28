const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async(client, message, args) => {    
  var args = message.content.split(' ').slice(1).join(' ');
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('<a:XTik:798277028050501642> Bunun için **Kanalları_Yönet** yetkisine sahip olman gerek.');
  if (!args) return message.reply("<a:XTik:798277028050501642> Kanalın açıklamasına ne yazmam gerek!")
  message.channel.setTopic(`${args}`)
  .then(newChannel => message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`<a:tik1:798276995011051530> Bu kanalın yeni konusu ***${args}***`)))
  .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçıklama","kanala","açıklama"],
  permLevel: 0
};

exports.help = {
  name: 'açıklama',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};