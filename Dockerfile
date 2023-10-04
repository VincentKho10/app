FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=6465

EXPOSE 6465

CMD [ "npm", "run", "serve" ]