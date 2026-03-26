import { CheckCircle2, CircleAlert, Info, X } from 'lucide-react';

const toastIcons = {
  success: CheckCircle2,
  error: CircleAlert,
  info: Info,
};

const toastStyles = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100',
  error: 'border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-100',
  info: 'border-brand-100 bg-brand-50 text-brand-900 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-100',
};

function ToastContainer({ notifications, onDismiss }) {
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-[60] flex w-full max-w-sm flex-col gap-3">
      {notifications.map((notification) => {
        const Icon = toastIcons[notification.type] || Info;

        return (
          <div
            key={notification.id}
            className={`pointer-events-auto animate-fade-in rounded-2xl border p-4 shadow-soft ${toastStyles[notification.type]}`}
          >
            <div className="flex gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0" />
              <div className="flex-1">
                <p className="font-semibold">{notification.title}</p>
                <p className="mt-1 text-sm opacity-80">{notification.message}</p>
              </div>
              <button type="button" onClick={() => onDismiss(notification.id)} className="opacity-70 transition hover:opacity-100">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ToastContainer;
