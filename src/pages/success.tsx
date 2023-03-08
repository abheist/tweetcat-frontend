import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {post} from "@/utils/fetchMiddleware";
import {useMutation} from "react-query";

export const customerPortal = (sessionId: string) => {
    return post('payments/customer-portal-url/', {sessionId: sessionId})
}


export default function Success() {
    const [sessionId, setSessionId] = useState(() => '')
    const router = useRouter()

    const mutation = useMutation(customerPortal)


    // TODO: send the session_id to backend for further processing
    useEffect(() => {
        const {session_id: sessionId}: any = router.query
        if (sessionId) {
            setSessionId(sessionId)
        }
    }, [router])

    const handleClick = async (data: any) => {
        const response = await mutation.mutateAsync(sessionId)
        const result = await response.json()
        if (result.redirect) {
            window.location = result.redirect;
        }
    }


    return (
        <div>
            <div className={`text-white`}>Your payment was successfull!</div>
            {/*TODO: Move this customer portal button in settings or to navigation bar, so everyone can see it.*/}
            <button className={`btn`} onClick={handleClick}>Customer Portal</button>
        </div>
    )
}
