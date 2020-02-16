const dotenv = require('dotenv');
dotenv.config();

const { accountSid, authToken, sendTo, sendFrom } = process.env;

const client = require('twilio')(accountSid, authToken);

exports.sendMsg = async function(req, res) {
	const message = await client.messages.create({
		body: 'WorkBounce - A client has requested your service. Please visit workbounce website for further details',
		from: sendFrom,
		to: sendTo
	});

	res.json({ status: 'success' });
};
