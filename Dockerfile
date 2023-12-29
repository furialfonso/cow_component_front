FROM node:20.10.0-slim as builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY vite.config.js ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.25-alpine3.18-slim AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/dist /usr/share/nginx/html

# npx serve -s dist
# docker build -t react-docker .
# docker run -p 8083:8083 react-docker