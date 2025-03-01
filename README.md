# Autherization - Backend

This is the backend repository for the **Autherization - Backend Website**. The backend is responsible for managing user data, jwt verification, and providing APIs to support frontend operations. 🚀

### [Link to Website](https://autherization-front-end-git-master-ashwin-s-is-projects.vercel.app/)


## Features

- **User Authentication**: Secure login and registration functionality.
- **Data Storage**: Manage user-specific.
- **API Endpoints**: Provide data access for the frontend.
- **Scalable Design**: Built to handle multiple users and their data efficiently.

## Libraries / Frameworks / Env Used

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Web framework for creating API routes.
- **MongoDB**: Database for storing user data.
- **JWT (JSON Web Tokens)**: For secure authentication.
- **Bcrypt**: For Hashing Password.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- [MongoDB](https://www.mongodb.com/cloud/atlas) (or a local instance)

## Setup Instructions

Follow the steps below to set up and run the backend locally:

### 1. Clone the repository

```bash
git clone https://github.com/ashwinn-si/autherizationBackEnd.git
cd autherizationBackEnd
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
MONGODB_URL = mongodb+srv://your_mongo_url_here
SALT_VALUE = 
JWT_SCERET =
```

### 4. Start the server

```bash
npm start
```

### 5. Test the API

backend server link
```bash
http://localhost:5000
```


## Frontend Integration
Ensure the frontend is set up and running to fully utilize the application. Check out the frontend repository for more details [here](https://github.com/ashwinn-si/autherizationFrontEnd)
