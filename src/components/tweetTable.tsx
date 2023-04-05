import React from "react";

interface TweetTableProps {
    tweets: any[]
}

export function TweetTable({tweets = []}: TweetTableProps) {


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

    if (tweets?.length === 0) return (
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
                        mockTweets.map((tweet) => (
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
        </div>
    )

    return <div className="overflow-x-auto">
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
                tweets.map((tweet) => (
                    <tr key={tweet.id}>
                        <td>{tweet.id}</td>
                        <td>{tweet.tweet}</td>
                        <td>{tweet.lastPublished}</td>
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
