var Q = require("q");

var hearingDetails4 = require('../../data/prototype-4/hearingDetails.json');
var hearingDetails5 = require('../../data/prototype-5/hearingDetails.json');
var hearingDetails6 = require('../../data/prototype-6/hearingDetails.json');
var hearingDetails7 = require('../../data/prototype-7/hearingDetails.json');
var hearingDetails8 = require('../../data/prototype-8/hearingDetails.json');

module.exports = {
    getHearingDetails: function(req, res) {
        var deferred = Q.defer(),
            prototypeVersion = req.url.split('/')[1],
            hearingDetails;

        switch(prototypeVersion) {
            case 'prototype-4':
                hearingDetails = hearingDetails4;
                break;
            case 'prototype-5':
                hearingDetails = hearingDetails5;
                break;
            case 'prototype-6':
                hearingDetails = hearingDetails6;
                break;
            case 'prototype-7':
                hearingDetails = hearingDetails7;
                break;
            case 'prototype-8':
                hearingDetails = hearingDetails8;
                break;
            default:
                console.error('Unknown prototype version: ' + prototypeVersion);
        }

        deferred.resolve({body: hearingDetails});
        return deferred.promise;
    },
};