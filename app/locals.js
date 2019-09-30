var statusMap = require('./config').statusMap;

module.exports = function(req, res, next) {
    res.locals.isActive = function (status, currentStatus) {
        let classes = [];
        if(statusMap[currentStatus] >= statusMap[status]) {
            classes.push('active');
        }
        if(status === currentStatus){
            classes.push('current');
        }
        return classes.join(' ')
    };
    next();
};
