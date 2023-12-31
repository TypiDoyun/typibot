import { Client } from "discord.js";
import { Logger } from "../utils/logger";

export default (client: Client) => {
    client.on("ready", () => {
        Logger.info("Typibot is successfully started!".green);
    });
}