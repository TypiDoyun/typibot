import { Client } from "discord.js";
import { config } from "dotenv";
import { Logger } from "./utils/logger";

config();

const client = new Client({ intents: ["Guilds"] });
client.login(process.env.TOKEN);

client.on("ready", () => {
    Logger.info("");
});