# Modern Web CTF - Backend

## Deploy/Run

### Local

Deploying locally is easier, since you don't need an AWS account.

```sh
docker build -t modern-web-ctf-api .
docker run -it --rm -p 3009:3009 modern-web-ctf-api
```

or

```sh
nvm install $(cat .nvmrc) && nvm use  # Switch to the project Node/NPM version
npm install -g yarn
yarn set version 3.2.1
yarn install --frozen-lockfile
yarn run-local
```

### AWS

Configure your shell to access AWS. See [Environment variables to configure the
AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html).

```sh
yarn deploy
```

## Test

Basic check after deploying:

### Local

```sh
$ curl --data '{"test": "data"}' http://localhost:3009/dev/ctf
{"email_signature":"<p><b>Agile Digital | undefined</b><br/>Love Your Software&#8482; | ABN 98 106 361 273<br/>p: <a href=\"tel:+611300858277\">1300 858 277</a> | m: <a href=\"tel:undefined\">undefined</a> | w: <a href=\"https://agiledigital.com.au\">agiledigital.com.au</a></p>","test":"data"}
```
 
### AWS

```sh
$ curl --data '{"test": "data"}' \
  https://[your API Gateway ID].execute-api.ap-southeast-2.amazonaws.com/dev/ctf
{"email_signature":"<p><b>Agile Digital | undefined</b><br/>Love Your Software&#8482; | ABN 98 106 361 273<br/>p: <a href=\"tel:+611300858277\">1300 858 277</a> | m: <a href=\"tel:undefined\">undefined</a> | w: <a href=\"https://agiledigital.com.au\">agiledigital.com.au</a></p>","test":"data"}
```
