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
import Image from "next/image";

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
            window.location = '/home'
        }
    }, [response])

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={''}>
                <Layout className={`bg-white min-h-screen`} sidebar={false}>
                    <IndexHeroSection onClick={() => handleLoginWithTwitter()}/>
                   {/* <div className={`relative`}>
                        <Image
                            alt="Image Alt"
                            src="/tweetcat_tweets.png"
                            fill
                            style={{objectFit: "contain", objectPosition: "center"}}
                        />
                    </div>*/}
                    <PainPointsSection onClick={() => handleLoginWithTwitter()}/>
                    <Benefits onClick={() => handleLoginWithTwitter()}/>
                    <AnalyticsSection onClick={() => handleLoginWithTwitter()}/>
                    <Testimonials/>
                    <FAQs/>
                    <Footer/>
                </Layout>
            </main>
        </>
    )
}
