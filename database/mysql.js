const mysql = require('mysql')
const Sequelize = require('sequelize')



const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '451000',
    database: 'ncov'
})
/**
 * 链接数据库并执行语句
 * @param {*} sql 数据库语句
 * @param {*} callback 回调函数
 */
const query = (sql, callback) => {
    if (sql.indexOf("undefined") !== -1){
        console.error(sql);
    }
    pool.getConnection((err,connection)=>{
        connection.query(sql,(err,rows)=>{
            callback(err,rows)
            connection.release()
        })
    })
}

exports.query = query