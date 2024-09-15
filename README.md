
# JOBLITE

JOBLITE is a full-stack job searching web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). This application offers a platform for users to search for job listings, with robust features such as role-based authorization, filtering options, password reset functionality, and OTP verification for enhanced security.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)

## Features

-   **JWT-Based Authentication**: Secure user authentication using JSON Web Tokens.
-   **Role-Based Authorization**: Different roles for users and administrators to manage permissions.
-   **Job Filtering**: Efficient filtering options to help users find relevant jobs.
-   **Password Reset**: Integrated reset password feature for account recovery.
-   **OTP Verification**: One-Time Password (OTP) verification for enhanced security.
-   **Automated Email Service**: Utilized Nodemailer to automate emails, enabling efficient communication with users.
-   **CRUD Functionality**: Full CRUD (Create, Read, Update, Delete) functionality for job listings via REST APIs.

## Technologies Used

-   **Frontend**: React.js
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **Authentication**: JSON Web Tokens (JWT)
-   **Email Service**: Nodemailer

## Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**    
    `git clone https://github.com/Shahinmulani/JobLite.git` 
    
2.  **Install server dependencies:**
    `cd api` 
    `npm install`
    
3.  **Install client dependencies:**
    `cd client`
    `npm install`
    
4.  **Set up environment variables:** Create a `.env` files and setup accordingly 
    
    
5.  **Run the application:**
    
    -   Start the server:
        `cd api`
        `npm start` 
        
    -   Start the client:    
		 `cd client`
	       `npm run dev` 
        
6.  **Access the application:** Open your browser and navigate to `http://localhost:8080`.
    

## Usage

-   **User Registration and Login**: Users can register and log in to access the job search features.
-   **Job Search**: Users can search and filter job listings based on various criteria.
-   **Job Management**: Administrators can create, update, and delete job listings.
-   **Password Reset**: Users can reset their password using the reset password feature with OTP verification.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
