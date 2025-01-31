// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');

// Ruta de registro
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword
      }
    });
    res.redirect('/auth/login-page');
  } catch (error) {
    console.log(error)
    res.redirect('/auth/register-page');
  }
});

// Ruta de inicio de sesión
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login-page',
  failureFlash: true,
}));

router.get('/login-page', (req, res) => {
  res.render('login');
});

router.get('/register-page', (req, res) => {
  res.render('register');
});

module.exports = router;