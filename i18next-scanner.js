var fs = require('fs');
var Parser = require('i18next-scanner').Parser;

var parser = new Parser();
var content = '';
// Parse Translation Function
// i18next.t('key');
content = fs.readFileSync('app.js', 'utf-8');
parser.parseFuncFromString(content); // using default options and handler

console.log(parser.get({
	resource: {
		loadPath: 'i18n/{{ns}}/{{lng}}.json',
		savePath: 'i18n/{{ns}}/{{lng}}.json',
	},
}));