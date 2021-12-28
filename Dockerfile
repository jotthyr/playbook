FROM node:lts-alpine
WORKDIR /app
EXPOSE 8080
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
RUN ["npm", "run", "build"]
CMD ["npm", "start"]