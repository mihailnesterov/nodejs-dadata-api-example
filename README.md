# Backend Nodejs DaData API example
nodejs/express/router/node-fetch/cors/config/dadata-api
## API
<ol>
<li>fetch court data by code <a target="_blank" href="https://dadata.ru/api/suggest/region_court/">more...</a></li>
<li>fetch company data by inn <a target="_blank" href="https://dadata.ru/api/find-party/">more...</a></li>
</ol>

## Installation

<p>npm install</p>

or

<ol>
<li>npm init --yes</li>
<li>npm install express node-fetch cors config</li>
</ol>

## Run
node server.js

## Run PM2
pm2 start --name server-name server.js --watch
