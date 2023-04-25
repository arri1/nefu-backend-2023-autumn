FROM node:lts

WORKDIR /usr/src/test-client

COPY ./test-client ./

RUN apt-get -y update
RUN npm install

CMD ["npm", "run", "start"]