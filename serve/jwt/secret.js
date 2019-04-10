const crypto = require('crypto'); // 引入加密包
module.exports = {
    MD5_SUFFIX: '测试值hjg',
    md5: (obj) => {
        let md5 = crypto.createHash('md5');
        return md5.update(obj).digest('hex');
    },
    secretKey: 'hjg_95_95_jwt'
}