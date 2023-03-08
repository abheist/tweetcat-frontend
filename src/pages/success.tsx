import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Success() {
    const router = useRouter()

    // TODO: send the session_id to backend for further processing
    useEffect(() => {
        const {session_id} = router.query
        if (session_id) {
            console.log(session_id)
        }
    }, [router])

    return (
        <div className={`text-white`}>Your payment was successfull!</div>
    )
}
