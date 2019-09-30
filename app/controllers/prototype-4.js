var serviceFactory = require('../services/serviceFactory');
var appealStatusService = serviceFactory.get('appealStatus');
var hearingDetailsService = serviceFactory.get('hearingDetails');

module.exports = {

    getAppealStatus: function (req, res) {
        return appealStatusService.getAppealStatus(req, res)
            .then(function (result, error) {
                var data = result.body;
                data.status = data.status.toLowerCase();
                res.render('prototype-4/status', data);
            }, function (error) {
                res.send(error.message + " : " + error.status);
            });
    },

    getHearingDetails: function(req, res) {
        return hearingDetailsService.getHearingDetails(req, res)
            .then(function (result, error) {
                res.render('prototype-4/tribunal-hearing', result.body);
            }, function (error) {
                res.send(error.message + " : " + error.status);
            });
    }
};