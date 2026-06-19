# Campus Connect - Frontend

React + Vite UI for Campus Connect social platform.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## 📋 Project Structure

```
frontend/
├── src/
│   ├── pages/              # Page components (full page views)
│   │   ├── Home.jsx        # Feed with posts
│   │   ├── Profile.jsx     # User profile
│   │   ├── CreatePost.jsx  # Post creation form
│   │   ├── PostDetails.jsx # Single post with comments
│   │   ├── Search.jsx      # Search users & posts
│   │   ├── EditPost.jsx    # Edit existing post
│   │   ├── Login.jsx       # Login form
│   │   ├── Register.jsx    # Registration form
│   │   └── Notifications.jsx # Notifications page
│   │
│   ├── components/         # Reusable UI components
│   │   ├── PostCard.jsx    # Post display card
│   │   ├── CommentList.jsx # Comment thread
│   │   ├── PostForm.jsx    # Post form (create/edit)
│   │   ├── SidebarLeft.jsx # Navigation sidebar
│   │   └── SidebarRight.jsx # Trending sidebar
│   │
│   ├── context/
│   │   └── AuthContext.jsx # Global auth state (Context API)
│   │
│   ├── services/
│   │   └── api.js         # Centralized API client
│   │
│   ├── App.jsx            # Main app component with routes
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
│
├── public/
│   └── avatars/           # User avatar SVG files
│
├── index.html
└── vite.config.js         # Vite configuration
```

## 🎨 Design System

- **Color Scheme**
  - Accent: Purple (`#7c3aed`) - Primary actions
  - Background: Light Gray (`#f5f7fa`) - Main surface
  - Muted: `#7a8290` - Secondary text
  - Border: `#e5e7eb` - Dividers

- **Typography**
  - Font Family: System fonts (Segoe UI, Roboto, sans-serif)
  - Sizes: 12px (small) → 24px (heading)
  - Weight: 400 (regular), 600 (semibold)

- **Spacing**: 8px base grid system

- **Components**
  - Cards with subtle shadows
  - Buttons with hover/active states
  - Smooth transitions (150-200ms)
  - Responsive design for mobile

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Feed of posts |
| Login | `/login` | User authentication |
| Register | `/register` | New account creation |
| Profile | `/profile/:id` | User profile & posts |
| Create Post | `/create` | New post form |
| Post Details | `/posts/:id` | Single post with comments |
| Edit Post | `/posts/:id/edit` | Edit existing post |
| Search | `/search` | Find users & posts |
| Notifications | `/notifications` | Notification center |

## 🔄 State Management

Uses **React Context API** for authentication:

```javascript
const { user, register, login, logout } = useAuth()
```

Persists to localStorage for session management.

## 📡 API Integration

Centralized API client in `src/services/api.js`:

```javascript
// Example usage
const posts = await api.posts.list()
const user = await api.auth.login(username, password)
```

Auto-injects JWT bearer tokens in headers.

## 📦 Dependencies

- **react** - UI library
- **react-router-dom** - Client-side routing
- **vite** - Build tool & dev server

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Features

✅ Responsive design (mobile-first)
✅ Client-side routing with React Router
✅ Global auth state with Context API
✅ Real-time updates from backend
✅ Form validation and error handling
✅ Smooth animations and transitions
✅ Clean, modern UI following design system
