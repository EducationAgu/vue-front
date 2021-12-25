FROM nginx:1.19.0-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY /dist /usr/share/nginx/html
COPY frontend.cert /etc/nginx/frontend.cert
COPY frontend.key /etc/nginx/frontend.key
EXPOSE 443
# start app
CMD ["nginx", "-g", "daemon off;"]
