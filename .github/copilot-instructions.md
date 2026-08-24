# Copilot Instructions - Personal Finance Tracker

## 1. Project Overview
This repository contains a personal finance tracker applications

The application is designed to help users:
- Track income and Expenses
- Create, update, delete transactions and organize into categories, either income or expense
- Monitor account balances
- Create and manage budgets
- Create and manage goals
- View financial summaries and reports

The project should be treated as a production-quality software engineering project, even while it is being developed as an MVP.

---

## 2. Technology Stack

### Backend
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL

### Frontend
- Nextjs
- React
- TypeScript
- TailwindCSS
- HTML
- CSS
- JavaScript

Do not introduce additional frameworks or libraries unless there is a clear technical reason.

## 3. General Engineering Principles

Prioritize:
1. Correctness
2. Security
3. Maintainability
4. Simplicity
5. Testability
6. Performance

Do not over-engineer simple features.

Prefer clear and maintainable code over clever or unnecessarily abstract solutions.

Before introducing a new abstraction, determine whether the existing architecture already provides a suitable solution.

---

## 4. Before Modifying Code

Before implementing a feature or fixing a bug:

1. Inspect the relevant code.
2. Understand the current architecture.
3. Search for existing implementations that solve similar problems.
4. Check related tests.
5. Identify affected components.
6. Consider security and data integrity.

Do not immediately start writing code without understanding the surrounding implementation.

---

## 5. Architecture
Use the following backend structure:

Controller
    ↓
Service
    ↓
Repository
    ↓
Database

Controllers are responsible for HTTP/API concerns.

Services are responsible for business logic.

Repositories are responsible for database access.

Do not place substantial business logic inside controllers.

Do not access repositories directly from controllers unless there is a documented architectural reason.

---

## 6. API Design

Build REST APIs using conventional HTTP semantics.

Use:

- GET for retrieving resources
- POST for creating resources
- PUT/PATCH for updating resources
- DELETE for deleting resources

Use appropriate HTTP status codes.

Validate incoming request data.

Do not expose internal database entities directly through API responses.

Use request and response DTOs.

API responses should not expose:
- Password hashes
- Internal security information
- Database implementation details
- Sensitive user information

---

## 7. Authentication and Authorization

Security is a primary requirement because the application handles financial information.

Never trust user IDs, account IDs, transaction IDs, or similar ownership information supplied by the client.

Always determine the authenticated user from the server-side authentication context.

Users must only be able to access resources they are authorized to access.

For example:

A request for transaction ID `123` must verify that transaction `123` belongs to the authenticated user.

Do not rely solely on frontend restrictions for authorization.

Authorization must be enforced on the backend.

---

## 8. Database

Use PostgreSQL as the primary relational database.

Use migrations for database schema changes.

Do not make destructive schema changes without explicitly identifying the consequences.

Use appropriate:
- Primary keys
- Foreign keys
- Constraints
- Indexes
- Unique constraints

Maintain referential integrity.

Avoid storing derived data when it can safely and efficiently be calculated from authoritative data.

---

## 9. Financial Data

Treat monetary values carefully.

Do not use floating-point types for monetary calculations.

Use an appropriate decimal representation such as Java `BigDecimal`.

Financial calculations must be deterministic and predictable.

Do not silently round monetary values.

Define rounding behavior explicitly where required.

---

## 10. Validation and Error Handling

Validate all external input.

Do not assume that frontend validation is sufficient.

Handle expected errors explicitly.

Return consistent API error responses.

Do not expose stack traces, SQL errors, internal class names, or sensitive implementation details to clients.

Unexpected errors should be logged appropriately while returning a safe response to the client.

---

## 11. Testing

New functionality should include appropriate tests.

Prioritize testing:

- Business logic
- Authentication
- Authorization
- Financial calculations
- Validation
- Important API behavior
- Edge cases

Do not write tests only to increase code coverage.

Tests should verify meaningful behavior.

When modifying existing functionality, check whether existing tests need to be updated.

---

## 12. Code Changes

Keep changes focused.

Do not modify unrelated files or features.

Do not rewrite working code merely for stylistic preference.

When a change affects multiple layers, explain why each layer needs modification.

Prefer small, reviewable changes.

---

## 13. Dependencies

Do not add a dependency simply because it makes implementation slightly easier.

Before adding a dependency:

1. Check whether the existing stack can solve the problem.
2. Consider maintenance and security implications.
3. Consider whether the dependency is necessary.
4. Explain why it is being introduced.

Never introduce a dependency without understanding what it does.

---

## 14. Secrets and Configuration

Never hard-code:

- Passwords
- API keys
- JWT secrets
- Database credentials
- Access tokens
- Private keys

Use environment variables or appropriate secret-management mechanisms.

Never commit secrets to Git.

---

## 15. Git

Keep commits focused and meaningful.

Do not modify unrelated files.

Do not rewrite Git history unless explicitly requested.

Do not commit generated files, secrets, local configuration, or unnecessary build artifacts.

---

## 16. AI Agent Behavior

When working on a task:

1. Understand the task.
2. Inspect the existing implementation.
3. Identify the affected components.
4. Explain significant architectural decisions.
5. Implement the smallest appropriate change.
6. Run relevant tests.
7. Review the resulting changes for regressions and security issues.
8. Summarize what changed.

If requirements are ambiguous, identify the ambiguity instead of silently making a major architectural decision.

Do not invent requirements.

Do not replace existing architecture without a clear reason.

---

## 17. Human Approval

The developer is responsible for final architectural and security decisions.

For significant changes, provide a short explanation of:

- What is changing
- Why it is changing
- Alternatives considered
- Potential risks

Do not make major architectural changes without developer approval.

---

## 18. Definition of Done

A feature is not considered complete simply because the code compiles.

Where applicable, completion should include:

- Implementation
- Validation
- Error handling
- Tests
- Security/authorization checks
- Documentation updates
- Successful build
- Successful relevant tests
- Review of the final diff