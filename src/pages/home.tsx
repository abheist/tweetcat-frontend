import React from 'react';
import HomeStats from "@/components/homeStats";
import Layout, {getUser} from "@/components/layout";
import {AutoRetweet} from "@/components/autoRetweet";
import {UpcomingEvents} from "@/components/upcomingEvents";
import Link from "next/link";
import {useQuery} from "react-query";

const Home = () => {
    const {data: response} = useQuery(['user'], getUser)

    return (
        <Layout className={`py-16`}>
            <div className={`container mx-auto px-48 flex justify-center`}>
                <div className={`space-y-16`}>
                    {/*TODO: add a daily quote here, just daily quote, nothing else, keep it minimal*/}
                    <div className={`flex justify-between items-center`}>
                        <h2 className={`text-2xl`}>👋 Hey {response?.data?.firstName}</h2>
                        <div className={`space-x-4`}>
                            <Link className={`btn`} href={`/subscribe`}>Subscribe</Link>
                        </div>
                    </div>
                    <HomeStats/>
                    <div className={`flex justify-between space-x-16`}>
                        <div className={`w-1/2`}>
                            <AutoRetweet/>
                        </div>
                        <div className={`w-1/2`}>
                            <UpcomingEvents/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
