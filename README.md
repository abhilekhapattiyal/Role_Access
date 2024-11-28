Project-Role-Based Authentication and Access (MERN Stack)
Overview
This project implements a role-based authentication and access control system using the MERN stack (MongoDB, Express, React, Node.js). The system allows users to register, log in, and access certain parts of the application based on their assigned roles. Different roles (e.g., Admin, User) have varying levels of access to resources and functionality within the application. This approach helps ensure that sensitive data and features are only accessible to authorized users.

Features
User Registration & Login: Users can register and log in to the system with their credentials.
Role Assignment: Admins can assign different roles (e.g., Admin, User) to users.
Role-Based Access Control (RBAC): Access to certain pages or features is restricted based on the user's role.
JWT Authentication: Utilizes JSON Web Tokens (JWT) for secure authentication and session management.
Secure Routes: Protected routes ensure only authorized users can access specific resources.
Technologies Used
MongoDB: NoSQL database to store user information and roles.
Express: Backend framework for building RESTful APIs.
React: Frontend library for building dynamic user interfaces.
Node.js: JavaScript runtime for backend logic.
JWT (JSON Web Tokens): For secure authentication and authorization.
Bcrypt.js: To hash passwords securely.
