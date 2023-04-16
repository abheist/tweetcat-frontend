import Head from 'next/head'
import {axiosPrivate} from "@/utils/axiosPrivate";
import {useQuery} from "react-query";
import {axiosPublic} from "@/utils/axiosPublic";
import {useEffect} from "react";
import localforage from "localforage";
import Layout from "@/components/layout";
import {Footer} from "@/components/footer";
import {FAQs} from "@/components/landingPage/FAQs";
import {Testimonials} from "@/components/landingPage/testimonials";
import {Benefits} from "@/components/landingPage/benefits";
import {PainPointsSection} from "@/components/landingPage/painPointsSection";
import {AnalyticsSection} from "@/components/landingPage/analyticsSection";
import {IndexHeroSection} from "@/components/landingPage/indexHeroSection";

// const inter = Inter({subsets: ['latin']})

export const makeTweet = (data: any) => {
    return axiosPrivate.post('twitter/post/', {tweet: data})
}

const getTwitterLink = () => {
    return axiosPublic.get("twitter/get-twitter-login/")
}

export const getUser = async () => {
    const accessToken = await localforage.getItem('user').then((data: any) => data?.accessToken)
    if (accessToken) {
        return axiosPublic.get('auth/user/',
            {
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            })
    }
}


export default function Home() {
    const {data: response} = useQuery(['user'], getUser)
    // TODO: get the twitter login link only if user is not logged in
    const {data: twitterLink} = useQuery(["getTwitterLink"], getTwitterLink)

    // TODO: check if user is logged-in, if user is logged in, redirect the user to home page
    const handleLoginWithTwitter = () => {
        window.location = twitterLink?.data
    }

    useEffect(() => {
        if (response?.data?.username) {
            // @ts-ignore
            window.location = '/tweets'
        }
    }, [response])

    return (
        <>
            <Head>
                <title>TweetCat</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>
            <main className={''}>
                <Layout className={`bg-white min-h-screen`} sidebar={false}>
                    <IndexHeroSection onClick={() => handleLoginWithTwitter()}/>
                    <PainPointsSection onClick={() => handleLoginWithTwitter()}/>
                    <Benefits onClick={() => handleLoginWithTwitter()}/>
                    <AnalyticsSection onClick={() => handleLoginWithTwitter()}/>
                    <Testimonials/>
                    <FAQs/>
                    <Footer className={`mt-12`}/>
                </Layout>
            </main>
        </>
    )
}
