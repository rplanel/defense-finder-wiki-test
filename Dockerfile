### Stage Install ###
FROM node:19.5-bullseye-slim as install

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json ./

RUN npm install


### STAGE: Dev
FROM node:19.5-bullseye-slim as dev

WORKDIR /usr/src/app
COPY --from=install /usr/src/app ./
COPY . /usr/src/app
EXPOSE 3000 24678 4000
CMD ["npm", "run", "dev"]


### STAGE: Build ###
FROM node:19.5-bullseye-slim as build

WORKDIR /usr/src/app
COPY --from=install /usr/src/app ./
COPY . /usr/src/app
RUN npm run generate

### STAGE: NGINX ###
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]