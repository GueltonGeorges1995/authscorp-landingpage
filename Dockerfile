FROM nginx:1.17.9-alpine

WORKDIR /var/www

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /var/www