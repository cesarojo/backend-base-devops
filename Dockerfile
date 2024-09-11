FROM node:20.11.1-alpine3.19

WORKDIR /usr/src/app

COPY ./dist ./dist
COPY ./package.json .
COPY ./node_modules ./node_modules

CMD ["node","dist/index.js"]