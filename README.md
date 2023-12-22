 # ProsePallet - Unleash Your Creativity

ProsePallet is a full-stack web application that provides a platform for users to create and share their thoughts, stories, and creative writing. It allows users to write, edit, and publish blog posts, as well as interact with other users through comments and likes.

## Features

- **Create and Publish Posts:** Users can create new blog posts, add a title, description, and an optional banner image, and publish their thoughts for others to read.

- **Interactive Interface:** The application provides an intuitive and user-friendly interface for creating and managing blog posts.

- **Comments and Likes:** Users can engage with posts by leaving comments and liking them. The comment section allows for interactive discussions.

- **Categorized Content:** Posts can be categorized, making it easy for users to explore content based on their interests.

- **User Authentication:** Secure user authentication ensures that each user's content is associated with their account.

## Technologies Used

- **Frontend:** React, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Authentication:** JSON Web Tokens (JWT)
- **File Upload:** Multer
- **State Management:** React Context API
- **Toast Notifications:** react-toastify
- **Deployment:** Heroku

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (for database)
- Create a `.env` file with the following variables:

DATABASE_USERNAME=your_database_username
DATABASE_PASSWORD=your_database_password
ACCESS_SECRET_KEY=your_access_secret_key
REFRESH_SECRET_KEY=your_refresh_secret_key


### Installation

1. Clone the repository
 ```bash
 git clone https://github.com/masterAkashBaghel/prosePallet.git

1.Install dependencies

cd ProsePallet
npm install

2. Start the application (development mode)
npm run dev
Deployment
The application is deployed on Heroku. Ensure that you have set up Heroku and MongoDB Atlas for production deployment.

Contributing
Contributions are welcome! Feel free to submit pull requests or open issues.

License
This project is licensed under the MIT License.
