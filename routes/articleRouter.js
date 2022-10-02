import express from 'express';
const articleRouter = express.Router();

articleRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})

	.get((req, res) => {
		res.end('Will send all the articles to you');
	})

	.post((req, res) => {
		res.end(`Will add the article: ${req.body.name} with description: ${req.body.description}`);
	})

	.put((req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /articles');
	})

	.delete((req, res) => {
		res.end('Deleting all articles');
	});

articleRouter
	.route('/:articleId')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end(`Will send details of the article: ${req.params.articleId}`);
	})
	.post((req, res) => {
		res.statusCode = 403;
		res.end('POST operation not supported.');
	})
	.put((req, res) => {
		res.end(`Will update article: ${req.body.name} and description: ${req.body.description}`);
	})
	.delete((req, res) => {
		res.end(`Deleting article with id: ${req.params.articleId}`);
	});
