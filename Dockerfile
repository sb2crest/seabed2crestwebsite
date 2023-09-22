FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install --force

# Copy the rest of your application code to the container
COPY . ./

# Expose a port that your application will listen on
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "start" ]
