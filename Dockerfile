FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build:ssr


FROM nginx:alpine

COPY --from=build /app/dist/rafael-chicovis-blog/browser /usr/share/nginx/html
COPY --from=build /app/dist/rafael-chicovis-blog/server /usr/share/nginx/server

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
