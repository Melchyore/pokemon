module.exports = (req, res, next) => {
  if (req.session.authenticated && req.session.user.rank === 2) {
    return next()
  }

  return res.notFound()
}
