# Task Manager

## Overview

A full-stack task management application built with **Next.js** for the frontend and backend, using **MongoDB** and **Mongoose** for data storage. This app allows users to add, edit, prioritise, complete, and delete tasks dynamically. The UI is beautifully styled and fully responsive.

## Features

- **Task Management**: Add, edit, complete, prioritise, and delete tasks.
- **Next.js API Routes**: A serverless backend using Next.js API routes.
- **Responsive Design**: Modern, user-friendly interface.
- **MongoDB Database**: Data is stored persistently using MongoDB.
- **CRUD Operations**: Full support for creating, reading, updating, and deleting tasks.

## Technologies Used

### **Frontend & Backend (Full Stack with Next.js)**

- **Next.js** (App Router, API Routes)
- **React** (Hooks like `useState`, `useEffect`)
- **CSS Modules** for styling

### **Database & Backend Integration**

- **MongoDB** (NoSQL database)
- **Mongoose** (ODM for MongoDB)
- **Next.js API Routes** for backend logic

## Setup Instructions

### Prerequisites:

- Node.js and npm installed
- MongoDB Atlas or a local MongoDB instance

### Steps:

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```sh
   cd MiniProject3
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Set up MongoDB connection:**

   - Create a `.env.local` file in the root of the project.
   - Add the following line, replacing `<your-mongo-uri>` with your actual MongoDB URI:
     ```sh
     MONGODB_URI=<your-mongo-uri>
     ```

5. **Start the Next.js application:**
   ```sh
   npm run dev
   ```
   - The app runs at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| GET    | `/api/tasks` | Fetch all tasks.         |
| POST   | `/api/tasks` | Add a new task.          |
| PUT    | `/api/tasks` | Update an existing task. |
| DELETE | `/api/tasks` | Delete a specific task.  |

## Example API Usage with cURL

1. **GET `/api/tasks`** - Fetch all tasks:

   ```sh
   curl http://localhost:3000/api/tasks
   ```

2. **POST `/api/tasks`** - Add a new task:

   ```sh
   curl -X POST http://localhost:3000/api/tasks \
   -H "Content-Type: application/json" \
   -d '{"content": "Test Task", "completed": false, "isPriority": false}'
   ```

3. **PUT `/api/tasks`** - Update a task (replace `<id>` with a valid task ID):

   ```sh
   curl -X PUT http://localhost:3000/api/tasks \
   -H "Content-Type: application/json" \
   -d '{"id": "<id>", "content": "Updated Task", "completed": true}'
   ```

4. **DELETE `/api/tasks`** - Delete a task (replace `<id>` with a valid task ID):
   ```sh
   curl -X DELETE "http://localhost:3000/api/tasks?id=<id>"
   ```

## Known Issues and Future Enhancements

- Implement user authentication for personalised task lists.
- Enhance UI with animations and better user interactions.
- Add a due date feature for tasks.

## Acknowledgments

- Built as part of IOD course!
