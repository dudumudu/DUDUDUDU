const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
  > **🎟️ • İmparatorBot Bilet Sistemi**
  
  > 🎟️ [${prefix}bilet aç](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bilet kanalı açarsınız.**
  > 🎟️ [${prefix}bilet kapat](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bilet kanalını kapatırsınız.**
  > 🎟️ [${prefix}bilet ekle](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bilet kanalına birini eklersiniz.**
  > 🎟️ [${prefix}bilet gönder](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bilet kanalına bilet gönderir.**
  > 🎟️ [${prefix}bilet-kanal ayarla #kanal](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bilet kanalını ayarlar.**
  
  > <a:ayarlar:797756953873874944> •\`\Otocevap Sistemine Gitmek İçin Emojiye\`\ <a:RainbowOkGif:797033472274464779> \`\Tıklayın\`\ `,`
  > **<a:gifland_hype:798438643176964116> • Replace Bot OtoCevap Sistemi**
  
  > **<a:gifland_hype:798438643176964116> • OtoCevap Sistemi Bilgi**
  > <a:gifland_hype:798438643176964116>> • **ÖNEMLİ:** İlk olarak [${prefix}otocevap-sistemi](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) yazarak bilgileri **OKUYUN** !!!
  
  > <a:gifland_hype:798438643176964116> [${prefix}otocevap ekle <cevaplanacakmesaj> | <cevap>](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
  > **• Otocevap eklersiniz. "Örnek: sa | Aleyküm Selam Hoşgeldin" şeklinde ekleyebilirsiniz.**
  > <a:gifland_hype:798438643176964116> [${prefix}otocevap sil <otocevap> ](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
  > **• Otocevap silersiniz. "Örnek: otocevap sil sa" şeklinde silebilirsiniz.**
  > <a:gifland_hype:798438643176964116> [${prefix}otocevap liste](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
  > **• Otocevapa eklediğiniz mesajları listeler.**
  > <a:gifland_hype:798438643176964116> [${prefix}otocevap düzenle <otocevap>](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
  > **• Otocevap düzenlersiniz. "Örnek: otocevap düzenle Sa | Aleyküm Selam Hoşgeldin"**
  
  > <a:ayarlar:797756953873874944> •\`\Diğer Sistemlere Gitmek İçin Emojiye\`\ <a:RainbowOkGif:797033472274464779> \`\Tıklayın\`\ `]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("İmparatorBot Ayarlanabilir Sistemler") 
    .setColor("#084e0d")
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
        embed.setTitle("İmparatorBot Ayarlanabilir Sistemler")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#084e0d")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("İmparatorBot Ayarlanabilir Sistemler")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#084e0d")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sistemler","sistem"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım-sistemler',
  description: 'Bütün sistem komutlarını gösterir.',
  usage: 'sistemler'
};