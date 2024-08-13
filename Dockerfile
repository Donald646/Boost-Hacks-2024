# Stage 1: Build the application
FROM node:18.17.0-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the application
FROM node:18.17.0-alpine

# Set the working directory
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --production

# Set environment variables
ENV PORT=3001

# Expose the port the app runs on
EXPOSE 3001

# Start the Next.js application
CMD ["npm", "start"]
