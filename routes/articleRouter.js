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

// .get('/articles/:articleId', (req, res) => {
// 	res.end(`Will send details of the article: ${req.params.articleId} to you`);
// });

// .post('/articles/:articleId', (req, res) => {
// 	res.statusCode = 403;
// 	res.end(`POST operation not supported on /articles/${req.params.articleId}`);
// });

// .put('/articles/:articleId', (req, res) => {
// 	res.write(`Updating the article ${req.params.articleId}\n`);
// 	res.end(`Will update the campsite ${req.body.name}
// 		with the description: ${req.body.description}`);
// });

// .delete('/articles/:articleId', (req, res) => {
// 	res.end(`Deleting article: ${req.params.articleId}`);
// });

export default articleRouter;
