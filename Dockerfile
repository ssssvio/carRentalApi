FROM node:18-alpine

COPY src/infra/config/create-database/init.sql /docker-entrypoint-initdb.d/

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]