import React from 'react';
import HomeStats from "@/components/homeStats";
import Layout from "@/components/layout";
import {AutoRetweet} from "@/components/autoRetweet";
import {UpcomingEvents} from "@/components/upcomingEvents";

const Home = () => {
    return (
        <Layout className={`py-16`}>
            <div className={`container mx-auto px-48 flex justify-center`}>
                <div className={`space-y-16`}>
                    {/*TODO: add a daily quote here, just daily quote, nothing else, keep it minimal*/}
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
