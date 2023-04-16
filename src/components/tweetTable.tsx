import React, {useEffect} from "react";
import {useInfiniteQuery} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";
import InfiniteScroll from "react-infinite-scroller";
import {NoTweetPlaceholder} from "@/components/noTweetPlaceholder";


const getTweets = ({pageParam = 1}) => {
    console.log({pageParam})
    return axiosPrivate.get('tweets/?page=' + pageParam)
}

export function TweetTable() {
    const [page, setPage] = React.useState(1)
    const {
        data: response,
        error, fetchNextPage, hasNextPage, isFetched, isFetchingNextPage, status
    } = useInfiniteQuery({
        queryKey: ['tweets'],
        queryFn: getTweets,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage?.data?.next) {
                return page + 1
            }
        }
    })

    useEffect(() => {
        console.log(response)
    }, [response])

    response?.pages.map((group, i) => {
        if (group?.data?.results?.length === 0) {
            return <NoTweetPlaceholder key={i}/>
        }
    })


    return <InfiniteScroll pageStart={0}
                           loadMore={() => fetchNextPage()}
                           hasMore={hasNextPage}
                           loader={<div className="loader" key={0}>Loading ...</div>}>
        <table className="table table-fixed table-compact w-full relative">
            <thead className={`sticky top-0 z-20`}>
            <tr>
                <th className={`sm:w-3/4 md:w-10/12 pl-6`}>Tweet</th>
                <th className={`sm:w-1/4 md:w-2/12 text-end pr-6`}>Last published</th>
            </tr>
            </thead>
            <tbody>
            {
                response?.pages.map((group, i) => group?.data?.results.map((tweet: any) => (
                        <tr key={tweet.id}>
                            <td className={`truncate text-ellipsis pl-6`}>{tweet.tweetText}</td>
                            <td className={`text-end pr-6`}>
                                {
                                    tweet.lastPublishedTime
                                    ||
                                    <div className="badge badge-secondary badge-outline">Not published yet</div>
                                }
                            </td>
                        </tr>
                    ))
                )
            }
            </tbody>
            <tfoot>
            <tr>
                <th className={`pl-6`}>Tweet</th>
                <th className={`text-end pr-6`}>Last Published</th>
            </tr>
            </tfoot>
        </table>
    </InfiniteScroll>
}
