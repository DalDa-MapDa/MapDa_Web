# Step 1: Build the React application
FROM node:16 as build

# Set the working directory inside my-app folder
WORKDIR /app/my-app

# Copy package.json and package-lock.json to the container
COPY my-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY my-app .

# Build the React app
RUN npm run build

# Step 2: Copy build output
FROM alpine:latest
COPY --from=build /app/my-app/build /app/build
