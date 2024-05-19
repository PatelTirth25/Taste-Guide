# Taste-Guide

Taste-Guide is a personal recipe and meal manager that allows you to store, manage, and delete your own recipes and meals after logging in or signing up. The frontend is built with Next.js, and the backend is powered by Node.js with MongoDB as the database.

## Features

- **User Authentication**: Sign up and log in to manage your recipes and meals.
- **Recipe and Meal Management**: Store and delete your own recipes and meals.
- **Personalized Data**: Only you can see and manage your recipes and meals.

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository :

   ```bash
   git clone https://github.com/your-username/taste-guide.git
   cd taste-guide
2. Install dependencies for the frontend :

    ```bash
    npm install
    # or
    yarn install
3. Install dependencies for the backend :

    ```bash
    cd ./backend
    npm install
    # or
    yarn install
### Configuration

 **Set up MongoDB**:
   - Ensure your MongoDB server is running.
   - Update the MongoDB connection string in the backend configuration.

   In `/backend/routes`, change URI in `.env` file and add your MongoDB connection string:

    URI='your-mongodb-connection-string'

### Running the Project

1. **Start the backend server**:
    - Navigate to the `Taste-Guide/backend/routes` directory.
    - Start the server using `nodemon main.js`.

The backend server will start on `http://localhost:8080`.

2. **Start the frontend server**:
    - Navigate back to `Taste-Guide/` directory.
    - Start the server using `npm run dev` or `yarn dev`.

The frontend server will start on `http://localhost:3000`.

# **Happy cooking! 🍽️👩‍🍳👨‍🍳**

