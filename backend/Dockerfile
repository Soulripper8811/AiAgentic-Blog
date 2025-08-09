FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install && npm audit fix

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]
