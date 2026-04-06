FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built application
COPY .next .next
COPY public public
COPY next.config.js ./

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Start application
CMD ["npm", "start"]
