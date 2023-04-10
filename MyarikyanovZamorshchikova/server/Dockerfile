FROM node:lts

WORKDIR /usr/src/nefu_server

COPY ./server/package*.json ./

RUN npm i -g npx
RUN npm install
RUN npx prisma generate

COPY ./server/ ./

CMD ["npm", "run", "dev"]