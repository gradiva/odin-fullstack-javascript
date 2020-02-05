const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const Cors = require('@koa/cors');
const BodyParser = require('koa-bodyparser');
const Helmet = require('koa-helmet');
const respond = require('koa-respond');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

app.use(Helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(Logger());
}

app.use(Cors());
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}))

app.use(respond());

// API routes
require('./routes')(router);
app.use(router.routes());
app.use(router.allowedMethods());

app.use(require('koa-static')('./build'));

// Koa code
const dev_db_url = 'mongodb+srv://todoListUser:bX1VuZTs8lUm2dyW@todocluster-kjydf.mongodb.net/todo_list?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
