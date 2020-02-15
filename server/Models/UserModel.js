'use strict';
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	name: String,
	email: String,
	userID: String
});

module.exports = mongoose.model('Users', UserSchema);

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *        example:
 *           name: Alexander
 *           email: fake@email.com
 */
