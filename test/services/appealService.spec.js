var appealStatusService = require('../../app/services/appeal-status/appealStatusService');
var mockData = require('../../app/data/prototype-4/index').hearing;
var Q = require("q");

describe('When using the /case API service', function () {

    describe('making a HTTP call to the /case endpoint', function() {

        var stub;

        before(function() {
            stub = sinon.stub(appealStatusService, 'getAppealStatus');
        });

        it('should be a success', function () {
            stub.returns(Q.when({body: mockData}));
            return appealStatusService.getAppealStatus().then(function(result) {
                expect(result.body.name).to.eql('John Smith');
                expect(result.body.caseRef).to.eql('SC242/16/03435');
            });
        });

        it('should be a failure', function () {
            var expectedError = new Error("HTTP 500");
            stub.returns(Q.reject(expectedError));
            return appealStatusService.getAppealStatus().catch(function(error) {
                assert.strictEqual(error, expectedError);
            });
        });
    });
});