import { BarChart3, LayoutDashboard, Settings, ShieldCheck, Users } from 'lucide-react';

export const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/', roles: ['Admin', 'User'] },
  { label: 'Users', icon: Users, path: '/users', roles: ['Admin'] },
  { label: 'Reports', icon: BarChart3, path: '/reports', roles: ['Admin'] },
  { label: 'Settings', icon: Settings, path: '/settings', roles: ['Admin', 'User'] },
  { label: 'Access', icon: ShieldCheck, path: '/access', roles: ['Admin'] },
];
