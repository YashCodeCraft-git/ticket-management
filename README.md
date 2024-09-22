# Ticket Management System

    This is a simple Ticket Management System built using Node.js and MongoDB. The API allows you to create, retrieve, update, and delete tickets.

### Table of Contents :

- Introduction
- Features
- Technologies Used
- Setup Instructions
- API Endpoints
   - Create a Ticket
   - Get All Tickets
   - Get a Ticket by ID
   - Update a Ticket
   - Delete a Ticket
- Error Handling
- Validation
- License

### Introduction :

This project is a basic Ticket Management System API built using Node.js and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on tickets.

### Features :

- Create new tickets with a title, description, and status.
- Retrieve all tickets or a single ticket by its ID.
- Update tickets with new information.
- Delete tickets.
- Handle errors and validate ticket input.

### Technologies Used :

- Node.js: JavaScript runtime environment.
- MongoDB: NoSQL database for storing ticket information.
- Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
- Postman: API testing tool (optional).

### Setup Instructions

### Prerequisites : The following installed :

- Node.js (v12 or higher)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)

### Installation

1) Clone the repository: 
    - git clone https://github.com/YOUR_USERNAME/ticket-management-system.git

2) Navigate to the project directory: 
    - cd ticket-management-system

3) Install the dependencies: 
    - npm install

4) Set up MongoDB:
    - Created a .env file in the project root and add the following environment variables: 
      MONGO_URI=mongodb://localhost:27017/ticket-management
      PORT=5000
 
5) Start the application:
    - npm start

- The server will be running on: http://localhost:5000

6) Tested the API: 
    - Use Postman or a similar API testing tool to test the API endpoints 

### API Endpoints 

## Create a Ticket 
