import clsx from './clsx';

function Button({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  isLoading = false,
  ...props
}) {
  const variants = {
    primary:
      'bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500 dark:bg-brand-500 dark:hover:bg-brand-600',
    secondary:
      'bg-slate-900 text-white hover:bg-slate-700 focus-visible:ring-slate-500 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400 dark:text-slate-200 dark:hover:bg-slate-800',
    danger:
      'bg-rose-500 text-white hover:bg-rose-600 focus-visible:ring-rose-500',
  };

  return (
    <button
      type={type}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:ring-offset-slate-950',
        variants[variant],
        className,
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Loading
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
