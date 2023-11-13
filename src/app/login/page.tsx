"use client"
import {Button} from "@mantine/core";
import {useRouter} from "next/navigation";
import loginStore from "@/stores/api/auth";

export default function Page() {
const router = useRouter()
    const loginApiStore = loginStore()
    const {trigger} = loginApiStore.login(1)
    const handlePostLogin =async () => {
    try {
        trigger({
            username: '',
            password: '',
        } as any)
    }catch (e) {
console.log(e)
    }
    }
    return (
        <>
            <Button onClick={handlePostLogin}>Login</Button>
        </>
    )
}
