FROM node:14
WORKDIR /usr/src/app
COPY package*.json app.js template ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]