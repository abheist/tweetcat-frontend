import {SingleTweetTextarea} from "@/components/singleTweetTextarea";
import {useState} from "react";
import sanitizeHtml from "sanitize-html";

interface tweetsProps {
    content: string,
    seq: number
    id: number
}

export function TweetInputArea() {
    const [tweets, setTweets] = useState<tweetsProps[]>(() => [{content: "", seq: 0, id: Math.random()}]);
    const sanitizeConf = {};

    const addTweet = (evt: any) => {
        const newContent = sanitizeHtml(evt.target.value, sanitizeConf)
        const newState = [...tweets, {id: Math.random(), content: newContent, seq: tweets.length}]
        setTweets(newState)
    }

    return <div className={`flex-grow flex justify-center items-center mt-16 pb-56`}>
        <div className={`space-y-4`}>
            {tweets.map((tweet) => <SingleTweetTextarea key={tweet.id} addTweet={addTweet} content={tweet.content}/>)}
        </div>
    </div>;
}
