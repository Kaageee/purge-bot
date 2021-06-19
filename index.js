const Discord = require('discord.js')
const client = new Discord.Client();

const fs = require('fs');

client.login("")

client.commands = new Discord.Collection();

client.on('ready', () => {
  console.log('------------------------------------------------------------------------------------------');
  console.log(' ██████╗ ██╗   ██╗██████╗  ██████╗ ███████╗    ██████╗  ██████╗ ████████╗');
  console.log(' ██╔══██╗██║   ██║██╔══██╗██╔════╝ ██╔════╝    ██╔══██╗██╔═══██╗╚══██╔══╝');
  console.log(' ██████╔╝██║   ██║██████╔╝██║  ███╗█████╗      ██████╔╝██║   ██║   ██║   ');
  console.log(' ██╔═══╝ ██║   ██║██╔══██╗██║   ██║██╔══╝      ██╔══██╗██║   ██║   ██║   ');
  console.log(' ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗    ██████╔╝╚██████╔╝   ██║   ');
  console.log(' ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═════╝  ╚═════╝    ╚═╝  ');
  console.log('                                                                                         ');  
  console.log('------------------------------------------------------------------------------------------');

});


client.on('message', message => {
      if (message.author === client.user){
      if (message.content.startsWith("+purge")) {
          let args = message.content.split(" ").slice(1);
          if(!args[0])return message.channel.send("```❌ You must specify a number of messages to delete !```")
          let messagecount = parseInt(args[0]) || 1;
          var deletedMessages = -1;
          message.channel.fetchMessages({
              limit: Math.min(messagecount + 1, 100, 200)
            })
            .then(messages => {
              messages.forEach(m => {
                m.delete().catch(console.error);
                deletedMessages++;
              });
            }).catch(console.error);
        }
  }})
