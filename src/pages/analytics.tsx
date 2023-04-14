import React from 'react';
import Layout from "@/components/layout";
import HomeStats from "@/components/homeStats";
import {Area, AreaChart, ResponsiveContainer} from 'recharts';

export function FollowersChart() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className={`flex-grow`}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    margin={{left: 0, bottom: 0}}
                    data={data}
                >
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

const Analytics = () => {
    return (
        <>
            <Layout className={`py-16`}>
                <div className={`container mx-auto px-48 flex justify-center`}>
                    <div className={`space-y-16`}>
                        {/*TODO: add a daily quote here, just daily quote, nothing else, keep it minimal*/}
                        <HomeStats/>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Analytics;
