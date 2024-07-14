FROM node:14
ARG script=build
WORKDIR /usr/src/app
LABEL maintainer="Jean-Baptiste GANDONOU"
LABEL name="meem-app"
ADD  .  /usr/src/app
RUN npm install
RUN npm run $script

FROM nginx:alpine
LABEL maintainer="Jean-Baptiste GANDONOU"
LABEL name="meem-app"
LABEL version="0.1.0"
COPY  site.conf /etc/nginx/conf.d/site.conf.template
COPY --from=0 /usr/src/app/dist /usr/share/nginx/html
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/conf.d/site.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]