import {ReactNode} from "react";
import {axiosPrivate} from "@/utils/axiosPrivate";

interface LayoutProps {
    children: ReactNode
}

export const getUser = () => {
    return axiosPrivate.get('auth/user/')
}

export default function Layout({children}: LayoutProps) {

    return (
        <div className={`py-16`}>
            {children}
        </div>
    )
}
