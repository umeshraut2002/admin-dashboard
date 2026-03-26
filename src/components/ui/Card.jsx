import clsx from './clsx';

function Card({ title, subtitle, action, children, className = '' }) {
  return (
    <section className={clsx('panel animate-fade-in p-5', className)}>
      {(title || subtitle || action) && (
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            {title && <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>}
            {subtitle && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export default Card;
