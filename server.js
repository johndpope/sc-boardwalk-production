var prpl = require('prpl-server');
var express = require('express');
var helmet = require('helmet');
var app = express();
var server = require('http').createServer(app);

app.use(helmet());

app.get('/*', prpl.makeHandler('./build/', {
    builds: [
        {name: 'es5-bundled', browserCapabilities: ['es2015'], basePath: true},
        {name: 'es6-unbundled', browserCapabilities: ['push'], basePath: true},
        {name: 'es6-bundled', browserCapabilities: [], basePath: true},
    ],
}));

const PORT = 8080;
const HOST = '0.0.0.0';


server.listen(PORT, HOST);
