FROM node:10-alpine as builder

COPY package.json /cron/package.json

WORKDIR /cron

RUN yarn

COPY . /cron

RUN npm run build:prod

ENTRYPOINT ["npm", "run", "start:dev" ]