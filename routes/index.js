const router = require('koa-router')();
const mysql = require('../db/mysql.js');

//引入文件读取
const readFile = require('../services/read_file/readFile');

router.prefix('/');

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
});

router.get('/readFile', async (ctx, next) => {
    /*ctx.body = {
        content: await readFile()
    }*/
    ctx.body=await readFile();
});

router.get('/dbtest', async (ctx, next) => {
    ctx.body = {
        content: await mysql.ROW('select * from `node_user` where `name` = ? and `age` = ?', ['李小二', 65])
    }
});

module.exports = router;
