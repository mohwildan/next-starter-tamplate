import { create } from 'zustand'
import useSWR,{type SWRResponse} from 'swr'
import useSWRMutation, {type SWRMutationResponse} from 'swr/mutation'
import {setCookies} from "@/helpers/cookies";




interface LoginStore {
    isLogin: boolean,
    login: (id:number) => SWRMutationResponse,
    logout: () => void,
}

const loginStore = create<LoginStore>((set) => ({
    isLogin: false,
    login: (id) => useSWRMutation('https://dummyjson.com/auth/login', async (url, {arg}) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
            })
        })
        const data = await response.json()
        setCookies('xx-access-token', data.token)
        return data
    }),
    logout: () => set({ isLogin: false })
}))

export default loginStore
