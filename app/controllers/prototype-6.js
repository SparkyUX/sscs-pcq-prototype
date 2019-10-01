var serviceFactory = require('../services/serviceFactory');
var appealStatusService = serviceFactory.get('appealStatus');
var hearingDetailsService = serviceFactory.get('hearingDetails');
var i18nHelper = require('../core/i18nHelper');

var ctrl6 = {

    validate: function (req, res) {
        var surname = req.query.surname,
            reference = req.query.reference,
            errors = {};

        // Test both the surname and reference number to ensure we don't have empty strings.
        if(ctrl6.getEmptyStringErrors(surname, reference, errors)) {
            ctrl6.showErrors(res, errors, reference, surname);
            return;
        }

        // Test both the surname and reference number against a REGEX.
        if(ctrl6.getRegexErrors(surname, reference, errors)) {
            ctrl6.showErrors(res, errors, reference, surname);
            return;
        }

        // Prefix with SC.
        req.query.reference = 'SC' + req.query.reference;

        // Make an API call.
        ctrl6.getAppealStatus(req, res);
    },

    getAppealStatus: function (req, res) {
        return appealStatusService.getAppealStatus(req)
            .then(function (result, error) {
                var data = result.body.response;
                data.status = data.status.toLowerCase().split('_').join('');

                // Perform updates.
                i18nHelper.setLatestUpdates(req, data);
                i18nHelper.setHeadersOnUpdates(req, data);

                // Update session.
                req.session.reference = data.reference;
                req.session.name = data.name;
                req.session.status = data.status;

                res.render('prototype-6/appeal-status', data);
            }, function (error) {
                var reference = res.req.query.reference,
                    surname = res.req.query.surname,
                    errors = {};

                if(error.status == 404) {
                    reference = reference? reference.substr(2) : ''; // Strip out the SC prefix.
                    ctrl6.addNotFoundErrors(errors);
                    ctrl6.showErrors(res, errors, reference, surname);
                }
            });
    },

    showErrors: function(res, errors, reference, surname) {
        res.render('prototype-6/track-your-appeal', {
            errors: errors,
            reference: reference,
            surname: surname
        });
    },

    getHearingDetails: function(req, res) {
        return hearingDetailsService.getHearingDetails(req)
            .then(function (result, error) {
                var data = result.body;
                data.reference = req.session.reference;
                data.name = req.session.name;
                res.render('prototype-6/hearing-details', data);
            }, function (error) {
                res.send('HTTP '  + error.status + ': ' + error.message);
            });
    },

    registerForNotifications: function(req, res) {
        res.render('prototype-6/register-for-notifications', {
            register: req.i18n.__('notifications.register')
        } );
    },

    aboutHearing: function(req, res) {
        var data = {
            hearing: { expectations: req.i18n.__('hearing.expectations') },
            status: req.session.status,
            reference: req.session.reference
        };

        // Determine the language based on the 'lang' query string.
        // For example: lang=en or lang=cy
        var locale = req.query.lang ? req.query.lang : req.i18n.locale;

        // Set the locale
        req.i18n.setLocale(locale);

        // Toggle the locale so we can easily switch between locales.
        locale = (locale === 'en') ? 'cy' : 'en';

        // Create the about hearing URL including the language query string.
        data.langUrl = '/prototype-6/abouthearing/?lang=' + locale;

        res.render('prototype-6/about-hearing', data);
    },

    providingEvidence: function(req, res) {
        res.render('prototype-6/provide-evidence', {
            evidence: {
                provide: req.i18n.__('evidence.provide')
            },
            reference: req.session.reference
        });
    },

    claimExpenses: function(req, res) {
        res.render('prototype-6/claim-expenses', {
            claimExpenses: req.i18n.__('claimExpenses'),
            reference: req.session.reference
        });
    },

    getEmptyStringErrors: function(surname, reference, errors) {
        if(surname === '') {
            errors.surname = [
                "No surname entered.",
                "You haven't entered a surname. Enter your surname to continue."
            ];
        }

        if (reference === '') {
            errors.reference = [
                "No appeal reference number entered.",
                "You haven't entered an appeal reference number. Enter it to find your appeal."
            ];
        }

        return errors.surname || errors.reference;
    },

    getRegexErrors: function(surname, reference, errors) {
        var surnameRegEx = /^[a-zA-Z]{3,}$/,
            refNumberRegEx = /^\d{3}\/\d{2}\/\d{5}$/;

        if(!surnameRegEx.test(surname)) {
            errors.surname = [
                "Invalid surname entered.",
                "You’ve entered an invalid surname. Check it and enter it again."
            ];
        }

        if(!refNumberRegEx.test(reference)) {
            errors.reference = [
                "Invalid appeal reference number entered.",
                "You’ve entered an invalid appeal reference number. Check it and enter it again, including the forward slashes."
            ];
        }

        return errors.surname || errors.reference;
    },

    addNotFoundErrors: function(errors) {
        errors.notFound = [
            "Your details don’t match our records.",
            "Check any correspondence you’ve received about your appeal and enter them again."
        ];
    }
};

module.exports = ctrl6;