
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

exports.track = (data) => {
  return new Promise((resolve, reject) => {
    try {
      data = JSON.parse(data)
      analytics.track(data)
      return resolve({
        status: 'success',
        data
      })
    } catch(e) {
      return reject(e)
    }
  })
}

exports.page = (data) => {
  return new Promise((resolve, reject) => {
    try {
      data = JSON.parse(data)
      analytics.page(data)
      return resolve({
        status: 'success',
        data
      })
    } catch(e) {
      return reject(e)
    }
  })
}

exports.group = (data) => {
  return new Promise((resolve, reject) => {
    try {
      data = JSON.parse(data)
      analytics.group(data)
      return resolve({
        status: 'success',
        data
      })
    } catch(e) {
      return reject(e)
    }
  })
}

exports.alias = (data) => {
  return new Promise((resolve, reject) => {
    try {
      data = JSON.parse(data)
      analytics.alias(data)
      return resolve({
        status: 'success',
        data
      })
    } catch(e) {
      return reject(e)
    }
  })
}

exports.screen = (data) => {
  return new Promise((resolve, reject) => {
    try {
      data = JSON.parse(data)
      analytics.screen(data)
      return resolve({
        status: 'success',
        data
      })
    } catch(e) {
      return reject(e)
    }
  })
}
