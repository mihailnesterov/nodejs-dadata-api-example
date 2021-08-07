# Backend Nodejs DaData API example
    nodejs/express/router/node-fetch/cors/config/dadata-api

## Installation

    npm install

or

    npm init --yes
    npm install express node-fetch cors config

## Config
1. [Get DaData API Key](https://dadata.ru/api/ "DaData API")
2. Rename <b>"config/example.json"</b> to <b>"config/default.json"</b>
2. Edit <b>"config/default.json"</b>
3. Add your <b>DaData API Key</b> in <b>"token"</b> param

## API
1. Court by code <b>/api/court/code</b>
2. Company by INN <b>/api/company/inn</b>

## Run
    node server.js

## Run PM2
    pm2 start --name server-name server.js --watch

## Examples
* http://localhost:5033/api/company/7706413348
* http://localhost:5033/api/court/52MS0022