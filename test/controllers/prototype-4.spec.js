var proxyquire =  require('proxyquire').noCallThru();
var prototype4Data = require('../../app/data/prototype-4/index');
var Q = require("q");

describe('Using the prototype-4 controller', function () {

    var mockReq = {
        query: {
            casenumber: 4
        }
    }, mockRes = {
        render: sinon.stub(),
        send: sinon.stub()
    };

    describe('success of the getAppealStatus() function', function() {

        var ctrl,
            serviceFactoryStub = {
                get: function(service) {
                    return {
                        getAppealStatus(req) {
                            return Q.when({ body: prototype4Data.appeal });
                        }
                    }
                }
            };

        before(function() {
            ctrl = proxyquire('../../app/controllers/prototype-4', {
                '../services/serviceFactory': serviceFactoryStub
            });
        });

        it('should define a getAppealStatus() function', function () {
            ctrl.should.have.property('getAppealStatus');
        });

        it('should  call the render function', function() {
            return ctrl.getAppealStatus(mockReq, mockRes).then(function() {
                assert(mockRes.render.calledWith('prototype-4/status', prototype4Data.appeal));
            });
        });

    });

    describe('failure of the getAppealStatus() function', function() {

        var ctrl,
            error = {
                message: 'server error',
                status: '500'
            },
            serviceFactoryStub = {
                get: function(service) {
                    return {
                        getAppealStatus(req) {
                            return Q.reject(error);
                        }
                    }
                }
            };

        before(function() {
            ctrl = proxyquire('../../app/controllers/prototype-4', {
                '../services/serviceFactory': serviceFactoryStub
            });
            mockRes.render = sinon.stub();
        });

        it('should not call the render function', function() {
            return ctrl.getAppealStatus(mockReq, mockRes).then(function() {
                assert(mockRes.render.notCalled);
            });
        });

        it('should call the send function', function() {
            return ctrl.getAppealStatus(mockReq, mockRes).then(function() {
                assert(mockRes.send.calledWith(error.message + " : " + error.status));
            });
        });

    });

});