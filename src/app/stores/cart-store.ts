import { create } from 'zustand';
import { ProductType } from '../types/types';
export const useCartStore = create((set) => ({
    cart: [],
    update: (cart: ProductType[]) => set(() => ({ cart })),
}));
