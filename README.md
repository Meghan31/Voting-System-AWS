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

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/cu-csci-4253-datacenter-fall-2024/finalproject-final-project-team-123.git
```

### 2. Environment Variables

- **Redis Configuration**:
  ```plaintext
  REDIS_HOST=localhost
  REDIS_PORT=6379
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
cd server
```
```bash
npm start
```

This command will start the Express server.

In a separate terminal, start the ReactJS frontend:
```bash
cd client
```
```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### 6. Accessing the Application
- **Registration & Login**: Use the registration form to create an account. Once registered, you can log in to cast your votes.
- **Voting**: Once logged in, you will be able to view candidates, their photos from AWS S3, and vote on your preferred option.
- **Logout**: You can log out after voting, and your session will be valid for one day.

### 7. Testing
- **Front-End Tests**: Test your React components with Browser Dev Tools and React Dev Tools.
- **Integration Tests**: Test your backend API endpoints with tools like Postman or CURL.

## Notes
- Ensure that redis-server S3 is properly configured and doesn't have other files running in 6379 port.
- The session expires after 24 hours for security and session management.

## Contact
For any issues or inquiries, feel free to reach out to the project owner at mepu1328@colorado.edu.

---
