# Build Stage 1
# This build created a staging docker image
# set image
FROM node:20 AS development
# set working directory
WORKDIR /usr/src/app
# copy project file
COPY package*.json ./
# install node packages
RUN npm install -D
# copy app files
COPY . .
# run build, linter, setup and tests
RUN npm run build

# Build Stage 2
# This build takes the production build from staging build
# set image
FROM node:20 AS production

# Build Arguments
ARG NODE_ENV=production
ARG PORT

#Environment Variables
ENV LANG=pt_BR.UTF-8
ENV TZ=America/Sao_Paulo
ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

# set working directory
WORKDIR /usr/src/app
# copy project file
COPY package*.json ./
# install only packages required
RUN npm install --omit=dev
# copy app files
COPY . .
# run build, linter, setup and tests
COPY --from=development /usr/src/app/dist ./dist

# application server port
EXPOSE 3000

CMD ["npm", "start"]