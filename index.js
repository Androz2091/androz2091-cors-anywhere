const { port } = require('./config.json');
const proxy = require('cors-anywhere');
proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['user-agent']
}).listen(port, '0.0.0.0', function() {
    console.log('Running CORS Anywhere on ::' + port + '::');
});
