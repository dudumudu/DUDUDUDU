const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client,message,args)=>{

if(message.author.id !== '779983912515403776') return message.channel.send('<a:XTik:798277028050501642> Bu komut sahibimin komudu. Bunu kullanmak için izniniz yok!!')
    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if(!user) 
      return message.channel.send(
        new Discord.MessageEmbed()
        .setColor("WHITE")
        .setDescription('<a:XTik:798277028050501642> Beyaz Listeye almam için bir kullanıcı etiketleyin !!'))

    db.delete(`kliste.${user.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
      .setColor("WHITE")
      .setDescription(`<a:r_evet:785437821926113290> **${user.tag}** adlı kişi beyaz listeye alınmıştır.`))

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['beyaz-liste', 'beyazliste'],
  permLevel: 4
}

exports.help ={
    name:'beyazliste',
    aliases:['bl'],
    description:'Kullanıcıyı beyazlisteye alır.',
}