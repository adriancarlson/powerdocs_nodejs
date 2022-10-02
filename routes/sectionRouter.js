import express from 'express';
const sectionRouter = express.Router();

sectionRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})

	.get((req, res) => {
		res.end('Will send all the sections to you');
	})

	.post((req, res) => {
		res.end(`Will add the section: ${req.body.name} with description: ${req.body.description}`);
	})

	.put((req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /sections');
	})

	.delete((req, res) => {
		res.end('Deleting all sections');
	});

sectionRouter
	.route('/:sectionId')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end(`Will send details of the section: ${req.params.sectionId}`);
	})
	.post((req, res) => {
		res.statusCode = 403;
		res.end('POST operation not supported.');
	})
	.put((req, res) => {
		res.end(`Will update section: ${req.body.name} and description: ${req.body.description}`);
	})
	.delete((req, res) => {
		res.end(`Deleting section with id: ${req.params.sectionId}`);
	});

export default sectionRouter;
