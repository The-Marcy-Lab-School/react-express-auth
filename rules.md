# Project Rules & Development Guidelines
## Credit Card Recommendation Platform

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Team**: [Your Team Name Here]

---

## Table of Contents
1. [Code Style & Standards](#code-style--standards)
2. [Project Structure](#project-structure)
3. [Git Workflow](#git-workflow)
4. [Naming Conventions](#naming-conventions)
5. [Component Guidelines](#component-guidelines)
6. [API Design Rules](#api-design-rules)
7. [Database Conventions](#database-conventions)
8. [Testing Requirements](#testing-requirements)
9. [Security Guidelines](#security-guidelines)
10. [Performance Standards](#performance-standards)
11. [Documentation Requirements](#documentation-requirements)
12. [Code Review Process](#code-review-process)

---

## Code Style & Standards

### 1.1 General Principles
- **Readability First**: Code should be self-documenting and easy to understand
- **Consistency**: Follow established patterns throughout the codebase
- **Simplicity**: Prefer simple, clear solutions over clever, complex ones
- **Maintainability**: Write code that's easy to modify and extend

### 1.2 JavaScript/JSX Standards
```javascript
// ✅ GOOD: Clear, descriptive variable names
const userFinancialGoals = getUserGoals(userId);
const creditCardRecommendations = generateRecommendations(userFinancialGoals);

// ❌ BAD: Unclear abbreviations
const ufg = getUserGoals(uid);
const ccr = genRecs(ufg);

// ✅ GOOD: Consistent function naming (camelCase)
const handleUserLogin = async (credentials) => {
  try {
    const user = await loginUser(credentials);
    setCurrentUser(user);
  } catch (error) {
    handleError(error);
  }
};

// ✅ GOOD: Clear component structure
const CreditCardList = ({ cards, onCardSelect, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;
  
  return (
    <div className="credit-card-grid">
      {cards.map(card => (
        <CreditCardItem 
          key={card.id}
          card={card}
          onSelect={() => onCardSelect(card)}
        />
      ))}
    </div>
  );
};
```

### 1.3 ESLint Configuration
- **Airbnb Style Guide**: Follow Airbnb JavaScript style guide
- **React Hooks Rules**: Enforce React hooks rules
- **Import Order**: Organize imports consistently
- **No Console Logs**: Remove console.log statements before production

### 1.4 File Organization
```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Button, Input, etc.)
│   ├── forms/          # Form-specific components
│   └── layout/         # Layout components (Header, Footer, etc.)
├── pages/              # Route-level components
├── contexts/           # React context providers
├── adapters/           # API communication layer
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
└── styles/             # Global styles and CSS modules
```

---

## Project Structure

### 2.1 Directory Naming
- **Lowercase with hyphens**: `credit-card-list`, `user-profile`
- **Descriptive names**: Avoid abbreviations unless universally understood
- **Consistent hierarchy**: Follow established folder structure

### 2.2 File Naming
- **React Components**: PascalCase (e.g., `CreditCardList.jsx`)
- **Utilities/Helpers**: camelCase (e.g., `formatCurrency.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)
- **CSS Files**: kebab-case (e.g., `credit-card-styles.css`)

### 2.3 Import Organization
```javascript
// 1. React and third-party libraries
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Internal components
import CreditCardItem from '../components/CreditCardItem';
import LoadingSpinner from '../components/common/LoadingSpinner';

// 3. Utilities and helpers
import { formatCurrency } from '../utils/formatters';
import { CREDIT_CARD_TYPES } from '../constants/cardTypes';

// 4. Styles
import './CreditCardList.css';
```

---

## Git Workflow

### 3.1 Branch Naming Convention
```
feature/user-goals-setup
feature/credit-card-browsing
bugfix/login-validation-error
hotfix/security-patch
```

### 3.2 Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(auth): add user registration with email validation
fix(cards): resolve credit card filtering bug
docs(api): update API endpoint documentation
refactor(components): extract reusable card display component
```

### 3.3 Pull Request Guidelines
- **Title**: Clear, descriptive title
- **Description**: Explain what, why, and how
- **Screenshots**: Include UI changes when applicable
- **Testing**: Describe how to test the changes
- **Breaking Changes**: Clearly mark any breaking changes

---

## Naming Conventions

### 4.1 Variables and Functions
```javascript
// ✅ GOOD: Descriptive names
const creditCardRecommendations = [];
const handleUserGoalUpdate = () => {};
const isUserAuthenticated = true;

// ❌ BAD: Unclear names
const cards = [];
const update = () => {};
const auth = true;
```

### 4.2 Database Fields
```sql
-- ✅ GOOD: Clear, descriptive field names
user_id, goal_type, credit_score_range, annual_fee

-- ❌ BAD: Unclear abbreviations
uid, gt, csr, af
```

### 4.3 API Endpoints
```javascript
// ✅ GOOD: RESTful, descriptive endpoints
GET /api/credit-cards
GET /api/credit-cards/:id
POST /api/user-goals
PUT /api/user-goals/:userId

// ❌ BAD: Unclear endpoints
GET /api/cards
GET /api/card/:id
POST /api/goals
PUT /api/goal/:id
```

---

## Component Guidelines

### 5.1 Component Structure
```jsx
// ✅ GOOD: Organized component structure
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CreditCardRecommendation = ({ userGoals, onCardSelect }) => {
  // 1. State declarations
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Effects
  useEffect(() => {
    loadRecommendations();
  }, [userGoals]);

  // 3. Event handlers
  const handleCardSelect = (card) => {
    onCardSelect(card);
  };

  // 4. Helper functions
  const loadRecommendations = async () => {
    try {
      setIsLoading(true);
      const data = await fetchRecommendations(userGoals);
      setRecommendations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 5. Render logic
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="recommendations-container">
      {recommendations.map(card => (
        <CreditCardItem
          key={card.id}
          card={card}
          onSelect={handleCardSelect}
        />
      ))}
    </div>
  );
};

// 6. PropTypes
CreditCardRecommendation.propTypes = {
  userGoals: PropTypes.object.isRequired,
  onCardSelect: PropTypes.func.isRequired,
};

export default CreditCardRecommendation;
```

### 5.2 Component Naming
- **PascalCase**: All component names must use PascalCase
- **Descriptive**: Names should clearly indicate the component's purpose
- **Consistent**: Use consistent naming patterns across similar components

### 5.3 Props Guidelines
- **Destructuring**: Always destructure props in function parameters
- **Default Values**: Provide sensible defaults for optional props
- **PropTypes**: Always define PropTypes for component props
- **Children**: Use children prop for component composition when appropriate

---

## API Design Rules

### 6.1 RESTful Conventions
```javascript
// ✅ GOOD: RESTful API design
GET    /api/credit-cards          // List all cards
GET    /api/credit-cards/:id      // Get specific card
POST   /api/credit-cards          // Create new card (admin)
PUT    /api/credit-cards/:id      // Update card (admin)
DELETE /api/credit-cards/:id      // Delete card (admin)

GET    /api/user-goals            // Get user's goals
POST   /api/user-goals            // Create user goals
PUT    /api/user-goals/:userId    // Update user goals
```

### 6.2 Response Format
```javascript
// ✅ GOOD: Consistent response format
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Chase Freedom Unlimited",
    "bank": "Chase",
    "annual_fee": 0
  },
  "message": "Credit card retrieved successfully"
}

// Error response
{
  "success": false,
  "error": {
    "code": "CARD_NOT_FOUND",
    "message": "Credit card with ID 123 not found"
  }
}
```

### 6.3 Error Handling
- **HTTP Status Codes**: Use appropriate status codes (200, 201, 400, 401, 404, 500)
- **Error Messages**: Provide clear, actionable error messages
- **Validation**: Validate all input data before processing
- **Logging**: Log errors for debugging but don't expose sensitive information

---

## Database Conventions

### 7.1 Table Naming
```sql
-- ✅ GOOD: Plural, descriptive table names
users, credit_cards, user_goals

-- ❌ BAD: Singular or unclear names
user, card, goal
```

### 7.2 Column Naming
```sql
-- ✅ GOOD: snake_case for column names
user_id, credit_score_range, annual_fee, created_at

-- ❌ BAD: camelCase or unclear names
userId, creditScoreRange, annualFee, createdAt
```

### 7.3 Data Types
- **IDs**: Use UUID or auto-incrementing integers consistently
- **Timestamps**: Always include `created_at` and `updated_at` columns
- **Booleans**: Use `is_` prefix for boolean columns
- **Foreign Keys**: Use `_id` suffix for foreign key columns

### 7.4 Migrations
- **Descriptive Names**: Use clear, descriptive migration names
- **Version Control**: Always commit migration files
- **Rollback**: Ensure migrations can be rolled back safely
- **Testing**: Test migrations on development data before production

---

## Testing Requirements

### 8.1 Test Coverage
- **Minimum Coverage**: 80% code coverage for all new features
- **Critical Paths**: 100% coverage for authentication and payment flows
- **Edge Cases**: Test error conditions and boundary cases
- **Integration Tests**: Test API endpoints and database interactions

### 8.2 Test Naming
```javascript
// ✅ GOOD: Descriptive test names
describe('CreditCardRecommendation', () => {
  it('should display loading spinner while fetching recommendations', () => {
    // test implementation
  });

  it('should show error message when API call fails', () => {
    // test implementation
  });

  it('should filter recommendations based on user goals', () => {
    // test implementation
  });
});
```

### 8.3 Testing Guidelines
- **Arrange-Act-Assert**: Follow AAA pattern in test structure
- **Mocking**: Mock external dependencies and API calls
- **Cleanup**: Clean up test data after each test
- **Isolation**: Tests should be independent and not rely on other tests

---

## Security Guidelines

### 9.1 Authentication & Authorization
- **Password Hashing**: Always hash passwords using bcrypt
- **Session Management**: Use secure, encrypted session cookies
- **Route Protection**: Protect sensitive routes with authentication middleware
- **Input Validation**: Validate and sanitize all user inputs

### 9.2 Data Protection
- **Sensitive Data**: Never log or expose sensitive user information
- **Environment Variables**: Store secrets in environment variables
- **HTTPS**: Always use HTTPS in production
- **CORS**: Configure CORS properly for cross-origin requests

### 9.3 SQL Injection Prevention
- **Parameterized Queries**: Always use parameterized queries with Knex.js
- **Input Sanitization**: Sanitize all user inputs before database queries
- **ORM Usage**: Use Knex.js ORM methods instead of raw SQL when possible

---

## Performance Standards

### 10.1 Frontend Performance
- **Bundle Size**: Keep JavaScript bundle under 500KB
- **Lazy Loading**: Implement lazy loading for routes and components
- **Image Optimization**: Optimize images and use appropriate formats
- **Caching**: Implement proper caching strategies

### 10.2 Backend Performance
- **Database Queries**: Optimize database queries and use indexes
- **Response Times**: API endpoints should respond within 200ms
- **Connection Pooling**: Use connection pooling for database connections
- **Caching**: Implement caching for frequently accessed data

### 10.3 Monitoring
- **Error Tracking**: Monitor and track application errors
- **Performance Metrics**: Track response times and resource usage
- **User Analytics**: Monitor user behavior and application usage
- **Alerts**: Set up alerts for critical errors and performance issues

---

## Documentation Requirements

### 11.1 Code Documentation
```javascript
/**
 * Generates personalized credit card recommendations based on user goals
 * @param {Object} userGoals - User's financial goals and profile
 * @param {string} userGoals.goalType - Type of financial goal
 * @param {string} userGoals.incomeRange - User's income range
 * @param {string} userGoals.creditScoreRange - User's credit score range
 * @returns {Promise<Array>} Array of recommended credit cards
 */
const generateRecommendations = async (userGoals) => {
  // Implementation
};
```

### 11.2 API Documentation
- **Endpoint Documentation**: Document all API endpoints with examples
- **Request/Response Examples**: Provide clear examples of requests and responses
- **Error Codes**: Document all possible error codes and messages
- **Authentication**: Document authentication requirements for each endpoint

### 11.3 README Files
- **Project Setup**: Clear instructions for setting up the development environment
- **API Reference**: Link to API documentation
- **Contributing Guidelines**: Instructions for contributing to the project
- **Deployment**: Instructions for deploying the application

---

## Code Review Process

### 12.1 Review Checklist
- [ ] Code follows established style guidelines
- [ ] All tests pass
- [ ] No console.log statements in production code
- [ ] Proper error handling implemented
- [ ] Security considerations addressed
- [ ] Performance impact considered
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)

### 12.2 Review Guidelines
- **Constructive Feedback**: Provide constructive, actionable feedback
- **Code Quality**: Focus on code quality, not personal preferences
- **Security Review**: Pay special attention to security implications
- **Performance Review**: Consider performance impact of changes
- **Documentation**: Ensure documentation is updated with changes

### 12.3 Approval Process
- **Minimum Reviewers**: At least 2 team members must approve
- **Security Changes**: Security-related changes require additional review
- **Breaking Changes**: Breaking changes require team discussion
- **Merge Strategy**: Use squash and merge for feature branches

---

## Enforcement

### 13.1 Automated Checks
- **ESLint**: Automated linting on all pull requests
- **Pre-commit Hooks**: Run tests and linting before commits
- **CI/CD Pipeline**: Automated testing and deployment checks
- **Code Coverage**: Enforce minimum code coverage requirements

### 13.2 Manual Reviews
- **Code Reviews**: All code must be reviewed before merging
- **Architecture Reviews**: Major architectural changes require team review
- **Security Reviews**: Security-sensitive changes require security review
- **Performance Reviews**: Performance-critical changes require performance review

### 13.3 Continuous Improvement
- **Regular Reviews**: Regularly review and update these rules
- **Team Feedback**: Incorporate team feedback into rule updates
- **Industry Standards**: Stay updated with industry best practices
- **Tool Updates**: Update tools and configurations as needed

---

## Conclusion

These rules and guidelines are designed to ensure code quality, maintainability, and consistency across the project. They should be treated as living documents that evolve with the project and team needs.

**Remember**: The goal is to write code that is not only functional but also readable, maintainable, and secure. When in doubt, prioritize clarity and simplicity over cleverness. 