import { useState, useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { NotificationContext } from '../context/NotificationContext';

function LoginPage() {
  const { isAuthenticated, login, isApiMode } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { notify } = useContext(NotificationContext);
  const [form, setForm] = useState({
    email: 'admin@saasboard.io',
    password: 'Admin@123',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const user = await login(form);
      notify({
        title: 'Login successful',
        message: `Signed in as ${user.role}.`,
        type: 'success',
      });

      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch {
      notify({
        title: 'Login failed',
        message: isApiMode ? 'Unable to reach the backend sign-in API.' : 'Unable to complete mock sign-in.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.15fr,0.85fr]">
      <div className="hidden bg-slate-950 p-8 text-white lg:flex lg:flex-col lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-300">SaaSboard</p>
          <h1 className="mt-6 max-w-lg text-5xl font-bold leading-tight text-balance">
            Admin analytics with a modern, production-style UX.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Role-aware routing, responsive layout, theme persistence, charts, table workflows, and reusable components are all built in.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['24.8k', 'Total accounts'],
            ['$182k', 'Monthly revenue'],
            ['99.9%', 'Workspace uptime'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold">{value}</p>
              <p className="mt-2 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500">
            {isApiMode ? 'Spring Boot Authentication' : 'Mock Authentication'}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Sign in to continue</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Use admin@saasboard.io / Admin@123 for Admin or user@saasboard.io / User@123 for User.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email address</span>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-slate-800 dark:bg-slate-900"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</span>
              <input
                name="password"
                type="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-slate-800 dark:bg-slate-900"
              />
            </label>

            <Button type="submit" className="w-full py-3" isLoading={isSubmitting}>
              Access Dashboard
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
