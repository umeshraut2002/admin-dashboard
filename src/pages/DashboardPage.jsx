import { useEffect, useState } from 'react';
import MetricCard from '../components/dashboard/MetricCard';
import RevenueLineChart from '../components/dashboard/RevenueLineChart';
import UserGrowthBarChart from '../components/dashboard/UserGrowthBarChart';
import TrafficPieChart from '../components/dashboard/TrafficPieChart';
import Card from '../components/ui/Card';
import Loader from '../components/ui/Loader';
import Skeleton from '../components/ui/Skeleton';
import { overviewMetrics, revenueSeries, trafficSources, userGrowthSeries } from '../data/analytics';
import { useAuth } from '../hooks/useAuth';
import { formatCurrency } from '../utils/format';

function DashboardPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-3">
          {[1, 2, 3].map((key) => (
            <Skeleton key={key} className="h-36 rounded-3xl" />
          ))}
        </div>
        <Loader />
      </div>
    );
  }

  const visibleMetrics = user?.role === 'Admin' ? overviewMetrics : overviewMetrics.filter((metric) => metric.key !== 'revenue');

  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-3">
        {visibleMetrics.map((metric) => (
          <MetricCard key={metric.key} metric={metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr,1fr]">
        <RevenueLineChart data={revenueSeries} />
        <TrafficPieChart data={trafficSources} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr,0.75fr]">
        <UserGrowthBarChart data={userGrowthSeries} />
        <Card title="Workspace Summary" subtitle="Operational highlights">
          <div className="space-y-4">
            <div className="panel-muted p-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">Quarterly Revenue Goal</p>
              <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(250000)}</p>
              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-300">73% completed</p>
            </div>
            <div className="panel-muted p-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">Current Role View</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{user?.role}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {user?.role === 'Admin'
                  ? 'You can access analytics, reports, users, and workspace controls.'
                  : 'Your dashboard is streamlined for day-to-day monitoring and settings.'}
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default DashboardPage;
