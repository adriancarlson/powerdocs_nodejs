import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import articleRouter from './routes/articleRouter.js';
import sectionRouter from './routes/sectionRouter.js';

const hostname = 'localhost';
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/articles', articleRouter);
app.use('/sections', sectionRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(`<html><body><h1>This is an Express Server</h1></body></html>`);
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
