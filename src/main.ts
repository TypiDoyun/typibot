import { Client } from "discord.js";
import { config } from "dotenv";
import { Logger } from "./utils/logger";
import { ready } from "./handlers";

config();

console.log("Starting script...");

const client = new Client({
    intents: [
        "Guilds"
    ]
});

ready(client);

const main = async () => {
    Logger.info("Typibot is starting...".yellow);

    const start = new Date().getTime();
    await client.login(process.env.TOKEN);
    const end = new Date().getTime();

    Logger.info(`Typibot is logged in! (${end - start}ms)`.green);
}

main();