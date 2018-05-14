let sw = JSON.parse(fs.readFileSync(`./setwlc.json`, `utf8`))

client.on('ready', () => {
  console.log('Set Welcome By xRokz')
})

client.on('guildMemberAdd', member => {
  let ch = member.guild.channels.find("name" , sw[member.guild.id].ch);
  let msk = sw[member.guild.id].msk;

      if(!sw[member.guild.id]) sw[member.guild.id] = {
  onoff: 'Off',
  ch: 'Welcome',
  msk: 'Welcome Dude'
  }
  if(sw[member.guild.id].onoff === 'Off') return;

  if (member.user.bot) return;
  var Canvas = require('canvas')
  var jimp = require('jimp')
  const w = ['./img/bull1.png'];
          let Image = Canvas.Image,
              canvas = new Canvas(749, 198),
              ctx = canvas.getContext('2d');
          ctx.patternQuality = 'bilinear';
          ctx.filter = 'bilinear';
          ctx.antialias = 'subpixel';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.stroke();
          ctx.beginPath();
  
          fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
              if (err) return console.log(err);
              let BG = Canvas.Image;
              let ground = new Image;
              ground.src = Background;
              ctx.drawImage(ground, 0, 0, 749, 198);
  
  })
  
                  let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                  jimp.read(url, (err, ava) => {
                      if (err) return console.log(err);
                      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                          if (err) return console.log(err);
                          ctx.font = '35px agent_orange';
                          ctx.fontSize = '40px';
                          ctx.fillStyle = "#34495E";
                          ctx.textAlign = "center";
                          ctx.fillText(" Welcome to " + member.guild.name , 300, 60);
  
                          //ur name
                          ctx.font = '40px Impact';
                          ctx.fontSize = '48px';
                          ctx.fillStyle = "#566573";
                          ctx.textAlign = "center";
                          ctx.fillText(member.user.username, 300, 110);
   ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#2C3E50";
                        ctx.textAlign = "center";
                        ctx.fillText("Member Number" + member.guild.memberCount, 300, 150);


                        //Avatar
                    let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(75, 101, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 38, 128, 126);     

ch.sendFile(canvas.toBuffer()).catch(console.error)
                      })  
})
  
   
        
    });             


client.on('message', message => { 
  var sender = message.author

if(!message.guild) return
  if(!sw[message.guild.id]) sw[message.guild.id] = {
  onoff: 'Off',
  ch: 'Welcome',
  msk: 'Welcome'
  }

if(message.content.startsWith(prefix + `set-wlc`)) {
         
  let perms = message.member.hasPermission(`MANAGE_CHANNELS`)

  if(!perms) return message.channel.send('**You need `Manage Channels` permission**')
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`
  ${prefix}set-wlc toggle 
   ${prefix}set-wlc set [Channel Name]
   ${prefix}set-wlc msg [Welcome Message]`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'set' || !state.trim().toLowerCase() == 'msg' ) return message.reply(`
  ${prefix}set-wlc toggle 
  ${prefix}set-wlc set [Channel Name]
  ${prefix}set-wlc msg [Welcome Message]`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
    if(state.trim().toLowerCase() == 'toggle') { 
     if(sw[message.guild.id].onoff === 'Off') return [message.channel.send(`**Welcome Message Is **ON** !**`), sw[message.guild.id].onoff = 'On']
     if(sw[message.guild.id].onoff === 'On') return [message.channel.send(`**Welcome Message Is **OFF** !**`), sw[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newch = message.content.split(" ").slice(2).join(" ")
   if(!newch) return message.reply(`${prefix}set-wlc set [Channel name]`)
     if(!message.guild.channels.find(`name`,newch)) return message.reply(`I Cant Find This Channel.`)
    sw[message.guild.id].ch = newch
     message.channel.send(`**Welcome channel Has Been Changed to ${newch}.**`)
   } 
   if(state.trim().toLowerCase() == 'msg') {
    let newmsg = message.content.split(" ").slice(2).join(" ")
    if(!newmsg) return message.reply(`${prefix}set-wlc msg [New Message]`)
     sw[message.guild.id].msk = newmsg
      message.channel.send(`**Welcome message Has Been Changed to ${newmsg}.**`)
    } 
         }
if(message.content === prefix + 'set-wlc info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`) 
    if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()

.addField(`Welcome message  `, `

On/Off : __${sw[message.guild.id].onoff}__
Channel : __${sw[message.guild.id].ch}__
Message : __${sw[message.guild.id].msk}__`)


    .setColor(`BLUE`)
    message.channel.send({embed})
  }

  

    fs.writeFile("./setwlc.json", JSON.stringify(sw), (err) => {
    if (err) console.error(err)
  });


})



client.on('ready', () => {
  console.log('-------------------------')
  console.log(`✨ Name: ${client.user.username}`)
  console.log('-------------------------')
  console.log(`✨ Id: ${client.user.id}`)
  console.log('-------------------------')
  console.log(`✨ Prefix: ${prefix}`)
  console.log('-------------------------')
  console.log(`✨ Servers: ${client.guilds.size}`)
  console.log('-------------------------')
  console.log(`✨ Members: ${client.users.size}`)
  console.log('-------------------------')
  console.log(`✨ Channels: ${client.channels.size}`)
  console.log('-------------------------')
})

client.on('message', message => {
  
  if(message.content.startsWith(prefix + 'mute')) {
    var men = message.mentions.users.first();
    if(!men) return message.channel.send('**Mention someone please**')
    message.channel.send(`**Are you sure that you want to mute [ ${men} ] ?**`)
    .then(() => { message.react("✅")})
    .then(() => { message.react("❌")})
      let trueFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
      let falseFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
      let yes = message.createReactionCollector(trueFilter, { time: 15000 });
   let no = message.createReactionCollector(falseFilter, { time: 15000 });
  
   yes.on("collect", r => {
    let muteroleee = message.guild.roles.find("name", "Muted")
     if(!muteroleee) return message.channel.send('Muteroleee ?')
     men.addRole(muteroleee);
    message.delete();
    message.channel.send(`**[ ${men} ] Muted**`).then(m => m.delete(5000));
  
  })
  
  no.on("collect", r => {
    message.delete();
  
  })

}
});

client.on('message', message => {
  
  if(message.content.startsWith(prefix + 'unmute')) {
    var men = message.mentions.users.first();
    if(!men) return message.channel.send('**Mention someone please**')
    message.channel.send(`**Are you sure that you want to mute [ ${men} ] ?**`)
    .then(() => { message.react("✅")})
    .then(() => { message.react("❌")})
      let trueFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
      let falseFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
      let yes = message.createReactionCollector(trueFilter, { time: 15000 });
   let no = message.createReactionCollector(falseFilter, { time: 15000 });
  
   yes.on("collect", r => {
    let muteroleee = message.guild.roles.find("name", "Muted")
     if(!muteroleee) return message.channel.send('**Your server need `Muted` Role**').then(message.guild.createRole("name", "Muted")).then(message.channel.send("**Try again now**"))
     men.removeRole(muteroleee);
    message.delete();
    message.channel.send(`**[ ${men} ] Muted**`).then(m => m.delete(5000));
  
  })
  
  no.on("collect", r => {
    message.delete();
  
  })

}
});












client.login(process.env.BOT_TOKEN);
