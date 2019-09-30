var express = require('express');

global.app = express();
global.router = express.Router();
global.request = require('supertest');

global.nunjucks = require('express-nunjucks');
global.routes = require(__dirname + '/app/routes.js');

global.app.set('view engine', 'html');
global.app.set('views', ['/..app/views', __dirname + '/lib/']);
global.app.use("/", routes);

global.nunjucks.setup({
    autoescape: true,
    watch: true,
    noCache: true
}, global.app);

// Include the sinon mocking library and the ability to stub promises.
var sinon = require('sinon');
var sinonStubPromise = require('sinon-stub-promise');
global.sinon = sinon;
sinonStubPromise(sinon);

// Include the chai assertion library.
var chai = require('chai');

// Include the stacktrace on failing assertions
chai.config.includeStack = true;

// Set chai global assertions.
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
global.should = chai.should();