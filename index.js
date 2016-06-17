'use strict';

const koa = require('koa');
const app = koa();
const PORT = 1234;

app.use(function *() {
  this.body = 'Hello Automated World!';
});

app.listen(PORT, () => {
  console.log(`Started listening on ${PORT}`);
});

app.listen(PORT + 1, () => {
  console.log(`Started listening on ${PORT + 1}`);
});
