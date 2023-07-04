const { Client } = require("..");
const bot = new Client();

const token = 'FsFTiPvpkkB7j4O5oTia.CwlHh48KnGB0nAUbDDjaMG.im9wt8lys26TYEk4jMy2a5cPUg9SE/x/l5LS8Xpgg+U='

bot.on('ready', async ()=>{
    console.log(`logged as ${bot.user.displayName} ${bot.user.id}`)
    /*
        bot.users.cache.get('someuserid').send('Heww lo Line (⪴╰╯⪳)')
        bot.channels.cache.get('somechannelid').send('Heww lo Line (⪴╰╯⪳)')
        bot.groups.cache.get('somegroupid').send('Heww lo Line (⪴╰╯⪳)')
    */
})
bot.on('message',async(message)=>{
    if(message.author.id == bot.user.id) return;
    if(message.content == 'ping') {
        await message.channel.send('pong')
    }
})

bot.on('message_read',(message,user)=>{
    console.log(`${user.displayName} READ ${message.id} ${message.content}`)
})

bot.on('chat_invite',(group,inviter)=>{
    group.accept()
    console.log(`group ${group.name}(${group.id}) invite by ${inviter.displayName}`)
})

bot.on('chat_join',channel=>{
    channel.send('Chat Joined')
})

// Raw Data From Fetchops
bot.on('raw',(op,data)=>{
    console.log(op,data)
})

bot.login(token)