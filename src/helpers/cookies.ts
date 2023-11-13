"use server"
import {cookies} from "next/headers";

const setCookies = (name:string, value:string, options?:any) => {
   const cookiesStore = cookies()
    cookiesStore.set({
         name,
         value,
          ...options
    })
}

export default setCookies
