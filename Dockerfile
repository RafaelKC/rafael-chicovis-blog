FROM node:20-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci -f
COPY . ./
RUN npm run build --configuration=production -f

FROM node:20-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/rafael-chicovis-blog ./
CMD node server/server.mjs
EXPOSE 4000
