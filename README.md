# sitemap-audit

This codebase recursively extracts URLs from a given XML sitemap URL, then prints the GET request status for each URL to the console in a formatted table.

## Project setup

1. Install Dependencies with **`npm ci`**.

2. Set Environment Variables:
    - Copy/paste the contents of [`.env-example`](./.env-example './.env-example') into a new `.env` file in the project root.
    - **Do not commit the `.env` file!**
        | Environment Variable | Is Required? | Notes |
        | --- | --- | --- |
        | `SITEMAP_URL` | Yes | The XML sitemap URL to recursively extract URLs from |
        | `TARGET_BASE_URL` | No | An optional base URL used to replace the base URL in extracted URLs (a dev environment for example) |
        | `URL_COUNT_THRESHOLD` | Yes | An integer string setting the threshold number of URLs to check |

3. Run the code with **`npm start`**.

> **Note**
> The larger the `URL_COUNT_THRESHOLD` value is, the longer it will take to complete. A large value will likely crash the program.
