# Voting System for Local Communities - README

## Overview

The Voting System for Local Communities is a web application designed using ReactJS, ExpressJS, NodeJS, and MongoDB. This system facilitates secure and private voting for local communities with features like login and registration, session-based authentication, and real-time voting stored in Redis cache. Images such as candidate photos and party photos are stored in an AWS S3 bucket and accessed securely through this system. This document provides instructions on how to set up and run the Voting System on your local system.

## Technologies Used

- **Frontend**: ReactJS
- **Backend**: Node.js, ExpressJS
- **Database**: MongoDB
- **Cache**: Redis (localhost:6379)
- **Storage**: AWS S3
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: Sass

## Features

- **User Authentication**: Registration, Login, Logout with session-based control.
- **Voting Mechanism**: Users can cast votes for local elections. Votes are stored in Redis cache.
- **AWS S3 Integration**: Store and retrieve images like candidate photos and party logos securely.
- **Real-time Data**: Votes are processed in real-time, allowing instant updates on voting results.
- **Session Management**: User sessions are active for one day for security.

## Prerequisites

Before running the Voting System locally, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB
- Redis
- AWS S3 account for image storage

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Meghan31/Voting-System-AWS.git
cd Voting-System-AWS
```

### 2. Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

- **MongoDB URI**:

  ```plaintext
  MONGO_URI=mongodb://xxxxxxxxxxxxxxxxx
  ```

- **Redis Configuration**:

  ```plaintext
  REDIS_HOST=localhost
  REDIS_PORT=6379
  ```

- **AWS S3 Configuration**:

  ```plaintext
  AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY_ID
  AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS_KEY
  AWS_REGION=YOUR_AWS_REGION
  AWS_BUCKET_NAME=YOUR_AWS_BUCKET_NAME
  ```

  Or

  ```
  Apply a policy to your AWS S3 Bucket to be Public, then no need for above configuration
  ```

- **Session Configuration**:
  ```plaintext
  SESSION_SECRET=your_secret_key
  ```

### 3. Install Dependencies

Navigate to the project directory and install dependencies:

```bash
cd server
```

```bash
npm install
```

```bash
cd client
```

```bash
npm install
```

### 4. Start MongoDB and Redis

- **Start MongoDB**:
  - Make sure MongoDB is running on your local system. If not, you can start it with:
    ```bash
    mongod --dbpath /path/to/your/mongodb/data
    ```
- **Start Redis**:
  - Run Redis using:
    ```bash
    redis-server
    ```

### 5. Run the Application

Start the backend server:

```bash
npm run start:server
```

This command will start the Express server.

In a separate terminal, start the ReactJS frontend:

```bash
npm run start:client
```

The application will be accessible at `http://localhost:3000`.

### 6. Accessing the Application

- **Login**: Use the registration form to create an account. Once registered, you can log in to cast your votes.
- **Voting**: Once logged in, you will be able to view candidates, their photos from AWS S3, and vote on your preferred option.
- **Logout**: You can log out after voting, and your session will be valid for one day.

### 7. Testing

- **Unit Tests**: Test your React components with Jest.
- **Integration Tests**: Test your backend API endpoints with tools like Postman or CURL.

## Notes

- Ensure that AWS S3 is properly configured to store images.
- The session expires after 24 hours for security and session management.
- Regularly update your MongoDB, Redis, and AWS S3 credentials for security purposes.

## Contact

For any issues or inquiries, feel free to reach out to the project owner at [pulakhandammegha@gmail.com].

---
