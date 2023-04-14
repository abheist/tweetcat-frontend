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
                <th className={`w-0.5`}></th>
                <th className={`w-10/12`}>Tweet</th>
                <th className={`w-2/12`}>Last published</th>
            </tr>
            </thead>
            <tbody className={`bg-red-300`}>

            {response?.pages.map((group, i) => group?.data?.results.map((tweet: any) => (
                    <tr key={tweet.id}>
                        <td></td>
                        <td className={`truncate text-ellipsis`}>{tweet.tweetText}</td>
                        <td>{tweet.lastPublishedTime ||
                            <div className="badge badge-secondary badge-outline">Not published yet</div>}</td>
                    </tr>
                ))
            )}
            </tbody>
            <tfoot>
            <tr>
                <th></th>
                <th>Tweet</th>
                <th>Last Published</th>
            </tr>
            </tfoot>
        </table>
    </InfiniteScroll>
}
