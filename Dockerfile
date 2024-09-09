FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run typeorm migration:run && npm run start:prod

EXPOSE 3000

CMD ["node", "dist/main.js"]