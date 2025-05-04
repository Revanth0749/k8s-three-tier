#Stage1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm build

#Stage2: Server the application with Apache WebServer(httpd)
FROM httpd:2.4-alpine

COPY --from=builder /app/build/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd-foreground"]
