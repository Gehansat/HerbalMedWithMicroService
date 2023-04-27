FROM node:17-alpine
WORKDIR /app
COPY . /app
RUN npm install
COPY server.js /app/
EXPOSE 8020
CMD ["node", "server.js"]
