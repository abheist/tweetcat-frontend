import Head from 'next/head'
import {useQuery} from "react-query";
import {useRouter} from "next/router";
import * as localforage from "localforage";

interface TwitterVerifyTokens {
    oauth_token: string
    oauth_verifier: string
}

interface UserTokenData {
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

    const router = useRouter()

    const {oauth_token, oauth_verifier} = router.query;

    const {isLoading, isError, isSuccess, data} = useQuery(["getTwitterLink", oauth_token],
        () => verifyToken({oauth_token, oauth_verifier}),
        {enabled: !!(oauth_token && oauth_verifier)})

    if (data) {
        console.log(data)
        localforage.setItem('user', data).then(res => router.push('/'))
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
