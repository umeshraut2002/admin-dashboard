import Card from '../components/ui/Card';

function AccessPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Access Controls</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Admin-only workspace governance and security posture.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {[
          ['Single Sign-On', 'Configured', 'SAML connection is active for enterprise workspaces.'],
          ['MFA Enforcement', 'Enabled', 'All admins are required to use multi-factor authentication.'],
          ['Audit Logs', 'Healthy', 'No anomalies detected in the last 30 days.'],
        ].map(([title, badge, description]) => (
          <Card key={title} title={title}>
            <div className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              {badge}
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AccessPage;
