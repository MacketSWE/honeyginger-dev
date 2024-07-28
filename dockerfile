# Use a Node base image
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the source code to the container
COPY . .

# Build the TypeScript code
RUN yarn build

# Indicate the port on which the app will listen
EXPOSE 8080

ENTRYPOINT []

# The command to run when the container starts
CMD ["node", "dist/index.js"]
