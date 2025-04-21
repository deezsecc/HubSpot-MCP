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
