# SaaS Admin Dashboard

A production-style SaaS admin dashboard built with a React frontend and a Java Spring Boot backend. The project includes authentication, protected routes, role-based UI, reusable components, analytics charts, a responsive layout, and MySQL/AWS RDS-ready persistence.

## Developer

**Umesh Raut**

## Tech Stack

- React 18
- React Router v6
- Context API
- Tailwind CSS
- Recharts
- Vite
- Java 17+ / Spring Boot 3
- Spring Data JPA
- MySQL / AWS RDS

## Features

- Login API with Admin and User roles
- Protected routing
- Responsive dashboard layout
- Collapsible sidebar
- Dark and light theme toggle
- Analytics cards and charts
- Reusable data table with search, sorting, and pagination
- Toast notifications
- Error, loading, and empty states
- AWS RDS-ready backend configuration
- Docker Compose stack for frontend + backend + MySQL

## Project Structure

```text
backend/
  src/main/java/
  src/main/resources/
src/
  api/
  components/
  context/
  data/
  hooks/
  layouts/
  pages/
  routes/
  utils/
```

## Clone Process

```bash
git clone <your-repository-url>
cd admin-dashboard
```

## Frontend Only

```bash
npm install
npm run dev
```

If you are using PowerShell and `npm` script execution is restricted, use:

```bash
npm.cmd install
npm.cmd run dev
```

Without `VITE_API_BASE_URL`, the frontend keeps using local mock data.

## Spring Boot Backend

The backend lives in `backend/` and exposes:

- `POST /api/auth/login`
- `GET /api/users`
- `GET /api/health`

### Local MySQL

Run a MySQL database locally, then start the backend with these environment variables:

```bash
AWS_RDS_HOST=localhost
AWS_RDS_PORT=3306
AWS_RDS_DB_NAME=admin_dashboard
AWS_RDS_USERNAME=admin
AWS_RDS_PASSWORD=admin123
APP_CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

If Maven is installed:

```bash
cd backend
mvn spring-boot:run
```

### Frontend to Backend Connection

Create a `.env` from `.env.example`:

```bash
VITE_API_BASE_URL=http://localhost:8080
```

Then run the frontend normally:

```bash
npm install
npm run dev
```

## AWS RDS Configuration

For AWS RDS, point the backend at your RDS MySQL instance by setting:

```bash
AWS_RDS_HOST=<your-rds-endpoint>
AWS_RDS_PORT=3306
AWS_RDS_DB_NAME=admin_dashboard
AWS_RDS_USERNAME=<rds-username>
AWS_RDS_PASSWORD=<rds-password>
AWS_RDS_SSL=true
APP_CORS_ALLOWED_ORIGINS=https://your-frontend-domain
```

You can also override everything with `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, and `SPRING_DATASOURCE_PASSWORD`.

## Docker Compose

The repo now includes a full local stack:

```bash
docker compose up --build
```

This starts:

- React frontend on `http://localhost:5173`
- Spring Boot backend on `http://localhost:8080`
- MySQL on `localhost:3306`

## Production Build

```bash
npm run build
npm run preview
```

## Demo Login Credentials

- Admin: `admin@saasboard.io` / `Admin@123`
- User: `user@saasboard.io` / `User@123`

## Notes

- Frontend auth state is still stored in `localStorage` for session persistence.
- When `VITE_API_BASE_URL` is not set, the UI falls back to local mock data.
- The Spring Boot backend seeds starter users automatically into MySQL/RDS when the `app_users` table is empty.
