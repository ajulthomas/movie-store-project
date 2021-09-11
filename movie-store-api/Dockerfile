# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR /movie-store-api
COPY . .
RUN npm install --production
EXPOSE 3000
CMD ["npm", "run", "start"]