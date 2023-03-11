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
        <form className={`space-y-4`}>
            <div>
                <textarea placeholder="What's happening?"
                          className="textarea textarea-bordered textarea-md w-full max-w-xs text-gray-800"
                          autoFocus
                          value={tweet}
                          onChange={(e) => setTweet(e.target.value)}>
                </textarea>
            </div>
            <div>
                <button className={`btn`}
                        disabled={!!!tweet || tweet.length > 140}
                        onClick={handleClick}>
                    Tweet
                </button>
            </div>
        </form>
    </div>;
}
