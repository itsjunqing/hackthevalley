const express = require('express');

const app = express();

const routes = require('./routes/api-endpoint.js');

app.use('/api', routes);

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server started on ${process.env.PORT || 3000}`);
});
