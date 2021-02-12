#FROM registry.access.redhat.com/ubi8/nodejs-12:1-52
FROM node:12-alpine

USER root

RUN apk update && apk add python make g++

WORKDIR /opt/app-root/src

COPY . ./

RUN cd client && npm i
RUN cd ..
RUN npm run build
RUN npm i

RUN cp -r client server/client

#WORKDIR /opt/app-root/src

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]
