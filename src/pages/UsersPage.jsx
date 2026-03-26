import { useContext, useMemo, useState } from 'react';
import DataTable from '../components/table/DataTable';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import { NotificationContext } from '../context/NotificationContext';
import { mockUsers } from '../data/mockUsers';

function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { notify } = useContext(NotificationContext);

  const columns = useMemo(
    () => [
      {
        key: 'name',
        label: 'Name',
        render: (_, row) => (
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">{row.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{row.email}</p>
          </div>
        ),
      },
      { key: 'role', label: 'Role' },
      { key: 'plan', label: 'Plan' },
      { key: 'status', label: 'Status' },
      { key: 'location', label: 'Location' },
      { key: 'joinedAt', label: 'Joined' },
    ],
    [],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Users</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Manage workspace members with sorting, search, filters, and pagination.
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Invite User</Button>
      </div>

      <DataTable title="Workspace Members" subtitle="Live mock table with reusable sorting and pagination" columns={columns} data={mockUsers} />

      <Modal
        isOpen={isModalOpen}
        title="Invite a New User"
        confirmLabel="Send Invite"
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          setIsModalOpen(false);
          notify({
            title: 'Invitation queued',
            message: 'A mock invite was sent successfully.',
            type: 'success',
          });
        }}
      >
        Invite flows are mocked in this frontend-only build. In a real app this modal would post to your identity or workspace API.
      </Modal>
    </div>
  );
}

export default UsersPage;
