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

export const DEFAULT_PROFILE: UserProfileData = {
  name: 'Marcus Vance',
  role: 'Senior Admin',
  sector: 'Sector 7G',
  email: 'm.vance@fieldcontrol.ops',
  phone: '+1 (555) 019-2847',
  status: 'online',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDs6uE81zDY65NhdTVBG5E9GIjZToTYLO9bU8rS9BT3MT3TK4-MwsIl8lDAYa-IBHlXZqmLHIEjr0ARskeICJQQuGPOYo-I2-XaePpNIgziB1fXPEVSAMERIl28oy43WLjhEWIvBw26HsN7R_wvUuZxId6Y949RVOxry82z-SXcADkEdJN2Ml4sczjfYH24onbd5SbwJJ3hFHllSZZV3IY1T6s2l4OkS8uxNiZTzYhyU0Mz_sFybyPDMqbl_cs7UGY-nwYELT3feUHo',
};

export const DEMO_TECHNICIANS: Technician[] = [
  {
    id: 'tech-1',
    name: 'J. Miller',
    initials: 'JM',
    sector: 'Sector 4',
    isAvailable: true,
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGOI3yneUZ-jy9WCgxIaXu_ycgWqekFiBOY75LgCLgqtzEbcXdqGzi0VtixyNjP6eN2nQU7AQAnMuecIC0sdlih1YFgJfLGAZ-SuQ8H-_Ey5yRxn24uzf_F4HGPd7ybDHxODirENvfcJJsULy6GXnjFgouwXWfKO2mlURm4pvAtGn_qY4rorjyFcmOZBXceI6QmG7PiCHhCNcqCCUwkslTIUEAexvyztSD3Ip7g2pCfcTHYOA-X7YQ-Nxs2kpdBkwGcPhJMfKkUkYT',
  },
  {
    id: 'tech-2',
    name: 'A. Chen',
    initials: 'AC',
    sector: 'Sector 2',
    isAvailable: true,
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkShUieNFbdxh4CUmon1FoBzLzXYmlFiPXa6PyQmL7dMMA3ZCbLbwUG47AHP96NCvx1wIEF2ETKkEmTKYrWz896heEvEKAz2Tju17gmm-OEPI11bySm2Ts22_gjSCUlNJ7QH2u1IHDjOZReLAmbuVMqtoJDjCmpbuchchCAvva3_L0yuTV2GT3WfDQaa3CmCMUWRKMLGE-N0d8lkNUn8Z__VL_cs6RHucCCL5imfUQkv6hjfsgbd6t5Wh5tTfdwYs6AhK2RPPm17MY',
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
