const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
client.emojis.cache.get('784518934711762976');
client.emojis.cache.get('784518943423463484');

exports.run = async (client, message, args) => {   
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(`<a:XTik:798277028050501642> ${prefix}capslock-engelle **aç** veya **kapat** yaz.`)
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('<a:XTik:798277028050501642> Bu komutu kullanmak için `SUNUCUYU_YÖNET` yetkisine sahip olman gerek!')
  
  
  if (args[0] == 'kapat') {
  var replace = await db.set(`capslockengl_${message.guild.id}`, 'kapali')
    db.delete(`capslock_${message.guild.id}`)
    const kapali = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('<a:tik1:798276995011051530> Capslock engelleme sistemi kapatıldı, herkes büyük harf kullanabilecek.')
    message.channel.send(kapali)
  }
 
   if (args[0] == 'aç') {
    var replace = await db.set(`capslockengl_${message.guild.id}`, 'açik')
    const acik = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('<a:tik1:798276995011051530> Capslock engelleme sistemi aktif, kimse büyük harf kullanamayacak')
    message.channel.send(acik)
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock-engel'],
  permLevel: 3
};

exports.help = {
  name: 'capslock-engelleme',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelle'
};