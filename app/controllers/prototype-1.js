var request = require('superagent');
var config = require('../config');

exports.status = function(req, res) {
    if (config.mockData) {
        var mockData = {
            name: 'Jack Mock',
            id: req.query.casenumber
        };
        res.render('prototype-1/status', mockData);
    } else {
        request
            .get(config.caseEndpoint + req.query.casenumber)
            .end(function(error, result){
                result.body.name = 'Joe Bloggs';
                res.render('prototype-1/status', result.body);
            });
    }
};