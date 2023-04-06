import React from "react";
import {useQuery} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";
import {NoTweetPlaceholder} from "@/components/noTweetPlaceholder";

export const getTweets = () => {
    return axiosPrivate.get('tweets/')
}

export function TweetTable() {
    const {data: response} = useQuery(['tweets'], getTweets)


    if (response?.data?.results?.length === 0) return (
        <NoTweetPlaceholder/>
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
