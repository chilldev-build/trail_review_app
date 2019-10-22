var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', (req, res, next) => {
  res.render('template', {
    locals: {
      title: "Login"
    },
    partials: {
      partial: 'partial-login'
    }
  });
});

router.get('/signup', (req, res, next) => {
  res.render('template', {
    locals: {
      title: "Sign Up"
    },
    partials: {
      partial: 'partial-signup'
    }
  });
});

router.post('/signup', async (req, res, next) => {
  console.log(req.body);
  res.send(200).redirect('/');
})

router.post('/login', async (req, res, next) => {
  console.log(req.body);
  res.send(200).redirect('/');
})

module.exports = router;
