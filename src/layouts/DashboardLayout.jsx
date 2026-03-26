import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Topbar from '../components/navigation/Topbar';

function DashboardLayout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen p-4 lg:p-6">
      <div className="mx-auto flex max-w-[1600px] gap-6">
        <Sidebar
          isOpen={sidebarExpanded}
          onToggle={() => setSidebarExpanded((current) => !current)}
          mobileOpen={mobileSidebarOpen}
          onMobileClose={() => setMobileSidebarOpen(false)}
        />
        <main className="min-w-0 flex-1">
          <Topbar onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
