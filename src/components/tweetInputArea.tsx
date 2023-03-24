import {SingleTweetTextarea} from "@/components/singleTweetTextarea";
import {useState} from "react";
import sanitizeHtml from "sanitize-html";

interface tweetsProps {
    content: string,
    id: number
}

export function TweetInputArea() {
    const [tweets, setTweets] = useState<tweetsProps[]>(() => [{content: "", id: Math.random()}]);
    const sanitizeConf = {};

    const addTweet = (index: number) => {
        const newContent = sanitizeHtml("", sanitizeConf)
        const newState = [...tweets]
        newState.splice(index + 1, 0, {content: newContent, id: Math.random()})
        setTweets(newState)
    }

    const removeTweet = (index: number) => {
        // TODO: add a snackbar for showing the user that this can't be deleted as this is the last tweet
        if (tweets.length === 1) return
        const newState = [...tweets]
        newState.splice(index, 1)
        setTweets(newState)
    }

    return <div className={`flex-grow flex justify-center items-center mt-16 pb-56`}>
        <div className={`space-y-4`}>
            {tweets.map((tweet, index) => {
                return <SingleTweetTextarea key={tweet.id}
                                            addTweet={addTweet}
                                            removeTweet={removeTweet}
                                            content={tweet.content}
                                            index={index}/>
            })}
        </div>
    </div>;
}
