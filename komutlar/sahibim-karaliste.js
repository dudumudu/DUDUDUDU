const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client,message,args)=>{

if(message.author.id !== '779983912515403776') return message.channel.send('<a:XTik:798277028050501642> Bu komut sahibimin komudu. Bunu kullanmak için izniniz yok!!')
    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    let reason = args.slice(1).join(' ')
    if(!user) 
      return message.channel.send(
        new Discord.MessageEmbed()
        .setDescription('<a:XTik:798277028050501642> Karalisteye almam için bir kullanıcı etiketleyin !!'))
if(!reason) 
  return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription('<a:XTik:798277028050501642> Lütfen bir sebep belirtin !'))

    db.set(`kliste.${user.id}`, reason);
    message.channel.send(
      new Discord.MessageEmbed()
      .setDescription(`<a:tik1:798276995011051530>  **${user.tag}** adlı kişi **${reason || 'Sebep belirtilmemiş'}** sebebinden karalisteye alındı !!`))

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kara-liste', 'karaliste'],
  permLevel: 0
}

exports.help ={
    name:'karaliste',
    aliases:['k'],
    description:'Kullanıcıyı karalisteye alır.',
   
}