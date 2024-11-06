import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: 0,
    update: (cart) => set(() => ({ cart })),
}));
