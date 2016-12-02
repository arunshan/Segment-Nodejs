exports.identify = (req, res, next) => {
  res.json({
    segment: 'nodejs'
  })
}
