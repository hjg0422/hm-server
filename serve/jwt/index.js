const expressJwt = require('express-jwt');
// const jwt = require('jsonwebtoken');
const { secretKey } = require('./secret');

//请求中间件，请求拦截

const jwtAuth = expressJwt({
    secret: secretKey,
    credentialsRequired: true //  false: 不需要拦截验证token（游客）可以访问
}).unless({
    path: ['/app/login'] // 除了制定path内的路径外都需呀拦截验证token的有效性
});

module.exports = jwtAuth;
