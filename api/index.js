const got = require("got");
const env = require('dotenv').config();

let witurl = 'https://api.wit.ai/message?v=20171108&q='
let witsponse;

function chgMessage(chatText) {
  // get text from console to send to api
};

got(witurl).then((response) => {witsponse = response.body});
