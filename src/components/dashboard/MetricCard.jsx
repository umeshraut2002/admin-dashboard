import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Card from '../ui/Card';
import { formatCompactNumber, formatCurrency } from '../../utils/format';

function MetricCard({ metric }) {
  const isRevenue = metric.key === 'revenue';
  const positive = metric.change >= 0;

  return (
    <Card className="overflow-hidden">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
          <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            {isRevenue ? formatCurrency(metric.value) : formatCompactNumber(metric.value)}
          </h3>
        </div>
        <div
          className={`rounded-2xl px-3 py-2 text-sm font-semibold ${
            positive
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
              : 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300'
          }`}
        >
          {positive ? <ArrowUpRight className="inline h-4 w-4" /> : <ArrowDownRight className="inline h-4 w-4" />} {Math.abs(metric.change)}%
        </div>
      </div>
      <div className="mt-5 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400"
          style={{ width: `${Math.min(100, Math.abs(metric.change) * 4 + 28)}%` }}
        />
      </div>
    </Card>
  );
}

export default MetricCard;
