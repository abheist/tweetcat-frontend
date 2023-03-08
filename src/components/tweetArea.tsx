import {useMutation} from "react-query";
import {useState} from "react";
import {makeTweet} from "@/pages";

export function TweetArea({}) {
    const mutation = useMutation(makeTweet)
    const [tweet, setTweet] = useState(() => '')

    function handleClick(e: any) {
        e.preventDefault()
        console.log("Handle click!", tweet)
        mutation.mutate(tweet)
    }


    return <div>
        <form className={`space-4`}>
            <div>
                <textarea name="tweetArea" id="tweetArea" className={`border-2 rounded px-3 py-2`}
                          autoFocus
                          value={tweet}
                          onChange={(e) => setTweet(e.target.value)}>
                </textarea>
            </div>
            <div>
                <button className={`btn`}
                        onClick={handleClick}>
                    Tweet
                </button>
            </div>
        </form>
    </div>;
}
