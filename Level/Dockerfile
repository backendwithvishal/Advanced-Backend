FROM node

WORKDIR /app

COPY server.js server.js
COPY package.json package.json
COPY package-log.json package-log.json

RUN npm install

CMD [ "node","server.js"]