import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const hostname = 'localhost';
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.all('/articles', (req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
});

app.get('/articles', (req, res) => {
	res.end('Will send all the articles to you');
});

app.post('/articles', (req, res) => {
	res.end(`Will add the article: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/articles', (req, res) => {
	res.statusCode = 403;
	res.end('PUT operation not supported on /articles');
});

app.delete('/articles', (req, res) => {
	res.end('Deleting all articles');
});

app.get('/articles/:articleId', (req, res) => {
	res.end(`Will send details of the article: ${req.params.articleId} to you`);
});

app.post('/articles/:articleId', (req, res) => {
	res.statusCode = 403;
	res.end(`POST operation not supported on /articles/${req.params.articleId}`);
});

app.put('/articles/:articleId', (req, res) => {
	res.write(`Updating the article ${req.params.articleId}\n`);
	res.end(`Will update the campsite ${req.body.name} 
		with the description: ${req.body.description}`);
});

app.delete('/articles/:articleId', (req, res) => {
	res.end(`Deleting article: ${req.params.articleId}`);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(`<html><body><h1>This is an Express Server</h1></body></html>`);
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});

// const server = createServer((req, res) => {
// 	console.log(`Request for ${req.url} by method ${req.method}`);

// 	if (req.method === 'GET') {
// 		let fileUrl = req.url;
// 		if (fileUrl === '/') {
// 			fileUrl = '/index.html';
// 		}

// 		const filePath = resolve('./public' + fileUrl);
// 		const fileExt = extname(filePath);

// 		if (fileExt === '.html') {
// 			access(filePath, (err) => {
// 				if (err) {
// 					res.statusCode = 404;
// 					res.setHeader('Content-Type', 'text/html');
// 					res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
// 					return;
// 				}
// 				res.statusCode = 200;
// 				res.setHeader('Content-Type', 'text/html');

// 				createReadStream(filePath).pipe(res);
// 			});
// 		} else {
// 			res.statusCode = 404;
// 			res.setHeader('Content-Type', 'text/html');
// 			res.end(`<html><body><h1>Error 404: ${fileUrl} is not an HTML file</h1></body></html>`);
// 		}
// 	} else {
// 		res.statusCode = 404;
// 		res.setHeader('Content-Type', 'text/html');
// 		res.end(`<html><body><h1>Error 404: ${req.method} not supported</h1></body></html>`);
// 	}
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}`);
// });
