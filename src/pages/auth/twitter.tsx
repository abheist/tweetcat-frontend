import Head from 'next/head'
import {useQuery} from "react-query";
import {useRouter} from "next/router";
import * as localforage from "localforage";
import {useEffect, useState} from "react";

interface TwitterVerifyTokens {
    oauthToken: string
    oauthVerifier: string
}

export interface UserTokenData {
    accessToken: string
    refreshToken: string
    user: {
        pk: number
        username: string
        email: string
        firstName: string
        lastName: string
    }
}

const verifyToken = (data: TwitterVerifyTokens) => {
    return fetch("http://localhost:8000/twitter/verify-twitter-login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
}


export default function Home() {
    const [oauthToken, setOauthToken] = useState(() => "")
    const [oauthVerifier, setOauthVerifier] = useState(() => "")

    const router = useRouter()
    const query = router.query;

    const {isLoading, isError, isSuccess, data} = useQuery(["getTwitterLink", oauthToken, oauthVerifier],
        () => verifyToken({oauthToken, oauthVerifier}),
        {enabled: !!(oauthToken && oauthVerifier)}
    )

    useEffect(() => {
        if (query?.oauth_token && typeof query?.oauth_token === "string") {
            setOauthToken(query?.oauth_token)
        }
        if (query?.oauth_verifier && typeof query?.oauth_verifier === "string") {
            setOauthVerifier(query?.oauth_verifier)
        }
    }, [query])


    if (data) {
        console.log(data)
        localforage.setItem('user', data).then(res => router.push('/'))
    }

    return (
        <>
            {/*<Layout>*/}
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
            {/*</Layout>*/}
        </>
    )
}
