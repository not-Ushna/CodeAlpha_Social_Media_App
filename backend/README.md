# Campus Connect - Backend

Express.js REST API server for Campus Connect social platform.

## Quick Start

```bash
npm install
npm run dev
```

API server runs on `http://localhost:4000`

## Project Structure

```
backend/
├── controllers/           # Business logic for each feature
│   ├── authController.js  # Register & login logic
│   ├── postsController.js # Post CRUD operations
│   ├── usersController.js # User profile management
│   ├── commentsController.js # Comment operations
│   └── followController.js  # Follow/unfollow logic
│
├── routes/                # API endpoint definitions
│   ├── auth.js
│   ├── posts.js
│   ├── users.js
│   ├── comments.js
│   └── follow.js
│
├── middleware/
│   └── authMiddleware.js  # JWT token verification
│
├── data/
│   ├── store.js          # Data persistence layer (JSON file operations)
│   └── data.json         # Database file
│
├── server.js             # Express app entry point
└── package.json
```

## API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Posts Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get single post |
| POST | `/api/posts` | Create post |
| PUT | `/api/posts/:id` | Update post |
| DELETE | `/api/posts/:id` | Delete post |
| POST | `/api/posts/:id/like` | Like/unlike post |

### Users Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user profile |
| PUT | `/api/users/:id` | Update profile |

### Comments Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/comments` | Add comment |
| DELETE | `/api/comments/:id` | Delete comment |

### Follow Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/follow/:userId` | Follow user |
| DELETE | `/api/follow/:userId` | Unfollow user |

## Authentication

Uses JWT (JSON Web Tokens) with Bearer tokens:

```
Authorization: Bearer <token>
```

Tokens are returned on successful login and stored in frontend localStorage.

## Dependencies

- **express** - Web framework
- **cors** - Cross-origin requests
- **jsonwebtoken** - JWT authentication
- **bcryptjs** - Password hashing
- **fs-extra** - File system utilities
- **nodemon** - Auto-restart on file changes

## Environment

Runs on port `4000` with CORS enabled for `localhost:5173`

## Data Storage

Uses JSON file (`data.json`) for persistence:
- Users
- Posts
- Comments  
- Sessions

Data is automatically initialized with sample data on first run.
