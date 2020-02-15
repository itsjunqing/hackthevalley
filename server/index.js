const express = require('express');

const app = express();

const test = require('./routes/api-endpoint.js');
const testList = require('./routes/test-list.js');

app.use('/test', test);
app.use('/testApi', testList);

app.get('/', (req, res) => {
	res.send('Heat Beating Tick Tick');
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server started on ${process.env.PORT || 3000}`);
});
