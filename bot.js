import { config } from "dotenv";
import { Octokit } from "@octokit/rest";

// Load environment variables from .env file
config();

// Check if the GitHub token is provided
if (!process.env.GITHUB_TOKEN) {
  console.error(
    "Error: GitHub token not found. Please add your GitHub token to the .env file."
  );
  console.error("Example .env file:");
  console.error("GITHUB_TOKEN=your_github_token_here");
  process.exit(1); // Exit the script with an error code
}

// Initialize Octokit with the GitHub token from environment variables
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// Utility function to pause execution for a specified time
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function followRandomUsers() {
  try {
    // Fetch a page of users (simulate randomness with a random page number)
    const pageNumber = Math.floor(Math.random() * 100) + 1; // Example: random page between 1 and 100
    const { data } = await octokit.users.list({
      since: pageNumber * 100,
      per_page: 30, // Number of users per page
    });

    for (const user of data) {
      try {
        // Follow the user
        await octokit.users.follow({
          username: user.login,
        });
        console.log(`Followed ${user.login}`);

        // Wait for 2 sec before following the next user
        await sleep(2000); // 2000 ms = 2 sec
      } catch (error) {
        console.error(`Failed to follow ${user.login}: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`Error fetching users: ${error.message}`);
  }
}

followRandomUsers();
