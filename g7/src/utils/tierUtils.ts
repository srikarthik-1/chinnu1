import { Customer, Tier, TierSettings } from '../types';

// Tier utility functions
export const getTierBySpend = (customer: Customer, settings: TierSettings): Tier => {
    if (customer.totalSpent >= settings.platinum.minSpend) return 'Platinum';
    if (customer.totalSpent >= settings.gold.minSpend) return 'Gold';
    if (customer.totalSpent >= settings.silver.minSpend) return 'Silver';
    return 'Bronze';
};

export const getTierByPoints = (customer: Customer, settings: TierSettings): Tier => {
    if (customer.points >= settings.platinum.minPoints) return 'Platinum';
    if (customer.points >= settings.gold.minPoints) return 'Gold';
    if (customer.points >= settings.silver.minPoints) return 'Silver';
    return 'Bronze';
};

export const getCustomerTier = (customer: Customer, settings: TierSettings): Tier => {
    if (customer.totalSpent >= settings.platinum.minSpend || customer.points >= settings.platinum.minPoints) return 'Platinum';
    if (customer.totalSpent >= settings.gold.minSpend || customer.points >= settings.gold.minPoints) return 'Gold';
    if (customer.totalSpent >= settings.silver.minSpend || customer.points >= settings.silver.minPoints) return 'Silver';
    return 'Bronze';
};
