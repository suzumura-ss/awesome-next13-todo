#!/bin/sh
export NODE_ENV=production
sleep 10
yarn db:init
yarn start --port 80
