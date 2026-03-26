# SaaS Admin Dashboard

A production-style SaaS admin dashboard frontend built with React. The project includes mock authentication, protected routes, role-based UI, reusable components, analytics charts, a responsive layout, and theme persistence using `localStorage`.

## Developer

**Umesh Raut**

## Tech Stack

- React 18
- React Router v6
- Context API
- Tailwind CSS
- Recharts
- Vite
- localStorage for mock auth and theme persistence

## Features

- Mock login with Admin and User roles
- Protected routing
- Responsive dashboard layout
- Collapsible sidebar
- Dark and light theme toggle
- Analytics cards and charts
- Reusable data table with search, sorting, and pagination
- Toast notifications
- Error, loading, and empty states

## Project Structure

```text
src/
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

## Install and Run

```bash
npm install
npm run dev
```

If you are using PowerShell and `npm` script execution is restricted, use:

```bash
npm.cmd install
npm.cmd run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Mock Login Credentials

- Admin: `admin@saasboard.io` / `Admin@123`
- User: `user@saasboard.io` / `User@123`

## Notes

- This project is frontend-only.
- Data is mocked locally.
- Authentication is simulated and stored in `localStorage`.
