module.exports = {
  host: 'localhost',
  // host: '47.98.113.53',          //连接数据库所在的主机名. (默认: localhost)
  port: '3306',               //连接端口. (默认: 3306)
  //localAddress: '',            //用于TCP连接的IP地址. (可选)
  //socketPath: '',              //链接到unix域的路径。在使用host和port时该参数会被忽略.
  user: 'root',               //MySQL用户的用户名.
  password: 'Dev@123456',     //MySQL用户的密码.
  database: 'Blog',           //链接到的数据库名称 (可选).
  charset: 'UTF8MB4_GENERAL_CI', //连接的字符集. (默认: 'UTF8_GENERAL_CI'.设置该值要使用大写!)
  // timezone: '',               //储存本地时间的时区. (默认: 'local')
  // stringifyObjects: '',       //是否序列化对象. See issue #501. (默认: 'false')
  // insecureAuth: '',           //是否允许旧的身份验证方法连接到数据库实例. (默认: false)
  // typeCast: '',               //确定是否讲column值转换为本地JavaScript类型列值. (默认: true)
  // queryFormat: '',            //自定义的查询语句格式化函数.
  // supportBigNumbers: '',      //数据库处理大数字(长整型和含小数),时应该启用 (默认: false).
  // bigNumberStrings: '',       //启用 supportBigNumbers和bigNumberStrings 并强制这些数字以字符串的方式返回(默认: false).
  // dateStrings: '',            //强制日期类型(TIMESTAMP, DATETIME, DATE)以字符串返回，而不是一javascript Date对象返回. (默认: false)
  // debug: '',                  //是否开启调试. (默认: false)
  multipleStatements: 'true', //是否允许在一个query中传递多个查询语句. (Default: false)
  //flags: '',                   //链接标志.
  // acquireTimeout: '',         //（获取超时时间）获取连接时，触发连接超时之前的毫秒数。这与connectTimeout略有不同，因为从连接池获取连接并不总会创建连接 （默认值：10000）
  // waitForConnections: '',     //(连接等待时间）当无连接可用或连接数达到上限的时候，判定连接池动作。如果为true，连接池会将请求加入队列，待可用之时再触发操作；如为false，连接池将立即返回错误 （默认值：true)
  // connectionLimit: '',        //(连接数限制)所允许立即创建的最大连接数量 (默认值: 10)
  // queueLimit: ''              //（队列数量限制）在调用getConnection返回错误之前，连接池所允许入队列的最大请求数量。如设置为0， 则不限制。 (默认值: 0)
}