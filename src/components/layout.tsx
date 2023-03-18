import {ReactNode} from "react";
import {axiosPrivate} from "@/utils/axiosPrivate";
import {Header} from "@/components/header";

interface LayoutProps {
    children: ReactNode
}

export const getUser = () => {
    return axiosPrivate.get('auth/user/')
}

export default function Layout({children}: LayoutProps) {

    return (
        <>
            <div className={`container mx-auto lg:px-48`}><Header/></div>
            <div className={`py-16`}>
                {children}
            </div>
        </>
    )
}
