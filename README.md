
# E-learning Platform
## Introduction
This project is an e-learning platform that allows users to register, login, and manage courses. It includes features for adding, updating, deleting, and retrieving courses. The platform supports file uploads for materials in formats such as PDF, DOC, DOCX, PPT, MP4, AVI, and MOV.

## Features
- User authentication (register and login)
- Course management (add, update, delete, get by ID, get all)
- File upload for course materials
## Technologies Used
- Node.js
- Express.js
- MongoDB
- React.js
- Axios
## Setup
### Backend
```
git clone https://github.com/Dinesh7571/E-learning
cd E-learning
cd backend
```
1. Install dependencies:
```
npm install
```
1. Create a `.env`  file and add your environment variables:makefile 
```
PORT=3000
DB_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
1. Start the backend server:
```
npm start 
```
### Frontend
1. Navigate to the `client`  directory:
```
//if you are already in backend  then
cd ..
//then
cd frontend
```
1. Install dependencies:
```
npm install
```
1. Start the React development server:
```
npm run dev
```
### User Authentication
#### Login
- **Endpoint:** `POST /api/auth/login` 
- **URL:** `http://localhost:3000/api/auth/login` 
- **Body (JSON):**
```
{
  "email": "admin2@gmail.com",
  "password": "12345678"
}
```
- **Response:**
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmJhZjY1M2JlMTlmOTc2NzYyMGVkNDgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjM1MzUxNjgsImV4cCI6MTcyMzUzODc2OH0.dEr-k7aiOzAjy4EwBIxYo6qL9KiAmcrCkfH7gDEH2VI"
}
```
#### Register
- **Endpoint:** `POST /api/auth/register` 
- **URL:** `http://localhost:3000/api/auth/register` 
- **Body (JSON):**
```
{
  "name": "student1",
  "email": "student2@gmail.com",
  "password": "12345678",
  "role": "student"
}
```
- **Response:**
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmJiMGZjMjllYWQ2MTkyYWQwZDc5NzQiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTcyMzUzNTI5OCwiZXhwIjoxNzIzNTM4ODk4fQ.EJPWoSyVaN8JSG5cwn8rSRt7uuZQ_hREilOOe2LU-8c"
}
```
#### 
### Courses Management
#### Add Course
- **Endpoint:** `POST /api/courses/add` 
- **URL:** `http://localhost:3000/api/courses/add` 
- **Authorization:** Bearer Token
- **Body (JSON)**
```
{
  "materials": [
    "postman-cloud:///1ef593c9-1dec-43e0-91da-166aec286a5f",
    "postman-cloud:///1ef593ad-42b7-4dd0-9e54-2f93c9b0f56b"
  ],
  "title": "course2",
  "description": "desc2"
} 
```
- **Response:**
```
{
    "message": "Course added succesfully",
    "course": {
        "title": "course2",
        "description": "desc2",
        "materials": [
            {
                "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
                "filepath": "uploads\\1723535535048.pdf",
                "_id": "66bb10afd249d176eb1db7a9"
            },
            {
                "filename": "Dinesh Resume.pdf",
                "filepath": "uploads\\1723535535062.pdf",
                "_id": "66bb10afd249d176eb1db7aa"
            }
        ],
        "_id": "66bb10afd249d176eb1db7a8",
        "createdAt": "2024-08-13T07:52:15.109Z",
        "updatedAt": "2024-08-13T07:52:15.109Z",
        "__v": 0
    }
}
```
#### Update Course
- **Endpoint:** `PUT /api/courses/<couse _id>` 
- **URL:** `http://localhost:3000/api/<couse _id>` 
- **Authorization:** Bearer Token
- **Body (JSON):**
```
{
  "materials": [
    "postman-cloud:///1ef593c9-1dec-43e0-91da-166aec286a5f",
    "postman-cloud:///1ef593ad-42b7-4dd0-9e54-2f93c9b0f56b"
  ],
  "title": "resume template",
  "description": "react native developer resume template"
}
```
- **Response:**
```
{
    "message": "Course updated",
    "course": {
        "_id": "66bafe4483cc0576737064ca",
        "title": "resume templat",
        "description": "react native developer resume template",
        "materials": [
            {
                "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
                "filepath": "uploads\\1723530820289.pdf",
                "_id": "66bafe4483cc0576737064cb"
            },
            {
                "filename": "Dinesh Resume.pdf",
                "filepath": "uploads\\1723530820291.pdf",
                "_id": "66bafe4483cc0576737064cc"
            },
            {
                "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
                "filepath": "uploads\\1723530851242.pdf",
                "_id": "66bafe6383cc0576737064d4"
            },
          
            
        ],
        "createdAt": "2024-08-13T06:33:40.302Z",
        "updatedAt": "2024-08-13T07:53:39.223Z",
        "__v": 6
    }
}
```
#### 
#### Delete Course
- **Endpoint:** `DELETE /api/courses/<couse _id>` 
- **URL:** `http://localhost:3000/api/<couse _id>` 
- **Authorization:** Bearer Token
- **Body (JSON):**
```
{
  "materials": [
    "postman-cloud:///1ef593c9-1dec-43e0-91da-166aec286a5f",
    "postman-cloud:///1ef593ad-42b7-4dd0-9e54-2f93c9b0f56b"
  ],
  "title": "resume template",
  "description": "react native developer resume template"
}
```
- **Response:**
```
{
    "message": "Course removed"
}
```
#### 
#### Get Course by ID
- **Endpoint:** `GET /api/courses/<couse _id>` 
- **URL:** `http://localhost:3000/<couse _id>` 
- **Authorization:**Bearer Token 
- **Response:**
```
{
    "_id": "66bb11bdd249d176eb1db7ea",
    "title": "course5",
    "description": "desc5",
    "materials": [
        {
            "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
            "filepath": "uploads\\1723535805109.pdf",
            "_id": "66bb11bdd249d176eb1db7eb"
        },
        {
            "filename": "Dinesh Resume.pdf",
            "filepath": "uploads\\1723535805115.pdf",
            "_id": "66bb11bdd249d176eb1db7ec"
        }
    ],
    "createdAt": "2024-08-13T07:56:45.122Z",
    "updatedAt": "2024-08-13T07:56:45.122Z",
    "__v": 0
}
```
#### Get All Courses
- **Endpoint:** `GET /api/courses` 
- **URL:** `http://localhost:3000/api/courses` 
- **Authorization:** Bearer Token 
- **Response:**
```
[
    {
        "_id": "66bafc8678a5bccde816f063",
        "title": "course2",
        "description": "desc2",
        "materials": [
            {
                "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
                "filepath": "uploads\\1723530374405.pdf",
                "_id": "66bafc8678a5bccde816f064"
            },
            {
                "filename": "Dinesh Resume.pdf",
                "filepath": "uploads\\1723530374406.pdf",
                "_id": "66bafc8678a5bccde816f065"
            }
        ],
        "createdAt": "2024-08-13T06:26:14.412Z",
        "updatedAt": "2024-08-13T06:26:14.412Z",
        "__v": 0
    },
    {
        "_id": "66bb10249ead6192ad0d7977",
        "title": "course2",
        "description": "desc2",
        "materials": [
            {
                "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
                "filepath": "uploads\\1723535396802.pdf",
                "_id": "66bb10249ead6192ad0d7978"
            },
            {
                "filename": "Dinesh Resume.pdf",
                "filepath": "uploads\\1723535396812.pdf",
                "_id": "66bb10249ead6192ad0d7979"
            }
        ],
        "createdAt": "2024-08-13T07:49:56.838Z",
        "updatedAt": "2024-08-13T07:49:56.839Z",
        "__v": 0
    },
    {
        "_id": "66bb10afd249d176eb1db7a8",
        "title": "course2",
        "description": "desc2",
        "materials": [
            {
                "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
                "filepath": "uploads\\1723535535048.pdf",
                "_id": "66bb10afd249d176eb1db7a9"
            },
            {
                "filename": "Dinesh Resume.pdf",
                "filepath": "uploads\\1723535535062.pdf",
                "_id": "66bb10afd249d176eb1db7aa"
            }
        ],
        "createdAt": "2024-08-13T07:52:15.109Z",
        "updatedAt": "2024-08-13T07:52:15.109Z",
        "__v": 0
    },
    {
        "_id": "66bb11a5d249d176eb1db7e0",
        "title": "course2",
        "description": "desc2",
        "materials": [
            {
                "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
                "filepath": "uploads\\1723535781070.pdf",
                "_id": "66bb11a5d249d176eb1db7e1"
            },
            {
                "filename": "Dinesh Resume.pdf",
                "filepath": "uploads\\1723535781077.pdf",
                "_id": "66bb11a5d249d176eb1db7e2"
            }
        ],
        "createdAt": "2024-08-13T07:56:21.083Z",
        "updatedAt": "2024-08-13T07:56:21.083Z",
        "__v": 0
    },
    {
        "_id": "66bb11a7d249d176eb1db7e5",
        "title": "course2",
        "description": "desc2",
        "materials": [
            {
                "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
                "filepath": "uploads\\1723535783342.pdf",
                "_id": "66bb11a7d249d176eb1db7e6"
            },
            {
                "filename": "Dinesh Resume.pdf",
                "filepath": "uploads\\1723535783346.pdf",
                "_id": "66bb11a7d249d176eb1db7e7"
            }
        ],
        "createdAt": "2024-08-13T07:56:23.353Z",
        "updatedAt": "2024-08-13T07:56:23.353Z",
        "__v": 0
    },
    {
        "_id": "66bb11bdd249d176eb1db7ea",
        "title": "course5",
        "description": "desc5",
        "materials": [
            {
                "filename": "eLearning – Skill Development And Learning Website-Mern.pdf",
                "filepath": "uploads\\1723535805109.pdf",
                "_id": "66bb11bdd249d176eb1db7eb"
            },
            {
                "filename": "Dinesh Resume.pdf",
                "filepath": "uploads\\1723535805115.pdf",
                "_id": "66bb11bdd249d176eb1db7ec"
            }
        ],
        "createdAt": "2024-08-13T07:56:45.122Z",
        "updatedAt": "2024-08-13T07:56:45.122Z",
        "__v": 0
    }
]
```


