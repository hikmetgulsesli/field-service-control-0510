export type AppScreen =
  | 'dashboard'
  | 'create'
  | 'detail'
  | 'insights'
  | 'settings'
  | 'profile'
  | 'error'
  | 'empty';

export type ServiceStatus = 'ready' | 'in-progress' | 'blocked' | 'completed';

export interface ServiceRecord {
  id: string;
  serviceId: string;
  customerName: string;
  location: string;
  status: ServiceStatus;
  assignedTechId: string | null;
  priority: 'low' | 'medium' | 'high' | 'critical';
  lastUpdate: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
  partsRequired?: string[];
}

export interface Technician {
  id: string;
  name: string;
  initials: string;
  avatarUrl?: string;
  sector: string;
  isAvailable: boolean;
}

export interface UserProfileData {
  name: string;
  role: string;
  sector: string;
  avatarUrl?: string;
  email: string;
  phone: string;
  status: 'online' | 'away' | 'offline';
}

export interface AppSettings {
  notificationsEnabled: boolean;
  darkMode: boolean;
  autoRefresh: boolean;
  refreshIntervalSeconds: number;
  defaultFilterStatus: ServiceStatus | 'all';
}

export interface StorageError {
  code: string;
  message: string;
  timestamp: string;
}

export type StorageStatus = 'ok' | 'loading' | 'error' | 'corrupt';

export interface AppState {
  screen: AppScreen;
  previousScreen: AppScreen | null;
  activePanel: string | null;
  records: ServiceRecord[];
  technicians: Technician[];
  profile: UserProfileData;
  settings: AppSettings;
  selectedRecordId: string | null;
  searchQuery: string;
  statusFilter: ServiceStatus | 'all';
  priorityFilter: string | 'all';
  techFilter: string | 'all';
  lastNotice?: string | null;
  lastError: StorageError | null;
  storageStatus: StorageStatus;
}

export const STORAGE_KEY = 'field-service-control-v1';
export const STORAGE_VERSION = 1;

export interface PersistedData {
  version: number;
  records: ServiceRecord[];
  technicians: Technician[];
  profile: UserProfileData;
  settings: AppSettings;
  selectedRecordId: string | null;
}

export const DEFAULT_SETTINGS: AppSettings = {
  notificationsEnabled: true,
  darkMode: true,
  autoRefresh: true,
  refreshIntervalSeconds: 60,
  defaultFilterStatus: 'all',
};

const avatarSvg = (label: string, bg: string, fg: string) =>
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="${bg}"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="${fg}" font-family="Arial,sans-serif" font-size="22" font-weight="700">${label}</text></svg>`;

export const DEFAULT_PROFILE: UserProfileData = {
  name: 'Marcus Vance',
  role: 'Senior Admin',
  sector: 'Sector 7G',
  email: 'm.vance@fieldcontrol.ops',
  phone: '+1 (555) 019-2847',
  status: 'online',
  avatarUrl: avatarSvg('MV', '%23344054', '%23e0e7ff'),
};

export const DEMO_TECHNICIANS: Technician[] = [
  {
    id: 'tech-1',
    name: 'J. Miller',
    initials: 'JM',
    sector: 'Sector 4',
    isAvailable: true,
    avatarUrl: avatarSvg('JM', '%232d4a3e', '%23e7fff2'),
  },
  {
    id: 'tech-2',
    name: 'A. Chen',
    initials: 'AC',
    sector: 'Sector 2',
    isAvailable: true,
    avatarUrl: avatarSvg('AC', '%2337486b', '%23dbeafe'),
  },
  {
    id: 'tech-3',
    name: 'R. Patel',
    initials: 'RP',
    sector: 'Sector 7',
    isAvailable: false,
  },
  {
    id: 'tech-4',
    name: 'L. Okafor',
    initials: 'LO',
    sector: 'Sector 1',
    isAvailable: true,
  },
];

export const DEMO_RECORDS: ServiceRecord[] = [
  {
    id: 'rec-1',
    serviceId: 'SRV-8902',
    customerName: 'Nexus Industries',
    location: 'Sector 4, Building A',
    status: 'blocked',
    assignedTechId: 'tech-1',
    priority: 'critical',
    lastUpdate: '10:42 AM',
    createdAt: '2024-05-10T08:00:00Z',
    updatedAt: '2024-05-10T10:42:00Z',
    notes: 'Hydraulic pump failure on Line 3. Replacement part on order.',
    partsRequired: ['HP-4400-X', 'Seal-Kit-B'],
  },
  {
    id: 'rec-2',
    serviceId: 'SRV-8905',
    customerName: 'OmniCorp Logistics',
    location: 'Distribution Center West',
    status: 'in-progress',
    assignedTechId: 'tech-2',
    priority: 'high',
    lastUpdate: '09:15 AM',
    createdAt: '2024-05-10T07:30:00Z',
    updatedAt: '2024-05-10T09:15:00Z',
    notes: 'Conveyor belt misalignment. Technician on site performing calibration.',
  },
  {
    id: 'rec-3',
    serviceId: 'SRV-8911',
    customerName: 'Global Dynamics',
    location: 'Main CampusHQ',
    status: 'ready',
    assignedTechId: null,
    priority: 'medium',
    lastUpdate: '08:30 AM',
    createdAt: '2024-05-10T08:30:00Z',
    updatedAt: '2024-05-10T08:30:00Z',
    notes: 'HVAC filter replacement scheduled.',
  },
  {
    id: 'rec-4',
    serviceId: 'SRV-8912',
    customerName: 'Stark Resourcing',
    location: 'Facility 9',
    status: 'ready',
    assignedTechId: null,
    priority: 'low',
    lastUpdate: '08:05 AM',
    createdAt: '2024-05-10T08:05:00Z',
    updatedAt: '2024-05-10T08:05:00Z',
    notes: 'Quarterly preventive maintenance check.',
  },
];
