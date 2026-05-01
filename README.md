Team Task Manager API

This project is a backend application built using Node.js, Express, and MongoDB.

Features:
- User Registration (Signup)
- User Login with JWT Authentication
- Protected Routes using Token
- Project Management APIs
- Task Management APIs

Tech Stack:
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)
- Postman (for testing)

How to Run:
1. Install dependencies using npm install
2. Add .env file with MONGO_URI and JWT_SECRET
3. Run server using node server.js

API Endpoints:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/protected
- GET /api/projects
- GET /api/tasks

This project demonstrates a basic team task manager backend with authentication and API structure.
