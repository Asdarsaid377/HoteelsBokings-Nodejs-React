FROM node
WORKDIR /backend
COPY package.json ./
COPY package-lock.json .
RUN npm install
COPY . .
CMD nodemon index