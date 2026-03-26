import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import Card from '../ui/Card';

const COLORS = ['#2f6fed', '#0ea5e9', '#10b981', '#f59e0b'];

function TrafficPieChart({ data }) {
  return (
    <Card title="Traffic Sources" subtitle="User acquisition channel mix">
      <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={64} outerRadius={90} paddingAngle={4}>
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          {data.map((source, index) => (
            <div key={source.name} className="panel-muted flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{source.name}</p>
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">{source.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default TrafficPieChart;
