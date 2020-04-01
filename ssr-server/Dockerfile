FROM node:13.12-alpine

CMD [ "npm", "start" ]

WORKDIR /var/www
ADD package.json /var/www
RUN npm i

ADD src /var/www/src