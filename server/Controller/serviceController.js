Service = require('../Models/ServiceModel.js');

exports.findAll = async function(req, res) {
    try {
        const results = await Service.find({});
        res.json({
            status: 'success',
            message: 'Contacts retrieved successfully',
            data: results
        });
    } catch (err) {
        res.json(err);
        throw err;
    }
};

exports.new = function(req, res) {
    let service = Service();
    service.userID = req.body.userID;
    service.title = req.body.title;
    service.description = req.body.description;
    service.rating = Number(req.body.rating);
    service.category = req.body.category;
    service.cost = Number(req.body.cost);

    //saves in database
    service.save(function(err) {
        if (err) {
            res.json(err);
            throw err;
        }
        res.json({
            message: 'New Service created!',
            data: service
        });
    });
};
