FROM node:14.0-alpine

WORKDIR /usr/src/app

COPY ./simple-chat-back/package.json .
COPY ./simple-chat-back/package-lock.json .

RUN npm install

COPY ./simple-chat-back/ .

CMD ["npm", "start"]  