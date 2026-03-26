import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="panel max-w-xl p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          The page you requested does not exist in this dashboard route map.
        </p>
        <Link to="/">
          <Button className="mt-6">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
