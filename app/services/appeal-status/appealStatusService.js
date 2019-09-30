var request = require('superagent');
var config = require('../../config');

module.exports = {
    getAppealStatus: function(req) {
        return request('GET', config.caseEndpoint + '/?reference=' + req.query.reference);
    }
};