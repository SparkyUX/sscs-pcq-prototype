// Use this file to change prototype configuration.

function stringToBool(s) {
  if (s === undefined) return false;

  switch (s.toLowerCase()) {
    case 'true':
    case 'yes':
      return true;
    case 'false':
    case 'no':
      return false;
    default:
      return false;
  }
}

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {

  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Appeal a benefit decision',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Force HTTP to redirect to HTTPs on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#" title="Find out more about cookies">Find out more about cookies</a>',

  caseEndpoint: (process.env.SSCS_API_URL || 'http://localhost:8080') + '/track-my-appeal',

  hearingDetailsEndpoint: 'http://localhost:8080/hearing-details',

  mockData: !stringToBool(process.env.SSCS_USE_API),

  statusMap: {
    appeal: 0,
    dwprespond: 1,
    hearingbooked: 2,
    hearing: 3
  }

};
