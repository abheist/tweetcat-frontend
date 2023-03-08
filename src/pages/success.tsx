import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {post} from "@/utils/fetchMiddleware";
import {useMutation} from "react-query";

export const paymentSuccessful = (sessionId: string) => {
    return post('payments/successful/', {sessionId: sessionId})
}


export default function Success() {
    const [sessionId, setSessionId] = useState(() => '')
    const router = useRouter()

    const mutation = useMutation(paymentSuccessful)

    useEffect(() => {
        const {session_id: sessionId}: any = router.query
        if (sessionId) {
            setSessionId(sessionId)
        }
    }, [router])

    useEffect(() => {
        if (sessionId) {
            const response = mutation.mutate(sessionId)
        }
    }, [sessionId])


    return (
        <div>
            <div className={`text-white`}>Your payment was successfull!</div>
        </div>
    )
}
