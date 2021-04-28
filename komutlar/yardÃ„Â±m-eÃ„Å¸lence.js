const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
  > **<a:nice:798438506736910376> • Eğlence Komutları**
  
  > <a:nice:798438506736910376> [${prefix}hackle](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Etiketlediğiniz Kişiyi Hacklersiniz.**
  > <a:nice:798438506736910376> [${prefix}ara155](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• 155'i Arar.(Ciddiye Alma :))**
  > <a:nice:798438506736910376> [${prefix}espri](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bot farklı türden esprililer yapar.**
  > <a:nice:798438506736910376> [${prefix}balıktut](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Oltayı atıp balık tutarsınız.**
  > <a:nice:798438506736910376> [${prefix}desteaç](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Zula'da deste açarsınız.(Gerçek Değildir.)**
  > <a:nice:798438506736910376> [${prefix}kasaaç](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Cs:Go'da kasa açarsınız.(Gerçek Değildir.)**
  > <a:nice:798438506736910376> [${prefix}hesapla](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Yaptığınız işlemi hesaplarsınız.**
  > <a:nice:798438506736910376> [${prefix}duello](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Arkadaşlarınızla duello atarsınız.**
  > <a:nice:798438506736910376> [${prefix}snipe](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Silinen Son Mesajı Atar.**
  
  > <a:ayarlar:797756953873874944> •\`\Eğlence Komutların Devamı İçin Emojiye\`\ <a:RainbowOkGif:797033472274464779> \`\Tıklayın\`\ `, `
  > **<a:nice:798438506736910376> • Eğlence Komutları**
  
  > <a:nice:798438506736910376> [${prefix}efkarım](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bot sizin efkarınızı ölçer.**
  > <a:nice:798438506736910376> [${prefix}boş komut](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• boş komut.**
  > <a:nice:798438506736910376> [${prefix}slots](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
  > **• Slot oyunu oynarsınız.**
  > <a:nice:798438506736910376> [${prefix}kral-ol](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Artık kral siz olursunuz.**
  > <a:nice:798438506736910376> [${prefix}alevlogo](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bir mesaj yazınca alevli yazıları logo olarak çevirir.**
  > <a:nice:798438506736910376> [${prefix}altınlogo](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bir mesaj yazınca altın yazıları logo olarak çevirir.**
  > <a:nice:798438506736910376> [${prefix}elmaslogo](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Bir mesaj yazınca elmas yazıları logo olarak çevirir.**
  > <a:nice:798438506736910376> [${prefix}soygun-yap](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
  > **• Soygun Yaparsınız (Gerçek Değildir).**
 
  > <a:ayarlar:797756953873874944> •\`\Geri Dönmek İçin Emojiye\`\ <a:sol:797033410484109323> \`\Tıklayın\`\ `]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("İmparatorBot Eğlence Menüsü") 
    .setColor("#d81414")
    .setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
 
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
        embed.setTitle("İmparatorBot Eğlence Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setTimestamp()
        embed.setColor("#d81414")
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("İmparatorBot Eğlence Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setTimestamp()
        embed.setColor("#d81414") 
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence menüsü","eğlence listesi","eğlence-menüsü","eğlence-listesi"],
  permLevel: 0
};

module.exports.help = {
  name: 'eğlence',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};