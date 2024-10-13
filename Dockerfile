FROM node:20.13.1-alpine3.19 AS build
WORKDIR /app/src
COPY package*.json ./
RUN npm i -f
COPY . ./
RUN npm run build

FROM node:20.13.1-alpine3.19
RUN addgroup -S exampleusergroup && adduser -S exampleuser -G exampleusergroup
USER exampleuser
WORKDIR /usr/app
COPY --from=build /app/src/dist/rafael-chicovis-blog/ ./
CMD node server/server.mjs
EXPOSE 4000
