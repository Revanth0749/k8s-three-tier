# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY . ./

RUN npm run build

# Stage 2: Serve app with Apache web server
FROM httpd:2.4-alpine

RUN rm -rf /usr/local/apache2/htdocs/*

COPY --from=builder /app/build/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd-foreground"]
