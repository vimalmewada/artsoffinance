# Base image with Node.js
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose Angular's default port
EXPOSE 4200

# Run Angular dev server
CMD ["npm", "start"]
