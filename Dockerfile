FROM node:23-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

EXPOSE 5000

CMD ["node", "dist/index.js"]
