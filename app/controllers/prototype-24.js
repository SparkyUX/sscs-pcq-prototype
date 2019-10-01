var serviceFactory = require('../services/serviceFactory');
var appealStatusService = serviceFactory.get('appealStatus');
var DateUtils = require('./DateUtils');
var _ = require('lodash');

var controller = {

    appointee: function(req, res) {
        if (req.body.radioGroup === 'appointee') {
            res.render('prototype-beta-24/submit-your-appeal/001-1-sscs-form-download');
        } else if (req.body.radioGroup === 'nonAppointee') {
            res.render('prototype-beta-24/submit-your-appeal/001-2-independence');
        }
    },

    representative: function(req, res) {
        if (req.body.radioGroup === 'rep') {
            res.render('prototype-beta-24/submit-your-appeal/009-reps-details');
        } else if (req.body.radioGroup === 'noRep') {
            res.render('prototype-beta-24/submit-your-appeal/011-why-are-you-appealing');
        }
    },

    representativeApp: function(req, res) {
        if (req.body.radioGroup === 'repApp') {
            res.render('prototype-beta-24/submit-your-appeal/009-reps-details-appointee');
        } else if (req.body.radioGroup === 'noRepApp') {
            res.render('prototype-beta-24/submit-your-appeal/011-why-are-you-appealing-appointee');
        }
    },


    hearing: function(req, res) {
        if (req.body.radioGroup === 'attend') {
            res.render('prototype-beta-24/submit-your-appeal/014-hearing-arrangements-needed');
        } else if (req.body.radioGroup === 'notAttend') {
            res.render('prototype-beta-24/submit-your-appeal/013-hearing-not-attending');
        }
    },

    hearingApp: function(req, res) {
        if (req.body.radioGroup === 'attendApp') {
            res.render('prototype-beta-24/submit-your-appeal/014-hearing-arrangements-needed-appointee');
        } else if (req.body.radioGroup === 'notAttendApp') {
            res.render('prototype-beta-24/submit-your-appeal/013-hearing-not-attending-appointee');
        }
    },

    arrangements: function(req, res) {
        if (req.body.radioGroup === 'arrangementsRequired') {
            res.render('prototype-beta-24/submit-your-appeal/015-hearing-arrangements');
        } else if (req.body.radioGroup === 'arrangementsNotRequired') {
            res.render('prototype-beta-24/submit-your-appeal/016-hearing-availability');
        }
    },

    arrangementsApp: function(req, res) {
        if (req.body.radioGroup === 'arrangementsRequiredApp') {
            res.render('prototype-beta-24/submit-your-appeal/015-hearing-arrangements-appointee');
        } else if (req.body.radioGroup === 'arrangementsNotRequiredApp') {
            res.render('prototype-beta-24/submit-your-appeal/016-hearing-availability-appointee');
        }
    },


    availability: function(req, res) {
        if (req.body.radioGroup === 'datesYes') {
            res.render('prototype-beta-24/submit-your-appeal/016-hearing-dates');
        } else if (req.body.radioGroup === 'datesNo') {
            res.render('prototype-beta-24/submit-your-appeal/016-notifications-receive');
        }
    },

    availabilityApp: function(req, res) {
        if (req.body.radioGroup === 'datesYesApp') {
            res.render('prototype-beta-24/submit-your-appeal/016-hearing-dates-appointee');
        } else if (req.body.radioGroup === 'datesNoApp') {
            res.render('prototype-beta-24/submit-your-appeal/017-check-your-answers-appointee');
        }
    },


    mobile: function(req, res) {
        if (req.body.radioGroup === 'usemobile') {
            res.render('prototype-beta-24/submit-your-appeal/007-sms-confirmation');
        } else if (req.body.radioGroup === 'newmobile') {
            res.render('prototype-beta-24/submit-your-appeal/006-enter-mobile-number');
        }
    },

    mobileApp: function(req, res) {
        if (req.body.radioGroup === 'usemobileApp') {
            res.render('prototype-beta-24/submit-your-appeal/007-sms-confirmation-appointee');
        } else if (req.body.radioGroup === 'newmobileApp') {
            res.render('prototype-beta-24/submit-your-appeal/006-enter-mobile-number-appointee');
        }
    },

    mobileboth: function(req, res) {
        if (req.body.radioGroup === 'usemobileboth') {
            res.render('prototype-beta-24/submit-your-appeal/007-sms-email-confirmation');
        } else if (req.body.radioGroup === 'newmobileboth') {
            res.render('prototype-beta-24/submit-your-appeal/006-enter-mobile-number-both');
        }
    },


    checkdate: function(req, res) {
        if (req.body.radioGroup === 'correctdate') {
            res.render('prototype-beta-24/submit-your-appeal/003-3-why-appeal-late-1month');
        } else if (req.body.radioGroup === 'wrongdate') {
            res.render('prototype-beta-24/submit-your-appeal/003-mrn-date');
        }
    },


    notifications: function(req, res) {
        if (req.body.radioGroup === 'yesNotifications') {
            res.render('prototype-beta-24/submit-your-appeal/016-notifications-how-receive');

        } else if (req.body.radioGroup === 'noNotifications') {
            res.render('prototype-beta-24/submit-your-appeal/017-check-your-answers');
        }
    },


    notificationstype: function(req, res) {
        if (req.body.radioGroup === 'email') {
            res.render('prototype-beta-24/submit-your-appeal/016-notifications-email');

        } else if (req.body.radioGroup === 'text') {
            res.render('prototype-beta-24/submit-your-appeal/016-notifications-text');

        } else if (req.body.radioGroup === 'both') {
            res.render('prototype-beta-24/submit-your-appeal/016-notifications-email-both');
        }
    },


    notificationsmobile: function(req, res) {
        if (req.body.radioGroup === 'samemobile') {
            res.render('prototype-beta-24/submit-your-appeal/017-check-your-answers');

        } else if (req.body.radioGroup === 'newmobile') {
            res.render('prototype-beta-24/submit-your-appeal/016-notifications-text');

        }
    },



    addressApp: function(req, res) {
        if (req.body.radioGroup === 'diffAddress') {
            res.render('prototype-beta-24/submit-your-appeal/004-their-address-appointee');
        } else if (req.body.radioGroup === 'sameAddress') {
            res.render('prototype-beta-24/submit-your-appeal/005-sms-sign-up-address-same-appointee');
        }
    },


    mrnhave: function(req, res) {
        if (req.body.radioGroup === 'yesMRN') {
            res.render('prototype-beta-24/submit-your-appeal/002-dwp-office');
        } else if (req.body.radioGroup === 'noMRN') {
            res.render('prototype-beta-24/submit-your-appeal/002-contacted-dwp');
        }
    },

    contactdwp: function(req, res) {
        if (req.body.radioGroup === 'yesContactDWP') {
            res.render('prototype-beta-24/submit-your-appeal/003-1-no-mrn');
        } else if (req.body.radioGroup === 'noContactDWP') {
            res.render('prototype-beta-24/submit-your-appeal/003-2-contact-dwp');
        }
    },



        evidencechannel: function(req, res) {
        if (req.body.radioGroup === 'online') {
            res.render('prototype-beta-24/idam-set-up');
        } else if (req.body.radioGroup === 'post') {
            res.render('prototype-beta-24/evidence-post');
        }
    },


        evidenceoptions: function(req, res) {
        if (req.body.radioGroup === 'statement') {
            res.render('prototype-beta-24/evidence-statement');
        } else if (req.body.radioGroup === 'upload') {
            res.render('prototype-beta-24/evidence-upload');
        }
    },

        evidenceprovide: function(req, res) {
        if (req.body.radioGroup === 'yesupload') {
            res.render('prototype-beta-24/submit-your-appeal/012-evidence-upload');
        } else if (req.body.radioGroup === 'noupload') {
            res.render('prototype-beta-24/submit-your-appeal/013-your-hearing');
        }
    },



    // The class above has a dependency on moment.js which makes our life easier when dealing with dates. 
// To create a moment object from user input (e.g. MRN date) you would do the following:

mrnDate: function(req, res) {        
    var day = req.body.day;
    var month = req.body.month;
    var year = req.body.year;
    console.log(day,month,year);
    const dob = `${day}-${month}-${year}`;
    console.log(dob);
    var mDate = DateUtils.createMoment(day, month, year); 

    if (DateUtils.isLessThanOrEqualToAMonth(mDate)) {
        res.render('prototype-beta-24/submit-your-appeal/004-your-name');
        return;
    }

    if (DateUtils.isGreaterThanAMonth(mDate) && DateUtils.isLessThanOrEqualToThirteenMonths(mDate)) {
        res.render('prototype-beta-24/submit-your-appeal/003-0-check-mrn-date');
        return;
    }

    if (DateUtils.isGreaterThanThirteenMonths(mDate)) {
        res.render('prototype-beta-24/submit-your-appeal/003-4-why-appeal-late-13months');
        return;
    }
},

getAppealStatus: function (req, res) {
    return appealStatusService.getAppealStatus(req)
    .then(function (result, error) {
        var data = result.body;
        data.status = data.status.toLowerCase().split('_').join('');
        res.render('prototype-beta-07/status-pb-' + req.query.pb, data);
    }, function (error) {
        res.send('HTTP '  + error.status + ': ' + error.message);
    });
},

validateCaseReference: function (req, res) {
    var reference = req.query.reference,
    surname = req.query.surname,
    errors = {
        reference: [],
        surname: [],
        nomatch: []
    },
    caseRefNumberRegEx = /^\d{3}\/\d{2}\/\d{5}$/,
    surnameRegEx = /^[a-zA-Z]{3,}$/,
    caseRefNumberMatchesRegEx,
    surnameMatchesRegEx;

    if (reference === '') {
        errors.reference.push("No appeal reference number entered.");
        errors.reference.push("You haven't entered an appeal reference number. Enter it to find your appeal.");
    }

    if(surname === '') {
        errors.surname.push("No surname entered.");
        errors.surname.push("You haven't entered a surname. Enter your surname to continue.");
    }

    if(surname === 'wrong') {
        errors.nomatch.push("Your details don’t match our records.");
        errors.nomatch.push("Check any correspondence you’ve received about your appeal and enter them again.");
        res.render('prototype-24/track-your-appeal-error-no-match', {
            errorMessages: errors,
            caseRefNumber: reference,
            surname: surname
        });
        return;
    }

    if(errors.reference.length || errors.surname.length) {
        res.render('prototype-24/track-your-appeal-error', {
            errorMessages: errors,
            caseRefNumber: reference,
            surname: surname
        });
        return;
    }

    caseRefNumberMatchesRegEx = caseRefNumberRegEx.test(reference);

    if(!caseRefNumberMatchesRegEx) {
        errors.reference.push("Invalid appeal reference number entered.");
        errors.reference.push("You’ve entered an invalid appeal reference number. Check it and enter it again, including the forward slashes.");
    }

    surnameMatchesRegEx = surnameRegEx.test(surname);

    if(!surnameMatchesRegEx) {
        errors.surname.push("Invalid surname entered.");
        errors.surname.push("You’ve entered an invalid surname. Check it and enter it again.");
    }

    if(errors.reference.length || errors.surname.length) {
        res.render('prototype-24/track-your-appeal-error', {
            errorMessages: errors,
            caseRefNumber: reference,
            surname: surname
        });
        return;
    }

    req.query.reference = 'SC' + req.query.reference;

    return appealStatusService.getAppealStatus(req)
    .then(function (result, error) {
        var data = result.body;
        data.status = data.status.toLowerCase().split('_').join('');
        console.log(JSON.stringify(data, null, 2));
        res.render('prototype-24/status-pb-one', data);
                //res.render('prototype-24/status-pb-four', data);
                //res.render('prototype-24/status-pb-seven', data);
                //res.render('prototype-24/status-pb-ten', data);
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
        errors.push("No appeal reference number entered.");
        res.render('prototype-24/track-your-appeal-error-multi', {
            errorMessages: errors,
            caseRefNumbers: [caseRef1, caseRef2, caseRef3]
        });
        return;
    }


    if(!caseRef1RegExMatch || !caseRef2RegExMatch || !caseRef3RegExMatch) {
        errors.push("You’ve entered an invalid appeal reference number. Check it and enter it again.");
        errors.push("Invalid appeal reference number entered.");
        res.render('prototype-24/track-your-appeal-error-multi', {
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
        res.render('prototype-24/status', data);
    }, function (error) {
        res.send('HTTP '  + error.status + ': ' + error.message);
    });
},

validateReference: function(req, res) {
    var reference = req.query.reference,
    caseRefNumberRegEx = /^\d{3}\/\d{2}\/\d{5}$/,
    errors = [];

    req.session.reference = reference;

    if(!caseRefNumberRegEx.test(reference)) {
        if (reference === '') {
            errors.push("No appeal reference number entered.");
            errors.push("You haven't entered an appeal reference number. Enter it to find your appeal.");
        } {
            errors.push("Invalid appeal reference number entered.");
            errors.push("You’ve entered an invalid appeal reference number. Check it and enter it again, including the forward slashes.");
        }
    }

    if(errors.length) {
        res.render('prototype-24/validate-reference-error', {
            errors: errors,
            reference: reference
        });
        return;
    }

    res.render('prototype-24/validate-surname');
},

validateSurname: function(req, res) {
    var surname = req.query.surname,
    surnameRegEx = /^[a-zA-Z]{3,}$/,
    errors = [],
    reference = req.session.reference;

    if(!surnameRegEx.test(surname)) {
        if(surname === '') {
            errors.push("No surname entered.");
            errors.push("You haven't entered a surname. Enter your surname to continue.");
        } else {
            errors.push("Invalid surname entered.");
            errors.push("You’ve entered an invalid surname. Check it and enter it again.");
        }
    }

    if(errors.length) {
        res.render('prototype-24/validate-surname-error', {
            errors: errors,
            reference: reference,
            surname: surname
        });

        return;
    }

    req.query.reference = 'SC' + reference;

    return appealStatusService.getAppealStatus(req)
    .then(function (result, error) {
        var data = result.body;
        data.status = data.status.toLowerCase().split('_').join('');
        res.render('prototype-24/status', data);
    }, function (error) {
        res.send('HTTP '  + error.status + ': ' + error.message);
    });
},

    evidenceReminder: function(req, res, next) {
        res.render('prototype-beta-24/submit-your-appeal/012-evidence-reminder');
    },

    evidenceUpload: function(req, res, next) {
        res.render('prototype-beta-24/evidence-upload');
    },

    fileUpload: function(req, res, next) {
        // Add file data to session
        if (req.session.interactingFileUploads) {
            req.session.interactingFileUploads.push(req.file)
        } else {
            req.session.interactingFileUploads = [req.file];
        }

        res.send(req.file);
    },

    fileDelete: function(req, res, next) {
        var fileName = req.body.name || req.body.originalname;
        var fileList = req.session.interactingFileUploads;

        fileList.forEach(file => {
            if (file.originalname === fileName) {
                _.pull(fileList, file);
            }
        });

        req.session.interactingFileUploads = fileList;
        res.status(200).send(fileList);
    },

    getFiles: function(req, res, next) {
        var files = req.session.interactingFileUploads || [];
        res.send(files);
    },

    idamAccountActivated: function(req, res, next) {
        res.locals.serviceName = '';
        res.render('prototype-beta-24/idam-account-activated');
    },

    idamCreateAccount: function(req, res, next) {
        res.locals.serviceName = '';
        res.render('prototype-beta-24/idam-create-account')
    },

    idamCreatePassword: function(req, res, next) {
        res.locals.serviceName = '';
        res.render('prototype-beta-24/idam-create-password');
    },

    idamSignIn: function(req, res, next) {
        res.locals.serviceName = '';
        res.render('prototype-beta-24/idam-sign-in');
    },

    idamSignInActivated: function(req, res, next) {
        res.locals.serviceName = '';
        res.render('prototype-beta-24/idam-sign-in-activated');
    },

    idamSignInError: function(req, res, next) {
        res.locals.serviceName = '';
        res.render('prototype-beta-24/idam-sign-in-error');
    },

    idamVerifyEmail: function(req, res, next) {
        res.locals.serviceName = '';
        res.render('prototype-beta-24/idam-verify-email');
    },
};

module.exports = controller;
