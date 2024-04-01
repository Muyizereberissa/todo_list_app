#!/bin/bash

#  build app
npm run build

# Docker login
docker login

# Build Docker image
 docker build -t vite-react-app:latest .

# Run Docker container 
# docker run -p 8080:8080 vite-react-app:latest

# Tag Docker image
docker tag vite-react-app:latest berissa/task_manager:latest

# Push Docker image to Docker Hub
 docker push berissa/task_manager:latest

# Pull Docker image from Docker Hub
docker pull berissa/task_manager:latest

# Run Docker container with pulled image
docker run -p 8080:8080 berissa/task_manager:latest
