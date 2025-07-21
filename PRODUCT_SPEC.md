# React Express Auth - Product Specification

## TeamName
**Team Name**: [Your Team Name Here]

## Overview
**What**: A beginner-friendly financial decision-making web application that helps users find the right credit card based on their financial goals, income, and credit situation. Users can browse curated credit card options, set personal financial goals, and receive simple recommendations tailored to their needs (building credit, cash back, balance transfers, etc.).

**Current State**: This project builds upon a full-stack authentication template application with React frontend and Express backend, featuring user registration, login, and basic user management functionality. The existing authentication system will serve as the foundation for the credit card recommendation platform.

## User Personas

| | Goals | Motivators | Challenges | Sources of Information |
|---|---|---|---|---|
| **Persona 1**<br>**Name**: Sarah<br>**Gender**: Female<br>**Age**: 22<br>**Income**: $35,000<br>**Education**: College Student<br>**Tech Savviness**: 7/10 | Build credit history, find a starter credit card, learn about credit responsibly | Wants to establish good financial habits early, planning for future purchases | Limited credit history, overwhelmed by credit card options, afraid of making mistakes | TikTok, Reddit, friends, online articles |
| **Persona 2**<br>**Name**: Marcus<br>**Gender**: Male<br>**Age**: 28<br>**Income**: $65,000<br>**Education**: Bachelor's Degree<br>**Tech Savviness**: 8/10 | Maximize cash back rewards, optimize spending categories, pay off existing debt | Wants to be financially smart, likes earning rewards on purchases | Has some credit card debt, unsure which rewards cards are worth annual fees | Financial blogs, YouTube, comparison websites |
| **Persona 3**<br>**Name**: Jennifer<br>**Gender**: Female<br>**Age**: 35<br>**Income**: $48,000<br>**Education**: Associate's Degree<br>**Tech Savviness**: 5/10 | Transfer high-interest debt, improve credit score, simplify finances | Wants to save money on interest, reduce financial stress | Carrying balance on multiple cards, confused by transfer terms and fees | Bank websites, financial advisors, family recommendations |

## User Journey Map
**User Journey Map Link**: [Link to your completed User Journey Map]

## Product Requirements (User Stories)

### Must-Haves (Without these features, the application will not be useful)
- As a User, I can create an account and log in securely to save my preferences and goals
- As a User, I can set my financial goal (building credit, cash back, balance transfer, etc.) and basic financial information
- As a User, I can browse and search through available credit cards with key details displayed
- As a User, I can view detailed information about individual credit cards including rates, fees, and requirements
- As a User, I can receive basic recommendations based on my stated goals and financial profile

### Nice-to-Haves (When time is running short, these features will get cut)
- As a User, I can save favorite credit cards to a personal watchlist
- As a User, I can compare multiple credit cards side-by-side
- As a User, I can update my financial goals and see how recommendations change
- As a User, I can access educational content about credit card terms and financial literacy
- As a User, I can filter cards by specific criteria (no annual fee, specific rewards categories, etc.)

## Technical Requirements
**[ Must-Have Product Requirements only ]**

### 1. As a User, I can create an account and log in securely
- **Page**: Sign Up (`/sign-up`), Login (`/login`), User Profile (`/users/:id`)
- **Frontend Components**: Registration form (username, password fields), login form, navigation with auth state, protected route wrapper
- **User Interactions**: Submit registration form → creates account and logs in; Submit login form → authenticates and redirects to dashboard
- **Backend Interactions**: POST `/api/auth/register` (create user), POST `/api/auth/login` (authenticate), GET `/api/auth/me` (check auth status) - uses existing auth system

### 2. As a User, I can set my financial goal and basic financial information
- **Page**: Goal Setup (`/goals`), Dashboard (`/dashboard`)
- **Frontend Components**: Goal selection form (radio buttons/dropdown for goal type), financial info form (income range, credit score range, spending categories), save/update button
- **User Interactions**: Select goal type → enables relevant fields; Submit form → saves user goals and redirects to recommendations
- **Backend Interactions**: POST `/api/user-goals` (create goal), PUT `/api/user-goals/:userId` (update goal) - requires authentication

### 3. As a User, I can browse and search through available credit cards
- **Page**: Credit Cards (`/credit-cards`)
- **Frontend Components**: Search bar, filter dropdown (by card type), card grid/list display, pagination controls, card preview components showing name, bank, key features
- **User Interactions**: Type in search → filters cards by name/bank; Select filter → shows only matching cards; Click card → navigates to detail page
- **Backend Interactions**: GET `/api/credit-cards?search=term&filter=type` (fetch filtered cards), GET `/api/credit-cards` (fetch all cards) - public endpoints

### 4. As a User, I can view detailed information about individual credit cards
- **Page**: Card Details (`/credit-cards/:id`)
- **Frontend Components**: Card detail layout, key features list, rates/fees table, requirements section, back to search button
- **User Interactions**: Click back button → returns to search; Click apply button → redirects to external application (future feature)
- **Backend Interactions**: GET `/api/credit-cards/:id` (fetch single card details) - public endpoint

### 5. As a User, I can receive basic recommendations based on my goals
- **Page**: Recommendations (`/recommendations`), Dashboard (`/dashboard`)
- **Frontend Components**: Recommendations display, "Why this card" explanations, goal-based filtering tags, re-run recommendations button
- **User Interactions**: Click "Get Recommendations" → shows filtered cards; Click "Update Goals" → redirects to goal setup
- **Backend Interactions**: GET `/api/recommendations` (fetch personalized recommendations based on user goals) - requires authentication, uses goal data to filter cards

