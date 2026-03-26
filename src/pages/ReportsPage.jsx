import Card from '../components/ui/Card';
import EmptyState from '../components/ui/EmptyState';

function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Reports</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Executive snapshots and scheduled reporting workflows.
        </p>
      </div>

      <Card title="Scheduled Reports" subtitle="Delivery performance and pending exports">
        <EmptyState
          title="No reports scheduled yet"
          description="This area is intentionally left as a production-style empty state for future reporting integrations."
        />
      </Card>
    </div>
  );
}

export default ReportsPage;
