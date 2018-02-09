'use strict';

import Koa from 'koa';
import Router from 'koa-router';
import serve from './util/koa-static-module';

import api from './api';

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  try {
    await next()
    console.log(`${ctx.method} ${ctx.url}`)
  } catch (err) {
    ctx.body = err.message
    ctx.status = err.status || 500
    console.error(err.message)
  }
})

router.use( '/api', api.routes() );
app.use( router.routes() );

app.use( serve('./public') );

app.listen(3000)
