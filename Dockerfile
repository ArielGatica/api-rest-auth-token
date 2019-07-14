FROM node:10.16.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY app/ /usr/src/app
COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD [ "node", "."]

