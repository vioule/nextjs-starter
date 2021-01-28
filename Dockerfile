FROM node:lts
COPY . /maisonpalomita
WORKDIR /maisonpalomita
RUN npm i