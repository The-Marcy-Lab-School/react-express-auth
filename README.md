# CardFinder - AI Exemplar

> A modern, minimalist credit card recommendation platform that helps users find the perfect credit card match for their lifestyle and financial goals.

## Team

  - **AI Assistant**: **Lead Developer, UI/UX Designer**
  - **Human Developer**: **Project Manager, Code Reviewer**

## Project Overview

CardFinder is a sophisticated web application that demonstrates modern React development practices with a focus on:

- **Modern UI/UX Design**: Clean, minimalist interface with smooth animations
- **Responsive Design**: Optimized for all screen sizes
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance**: No-scroll pages with modal content for better UX
- **Code Quality**: Well-structured, maintainable React code
- **Component Architecture**: Reusable shadcn/ui components

## Table of Contents
- [Getting Started](#getting-started)
  - [Build and Start Commands](#build-and-start-commands)
  - [Technologies Used](#technologies-used)
- [Project Proposal](#project-proposal)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Style Guide](#style-guide)

## Getting Started

Before you can actually start building, you need to create a database and configure your server's environment variables to connect with it.

- Create a database with a name of your choice.
- In the `server/` folder, copy the `.env.template` and name it `.env`.
- Update the `.env` variables to match your Postgres database information (username, password, database name)
- Replace the `SESSION_SECRET` value with your own random string. This is used to encrypt the cookie's `userId` value.
  - Use a tool like [https://randomkeygen.com/](https://randomkeygen.com/) to help generate the secret.
- Your `.env` file should look something like this:

```sh
# Replace these variables with your Postgres server information
# These values are used by knexfile.js to connect to your postgres server
PG_HOST='127.0.0.1'
PG_PORT=5432
PG_USER='itsamemario'
PG_PASS='12345'
PG_DB='my_react_express_auth_database'

# Replace session secret with your own random string!
# This is used by handleCookieSessions to hash your cookie data 
SESSION_SECRET='db8c3cffebb2159b46ee38ded600f437ee080f8605510ee360758f6976866e00d603d9b3399341b0cd37dfb8e599fff3'

# When you deploy your database on render, this string can be used to test SQL queries to the deployed database.
# Leave this value blank until you deploy your database.
PG_CONNECTION_STRING=''
```

### Build and Start Commands

From within the root directory, run the following commands to install dependencies and run the project locally:

```sh
# Install dependencies for both frontend and backend
cd frontend && npm install && cd ../server && npm install

# Run database migrations and seeds
cd server && npm run migrate && npm run seed

# Start both development servers
# Terminal 1: Backend server
cd server && npm run dev

# Terminal 2: Frontend server  
cd frontend && npm run dev
```

### Development URLs
- **Frontend**: http://localhost:5173/
- **Backend API**: http://localhost:3000/

## Technologies Used

### Backend
- Node.js
- Express
- PostgreSQL
- Knex.js (ORM)
- bcrypt (password hashing)
- Cookie-based sessions

### Frontend
- React 18.2.0
- React Router DOM v6.11.2
- Tailwind CSS v3.4.0
- shadcn/ui components (Button, Card, Input, Label, Modal)
- Radix UI primitives (Label, Slot)
- Lucide React icons v0.294.0
- Vite v4.3.2 (build tool)
- Class Variance Authority (CVA)
- Tailwind Merge & CLSX utilities

### Development Tools
- ESLint (Airbnb style guide)
- PostCSS
- Autoprefixer

## Key Features

### 🎨 Modern Design System
- **Two-Column Layout**: Dark left panel with benefits, light right panel with forms
- **Soft Edges**: Rounded corners (rounded-xl) throughout the application
- **Gradient Buttons**: Beautiful gradient backgrounds with hover effects
- **Glass Morphism**: Subtle backdrop blur effects and transparency
- **Responsive Typography**: Scales appropriately across all devices

### 📱 User Experience
- **No-Scroll Pages**: All content fits on screen without scrolling
- **Modal Content**: Additional information displayed in elegant modals
- **Smooth Animations**: CSS transitions and hover effects
- **Loading States**: Proper error handling and loading indicators
- **Accessibility**: Skip links, focus indicators, and semantic HTML

### 🔧 Technical Architecture
- **Component-Based**: Reusable UI components with consistent styling
- **State Management**: React Context for user authentication
- **Route Protection**: Automatic redirects for authenticated users
- **Error Handling**: Graceful error states and user feedback
- **Code Organization**: Well-structured, maintainable codebase

## Project Structure

```
react-express-auth/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # shadcn/ui components
│   │   │   ├── SiteHeadingAndNav.jsx
│   │   │   └── UpdateUsernameForm.jsx
│   │   ├── pages/            # Route components
│   │   ├── contexts/         # React Context providers
│   │   ├── adapters/         # API communication
│   │   ├── lib/              # Utility functions
│   │   └── styles/           # CSS files
│   └── package.json
└── server/                   # Express backend
```

## Project Proposal

See [PROPOSAL.md](PROPOSAL.md) for more details on the project proposal.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Style Guide

This project adheres to the [Airbnb Style Guide](https://github.com/airbnb/javascript) with additional React-specific conventions:

- **Component Naming**: PascalCase for components, camelCase for functions
- **File Organization**: Grouped imports by type (components, hooks, utilities)
- **Constants**: Extract hardcoded data to constants at the top of files
- **Component Extraction**: Create reusable components for repeated patterns
- **Comments**: Use descriptive comments for complex logic sections
