const express = require('express');

const app = express();

const routes = require('./routes/api-endpoint.js');

app.use('/test', routes);

app.get('/', (req, res) => {
	res.send('Heat Beating Tick Tick');
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server started on ${process.env.PORT || 3000}`);
});
