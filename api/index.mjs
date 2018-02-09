'use strict';

import Router from 'koa-router';

import authentication from './authentication.mjs';

const router = new Router();


export default class {
  static routes() {
    authentication(router);
    return router.routes();
  }
}
