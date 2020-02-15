'use strict';
// Node Modules
const express = require('express');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = require('../swagger/index.js');

// App Modules
const userController = require('../Controller/userController.js');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * path:
 *  /users/:
 *    post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.post('/user', userController.new);

const specs = swaggerJsdoc(options);
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(specs, { explorer: true }));

// catch 404 and forward to error handler
router.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error Handler
router.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

module.exports = router;
