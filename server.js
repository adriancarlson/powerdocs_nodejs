import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import articleRouter from './routes/articleRouter.js';
import sectionRouter from './routes/sectionRouter.js';

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/articles', articleRouter);
app.use('/sections', sectionRouter);

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
