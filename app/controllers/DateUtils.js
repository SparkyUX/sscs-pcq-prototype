const moment = require('moment');

class DateUtils {

    static isLessThanOrEqualToAMonth(mDate) {
        return moment().subtract(1, 'month').isSameOrBefore(mDate, 'day');
    }

    static isGreaterThanAMonth(mDate) {
        return moment().subtract(1, 'month').isAfter(mDate, 'day');
    }

    static isLessThanOrEqualToThirteenMonths(mDate) {
        return moment().subtract(13, 'month').isSameOrBefore(mDate, 'day');
    }

    static isGreaterThanThirteenMonths(mDate) {
        return moment().subtract(13, 'month').isAfter(mDate, 'day');
    }

    static createMoment(day, month, year) {
        return moment(`${day}-${month}-${year}`, 'DD-MM-YYYY');
    }
}

module.exports = DateUtils;