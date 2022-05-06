# Modern Web CTF - Backend

TODO

## Install

```sh
nvm install $(cat .nvmrc) && nvm use  # Switch to the project Node/NPM version
npm install -g yarn
yarn install
```

## Deploy

See `serverless.yml` for the environment variables for this command.

```sh
yarn run deploy
```

## Test

 Basic check after deploying:
 
```sh
$ curl --data '{"test": "data"}' \
  https://[your API Gateway ID].execute-api.ap-southeast-2.amazonaws.com/dev/ctf
{"test":"data"}
```