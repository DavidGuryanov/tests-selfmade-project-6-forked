#!/bin/bash

cd tests-selfmade-project-6-public/
npm i
npm i -g wait-port http-server
http-server ../ -p 3000 & wait-port -t 30000 localhost:3000
node ./src/index.js ../
