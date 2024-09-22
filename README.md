# Ticket Management System

    This is a simple Ticket Management System built using Node.js and MongoDB. The API allows you to create, retrieve, update, and delete tickets.

### Table of Contents :

- Introduction
- Features
- Technologies Used
- Setup Instructions
- API Endpoints
   - Create a Ticket
   - Get a Ticket by ID
   - Update a Ticket
   - Delete a Ticket
  

### Introduction :

This project is a basic Ticket Management System API built using Node.js and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on tickets.

### Features :

- Create new tickets with a title, description, and status.
- Retrieve single ticket by its ID.
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
    - git clone https://github.com/YashCodeCraft-git/ticket-management.git

2) Navigate to the project directory in CMD

3) Install the dependencies: 
    - npm install

4) Set up MongoDB:
    - Created a .env file in the project root and add the following environment variables: 
      MONGO_URI=mongodb://localhost:27017/ticket-management
      PORT=5000
      (Note : Url may vary and can be obtained from Compass or any other DBMS being used)
 
5) Start the application:
    - npm start

6) Test the API: 
    - Use Postman or a similar API testing tool to test the API endpoints 

### API Endpoints 

Because this is not a hosted program, it does not have a permanent end points. Once the api is hosted specific end points can be determined.

## Create a Ticket 

- URL: /api/tickets
Method: POST
Body (JSON):
# json
{
  "title": "Ticket Title",
  "description": "Ticket description",
  "status": "open"
}
# Response:
- 201 Created: Returns the created ticket.
- 500 Internal Server Error: If server has encountered a situation it does not know how to handle.

## Get a Ticket by ID
- URL: /api/tickets/:id
- Method: GET
- Parameters:
    - id: The unique identifier of the ticket.
- Response:
    - 200 OK: Returns the ticket with the given ID.
    - 404 Not Found: If no ticket is found with the given ID.
    - 500 Internal Server Error: If server has encountered a situation it does not know how to handle.

## Update a Ticket

    - URL: /api/tickets/:id
- Method: PUT
- Parameters:
    - id: The unique identifier of the ticket.
- Body (JSON):
# json
{
  "title": "Updated Ticket Title",
  "description": "Updated description.",
  "status": "closed"
}
# Response:

- 200 OK: Returns the updated ticket.
- 404 Not Found: If no ticket is found with the given ID.
- 400 Bad Request: Validation failed or required fields missing.
- 500 Internal Server Error: If server has encountered a situation it does not know how to handle.

##  Delete a Ticket

    - URL: /api/tickets/:id
- Method: DELETE
- Parameters:
    - id: The unique identifier of the ticket.

# Response:

- 200 OK: Returns a message confirming ticket deletion.
- 404 Not Found: If no ticket is found with the given ID.
- 500 Internal Server Error: If server has encountered a situation it does not know how to handle.
