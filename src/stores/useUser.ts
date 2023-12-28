import Cookies from "js-cookie";
import { create } from 'zustand';

type TToken = {
    username: string;
    password: string
}

type TUser = {
    loggedIn: boolean;
    login: (value: TToken) => void;
    logout: () => void;
}

export const useUser = create<TUser>((set) => ({
    loggedIn: false,
    login: (token: TToken) => {
        Cookies.set('token', JSON.stringify(token));
        set(() => ({ loggedIn: true }))
    },
    logout: () => {
        Cookies.remove('token')
        set(() => ({ loggedIn: false }))

    },
})) 