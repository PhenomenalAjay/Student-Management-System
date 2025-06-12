# Student Management System

A simple web application for managing student records. This project allows you to create, read, update, and delete student information stored in a MySQL database. The application is built using Node.js, Express, and Handlebars as the templating engine.

## Features

- View all student records
- Add new student
- Edit existing student details
- Delete student records

## Technology Stack

- Node.js
- Express 5
- MySQL (mysql2 package)
- Handlebars (express-handlebars)
- Body-parser
- dotenv for environment variable management
- Nodemon for development

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd student-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your MySQL database and create a database for the project.

4. Create a `.env` file in the root directory and add your database credentials and port (optional):

   ```
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_user
   DB_PASS=your_mysql_password
   DB_NAME=your_database_name
   PORT=5000
   ```

5. Run the application:

   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:5000` to access the application.

## Folder Structure

```
.
├── app.js                  # Main application file
├── package.json            # Project metadata and dependencies
├── public/                 # Static files (CSS, JS, images)
│   └── css/
│       └── style.css       # Stylesheet
├── server/
│   ├── controllers/
│   │   └── studentController.js  # Controller logic for student routes
│   └── routes/
│       └── student.js             # Routes for student CRUD operations
├── views/                  # Handlebars templates
│   ├── layouts/
│   │   └── main.hbs        # Main layout template
│   ├── adduser.hbs         # Add student form
│   ├── edituser.hbs        # Edit student form
│   └── home.hbs            # Home page showing student list
└── .env                    # Environment variables (not committed)
```

## Usage

- Visit the home page to see all students.
- Use the "Add User" link to add a new student.
- Edit or delete existing students using the respective links on the home page.

## Author

Ajay

## License

This project is licensed under the ISC License.
