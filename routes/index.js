const router = require('koa-router')()
const mysql = require('../db/mysql.js')

const readFile = require('../services/read_file/readFile')

router.prefix('/')

/**
 * 读取文件
 */
router.get('/readFile', async (ctx, next) => {
  ctx.body = await readFile()
})

/**
 * 根据ID获取菜单数据
 */
router.get('/queryCategory', async (ctx, next) => {
  ctx.body = await mysql.ROW('select * from link_category order by createTime')
})

/**
 * 修改类型
 */
router.post('/updateType', async (ctx, next) => {
  const param = JSON.parse(ctx.request.body)
  const paramArr = [param.id, param.name]
  const str = 'update link_category set name = ? where id = ?'
  ctx.body = await mysql.EXECUTE(str, paramArr)
})

/**
 * 添加类型
 */
router.post('/addType', async (ctx, next) => {
  const param = JSON.parse(ctx.request.body)
  const paramArr = [param.id, param.name, param.parentId]
  const str = 'insert link_category (id, name, parentId, createTime, updateTime, logicDetele) VALUES (?,?,?,now(),now(),\'1\')'
  ctx.body = await mysql.EXECUTE(str, paramArr)
})

/*-------------文章相关------------*/

/**
 * 添加文章
 */
router.post('/addContent', async (ctx, next) => {
  const param = JSON.parse(ctx.request.body)
  const paramArr = [param.id, param.title, param.subTitle, param.content, param.categoryId]
  const str = 'insert blog_artical (id, title, subTitle, content, categoryId, createTime, updateTime, author)values (?,?,?,?,?,now(),now(),\'Leo\')'
  ctx.body = await mysql.EXECUTE(str, paramArr)
})

/**
 * 修改文章
 */
router.post('/updateArticleById', async (ctx, next) => {
  const param = JSON.parse(ctx.request.body)
  const paramArr = [param.title, param.subTitle, param.content, param.id]
  const str = 'UPDATE blog_artical SET title = ?, subTitle = ? ,content = ? ,updateTime = now() WHERE id = ?'
  ctx.body = await mysql.EXECUTE(str, paramArr)
})

/**
 * 查询文章
 */
router.get('/queryArticleById', async (ctx, next) => {
  const param = ctx.request.query.id
  ctx.body = await mysql.ROW('select * from blog_artical where categoryId = ?', [param])
})

/**
 * 删除文章
 */
router.post('/deleteArticleById', async (ctx, next) => {
  const param = JSON.parse(ctx.request.body)
  const paramArr = [param.id]
  const str = 'delete from blog_artical where categoryId = ?'
  ctx.body = await mysql.EXECUTE(str, paramArr)

})

module.exports = router
