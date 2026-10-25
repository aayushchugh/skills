FROM node:20-alpine

WORKDIR /app

COPY web/package*.json ./

RUN npm install

COPY web /app
COPY skills /skills

RUN npm run build

EXPOSE 3004

CMD ["npm", "start"]
