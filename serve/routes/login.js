var express = require('express');
var router = express.Router();
var Sql = require('../tools/mysql.class'); // sql 工具类
/* var { MD5_SUFFIX, md5, secretKey } = require('../jwt/secret');  //  引入加密后缀，算法，密匙
var jwt = require('jsonwebtoken'); */
const sql = new Sql();
router.post('/', function (req, res, next) {
    console.log('login')
    // 获取参数
    const query = req.body;
    console.log(query)

    if (Object.keys(query).some(i => query[i] === '')) return res.send({
        code: '1003',
        msg: '请完善登陆信息'
    });
    const querySql = query['select'] == '0' ? `SELECT * FROM users WHERE id = ${query['username']}` : `SELECT * FROM users_m WHERE id = ${query['username']}`;
    console.log(querySql)
  try{
    sql.query(querySql, function (err, result) {
        if (err) return res.send({
            code: 1002,
            msg: '用户不存在'
        });
        if (result[0].pwd == query['password']) { // 验证通过
            return res.send(JSON.stringify({
                code: '1000',
                msg: '验证成功',
                data: query
            }));
        }
        return res.send(JSON.stringify({
            code: '1001',
            msg: '密码错误'
        }));
    });
  } catch{
      return;
  }
});
router.get('/', (req, res, next) => {
    res.send('sss')
})


module.exports = router;