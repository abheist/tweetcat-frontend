import {ReactNode} from "react";
import {get} from "@/utils/fetchMiddleware";
import {useQuery} from "react-query";

interface LayoutProps {
    children: ReactNode
}

export const getUser = () => {
    return get('auth/user/')
}

export default function Layout({children}: LayoutProps) {

    const {isError, isLoading, data, error, status} = useQuery(['user'], () => getUser())

    if (data) {
        return <div>data: {JSON.stringify({data, error})}</div>
    }

    if (error) {
        return <div>error: {JSON.stringify(error)}</div>
    }

    return (
        <>
            Hello from Layout
            {children}
        </>
    )
}
