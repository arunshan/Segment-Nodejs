
exports.home = (req, res, next) => {
  res.render('index', {title: 'Segment Nodejs'})
}

const lib = require('../lib')

exports.raw = (req, res, next) => {
  const json = req.body.json
  console.log('the json is ', json)
  res.json({
    status: 'success'
  })
}

exports.identify = (req, res, next) => {
  const data = req.body.json
  lib.identify(data)
    .then(data => {
      res.json({
        status: 'success',
        message: data
      })
    })
    .catch(err => {
      res.json({
        status: 'error',
        message: err
      })
    })
}
