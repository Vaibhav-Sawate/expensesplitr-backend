💎 SmartExpense - MERN Stack Expense Tracker

A modern, full-stack personal finance application designed to help users track their income and expenses effortlessly. Built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS.

🚀 Live Demo

Frontend (Vercel): https://smart-expense-tracker.vercel.app (Replace with your actual Vercel link)

Backend (Render): https://smart-expense-api.onrender.com (Replace with your actual Render link)

✨ Features

User Authentication: Secure Registration and Login using JWT (JSON Web Tokens) and Bcrypt hashing.

Interactive Dashboard: Real-time overview of total spending and recent transactions.

Data Visualization: Dynamic pie charts showing spending breakdown by category (Food, Transport, Utilities, etc.).

Expense Management: Full CRUD (Create, Read, Delete) functionality for expense records.

Responsive Design: Fully responsive UI built with Tailwind CSS, optimized for mobile and desktop.

Modern UI/UX: Glassmorphism effects, gradient cards, and intuitive navigation.

Smart Logic: Automatic date handling and category filtering.

🛠️ Tech Stack

Frontend

React.js (Vite): Fast, component-based UI development.

Tailwind CSS: Utility-first CSS framework for styling.

Axios: Handling HTTP requests to the backend.

Recharts: Data visualization library for React.

React Router DOM: Client-side routing.

Backend

Node.js: JavaScript runtime environment.

Express.js: Web framework for building the REST API.

MongoDB (Atlas): NoSQL database for storing user and expense data.

Mongoose: ODM (Object Data Modeling) library for MongoDB.

JWT & Bcrypt: Security and authentication.

⚙️ Installation & Setup

Follow these steps to run the project locally.

Prerequisites

Node.js (v14 or higher)

MongoDB Atlas Account (for the database)

1. Clone the Repository

git clone [https://github.com/yourusername/smart-expense-tracker.git](https://github.com/yourusername/smart-expense-tracker.git)
cd smart-expense-tracker



2. Backend Setup

Navigate to the root directory and install dependencies:

npm install



Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key_123



Start the backend server:

npm run dev
# Server running on http://localhost:5000



3. Frontend Setup

Open a new terminal, navigate to the frontend folder, and install dependencies:

cd frontend
npm install



Start the React development server:

npm run dev
# Frontend running on http://localhost:5173



📂 Project Structure

smart-expense-tracker/
├── .env                       # Environment variables (mongoURI, JWT_SECRET)
├── .gitignore                 # Files to ignore
├── package.json               # Backend dependencies
├── server.js                  # Backend Entry point
│
├── config/
│   └── db.js                  # MongoDB connection logic
│
├── controllers/
│   ├── expenseController.js   # Logic for CRUD operations on Expenses
│   └── userController.js      # Logic for Auth (Login/Register/Me)
│
├── middleware/
│   └── authMiddleware.js      # JWT verification middleware
│
├── models/
│   ├── Expense.js             # Mongoose Schema for Expenses
│   └── User.js                # Mongoose Schema for Users
│
├── routes/
│   ├── expenseRoutes.js       # Routes for /api/expenses
│   └── userRoutes.js          # Routes for /api/users
│
└── frontend/                  # React Application
    ├── package.json           # Frontend dependencies
    ├── vite.config.js         # Vite configuration (Proxy setup)
    ├── tailwind.config.js     # Tailwind CSS config
    ├── postcss.config.js      # PostCSS config
    ├── vercel.json            # Vercel deployment config (rewrites)
    ├── index.html             # HTML entry point
    │
    └── src/
        ├── main.jsx           # React entry point (Axios config)
        ├── App.jsx            # Router and Layout structure
        ├── index.css          # Global styles & Tailwind imports
        │
        ├── components/        # Reusable UI Components
        │   ├── ExpenseChart.jsx   # Recharts visualization
        │   ├── ExpenseForm.jsx    # Form to add transactions
        │   ├── ExpenseItem.jsx    # Individual transaction list item
        │   └── Header.jsx         # Navigation bar
        │
        └── pages/             # Page Components
            ├── Dashboard.jsx  # Main private dashboard
            ├── Landing.jsx    # Public landing page
            ├── Login.jsx      # Login page
            └── Register.jsx   # Registration page


🚀 Deployment

Backend (Render)

Connect GitHub repo to Render.

Create a Web Service.

Set Build Command: npm install

Set Start Command: node server.js

Add Environment Variables (MONGO_URI, JWT_SECRET).

Frontend (Vercel)

Connect GitHub repo to Vercel.

Set Root Directory to frontend.

Add Environment Variable:

VITE_API_URL: Your Render Backend URL (e.g., https://smart-expense-api.onrender.com) - No trailing slash!

Deploy!

🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

📄 License

This project is open source and available under the MIT License