var config = require('../config');
var appealStatusService = require('./appeal-status/appealStatusService');
var mockedAppealStatusService = require('./appeal-status/mockedAppealStatusService');
var mockedHearingDetailsService = require('./hearing-details/mockedHearingDetailsService');

exports.get = function(serviceName) {

    var mockData = config.mockData;

    switch(serviceName) {
        case 'appealStatus':return mockData? mockedAppealStatusService : appealStatusService;
        case 'hearingDetails': return mockedHearingDetailsService;
        default: throw new Error('Unknown service: ' + serviceName);
    }
};