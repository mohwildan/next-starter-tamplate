import { create } from 'zustand'
import useSWRMutation, {type SWRMutationResponse} from 'swr/mutation'
import {setCookies} from "@/helpers/cookies";
import apiClient from "@/config/axios";




interface LoginStore {
    isLogin: boolean,
    login: (id:number) => SWRMutationResponse,
    logout: () => void,
}

const authStore = create<LoginStore>((set) => ({
    isLogin: false,
    login: (id) => useSWRMutation('/auth/login', async (url, {arg}) => {
        const response = await apiClient.post(url, arg)
        const data = await response.data
        setCookies('xx-access-token', data.token)
        localStorage.setItem('user', JSON.stringify(data))
        set({ isLogin: true })
        return data
    }),
    logout: () => set({ isLogin: false })
}))

export default authStore
