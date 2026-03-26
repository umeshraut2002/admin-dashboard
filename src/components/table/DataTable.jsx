import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import EmptyState from '../ui/EmptyState';
import clsx from '../ui/clsx';

function DataTable({ columns, data, title, subtitle }) {
  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filteredData = useMemo(() => {
    const normalizedSearch = search.toLowerCase();

    return data.filter((row) =>
      columns.some((column) => String(row[column.key]).toLowerCase().includes(normalizedSearch)),
    );
  }, [columns, data, search]);

  const sortedData = useMemo(() => {
    const sorted = [...filteredData];
    sorted.sort((first, second) => {
      const firstValue = first[sortConfig.key];
      const secondValue = second[sortConfig.key];

      if (firstValue < secondValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }

      if (firstValue > secondValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }

      return 0;
    });

    return sorted;
  }, [filteredData, sortConfig]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const paginatedData = sortedData.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (key) => {
    setSortConfig((current) => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  return (
    <Card title={title} subtitle={subtitle}>
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-md items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search users, roles, plans..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing {paginatedData.length} of {sortedData.length} records
        </p>
      </div>

      {paginatedData.length === 0 ? (
        <EmptyState
          title="No matching users"
          description="We could not find any records for the current search. Clear the filter and try again."
          actionLabel="Clear Search"
          onAction={() => setSearch('')}
        />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} className="px-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      <button type="button" onClick={() => handleSort(column.key)} className="flex items-center gap-1">
                        {column.label}
                        {sortConfig.key === column.key &&
                          (sortConfig.direction === 'asc' ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          ))}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row) => (
                  <tr key={row.id} className="panel-muted">
                    {columns.map((column) => (
                      <td key={column.key} className="px-4 py-4 text-sm text-slate-700 dark:text-slate-200">
                        {column.render ? (
                          column.render(row[column.key], row)
                        ) : (
                          <span
                            className={clsx(
                              column.key === 'status' &&
                                {
                                  Active: 'rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
                                  Pending: 'rounded-full bg-amber-100 px-3 py-1 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
                                  Suspended: 'rounded-full bg-rose-100 px-3 py-1 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
                                  Inactive: 'rounded-full bg-slate-200 px-3 py-1 text-slate-700 dark:bg-slate-700 dark:text-slate-200',
                                }[row[column.key]],
                            )}
                          >
                            {row[column.key]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Page {page} of {totalPages}
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>
                Previous
              </Button>
              <Button
                variant="ghost"
                disabled={page === totalPages}
                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}

export default DataTable;
