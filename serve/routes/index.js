var express = require('express');
var router = express.Router();
const jwtAuth = require('../jwt/index');
const loginRouter = require('./login');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.use('/login', loginRouter);
// router.use(jwtAuth); // 路由拦截，判断token 授权
module.exports = router;