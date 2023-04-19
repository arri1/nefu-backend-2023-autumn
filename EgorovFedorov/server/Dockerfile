FROM node:16-alpine
WORKDIR /app

COPY package.json /app/package.json
COPY prisma /app/prisma/
COPY .env /app/.env
COPY tsconfig.json /app/tsconfig.json
COPY . /app
RUN npm install
RUN npx prisma generate
EXPOSE 4000
CMD [  "npm", "run", "start:migrate:prod" ]
