import {ReactNode} from "react";
import {axiosPrivate} from "@/utils/axiosPrivate";
import Sidebar from "@/components/sidebar";

interface LayoutProps {
    children: ReactNode
    className?: string
    sidebar?: boolean
}

export const getUser = () => {
    return axiosPrivate.get('auth/user/')
}

export default function Layout({children, className, sidebar = true}: LayoutProps) {

    return (
        <>
            {sidebar && <Sidebar/>}
            <div className={`${sidebar && 'pl-16'} ${className}`}>
                {children}
            </div>
        </>
    )
}
