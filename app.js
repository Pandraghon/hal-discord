const komada = require('komada');
const i18n = require('i18next');
const Backend = require('i18next-node-fs-backend');

i18n
	.use(Backend)
	.init({
		lng: 'en',
		debug: true,
		backend: {
			loadPath: '/i18n/{{ns}}/{{lng}}.json',
		}
	});

console.log(i18n.t('key')); 

const settings = require('./settings.json');
const token = require('./secret.json').token;

const client = new komada.Client({
	ownerID: settings.ownerID,
	prefix: settings.prefix,
	clientOptions: {
		fetchAllMembers: true,
	},
});

client.login(token);
