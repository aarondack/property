const { ConsoleBot } = require("bottender");
const witAPI = require("../api");

const bot = new ConsoleBot();

bot.onEvent(async context => {
  const { entities: { complaint } = {} } = await witAPI.query(
    context.event.text
  );

  if (complaint !== undefined && complaint[0].value === "complain") {
    await context.sendText(
      "We understand you are upset! What's your flight confirmation number?"
    );
  } else {
    await context.sendText("Here's a list of things you can do. To start, you can say 'File a complaint'""");
  }
});

bot.createRuntime();
