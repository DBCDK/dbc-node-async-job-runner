'use strict';

const koa = require('koa');
const app = koa();
const PORT = process.env.PORT || 1234;

app.use(function *() {
  this.body = 'Hello World!';
});

app.listen(PORT, () => {
  console.log(`Started listening on ${PORT}`);
});
