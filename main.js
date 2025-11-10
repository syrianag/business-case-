import OpenAI from 'openai';
import * as dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Get the API key from the environment variable
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey || apiKey === "sk-your_api_key_here") {
    console.error("Error: OPENAI_API_KEY is not set or is still the placeholder.");
    console.error("Please add your OpenAI API key to the .env file.");
    process.exit(1); // Exit the script if the key is invalid
}

// Initialize the OpenAI client
const openai = new OpenAI({ apiKey });

async function main() {
    try {
        console.log("Successfully initialized OpenAI client. Making a test call...");

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Hello, world!' }],
            model: 'gpt-3.5-turbo',
        });

        console.log("API call successful! Response:");
        console.log(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}

main();