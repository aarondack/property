const { ConsoleBot } = require("bottender");
const witAPI = require("../api");

const bot = new ConsoleBot();

bot.onEvent(async context => {
  const { entities: { intent } = {} } = await witAPI.query(context.event.text);

  if (intent !== undefined && intent[0].value === "complain") {
    await context.sendText(
      "We understand you are upset! What's your flight confirmation number?"
    );
  } else {
    await context.sendText("Keep it on topic!");
  }
});

bot.createRuntime();
