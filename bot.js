
Client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;

    channel.send(`**Welcome to Pluie.**, ${member}`)
})
Client.on('message', async message => {
	if (message.content === '!join') {
		Client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	}
});
