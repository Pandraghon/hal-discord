exports.conf = {
	enabled: true,
	spamProtection: false,
	priority: 5,
};

exports.run = (client, msg, cmd) => {
	if (!cmd.conf.nsfw || msg.channel.nsfw) return false;
	return 'Yamete kudasaiiii';
};