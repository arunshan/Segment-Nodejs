
var Analytics = require('analytics-node');
var analytics = new Analytics('krTRG96RHbISJ1h8N59LQj15H2INWMbM');

exports.identify = (data) => {
  return new Promise((resolve, reject) => {
    try {
      data = JSON.parse(data)
      analytics.identify(data)
      return resolve({
        status: 'success',
        data
      })
    } catch(e) {
      return reject(e)
    }
  })
}
