import Head from 'next/head'
import {useQuery} from "react-query";
import {getUser} from "@/components/layout";

// const inter = Inter({subsets: ['latin']})


export default function Home() {

    const {data: userData} = useQuery(['user'], getUser)

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/*<Layout>*/}
            <main className={`h-screen flex justify-center items-center`}>
                <code>
                    <pre className={`mt-8`}>{JSON.stringify(userData, undefined, 2)}</pre>
                </code>
            </main>
            {/*</Layout>*/}
        </>
    )
}
