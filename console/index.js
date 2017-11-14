const { ConsoleBot } = require("bottender");
const witAPI = require("../api");

const bot = new ConsoleBot();

bot.onEvent( async context => {
  const { entities: { complaint, flight_information, flight_number } = {} } = await witAPI.query(
    context.event.text
  );

  if (complaint !== undefined && complaint[0].value === "complain") {
    await context.sendText(
      "We understand you are upset! What's your flight confirmation number?"
    );
  } else if (flight_information !== undefined && flight_information[0].value === "flight") {
    await context.sendText("Please wait while we fetch information for your flight...");
  }
  else{
    await context.sendText("Here's a list of things you can do. To start, you can say 'File a complaint'");
  }
});

bot.createRuntime();
