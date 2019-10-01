var serviceFactory = require('../services/serviceFactory');
var appealStatusService = serviceFactory.get('appealStatus');

module.exports = {

    validateCaseReference: function (req, res) {
        var caseRefNumber = req.query.reference,
            errors = [],
            caseRefNumberRegEx = /^\d{3}\/\d{2}\/\d{5}$/,
            caseRefNumberMatchesRegEx;

        if (caseRefNumber === '') {
            errors.push("You have not entered an appeal reference number. Enter it to find your appeal.");
            errors.push("No appeal reference number entered");
            res.render('prototype-7/track-your-appeal-error', {
                errorMessages: errors,
                caseRefNumber: caseRefNumber
            });
            return;
        }

        caseRefNumberMatchesRegEx = caseRefNumberRegEx.test(caseRefNumber);

        if(!caseRefNumberMatchesRegEx) {
            errors.push("You’ve entered an invalid appeal reference number. Check it and enter it again, including the forward slashes.");
            errors.push("Invalid appeal reference number entered");
            res.render('prototype-7/track-your-appeal-error', {
                errorMessages: errors,
                caseRefNumber: caseRefNumber
            });
            return;
        }

        req.query.reference = 'SC' + req.query.reference;

        return appealStatusService.getAppealStatus(req)
            .then(function (result, error) {
                var data = result.body;
                data.status = data.status.toLowerCase().split('_').join('');
                res.render('prototype-7/status', data);
            }, function (error) {
                res.send('HTTP '  + error.status + ': ' + error.message);
            });

    },

    validateCaseReferenceMulti: function(req, res) {
        var errors = [];
        var caseRef1 = req.query.caseref1;
        var caseRef2 = req.query.caseref2;
        var caseRef3 = req.query.caseref3;

        var caseRef1RegEx = /^\d{3}$/;
        var caseRef2RegEx = /^\d{2}$/;
        var caseRef3RegEx = /^\d{5}$/;

        var caseRef1RegExMatch = caseRef1RegEx.test(caseRef1);
        var caseRef2RegExMatch = caseRef2RegEx.test(caseRef2);
        var caseRef3RegExMatch = caseRef3RegEx.test(caseRef3);

        if(caseRef1 === '' && caseRef2 === '' && caseRef3 === '') {
            errors.push("You have not entered an appeal reference number. Enter it to find your appeal.");
            errors.push("No appeal reference number entered");
            res.render('prototype-7/track-your-appeal-error-multi', {
                errorMessages: errors,
                caseRefNumbers: [caseRef1, caseRef2, caseRef3]
            });
            return;
        }


        if(!caseRef1RegExMatch || !caseRef2RegExMatch || !caseRef3RegExMatch) {
            errors.push("You’ve entered an invalid appeal reference number. Check it and enter it again.");
            errors.push("Invalid appeal reference number entered");
            res.render('prototype-7/track-your-appeal-error-multi', {
                errorMessages: errors,
                caseRefNumbers: [caseRef1, caseRef2, caseRef3]
            });
            return;
        }

        req.query.reference = 'SC' + caseRef1 + '/' + caseRef2 + '/' + caseRef3;

        return appealStatusService.getAppealStatus(req)
            .then(function (result, error) {
                var data = result.body;
                data.status = data.status.toLowerCase().split('_').join('');
                res.render('prototype-7/status', data);
            }, function (error) {
                res.send('HTTP '  + error.status + ': ' + error.message);
            });
    }
};