const got = require("got");
const env = require("dotenv").config();

const witAPI = {
  async query(message) {
    const { body } = await got(`${process.env.WIT_API}&q=${message}`, {
      headers: {
        Authorization: `Bearer ${process.env.WIT_API_TOKEN}`
      },
      json: true
    });
    return body;
  }
};

module.exports = witAPI;
