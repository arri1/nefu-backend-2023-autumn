FROM node:lts

WORKDIR /usr/src/nefu_server

COPY ./server/package*.json ./

RUN npm install
RUN npx prisma generate

COPY . .

CMD ["npm", "run", "dev"]