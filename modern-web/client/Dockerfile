FROM node:16.15.1

ARG node_env=production

ENV NODE_ENV $node_env

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn install --frozen-lockfile

ADD . .

ENTRYPOINT ["yarn", "start"]
