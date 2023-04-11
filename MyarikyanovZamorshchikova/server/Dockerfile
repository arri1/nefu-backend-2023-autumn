
FROM node:lts

WORKDIR /usr/src/server

COPY ./server ./

RUN apt-get -y update
RUN apt-get -y install git
RUN npm install
RUN npx prisma generate

CMD ["npm", "run", "dev"]