FROM nginx:1.19.0-alpine
COPY /dist /usr/share/nginx/html
COPY certificate.ovpn /etc/openvpn/CLIENTNAME.conf
EXPOSE 80
# start app
CMD ["nginx", "-g", "daemon off;"]
