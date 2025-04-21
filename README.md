# Hubspot-MCP 🤖
Documentation for Streamlining the process of Integrating existing MCP server into a Hubspot Database

# MCP Server Capabilities
## Core Functionality

| Feature                                                | Supported | Notes               |
|--------------------------------------------------------|-----------|----------------------|
| Create new companies                                   | ✅        |                      |
| Prevent duplicate companies                            | ✅        | Good validation      |
| Accepts Unicode characters in descriptions             | ✅        | Includes emojis      |
| Handles special characters in text fields              | ✅        |                      |


## Supported Fields 

### Basic Information

| Category    | Field       | Supported | Notes    |
|-------------|-------------|-----------|----------|
| Basic Info  | name        | ✅        | Required |
|             | description | ✅        |          |
|             | phone       | ✅        |          |
|             | website     | ✅        |          |
|             | domain      | ✅        |          |

### Location Information

| Category      | Field   | Supported | Notes |
|---------------|---------|-----------|-------|
| Location Info | address | ✅        |       |
|               | city    | ✅        |       |
|               | state   | ✅        |       |
|               | zip     | ✅        |       |
|               | country | ✅        |       |


## Company Details

| Category        | Field             | Supported | Notes                        |
|-----------------|-------------------|-----------|------------------------------|
| Company Details | industry          | ✅        | Must be from predefined list |
|                 | type              | ✅        | Must be from predefined list |
|                 | numberofemployees | ✅        | Accepts large numbers        |
|                 | annualrevenue     | ✅        | Accepts large numbers        |


## Automatic Field Generation 

| Field                                       | Supported | Notes                    |
|--------------------------------------------|-----------|--------------------------|
| hs_object_id                               | ✅        |                          |
| createdate                                 | ✅        |                          |
| hs_lastmodifieddate                        | ✅        |                          |
| lifecyclestage                             | ✅        | Defaults to 'lead'       |
| hs_annual_revenue_currency_code            | ✅        | Defaults to 'USD'        |
| Tracking fields (e.g., hs_num_blockers...) | ✅        | Various system-generated |


## Data Validation

| Validation Type                            | Supported | Notes                    |
|--------------------------------------------|-----------|--------------------------|
| Enforces unique company names              | ✅        |                          |
| Validates industry values                  | ✅        | Against predefined list  |
| Validates company type                     | ✅        | Against predefined list  |
| Accepts large numbers                      | ✅        | For numerical fields     |
| Accepts international phone number formats | ✅        |                          |
| Accepts custom domain formats              | ✅        |                          |


## Response Data

| Response Element                | Supported |
|--------------------------------|-----------|
| Comprehensive creation details | ✅        |       
| Timestamps                     | ✅        |      
| System-generated IDs           | ✅        |     
| All processed properties       | ✅        |    

# Pre-requisites 
- Hubspot access token containing required read/write permissions on a private app.
- Cursor Application to access the MCP server and talk with LLM.

# Setting up Hubspot
1. Go to [Hubspot](https://www.hubspot.com/) and make an account.
2. In Hubspot, Open `Settings > Integrations > Create private app`.
3. Provide the Basic Information of the private app.
4. In scopes, click `Add new scope` make sure the following are selected:
- `crm.objects.contacts` (read and write)
- `crm.objects.companies` (read and write)
5. After the scopes are added, click `Create app`.
6. Again open `Private apps` and view access token. Save it in a secure place. We will use it in the MCP Integration.

# Setting up Cursor
1. Download [Cursor](https://www.cursor.com/) and setup the project folder.
2. Go to `settings > MCP > add new global MCP Server`
3. Paste the following in it, and make sure to include your `Hubspot Access token`:
   
```
{
  "mcpServers": {
    "hubspot": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "buryhuang/mcp-hubspot:latest",
        "--access-token",
        "<Your Access Token here>"
      ]
    }
  }
}
```
# Access Check
We can use the below prompts to check if everything went well or failed.
### Check the Access Token Validity
```
Test if the current access token is valid by making a minimal authenticated request to the HubSpot MCP Server.
```
### Input Test Data to check
```
Create a Company with the following data:
name: Nimbus Technologies
description: Cloud infrastructure & AI services ☁️🤖
domain: nimbustech.ai
phone: +1-800-555-0199
website: https://www.nimbustech.ai
address: 123 Innovation Way
city: San Francisco
state: CA
zip: 94107
country: USA
industry: INFORMATION_TECHNOLOGY_AND_SERVICES # Not "Information Technology"
type: PROSPECT
numberofemployees: 4200
annualrevenue: 125000000
```
### The values will reflect in our Hubspot database.
![Img](https://i.ibb.co/LhXn2CyM/nimbustech.png)

# Credits
- Big thanks to [baryhuang](https://github.com/baryhuang) for creating the docker integration.
- The original Hubspot CRM - MCP Server is done by [peakmojo](https://github.com/peakmojo). 
