import { create } from "zustand";

interface UserStore {
    walletConnected: boolean;
    connectWallet: () => void;
    addToWallet: (balance: number, image: string) => void;
     userInfo:{
        name: string;
     },
    wallet: {
        balance: number;
        image: string;
    }[];
}

export const useUserStore = create<UserStore>((set) => ({
    walletConnected: localStorage.getItem('walletConnected') === 'true' ? true : false,
    connectWallet: () => set((state) => ({ walletConnected: !state.walletConnected })),
    wallet:[
        {
            balance: 0,
            image: ''
        }
    ],
    userInfo:{
        name: 'STV6Q...4Z7WD'
    },
    addToWallet: ( balance, image) => set((state) => ({ wallet: [...state.wallet,
        {
            balance: balance,
            image: image
        }
    ] }))
}));
