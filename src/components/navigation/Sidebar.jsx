import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import clsx from '../ui/clsx';
import { navItems } from '../../data/navItems';
import { useAuth } from '../../hooks/useAuth';

function Sidebar({ isOpen, onToggle, mobileOpen, onMobileClose }) {
  const { user } = useAuth();
  const visibleItems = navItems.filter((item) => item.roles.includes(user?.role));

  const sidebarContent = (
    <div
      className={clsx(
        'panel flex h-full flex-col p-4 transition-all duration-300',
        isOpen ? 'w-72' : 'w-24',
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className={clsx('overflow-hidden transition-all', isOpen ? 'w-auto opacity-100' : 'w-0 opacity-0')}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">SaaSboard</p>
          <h1 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">Control Center</h1>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="rounded-2xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          {isOpen ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
        </button>
      </div>

      <nav className="mt-8 flex-1 space-y-2">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onMobileClose}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition',
                  isActive
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white',
                )
              }
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className={clsx('transition-all', isOpen ? 'opacity-100' : 'hidden opacity-0')}>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="rounded-3xl bg-slate-900 p-4 text-white dark:bg-slate-800">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Role</p>
        <p className="mt-2 text-lg font-semibold">{user?.role}</p>
        <p className={clsx('mt-1 text-sm text-slate-300', !isOpen && 'hidden')}>
          {user?.role === 'Admin' ? 'Full access enabled' : 'Limited workspace access'}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden xl:block">{sidebarContent}</aside>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex xl:hidden">
          <button type="button" className="absolute inset-0 bg-slate-950/40" onClick={onMobileClose} />
          <div className="relative z-10 h-full p-4">{sidebarContent}</div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
