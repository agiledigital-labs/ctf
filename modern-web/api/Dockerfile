FROM node:16.15.1

ARG node_env=production

ENV NODE_ENV $node_env

WORKDIR /app

ADD package.json .
ADD .yarnrc.yml .
ADD .yarn ./.yarn
ADD yarn.lock .
RUN yarn set version 3.2.1 && yarn install --frozen-lockfile

ADD . .

ENTRYPOINT ["yarn", "run-local"]

