var express = require('express');
var router = express.Router();
var user = require('../service/user')
var jwt = require('jsonwebtoken')
var fs = require('fs')
/**
 * 管理员登录接口
 */
router.post('/login', function (req, res, next) {
    // var { userName, password } = req.query
    var userName = req.body.userName
    var password = req.body.password
    var lastLoginTime = req.body.lastLoginTime
    user.getUserInfo('userName', userName).then(res0 => {
        if (res0.length === 0) {
            // res.status(601)
            res.json({
                code: 602,
                msg: '用户不存在'
            })
            res.end()
            return;
        }
        if (res0[0].password === password) {
            res0[0].lastLoginTime = lastLoginTime
            let content = {
                userName: res0[0].userName,
                password: res0[0].password,
                lastLoginTime: res0[0].lastLoginTime
            }
            // 获取当前时间，单位是秒，作为token的创建时间
            let createdTime = Math.floor(Date.now() / 1000)
            var secret = 'nCoV-2019-WuHan'
            let token = jwt.sign(content, secret, {
                expiresIn: '24h',
                issuer: 'tanknee'
            });
            res0[0].token = token
            user.updateUserInfo(res0[0])
            res.status(200)
            res.json({
                code: 200,
                msg: '登陆成功',
                userInfo: res0[0]
            })
            res.end()
        } else {
            // res.status(601)
            res.json({
                code: 601,
                msg: '密码错误'
            })
            res.end()
        }
    }).catch(err => {
        res.send(err)
        res.end()
    })
});
/**
 * 获取用户信息接口
 */
router.post('/getUserInfo', function (req, res, next) {
    var token = req.headers.token
    var id = req.body.id;
    user.getUserInfo('id', id).then(res0 => {
        jwt.verify(token, 'nCoV-2019-WuHan', (err, data) => {
            if (!err) {
                if (Math.floor(Date.now() / 1000) < data.exp) {
                    console.log(data)
                    res.json({
                        code: 200,
                        msg: '获取成功',
                        userInfo: res0[0]
                    })
                    res.end()
                } else {
                    res.status(603)
                    res.json({
                        code: 603,
                        msg: 'token已过期',
                    })
                    res.end()
                }
            } else {
                res.status(604)
                res.json({
                    code: 604,
                    msg: 'token揭秘错误',
                    err: err
                })
                res.end()
            }
        })

    }).catch(err => {
        res.status(600)
        res.json({
            code: 600,
            msg: `提交信息有误${err}`,
        })
        res.end()
    })
})
module.exports = router;
