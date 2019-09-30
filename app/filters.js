var moment = require('moment');

const progressBar = {
  NONE: -1,
  APPEAL_RECEIVED: 0,
  DWP_RESPOND: 1,
  HEARING_BOOKED: 2,
  HEARING: 3
};

const events = {
  ADJOURNED: {
    name: 'ADJOURNED',
    index: progressBar.DWP_RESPOND,
    contentKey: 'status.adjourned'
  },
  APPEAL_RECEIVED: {
    name: 'APPEAL_RECEIVED',
    index: progressBar.APPEAL_RECEIVED,
    contentKey: 'status.appealReceived'
  },
  CLOSED: {
    name: 'CLOSED',
    index: progressBar.NONE,
    contentKey: 'status.closed'
  },
  DORMANT: {
    name: 'DORMANT',
    index: progressBar.HEARING,
    contentKey: 'status.dormant'
  },
  DWP_RESPOND: {
    name: 'DWP_RESPOND',
    index: progressBar.DWP_RESPOND,
    contentKey: 'status.dwpRespond'
  },
  DWP_RESPOND_OVERDUE: {
    name: 'DWP_RESPOND_OVERDUE',
    index: progressBar.APPEAL_RECEIVED,
    contentKey: 'status.dwpRespondOverdue'
  },
  EVIDENCE_RECEIVED: {
    name: 'EVIDENCE_RECEIVED',
    index: progressBar.NONE,
    contentKey: 'status.evidenceReceived'
  },
  HEARING: {
    name: 'HEARING',
    index: progressBar.HEARING,
    contentKey: 'status.hearing'
  },
  HEARING_BOOKED: {
    name: 'HEARING_BOOKED',
    index: progressBar.HEARING_BOOKED,
    contentKey: 'status.hearingBooked'
  },
  LAPSED_REVISED: {
    name: 'LAPSED_REVISED',
    index: progressBar.NONE,
    contentKey: 'status.lapsedRevised'
  },
  NEW_HEARING_BOOKED: {
    name: 'NEW_HEARING_BOOKED',
    index: progressBar.HEARING_BOOKED,
    contentKey: 'status.newHearingBooked'
  },
  PAST_HEARING_BOOKED: {
    name: 'PAST_HEARING_BOOKED',
    index: progressBar.DWP_RESPOND,
    contentKey: 'status.pastHearingBooked'
  },
  POSTPONED: {
    name: 'POSTPONED',
    index: progressBar.DWP_RESPOND,
    contentKey: 'status.postponed'
  },
  WITHDRAWN: {
    name: 'WITHDRAWN',
    index: progressBar.NONE,
    contentKey: 'status.withdrawn'
  }
};

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */


  var filters = {

    dateFormat: 'YYYY-MM-DDHH:mm:ss ZZ',

    json: function(obj) {
      return JSON.stringify(obj, null, 2);
    },

    formatDate: function(date) {
      return moment(date, this.dateFormat).format('DD MMMM YYYY');
    },

  }

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
