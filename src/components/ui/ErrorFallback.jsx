import Button from './Button';

function ErrorFallback({ title = 'Something went wrong', description, onRetry }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="panel max-w-lg p-8 text-center">
        <div className="inline-flex rounded-2xl bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">
          Error Fallback
        </div>
        <h1 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          {description || 'Please refresh the page or retry the last action.'}
        </p>
        {onRetry && (
          <Button className="mt-6" onClick={onRetry}>
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}

export default ErrorFallback;
