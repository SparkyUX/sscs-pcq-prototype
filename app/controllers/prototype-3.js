var request = require('superagent');
var config = require('../config');

exports.status = function(req, res) {

    if (config.mockData) {
        var mockData = {
            name: 'Jack Mock',
            status: req.query.status,
            receivedDate: new Date(),
            id: 'SC012/34/56789',
            updated: '01/07/2016'
        };
        res.render('prototype-3/status', mockData);
    } else {
        request
            .get(config.caseEndpoint + req.query.casenumber)
            .end(function(error, result){
                result.body.name = 'Joe Bloggs';
                result.body.status = req.query.status;
                result.body.receivedDate = new Date();
                result.body.id = 'SC012/34/56789';
                result.body.updated = '01/07/2016';
                res.render('prototype-3/status', result.body);
            });
    }
};