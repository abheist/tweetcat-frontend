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

    return <div className={`flex-grow flex justify-center items-center mt-16 pb-56`}>
        <div className={`space-y-4`}>
            {tweets.map((tweet, index) => <SingleTweetTextarea key={tweet.id} addTweet={addTweet}
                                                               content={tweet.content} index={index}/>)}
        </div>
    </div>;
}
