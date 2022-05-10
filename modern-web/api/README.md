# Modern Web CTF - Backend

## Install

```sh
nvm install $(cat .nvmrc) && nvm use  # Switch to the project Node/NPM version
npm install -g yarn
yarn install
```

## Deploy

TODO: Add Serverless Offline so you don't need an AWS account.

Configure your shell to access AWS. See [Environment variables to configure the
AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html).

```sh
yarn run deploy
```

## Test

Basic check after deploying:
 
```sh
$ curl --data '{"test": "data"}' \
  https://[your API Gateway ID].execute-api.ap-southeast-2.amazonaws.com/dev/ctf
{"email_signature":"<p><b>Agile Digital | undefined</b><br/>Love Your Software&#8482; | ABN 98 106 361 273<br/>p: <a href=\"tel:+611300858277\">1300 858 277</a> | m: <a href=\"tel:undefined\">undefined</a> | w: <a href=\"https://agiledigital.com.au\">agiledigital.com.au</a></p>","test":"data"}
```