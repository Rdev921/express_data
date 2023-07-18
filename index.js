const jsonServer = require('json-server');
const server = jsonServer.create();  
const router = jsonServer.router(db.json); 
const middlewares = jsonServer.defaults({ logger: true });
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port);

