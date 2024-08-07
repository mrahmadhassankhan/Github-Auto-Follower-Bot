# GitHub Auto Follower Bot

This project is a GitHub bot that automatically follows random users on GitHub. The bot is built using Node.js and the Octokit library to interact with the GitHub API.

## Getting Started

### 1. Clone the repo
```sh
git clone https://github.com/mrahmadhassankhan/Github-Auto-Follower-Bot/
```
### 2. Install Dependencies

```sh
npm install
```
### 3. Generate a Github Token and make sure your GitHub token has the `user:follow` scope to allow the bot to follow users on your behalf.
```sh
Visit https://github.com/settings/tokens to generate 

```
### 4. Configure Environment Variables

Create a `.env` file in the root of the project and add your GitHub token:

```sh
GITHUB_TOKEN=your_github_token_here
```

### 3. Run the Bot

```sh
node bot.js
```

## Usage

The bot will fetch a list of random users from GitHub and follow them with a delay between each follow to avoid hitting rate limits. The delay is set to 1 minute by default.

## Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request.

## Note

- Make sure your GitHub token has the `user:follow` scope to allow the bot to follow users on your behalf.
- Be mindful of GitHub's rate limits and terms of service when using this bot.

## Dependencies

- [@octokit/rest](https://www.npmjs.com/package/@octokit/rest): GitHub REST API client for Node.js
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file

## License

This project is licensed under the MIT License.


