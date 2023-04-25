FROM node:lts

WORKDIR /usr/src/server

COPY ./server ./

RUN npm install
RUN npx prisma generate

CMD ["npm", "run", "dev"]