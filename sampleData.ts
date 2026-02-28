
import { Customer } from './types';

export const SAMPLE_CUSTOMERS: Customer[] = [
  {
    mobile: '9876543210',
    name: 'Aisha Khan',
    pin: '9876',
    points: 150,
    totalSpent: 2500,
    history: [
      { date: '2023-10-15T10:00:00Z', bill: 1200, finalBill: 1200, points: 50, pointsUsed: 0 },
      { date: '2023-11-20T14:30:00Z', bill: 1300, finalBill: 1300, points: 100, pointsUsed: 0 },
    ],
  },
  {
    mobile: '8765432109',
    name: 'Benjamin Carter',
    pin: '8765',
    points: 620,
    totalSpent: 12500,
    history: [
      { date: '2023-09-05T18:00:00Z', bill: 5000, finalBill: 5000, points: 200, pointsUsed: 0 },
      { date: '2023-10-28T12:10:00Z', bill: 3500, finalBill: 3500, points: 150, pointsUsed: 0 },
      { date: '2023-11-30T19:45:00Z', bill: 4000, finalBill: 4000, points: 270, pointsUsed: 0 },
    ],
  },
  {
    mobile: '7654321098',
    name: 'Chloe Davis',
    pin: '7654',
    points: 55,
    totalSpent: 850,
    history: [
      { date: '2023-11-12T09:20:00Z', bill: 850, finalBill: 850, points: 55, pointsUsed: 0 },
    ],
  },
  {
    mobile: '6543210987',
    name: 'David Rodriguez',
    pin: '6543',
    points: 5500,
    totalSpent: 62000,
    history: [
      { date: '2023-08-01T11:00:00Z', bill: 25000, finalBill: 25000, points: 1500, pointsUsed: 0 },
      { date: '2023-10-10T13:00:00Z', bill: 15000, finalBill: 15000, points: 1000, pointsUsed: 0 },
      { date: '2023-11-25T15:00:00Z', bill: 22000, finalBill: 22000, points: 3000, pointsUsed: 0 },
    ],
  },
    {
    mobile: '5432109876',
    name: 'Eleanor Vance',
    pin: '5432',
    points: 85,
    totalSpent: 1800,
    history: [
        { date: '2023-11-02T16:00:00Z', bill: 1800, finalBill: 1800, points: 85, pointsUsed: 0 },
    ],
  },
  {
    mobile: '4321098765',
    name: 'Frank Miller',
    pin: '4321',
    points: 350,
    totalSpent: 7800,
    history: [
      { date: '2024-01-10T14:00:00Z', bill: 3200, finalBill: 3200, points: 150, pointsUsed: 0 },
      { date: '2024-02-20T11:30:00Z', bill: 4600, finalBill: 4600, points: 200, pointsUsed: 0 },
    ],
  },
  {
    mobile: '3210987654',
    name: 'Grace Lee',
    pin: '3210',
    points: 1200,
    totalSpent: 22000,
    history: [
      { date: '2023-12-15T19:00:00Z', bill: 12000, finalBill: 12000, points: 600, pointsUsed: 0 },
      { date: '2024-02-05T12:00:00Z', bill: 10000, finalBill: 10000, points: 600, pointsUsed: 0 },
    ],
  },
  {
    mobile: '2109876543',
    name: 'Henry Wilson',
    pin: '2109',
    points: 8000,
    totalSpent: 95000,
    history: [
      { date: '2024-01-25T17:45:00Z', bill: 45000, finalBill: 45000, points: 4000, pointsUsed: 0 },
      { date: '2024-02-15T18:30:00Z', bill: 50000, finalBill: 50000, points: 4000, pointsUsed: 0 },
    ],
  }
];
