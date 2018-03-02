

const Koa = require('koa');
const Router = require('koa-router');
const staticServer = require('koa-static');
const fs = require('fs');
const request = require('superagent');


const app = new Koa();
const router = new Router();
var path = require('path');

app.use(staticServer(path.join(__dirname, '../dist')));


router.get('/', function (ctx, next) {
    ctx.body = '123';
});
// 还要优化很久哈哈，慢慢做吧！
router.get('/v2/*', async(ctx, next) => {
    // 处理代理数据

    const method = ctx.request.method.toLowerCase();
    const originalUrl = ctx.request.originalUrl;
    // if (method === 'post' || method === 'put') {
    //     sreq.set('Content-Type', 'application/x-www-form-urlencoded')
    //         .send(ctx.request.body);
    //     const data = await request[method]('https://api.douban.com' + originalUrl);
    // }

    // 数据签名

    //如果为 post 或者 put 则需要发送时传递body
    if (method === 'post' || method === 'put') {
        const data  = await request[method]('https://api.douban.com' + originalUrl).set('Content-Type', 'application/json');
        ctx.body = data.body;

    }else{
        const data  = await request[method]('https://api.douban.com' + originalUrl);
        ctx.body = data.body;
    }

});

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(8002);
