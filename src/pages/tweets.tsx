import Layout from "@/components/layout";
import React from "react";
import {TweetTable} from "@/components/tweetTable";
import {axiosPrivate} from "@/utils/axiosPrivate";
import {useQuery} from "react-query";
import {UploadTweetFile} from "@/components/uploadTweetFile";


export const getTweets = () => {
    return axiosPrivate.get('tweets/')
}

const Tweets = () => {

    const {data: response} = useQuery(['tweets'], getTweets)

    return (
        <Layout className={`py-16`}>
            <div className={`container mx-auto px-48`}>
                <UploadTweetFile/>
                <div className={`mt-8`}>
                    <TweetTable tweets={response?.data?.results}/>
                </div>
                <div className={`text-xs mt-2 space-y-2`}>
                    <p className={`text-gray-500`}>
                        System will pick the first tweet which is not published yet and publish it. The tweets will be
                        published in sequence from the csv file uploaded and will be repeated after all the tweets are
                        published. You can also upload the file again to add more tweets to the queue.
                    </p>
                    <p className={`text-gray-500`}>
                        We will be adding the functionality to add tweets manually in the future. Additionally, you can
                        also delete the tweets which are already published.
                    </p>
                </div>
            </div>
        </Layout>)
}

export default Tweets
