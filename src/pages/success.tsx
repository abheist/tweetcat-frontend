import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useMutation} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";

export const paymentSuccessful = (sessionId: string) => {
    return axiosPrivate.post('payments/successful/', {sessionId: sessionId})
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
            handleSuccess()
        }
    }, [sessionId])

    const handleSuccess = async () => {
        const response = await mutation.mutateAsync(sessionId)
        const data = response?.data
        if (data?.success) {
            await router.push('/')
        }
    }

    return (
        <div>
            <div className={`text-white`}>Your payment was successfull!</div>
        </div>
    )
}
