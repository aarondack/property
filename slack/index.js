const { SlackBot } = require('bottender');
const { createServer } = require('bottender/koa');

const config = require('./bottender.config.js').slack;

const bot = new SlackBot({
  accessToken: config.accessToken,
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
