FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5173 

CMD ["npm","run","dev","--","--host"]


# for the production ready 

# FROM node:18-alpine 

# LABEL maintainer="umeshraut@thinkverse.com"

# WORKDIR /app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# RUN addgroup -S app && adduser -S app -G app
# USER app 

# EXPOSE 5173

# CMD ["npm","run","dev","--","--host"]