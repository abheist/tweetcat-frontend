import Head from 'next/head'
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import * as localforage from "localforage";
import {useEffect, useState} from "react";
import {axiosPublic} from "@/utils/axiosPublic";

const verifyToken = (data: any) => {
    return axiosPublic.post("auth/token/refresh/", data)
}

export default function Home() {
    const [oauthToken, setOauthToken] = useState(() => "")
    const [oauthVerifier, setOauthVerifier] = useState(() => "")
    const [data, setData] = useState(() => "")

    const router = useRouter()
    const query = router.query;

    const mutation = useMutation(verifyToken)

    useEffect(() => {
        if (query?.oauth_token && typeof query?.oauth_token === "string") {
            setOauthToken(query?.oauth_token)
        }
        if (query?.oauth_verifier && typeof query?.oauth_verifier === "string") {
            setOauthVerifier(query?.oauth_verifier)
        }
    }, [query])

    useEffect(() => {
        if (oauthToken && oauthVerifier) {
            handleSuccess()
        }
    }, [oauthToken, oauthVerifier])

    const handleSuccess = async () => {
        const response = await mutation.mutateAsync({oauthToken, oauthVerifier})
        const data = response.data
        if (data) {
            setData(data)
            console.log(data)
            localforage.setItem('user', data).then(res => router.push('/'))
        }
    }


    return (
        <>
            <Head>
                <title>Loading...</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`h-screen flex justify-center items-center`}>
                <div>
                    <div className={`mt-8`}>{JSON.stringify(data)}</div>
                </div>
            </main>
        </>
    )
}
