//引入模块
const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

//koa模块new一个Router实例对象，创建路由
let router = new Router();

//引入页面路由
const loginRouter = require('./login');
const adduserRouter = require('./adduser');

//koaBody中间件，设置配置
router.use(koaBody({
    // 支持formdata
    multipart:true,

    // 文件支持
    formidable:{
        // 指定保存路径
        uploadDir:'./uploads',
        keepExtensions:true,
        // 改文件名
        onFileBegin(filename,file){
            // filename: 上传文件的原始名
            // file:文件信息对象
            //   * path:

            // file.path = './uploads/'+filename
        }
    }
}));


router.use('/registry',registryRouter.routes())
router.use('/login',loginRouter.routes())

module.exports = router;