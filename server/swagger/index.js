const options = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'Time to document that Express API you built',
			version: '1.0.0',
			description: 'A test project to understand how easy it is to document and Express API',
			license: {
				name: 'MIT',
				url: 'https://choosealicense.com/licenses/mit/'
			},
			contact: {
				name: 'Swagger',
				url: 'https://swagger.io',
				email: 'Info@SmartBear.com'
			}
		},
		servers: [
			{
				url: 'https://hackthevalley123456789.appspot.com/api/v1'
			},
			{
				url: 'https://localhost:3000/api/v1'
			}
		]
	},
	apis: [ './Models/User.js', './Routes/index.js' ]
};

module.exports = options;