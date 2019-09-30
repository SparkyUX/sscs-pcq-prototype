var request = require('superagent');
var config = require('../../config');

module.exports = {
    getHearingDetails: function(req) {
        return request('GET', config.hearingDetailsEndpoint + '/?reference=' + req.query.reference);
    }
};