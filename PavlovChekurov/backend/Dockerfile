FROM node:lts

WORKDIR /usr/src/backend

COPY ./backend ./

RUN apt-get -y update
RUN apt-get -y install git
RUN npm install
RUN npx prisma generate
RUN npx prisma db push

CMD ["npm", "run", "dev"]