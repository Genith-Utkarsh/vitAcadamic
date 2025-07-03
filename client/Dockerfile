# Use a smaller, specific Node image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port used by Vite
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]
