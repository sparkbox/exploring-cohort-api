FROM node:17

WORKDIR /usr/app

COPY package.json /usr/app
COPY package-lock.json /usr/app
COPY src /usr/app/src
COPY dev-team.db /usr/app

RUN npm install

CMD ["npm", "start"]
