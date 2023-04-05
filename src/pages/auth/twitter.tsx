import Head from 'next/head'
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import * as localforage from "localforage";
import {useEffect, useState} from "react";
import {axiosPublic} from "@/utils/axiosPublic";

const verifyToken = (data: any) => {
    return axiosPublic.post("twitter/verify-twitter-login/", data)
}

export default function TwitterSuccess() {
    const [oauthToken, setOauthToken] = useState(() => "")
    const [oauthVerifier, setOauthVerifier] = useState(() => "")
    const [data, setData] = useState(() => "")

    const router = useRouter()
    const mutation = useMutation(verifyToken)

    useEffect(() => {
        const {oauth_token, oauth_verifier}: any = router.query;

        if (oauth_token) {
            setOauthToken(oauth_token)
        }
        if (oauth_verifier) {
            setOauthVerifier(oauth_verifier)
        }
    }, [router])

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
            localforage.setItem('user', data).then(res => router.push('/home'))
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
