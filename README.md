# HubSpot MCP Server

## Overview
This is a powerful Model Context Protocol (MCP) server implementation for seamless HubSpot CRM integration, enabling AI assistants to interact with your HubSpot data.

The server includes a set of tools for interacting with HubSpot CRM API, such as creating and managing contacts, companies, retrieving company activity history, and more.

## New Features
- **Authentication Server**: Added a custom authentication server to verify API keys for secure access to the MCP server.
  
## Features
- **Seamless AI Integration**: Connect your AI assistants directly to your HubSpot CRM data.
- **Simplified CRM Operations**: Perform common HubSpot tasks through natural language commands.
- **Real-time Data Access**: Get up-to-date information from your HubSpot instance.
- **Secure Authentication**: Uses HubSpot's secure API token authentication along with a custom authentication server.
- **Extensible Design**: Easily add more HubSpot API capabilities as needed.

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/deezsecc/HubSpot-MCP.git
    cd HubSpot-MCP
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Build the project:
    ```
    npm run build
    ```

## Configuration

The server requires a HubSpot API access token. You can obtain one by:

- Going to your HubSpot Developer Account.
- Creating a private app with the necessary scopes (contacts, companies, engagements).
- Copying the generated access token.

You can provide the token in two ways:

- As an environment variable:

    ```
    HUBSPOT_ACCESS_TOKEN=your-access-token
    ```

- As a command-line argument:

    ```
    npm start -- --access-token=your-access-token
    ```

For development, create a `.env` file in the project root to store your environment variables:
```
touch .env
```
```
HUBSPOT_ACCESS_TOKEN=your-access-token
```
and save that `.env` file.
Run the following if you'd like to directly pass it into CLI.
   ```
   npm start -- --access-token=your-access-token
```
## Auth-Server
Once the Hubspot server is up, we can check it's status by using a local authentication server using `Express.js`.
The Auth server is used to authenticate the API key which is being feeded into the endpoint.
1. Make sure you have an environment variable set for the valid API key, paste the following in .env of Auth-server:
    ```
    VALID_API_KEY=your-valid-api-key
    PORT=8080
    ```

2. Start the authentication server:
    ```
    node auth-server.js
    ```

   This will start the server on port `8080` by default, and you can verify API keys by sending GET requests to `http://localhost:8080/verify?apiKey=your-api-key`.

3. The server checks the provided API key against the value stored in the `VALID_API_KEY` environment variable. If the key is valid, the server will return a `200 OK` response with a message `API key is valid`. Otherwise, it will return a `401 Unauthorized` error with a message `Invalid API key`.

### Example of Authentication Check

You can check if your API key is valid by sending a request to the `/verify` route:

```
curl "http://localhost:3000/verify?apiKey=your-api-key"
curl "http://localhost:8080/verify?apiKey=your-api-key"
```
I haven't yet added the LLM Integration, I will update here once I'm done with it.
## Thanks

Special thanks to [lkm1developer](https://github.com/lkm1developer/hubspot-mcp-server) for the initial implementation of the HubSpot MCP Server. 
