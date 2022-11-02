import { Client } from "discord.js";
import 'dotenv/config';

async function main () {
    const client = new Client({intents: ["Guilds"]});

    await client.login(process.env.BOT_TOKEN);
    await client.once("ready", (c) => {
        console.log(`[🤖] Bot is ready, logged in as ${c.user.tag}`)
    })
}

main().catch(console.error)