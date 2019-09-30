var Q = require("q");
var prototype4Data = require('../../data/prototype-4/index');
var prototype5Data = require('../../data/prototype-5/index');
var prototype7Data = require('../../data/prototype-7/index');
var prototype8Data = require('../../data/prototype-8/index');

module.exports = {

    getAppealStatus: function(req, res) {
        var deferred = Q.defer(),
            prototypeVersion = req.url.split('/')[1],
            data;

        switch(prototypeVersion) {
            case 'prototype-4':
                data = prototype4Data[req.query.status];
                break;
            case 'prototype-5':
                data = prototype5Data[req.query.status];
                break;
            case 'prototype-7':
                data = prototype7Data[req.query.reference];
                break;
            case 'prototype-8':
                data = prototype8Data[req.query.reference];
                break;
            default:
                console.error('Unknown prototype version: ' + prototypeVersion);
        }

        if(!data) {
            var error = {
                message: 'Unknown MOCKED appellant reference: ' + req.query.reference,
                status: ''
            };
            deferred.reject(error);
        }

        deferred.resolve({body: data});

        return deferred.promise;
    },
};