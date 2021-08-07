# Backend Nodejs DaData API example
nodejs/express/router/node-fetch/cors/config/dadata-api

## Installation

<p>npm install</p>

or

<ol>
<li>npm init --yes</li>
<li>npm install express node-fetch cors config</li>
</ol>

## API
<ol>
<li><a href="https://dadata.ru/api/">Get DaData API Key</a></li>
<li>Edit <b>"config/your_config_file.json"</b></li>
<li>Add your <b>DaData API Key</b> in <b>"token"</b> param</li>
<li>Fetch court by code <b>/api/court/code</b></li>
<li>Fetch company by inn <b>/api/company/inn</b></li>
</ol>

## Run
node server.js

## Run PM2
pm2 start --name server-name server.js --watch

## Use API Examples:
<p>http://localhost:5033/api/company/7706413348</p>
<p>http://localhost:5033/api/court/52MS0022</p>