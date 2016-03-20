FROM node:5.6.0
EXPOSE 8080
COPY . /usr/src/app
WORKDIR /usr/src/app
# RUN npm update -g
RUN npm install
CMD [ "npm", "start" ]