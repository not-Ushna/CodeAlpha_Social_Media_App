# Campus Connect

> A vibrant social media platform built for university students to share notes, ask questions, announce events, and connect with peers.

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react) ![Express](https://img.shields.io/badge/Express-4.18-90C53F?logo=express) ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js) ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)

## Overview

Campus Connect is a full-stack social network designed specifically for university students. Similar to Reddit, Threads, and Discord, it enables seamless sharing of academic resources, collaboration, and community engagement through a modern, intuitive interface.

**Key Philosophy**: No generic dashboards or corporate designs—just a clean, student-focused platform built with authentic Indian university culture.

---

## Features

- **User Authentication**: Secure registration and login with JWT-based authentication
- **Post Management**: Create, read, update, and delete posts with categories (Notes, Events, Assignments, Questions)
- **Comments & Discussions**: Reply to posts with nested comments
- **Follow System**: Build your network by following other students
- **Like & Engagement**: Like posts to bookmark favorites and boost visibility
- **User Profiles**: View student profiles with bio, posts, and follower stats
- **Smart Feed**: Sort posts by recent activity or trending (most liked)
- **Search**: Find students and posts with advanced filtering
- **Responsive Design**: Mobile-friendly interface with smooth animations

---

## Tech Stack

### Frontend
- **React** 18.2 - UI library with hooks
- **Vite** 5.4 - Lightning-fast build tool
- **React Router** 6.14 - Client-side routing
- **Context API** - Global state management for authentication

### Backend
- **Express.js** 4.18 - REST API framework
- **Node.js** - JavaScript runtime
- **JWT** - Secure token-based authentication
- **bcryptjs** - Password hashing
- **JSON File Storage** - Persistent data layer

---

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/not-Ushna/CodeAlpha_Social_Media_App.git
cd CodeAlpha_Social_Media_App
```

2. **Set up Backend**
```bash
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:4000`

3. **Set up Frontend** (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

---

## Project Structure

```
Campus Connect/
├── backend/
│   ├── controllers/          # Request handlers (auth, posts, users, comments, follow)
│   ├── routes/               # API route definitions
│   ├── middleware/           # JWT authentication middleware
│   ├── data/
│   │   ├── store.js         # Data persistence layer
│   │   └── data.json        # JSON file database
│   ├── server.js            # Express app entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/           # React page components (Home, Profile, Search, etc.)
    │   ├── components/      # Reusable components (PostCard, Sidebar, Comments)
    │   ├── context/         # AuthContext for global auth state
    │   ├── services/        # API client with request helpers
    │   ├── App.jsx          # Main app component with routing
    │   └── index.css        # Global styles with design system
    ├── public/
    │   └── avatars/         # User avatar SVG files
    ├── index.html
    └── package.json
```

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - User login with credentials

### Posts
- `GET /api/posts` - Get all posts (with sorting/filtering)
- `GET /api/posts/:id` - Get single post with comments
- `POST /api/posts` - Create new post (requires auth)
- `PUT /api/posts/:id` - Update post (author only)
- `DELETE /api/posts/:id` - Delete post (author only)
- `POST /api/posts/:id/like` - Toggle like on post

### Comments
- `POST /api/comments` - Add comment to post
- `DELETE /api/comments/:id` - Delete comment (author only)

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile (requires auth)

### Follow
- `POST /api/follow/:userId` - Follow a user
- `DELETE /api/follow/:userId` - Unfollow a user

---

## Design System

- **Accent Color**: Purple (`#7c3aed`) - Primary action and highlights
- **Background**: Light Gray (`#f5f7fa`) - Main background
- **Typography**: Semantic sizing with clear visual hierarchy
- **Spacing**: Consistent 8px grid system
- **Interactions**: Smooth transitions and hover effects

---

## Sample Users

The app comes with pre-populated sample data:

| Username | Name | Department |
|----------|------|-----------|
| `priya_sharma` | Priya Sharma | Computer Science (Sem 5) |
| `arjun_patel` | Arjun Patel | Physics (Sem 4) |

**Test Password**: Any password works for sample accounts in development

---

## Security Notes

- JWT secret is hardcoded for development (`campus-secret`)
- Passwords are hashed using bcryptjs
- CORS is configured for `localhost:5173`
- For production, use environment variables and update CORS configuration

---

## Pages

1. **Home** - Feed of all posts with sorting options
2. **Profile** - User profile with stats and posts
3. **Create Post** - Form to publish new content
4. **Post Details** - Single post view with comment thread
5. **Search** - Find users and posts
6. **Edit Post** - Modify existing posts
7. **Login** - User authentication
8. **Register** - New account creation
9. **Notifications** - Placeholder for future notifications

---

## Deployment

The project can be deployed to services like:
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Heroku, Railway, Render

Remember to:
- Set environment variables for JWT secret, CORS origin, and database connection
- Update API base URL in frontend for production
- Use a production-grade database instead of JSON files

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

Built as CodeAlpha Task 2: Social Media Platform

---

## Contributing

Contributions are welcome! Feel free to fork, make improvements, and submit pull requests.

---

**Made for university students**
