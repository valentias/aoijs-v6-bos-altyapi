const { AoiClient, Util, loadCommands } = require("aoi.js");
const { setup } = require("aoi.parser");
setup(Util);
const settings = require("./src/setting/setting.json")

const client = new AoiClient({
  token: process.env.token,
  prefix: ["!","?","."],
  intents: ["MessageContent","Guilds","GuildMessages"],
  events: ["onMessage","onInteractionCreate"]
});

client.loadCommands("./src/commands/", true);

client.command({
  name: "ping",
  code: `Pong! $pingms`,
});

client.status({
  name: "Valentia & Lyrox Was Here!",
  type: "PLAYING",
  status: "dnd",
  time: 12
});
