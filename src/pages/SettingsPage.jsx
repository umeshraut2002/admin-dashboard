import { useContext, useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { NotificationContext } from '../context/NotificationContext';
import { useAuth } from '../hooks/useAuth';

function SettingsPage() {
  const { user } = useAuth();
  const { notify } = useContext(NotificationContext);
  const [preferences, setPreferences] = useState({
    weeklySummary: true,
    productUpdates: false,
  });

  const togglePreference = (key) => {
    setPreferences((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Manage profile details and workspace preferences.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr,1fr]">
        <Card title="Profile" subtitle="Current session details">
          <div className="space-y-4">
            <div className="panel-muted p-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">Name</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-white">{user?.name}</p>
            </div>
            <div className="panel-muted p-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-white">{user?.email}</p>
            </div>
            <div className="panel-muted p-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">Role</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-white">{user?.role}</p>
            </div>
          </div>
        </Card>

        <Card title="Notifications" subtitle="Persisted local UI preferences">
          <div className="space-y-4">
            {[
              ['weeklySummary', 'Weekly summary emails'],
              ['productUpdates', 'Product update notifications'],
            ].map(([key, label]) => (
              <label key={key} className="panel-muted flex items-center justify-between gap-4 p-4">
                <span className="font-medium text-slate-700 dark:text-slate-200">{label}</span>
                <input
                  type="checkbox"
                  checked={preferences[key]}
                  onChange={() => togglePreference(key)}
                  className="h-5 w-5 rounded border-slate-300 text-brand-500 focus:ring-brand-500"
                />
              </label>
            ))}
            <Button
              onClick={() =>
                notify({
                  title: 'Preferences saved',
                  message: 'Your local settings have been updated.',
                  type: 'success',
                })
              }
            >
              Save Preferences
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SettingsPage;
