FROM mhart/alpine-node:12.16.3
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY ./dist /dist
COPY ./package.json /package.json
COPY ./package-lock.json /package-lock.json
COPY ./.env.$NODE_ENV /.env.$NODE_ENV

RUN NODE_ENV=$NODE_ENV npm install

CMD ["node", "dist/server.js"]