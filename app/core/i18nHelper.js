var filters = require('../filters')();

module.exports = {

    setLatestUpdates: function(req, data) {
        if(!data.updates.length) {
            return;
        }
        data.latestUpdates = [];
        data.latestUpdates.push(req.i18n.__(data.updates[0].webKey + '.msg', data.updates[0].placeholders));
        if(data.updates[0].webKey === 'status.dwpRespond') {
            data.latestUpdates.push(req.i18n.__('status.dwpRespond.msg2', data.updates[0].placeholders));
        }
    },

    setHeadersOnUpdates: function(req, data) {
        var i=1, update;
        for(; i < data.updates.length; i++ ) {
            update = data.updates[i];
            update.heading = req.i18n.__(update.webKey + '.heading');
        }
    }
};