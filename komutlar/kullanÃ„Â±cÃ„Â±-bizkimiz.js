const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {  
    const kimizbiz = new Discord.MessageEmbed()
    .setColor("#ff4400")
    .setAuthor(`» İmparatorBot`, client.user.avatarURL({dynamic: true})) 
      .setDescription('» İmparatorBot Kimdir?')
.setThumbnail(client.user.avatarURL({dynamic: true}))
    .addField(`**» İmparator Bot 88 Komutu Olan, Sunucunuzun gelişimini güvenliğini korumaya çalışan aynı zamanda eğlenceli bir Discord botudur. Bizi seçtiğiniz için çok teşekkür ederiz !
    Ekibimiz : İmparator Türk Oyuncu | Emin | Boss Berkan|`)
    .setFooter(``, client.user.avatarURL({dynamic: true}))
    message.channel.send(kimizbiz).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bizkimiz'],
    permLevel: 0
};

exports.help = {
    name: 'bizkimiz',
      category: 'Bot',
      description: 'Ekip Hakkında Bilgi Verir.',
};