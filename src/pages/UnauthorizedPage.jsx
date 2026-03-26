import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

function UnauthorizedPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="panel max-w-xl p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">Restricted Access</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">You do not have permission to view this page.</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          This route is available only to administrators in the mock role-based navigation system.
        </p>
        <Link to="/">
          <Button className="mt-6">Return to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default UnauthorizedPage;
