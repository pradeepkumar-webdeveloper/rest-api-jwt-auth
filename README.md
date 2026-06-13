# 🔐 REST API with JWT Authentication

A secure and scalable RESTful API built with Node.js and Express.js, featuring JWT-based authentication, role-based access control, and MongoDB integration. Designed as a production-ready backend boilerplate.

![Node.js](https://img.shields.io/badge/Node.js-v18-green) ![Express](https://img.shields.io/badge/Express.js-v4-lightgrey) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen) ![JWT](https://img.shields.io/badge/Auth-JWT-orange)

---

## 🚀 Features

- ✅ User Registration & Login
- 🔐 JWT Access Token & Refresh Token
- 🛡️ Protected Routes with Middleware
- 👥 Role-Based Access Control (Admin / User)
- 📋 Input Validation with error handling
- 🗄️ MongoDB with Mongoose ODM
- 📬 RESTful API design (CRUD operations)
- 🔄 Token refresh mechanism
- 🚫 Logout & token invalidation

---

## 🧰 Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Runtime    | Node.js                        |
| Framework  | Express.js                     |
| Database   | MongoDB, Mongoose              |
| Auth       | JWT (jsonwebtoken), bcryptjs   |
| Validation | express-validator              |
| Tools      | Postman, Git, VS Code, Dotenv  |

---

## 📁 Project Structure

```
rest-api-jwt-auth/
│
├── config/
│   └── db.js                # MongoDB connection
│
├── controllers/
│   ├── authController.js    # Register, Login, Refresh
│   └── userController.js   # User CRUD
│
├── middleware/
│   ├── authMiddleware.js    # JWT verification
│   └── roleMiddleware.js    # Role-based access
│
├── models/
│   └── User.js              # User schema
│
├── routes/
│   ├── authRoutes.js        # Auth endpoints
│   └── userRoutes.js        # User endpoints
│
├── .env.example
├── server.js
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/pradeepFD/rest-api-jwt-auth.git

# Navigate to the project
cd rest-api-jwt-auth

# Install dependencies
npm install

# Create .env file
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
PORT=5000

# Start the server
npm run dev
```

---

## 🔑 API Endpoints

### Auth Routes
| Method | Endpoint              | Description            | Access  |
|--------|-----------------------|------------------------|---------|
| POST   | /api/auth/register    | Register a new user    | Public  |
| POST   | /api/auth/login       | Login & get token      | Public  |
| POST   | /api/auth/refresh     | Refresh access token   | Public  |
| POST   | /api/auth/logout      | Logout user            | Private |

### User Routes
| Method | Endpoint              | Description            | Access  |
|--------|-----------------------|------------------------|---------|
| GET    | /api/users/profile    | Get current user       | Private |
| PUT    | /api/users/profile    | Update profile         | Private |
| GET    | /api/users            | Get all users          | Admin   |
| DELETE | /api/users/:id        | Delete user            | Admin   |

---

## 🧪 Sample Request

```json
POST /api/auth/login
Content-Type: application/json

{
  "email": "pradeep@example.com",
  "password": "yourpassword"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64abc...",
    "name": "Pradeep Kumar S",
    "email": "pradeep@example.com",
    "role": "user"
  }
}
```

---

## 👨‍💻 Author

**Pradeep Kumar S**
- GitHub: (github.com/pradeepkumar-webdeveloper)
- LinkedIn: [linkedin.com/in/pradeepkumars](https://linkedin.com/in/pradeepkumars)
- Email: pradeep8754491662@gmail.com

---

## 📄 License

This project is licensed under the MIT License.
