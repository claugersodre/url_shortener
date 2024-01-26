FROM node:12-alpine
# Create app directory
WORKDIR /usr/src
COPY ./package*.json ./
RUN npm install
RUN npm prune
COPY . .
EXPOSE 3000

#Run application
CMD ["npm", "start"]