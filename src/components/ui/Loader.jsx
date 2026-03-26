function Loader({ label = 'Loading dashboard data...' }) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-100 border-t-brand-500 dark:border-slate-700 dark:border-t-brand-500" />
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}

export default Loader;
