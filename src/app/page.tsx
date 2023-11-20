'use client'
import { Button, Text } from '@mantine/core'
import { useRouter } from 'next/navigation'

import { create } from 'zustand'
import authStore from '@/stores/api/auth'
type Store = {
  count: number
  inc: () => void
}

const useStore = create<Store>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 }))
}))
export default function Home() {
  const { count, inc } = useStore()
  const authApiStore = authStore()
  const handleLogout = async () => {}
  const { trigger } = authApiStore.login(count)
  const handleLogin = async () => {
    await trigger({
      email: '',
      password: ''
    } as any)
  }

  return (
    <>
      <Text>Hi Am wildan</Text>
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleLogout}>Logout</Button>
      <Button onClick={inc}>{count},ini</Button>
    </>
  )
}
