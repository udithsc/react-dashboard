FROM node:16.13-alpine3.14 as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.1
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/templates/app.conf.template