const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
      > **<a:tadaaa:797757216929087499> • Koruma Komutları**
      
      > <a:sarionay:797756996337270824> [${prefix}rol-koruma](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Sunucuda silinen rolleri geri yükler.**
      > <a:sarionay:797756996337270824> [${prefix}kanal-koruma](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Sunucuda silinen kanalları geri yükler.**
      > <a:sarionay:797756996337270824> [${prefix}bot-koruma](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Sunucuya giren botları banlar.**
      > <a:sarionay:797756996337270824> [${prefix}bot-izni](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucuya giren botların banlanmaması için izin verirsiniz.**
      > <a:sarionay:797756996337270824> [${prefix}güvenlik](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucuya giren kişiler güvenilir mi değil mi kontrol eder.**`]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("İmparatorBot Koruma Sistemi") 
    .setColor("#501c67")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('797033410484109323').then( r => { 
      msg.react('797033472274464779') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === 'sol' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === 'RainbowOkGif' && user.id === message.author.id;  
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("İmparatorBot Koruma Sistemi")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#501c67")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')      
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("İmparatorBot Koruma Sistemi")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setTimestamp()
        embed.setColor("#501c67")
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')              
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["koruma-sistemi","koruma listesi","koruma menüsü","koruma-listesi"],
  permLevel: 0
};

module.exports.help = {
  name: 'koruma',
  description: 'Koruma sistemi komutlarını gösterir.',
  usage: 'koruma'
};