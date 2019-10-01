var serviceFactory = require('../services/serviceFactory');
var appealStatusService = serviceFactory.get('appealStatus');

module.exports = {

    getAppealStatus: function (req, res) {
        return appealStatusService.getAppealStatus(req)
            .then(function (result, error) {
                res.render('prototype-5/status', result.body);
            }, function (error) {
                res.send(error.message + " : " + error.status);
            });
    }
};