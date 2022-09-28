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

// .get('/sections/:sectionId', (req, res) => {
// 	res.end(`Will send details of the section: ${req.params.sectionId} to you`);
// });

// .post('/sections/:sectionId', (req, res) => {
// 	res.statusCode = 403;
// 	res.end(`POST operation not supported on /sections/${req.params.sectionId}`);
// });

// .put('/sections/:sectionId', (req, res) => {
// 	res.write(`Updating the section ${req.params.sectionId}\n`);
// 	res.end(`Will update the campsite ${req.body.name}
// 		with the description: ${req.body.description}`);
// });

// .delete('/sections/:sectionId', (req, res) => {
// 	res.end(`Deleting section: ${req.params.sectionId}`);
// });

export default sectionRouter;
