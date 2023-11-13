'use client';
import { SWRConfig } from 'swr'
import swrConfig from "@/config/swr";
export const SWRProvider = ({ children }: {children: React.ReactNode}) => {
    return <SWRConfig value={swrConfig}>{children}</SWRConfig>
};
