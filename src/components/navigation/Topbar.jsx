import { Bell, LogOut, Menu, Search } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';

function Topbar({ onOpenMobileSidebar }) {
  const { user, logout } = useAuth();

  return (
    <header className="panel mb-6 flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          className="rounded-2xl border border-slate-200 p-3 text-slate-600 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800 xl:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back</p>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{user?.name}</h2>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <div className="hidden max-w-md flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 md:flex dark:border-slate-800 dark:bg-slate-900">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search dashboards, users, metrics..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
        <ThemeToggle />
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-brand-200 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
        >
          <Bell className="h-5 w-5" />
        </button>
        <div className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-2 text-left dark:border-slate-800 dark:bg-slate-900 md:block">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{user?.name}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
        </div>
        <Button variant="ghost" className="px-3" onClick={logout}>
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
}

export default Topbar;