## Database Schema
**Tables Required:**
- **Users** (existing) - id, username, password, created_at, updated_at
- **CreditCards** - id, name, bank, card_type, annual_fee, intro_apr, regular_apr, rewards_type, requirements, created_at, updated_at
- **UserGoals** - id, user_id, goal_type, income_range, credit_score_range, spending_category, created_at, updated_at

## API Endpoints Summary
**Authentication (existing):**
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/me`
- DELETE `/api/auth/logout`

**New Credit Card Endpoints:**
- GET `/api/credit-cards` - Browse all cards with optional search/filter
- GET `/api/credit-cards/:id` - Get single card details
- POST `/api/credit-cards` - Admin: Add new card
- PUT `/api/credit-cards/:id` - Admin: Update card

**New User Goals Endpoints:**
- GET `/api/user-goals` - Get current user's goals (auth required)
- POST `/api/user-goals` - Create user goals (auth required)
- PUT `/api/user-goals/:userId` - Update user goals (auth required)
- GET `/api/recommendations` - Get personalized recommendations (auth required)

## Project Information
- **Name**: React Express Auth Template
- **Version**: 1.0.0
- **Type**: Full-stack web application template
- **License**: ISC

## Architecture

### Frontend (React)
- **Framework**: React 18.2.0
- **Build Tool**: Vite 4.3.2
- **Routing**: React Router DOM 6.11.2
- **Language**: JavaScript (JSX)
- **Port**: Development server (configurable via Vite)

### Backend (Node.js/Express)
- **Runtime**: Node.js
- **Framework**: Express 4.18.2
- **Database**: PostgreSQL with Knex.js 2.4.2
- **Authentication**: Cookie-based sessions with bcrypt password hashing
- **Port**: 3000 (configurable via PORT environment variable)

### Database
- **Type**: PostgreSQL
- **ORM**: Knex.js
- **Schema**: Users table with username, password, and timestamps

## Core Features

### Authentication System
- **User Registration**: New users can create accounts with username/password
- **User Login**: Existing users can authenticate with credentials
- **Session Management**: Cookie-based session handling with express-session
- **Logout**: Users can securely log out and clear sessions
- **Authentication Check**: Middleware to verify user authentication status

### User Management
- **User Profile**: View current user information
- **User Listing**: Browse all registered users (authenticated users only)
- **User Details**: View individual user profiles (authenticated users only)
- **Profile Updates**: Users can update their own username

### Security Features
- **Password Hashing**: bcrypt for secure password storage
- **Session Encryption**: Encrypted session cookies
- **Route Protection**: Authentication middleware for protected routes
- **Authorization**: Users can only modify their own profiles

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info
- `DELETE /api/auth/logout` - User logout

### User Routes (Protected)
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get user by ID
- `PATCH /api/users/:id` - Update user (own profile only)

## Frontend Pages
- **Home** (`/`) - Landing page
- **Login** (`/login`) - User authentication
- **Sign Up** (`/sign-up`) - User registration
- **Users** (`/users`) - User directory
- **User Profile** (`/users/:id`) - Individual user view
- **404** - Not found page

## Technology Stack

### Frontend Dependencies
- React 18.2.0
- React DOM 18.2.0
- React Router DOM 6.11.2
- Tailwind CSS (for styling)

### Backend Dependencies
- Express 4.18.2
- Knex.js 2.4.2
- PostgreSQL (pg) 8.10.0
- bcrypt 5.1.0
- Express Session 1.17.3
- Cookie Session 2.0.0
- Cookie Parser 1.4.6
- dotenv 16.0.3

### Development Tools
- Vite (frontend build tool)
- ESLint (code linting)
- Nodemon (development server)
- Airbnb Style Guide compliance

### External Data
- GitHub-hosted credit card API (JSON) - for credit card data

## Setup Requirements

### Environment Variables
- `PG_HOST` - PostgreSQL host
- `PG_PORT` - PostgreSQL port
- `PG_USER` - Database username
- `PG_PASS` - Database password
- `PG_DB` - Database name
- `SESSION_SECRET` - Session encryption key
- `PG_CONNECTION_STRING` - Production database connection

### Database Setup
1. Create PostgreSQL database
2. Configure environment variables
3. Run migrations to create tables
4. Seed initial data (optional)

## Build & Deployment

### Development Commands
- `npm run dev` - Start backend development server
- `npm run dev:frontend` - Start frontend development server
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed database with initial data

### Production Commands
- `npm run kickstart` - Full setup (install, build, migrate, seed)
- `npm run build:frontend` - Build frontend for production
- `npm start` - Start production server
- `npm run lint` - Run code linting

## Project Structure
```
react-express-auth/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Route pages
│   │   ├── contexts/       # React context providers
│   │   ├── adapters/       # API communication
│   │   └── utils/          # Utility functions
│   └── dist/               # Built frontend assets
├── server/
│   ├── controllers/        # Route handlers
│   ├── middleware/         # Express middleware
│   ├── models/             # Database models
│   ├── db/                 # Database configuration
│   └── index.js            # Server entry point
└── package.json            # Project configuration
```

## Key Architectural Decisions
- **Monorepo Structure**: Frontend and backend in same repository
- **Cookie-based Authentication**: Secure session management
- **Protected Routes**: Authentication middleware pattern
- **Model-based Database Access**: Knex.js with custom model classes
- **Context-based State Management**: React Context for user state
- **Adapter Pattern**: API abstraction layer in frontend

## Extension Opportunities
- Email verification
- Password reset functionality
- Role-based access control
- API rate limiting
- Social media authentication
- User profile pictures
- Real-time features with WebSockets

## Quality Assurance
- ESLint configuration with Airbnb style guide
- Database migrations for schema versioning
- Environment-based configuration
- Error handling middleware
- Input validation on API endpoints