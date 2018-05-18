# Use an official node runtime
FROM node:carbon

# Create a directory for the app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies 
# A wildcard is used to ensure both package.json and package-lock.json
COPY package*.json ./

RUN npm install -g @angular/cli --unsafe

RUN npm install
# If production uncomment:
# RUN npm install --only=production

# Bundle app source
COPY . .

# Expose the default app's port
EXPOSE 4200

CMD [ "npm", "start" ]