# Backend Nodejs DaData API example
    nodejs/express/router/node-fetch/cors/config/dadata-api

## Installation

    npm install

or

    npm init --yes
    npm install express node-fetch cors config

## API
<ol>
<li>[Get DaData API Key](https://dadata.ru/api/ "DaData API")</li>
<li>Edit <b>"config/your_config_file.json"</b></li>
<li>Add your <b>DaData API Key</b> in <b>"token"</b> param</li>
<li>Fetch court by code <b>/api/court/code</b></li>
<li>Fetch company by inn <b>/api/company/inn</b></li>
</ol>

## API examples:
    http://localhost:5033/api/company/7706413348
    http://localhost:5033/api/court/52MS0022

## Run
    node server.js

## Run PM2
    pm2 start --name server-name server.js --watch