# Backend Nodejs DaData API example
    nodejs/express/router/node-fetch/cors/config/dadata-api

## Installation

    npm install

or

    npm init --yes
    npm install express node-fetch cors config

## API
1. [Get DaData API Key](https://dadata.ru/api/ "DaData API")
2. Edit <b>"config/your_config_file.json"</b>
3. Add your <b>DaData API Key</b> in <b>"token"</b> param

## API routes:
1. Fetch court by code <b>/api/court/code</b>
2. Fetch company by inn <b>/api/company/inn</b>

## API examples:
* http://localhost:5033/api/company/7706413348
* http://localhost:5033/api/court/52MS0022

## Run
    node server.js

## Run PM2
    pm2 start --name server-name server.js --watch