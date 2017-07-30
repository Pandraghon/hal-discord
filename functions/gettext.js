const fs = require('fs');
const path = require('path');
const Gettext = require('node-gettext');
const { po } = require('gettext-parser');

const gt = new Gettext();

const localeDir = path.resolve('/home/bots/NoobEater/', 'i18n');
const files = fs.readdirSync(localeDir);

files.filter(file => file.endsWith('.po')).forEach((file) => {
	const lang = file.split('.')[0];
	console.log(file, lang);
	const content = fs.readFileSync(path.join(localeDir, file));
	const parsed = po.parse(content);
	gt.addTranslations(lang, 'messages', parsed);
});
gt.setLocale('fr');
console.log(gt.gettext('pong'));

module.exports = str => gt.gettext(str);