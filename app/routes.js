var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + Date.now() + path.extname(file.originalname));
        });
    }
});
var upload = multer({ storage });

var home = require('./controllers/home');

var prototypeSixteenCtrl = require('./controllers/prototype-sya-demo');

	
router.get('/', home.index);


router.get('/prototype-sya-demo/validate',   prototypeSixteenCtrl.validateCaseReference);
router.get('/prototype-sya-demo/validatemulti',   prototypeSixteenCtrl.validateCaseReferenceMulti);
router.get('/prototype-sya-demo/validatereference',   prototypeSixteenCtrl.validateReference);
router.get('/prototype-sya-demo/validate-surname',   prototypeSixteenCtrl.validateSurname);
router.get('/prototype-sya-demo/status',   prototypeSixteenCtrl.getAppealStatus);
router.post('/prototype-sya-demo/appointee',   prototypeSixteenCtrl.appointee);
router.post('/prototype-sya-demo/representative',   prototypeSixteenCtrl.representative);
router.post('/prototype-sya-demo/representative-app',   prototypeSixteenCtrl.representativeApp);
router.post('/prototype-sya-demo/hearing',   prototypeSixteenCtrl.hearing);
router.post('/prototype-sya-demo/hearing-app',   prototypeSixteenCtrl.hearingApp);
router.post('/prototype-sya-demo/arrangements',   prototypeSixteenCtrl.arrangements);
router.post('/prototype-sya-demo/arrangements-app',   prototypeSixteenCtrl.arrangementsApp);
router.post('/prototype-sya-demo/mobile',   prototypeSixteenCtrl.mobile);
router.post('/prototype-sya-demo/mobile-app',   prototypeSixteenCtrl.mobileApp);
router.post('/prototype-sya-demo/mobileboth',   prototypeSixteenCtrl.mobileboth);
router.post('/prototype-sya-demo/notifications',   prototypeSixteenCtrl.notifications);
router.post('/prototype-sya-demo/mrnDate',   prototypeSixteenCtrl.mrnDate);
router.post('/prototype-sya-demo/checkdate',   prototypeSixteenCtrl.checkdate);
router.post('/prototype-sya-demo/availability',   prototypeSixteenCtrl.availability);
router.post('/prototype-sya-demo/availability-app',   prototypeSixteenCtrl.availabilityApp);
router.post('/prototype-sya-demo/address-app',   prototypeSixteenCtrl.addressApp);
router.post('/prototype-sya-demo/mrnhave',   prototypeSixteenCtrl.mrnhave);
router.post('/prototype-sya-demo/contactdwp',   prototypeSixteenCtrl.contactdwp);

module.exports = router;
