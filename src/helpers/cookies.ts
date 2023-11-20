'use server'
import { cookies } from 'next/headers'

const cookiesStore = cookies()
export const setCookies = (name: string, value: string, options?: any) => {
  cookiesStore.set({
    name,
    value,
    ...options
  })
}
export const getCookies = (name: string) => {
  return cookiesStore.get(name)
}
export const deleteCookies = (name: string) => {
  cookiesStore.delete(name)
}
