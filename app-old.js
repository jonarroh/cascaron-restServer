// import http from 'http';

// http
// 	.createServer((req, res) => {
// 		res.writeHead(200, { 'Content-Type': 'application/json' });
// 		const persona = {
// 			nombre: 'Juan',
// 			edad: 28
// 		};
// 		res.write(JSON.stringify(persona));
// 		res.end();
// 	})
// 	.listen(8080);

// console.log('escuchando en el puerto 8080');

// mport express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express();
// const port = 8080;

// app.use(express.static('public'));

// app.get('/', (req, res) => {
// 	res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/generic', (req, res) => {
// 	res.sendFile(__dirname + '/public/generic.html');
// });
// app.get('/elements', (req, res) => {
// 	res.sendFile(__dirname + '/public/elements.html');
// });

// app.get('*', (req, res) => {
// 	res.sendFile(__dirname + '/public/404.html');
// });
// app.listen(port, () => {
// 	console.log(`escuchando en el puerto ${port}`);
// });
