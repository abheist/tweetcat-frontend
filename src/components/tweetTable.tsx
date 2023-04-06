import React from "react";
import {useQuery} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";

interface TweetTableProps {
    tweets: any[]
}

export const getTweets = () => {
    return axiosPrivate.get('tweets/')
}

function NoTweetPlaceholder({tweets}: TweetTableProps) {
    return (
        <div>
            <div className="overflow-x-auto relative rounded">
                <div
                    className={`absolute bg-gray-100/95 z-20 w-full h-full flex justify-center items-center`}>
                    <div className={`space-y-4`}>
                        <p className={`text-lg mx-auto font-bold italic font-serif text-gray-500 text-center w-2/3`}>
                            Please upload a excel or csv file above with the below format. Your tweets will appear here.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="table table-compact w-full">
                                {/*TODO: add a sample file here*/}
                                <caption className="caption-bottom mt-2">
                                    You can download a sample file from <a className={`text-primary`} href="#">here</a>.
                                </caption>
                                <thead>
                                <tr>
                                    <th className={`lowercase`}>tweet_text</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>I am not what happened to me, I am what I choose to become.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Knowing your own darkness is the best method for dealing with the darknesses of
                                        other people.
                                    </td>
                                </tr>
                                <tr>
                                    <td>The privilege of a lifetime is to become who you truly are.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <table className="table table-auto table-compact w-full relative">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Tweet</th>
                        <th>Last published</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tweets.map((tweet: any) => (
                            <tr key={tweet.id}>
                                <td>{tweet.id}</td>
                                <td className={`line-clamp-1`}>{tweet.tweetText}</td>
                                <td>{tweet.lastPublishedDate}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                    <tfoot>
                    <tr>
                        <th></th>
                        <th>Tweet</th>
                        <th>Last Published</th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>);
}

export function TweetTable() {
    const {data: response} = useQuery(['tweets'], getTweets)

    const mockTweets = [
        {
            id: 0,
            tweetText: "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
            lastPublishedDate: "2023-04-05 11:17:21"
        },
        {
            id: 1,
            tweetText: "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
            lastPublishedDate: "2023-04-05 11:17:21"
        },
        {
            id: 2,
            tweetText: "The greatest and most important problems of life are all fundamentally insoluble. They can never be solved but only outgrown.",
            lastPublishedDate: "2023-04-05 11:17:21"
        },
        {
            id: 3,
            tweetText: "The privilege of a lifetime is to become who you truly are.",
            lastPublishedDate: "2023-04-05 11:17:21"
        },
        {
            id: 4,
            tweetText: "I am not what happened to me, I am what I choose to become.",
            lastPublishedDate: "2023-04-05 11:17:21"
        },
        {
            id: 5,
            tweetText: "Everything that irritates us about others can lead us to an understanding of ourselves.",
            lastPublishedDate: "2023-04-05 11:17:21"
        },
        {
            id: 6,
            tweetText: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
            lastPublishedDate: "2023-04-05 11:17:21"
        },
        {
            id: 7,
            tweetText: "Your vision will only become clear when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
            lastPublishedDate: "2023-04-05 11:17:21"
        },
        {
            id: 8,
            tweetText: "The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.",
            lastPublishedDate: "2023-04-05 11:17:21"
        }
    ]

    if (response?.data?.results?.length === 0) return (
        <NoTweetPlaceholder tweets={mockTweets}/>
    )

    return <div className="overflow-x-auto">
        <table className="table table-fixed table-compact w-full relative">
            <thead>
            <tr>
                <th className={`w-0.5`}></th>
                <th className={`w-10/12`}>Tweet</th>
                <th className={`w-2/12`}>Last published</th>
            </tr>
            </thead>
            <tbody className={`bg-red-300`}>
            {
                response?.data?.results.map((tweet: any) => (
                    <tr key={tweet.id}>
                        <td></td>
                        <td className={`truncate text-ellipsis`}>{tweet.tweetText}</td>
                        <td>{tweet.lastPublishedTime ||
                            <div className="badge badge-secondary badge-outline">Not published yet</div>}</td>
                    </tr>
                ))
            }
            </tbody>
            <tfoot>
            <tr>
                <th></th>
                <th>Tweet</th>
                <th>Last Published</th>
            </tr>
            </tfoot>
        </table>
    </div>;
}
