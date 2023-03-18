import {ReactNode} from "react";
import {axiosPrivate} from "@/utils/axiosPrivate";
import Sidebar from "@/components/sidebar";

interface LayoutProps {
    children: ReactNode
    className?: string
}

export const getUser = () => {
    return axiosPrivate.get('auth/user/')
}

export default function Layout({children, className}: LayoutProps) {

    return (
        <>
            <Sidebar/>
            <div className={`px-16 ${className}`}>
                {children}
            </div>
        </>
    )
}
