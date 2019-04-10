const config = require('../config/mysql-config'); // 引入mysql配置文件
const mysql = require('mysql'); 

/* 
*   对mysql操作的工具类，包含连接，断开，及增删改查
*
*/
class mysqlOperate {
    constructor(){
        this.connection = mysql.createConnection(config);
    }
    // 连接
    connect() {
        console.log('mysql connected')
        return this.connection.connect();
    }
    // 关闭
    close() {
        console.log('mysql closed');
        return this.connection.end();
    }
    // 增
    add(sql) {

    }
    // 删
    del(sql) {

    }
    // 改
    update(sql) {

    }
    // 查
   query(sql,fn){
       return this.connection.query(sql,fn)
   }
}
module.exports = mysqlOperate;