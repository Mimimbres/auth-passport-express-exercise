function isAuthenticated(req, res, next) {
    if (req.user) {
      return next();
    }
  
    res.redirect('api/auth/login-page');
  }
  
  module.exports = isAuthenticated;