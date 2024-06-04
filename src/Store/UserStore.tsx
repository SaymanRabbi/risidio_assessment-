import { create } from "zustand";

interface UserStore {
    walletConnected: boolean;
    connectWallet: () => void;
    addToWallet: (balance: number, image: string) => void;
     userInfo:{
        name: string;
        balance: number;
     },
    wallet: {
        balance: number;
        image: string;
    }[];
    calculateBalance: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    walletConnected: localStorage.getItem('walletConnected') === 'true' ? true : false,
    connectWallet: () => set((state) => ({ walletConnected: !state.walletConnected })),
    wallet:[
     
    ],
    userInfo:{
        name: 'STV6Q...4Z7WD',
        balance: 0.129
    },
    calculateBalance: () => {
        let balance = 0;
        set((state) => ({
            wallet: state.wallet.map((item) => {
                balance += item.balance;
                return item;
            }),
            userInfo: {
                name: state.userInfo.name,
                balance: balance
            }
        }))
    },
    addToWallet: ( balance, image) => set((state) => ({ wallet: [...state.wallet,
        {
            balance: balance,
            image: image
        }
    ] }))
}));
