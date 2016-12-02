
exports.home = (req, res, next) => {
  res.render('index', {title: 'Segment Nodejs'})
}

const lib = require('../lib')

exports.raw = (req, res, next) => {
  const json = JSON.parse(req.body.json)
  switch (json.type) {
    case 'identify':
      lib.identify(req.body.json)
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
      return
    case 'track':
      lib.track(req.body.json)
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
      return
    case 'page':
      lib.page(req.body.json)
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
      return
    case 'group':
      lib.group(req.body.json)
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
      return
    case 'alias':
      lib.alias(req.body.json)
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
      return
    case 'screen':
      lib.screen(req.body.json)
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
      return
    default:
      res.json({
        status: 'error',
        message: 'Type not found. Please enter a valid type.'
      })
  }
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

exports.track = (req, res, next) => {
  const data = req.body.json
  lib.track(data)
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

exports.page = (req, res, next) => {
  const data = req.body.json
  lib.page(data)
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

exports.group = (req, res, next) => {
  const data = req.body.json
  lib.group(data)
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

exports.alias = (req, res, next) => {
  const data = req.body.json
  lib.alias(data)
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

exports.screen = (req, res, next) => {
  const data = req.body.json
  lib.screen(data)
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
