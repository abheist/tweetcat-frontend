import {useEffect, useState} from "react";
import {TweetItem} from "@/components/tweetItem";

interface SideBarTweetsProps {
    text: string
}

export function WriteSidebar() {
    const [tweets, setTweets] = useState<SideBarTweetsProps[]>(() => []);
    const tabs = [`Drafts`, `Scheduled`, `Published`];
    const [tab, setTab] = useState(() => tabs[0]);
    const [selectedTweet, setSelectedTweet] = useState(() => 0);

    const drafts = [
        {text: "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes."},
        {text: "Knowing your own darkness is the best method for dealing with the darknesses of other people."},
        {text: "The greatest and most important problems of life are all fundamentally insoluble. They can never be solved but only outgrown."},
        {text: "The privilege of a lifetime is to become who you truly are."},
        {text: "I am not what happened to me, I am what I choose to become."},
        {text: "Everything that irritates us about others can lead us to an understanding of ourselves."},
        {text: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed."},
        {text: "Your vision will only become clear when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes."},
        {text: "The greatest discovery of my generation is that a human being can alter his life by altering his attitudes."},
        {text: "What you resist, persists."},
    ]

    const scheduled = [
        {text: `Tabs 2 What is happening here, you are not the controller of it.`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen. Woha woha woha`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen.`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen.`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen.`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen.`},
    ]

    const published = [
        {text: ` Tabs 3 What is happening here, you are not the controller of it.`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen. Woha woha woha`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen.`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen.`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen.`},
        {text: `What is happening here, you are not the controller of it, you can just do what you want and it will happen.`},
    ]

    useEffect(() => {
        setTweets(() => {
            switch (tab) {
                case `Drafts`:
                    return [...drafts];
                case `Scheduled`:
                    return [...scheduled];
                case `Published`:
                    return [...published];
                default:
                    return [];
            }
        })
    }, [tab])


    return (
        <div className={`w-80 bg-base-200 border-r h-screen flex flex-col`}>
            <div className="tabs tabs-boxed flex justify-around my-4">
                {tabs.map((tabName) =>
                    <a key={tabName}
                       onClick={() => setTab(tabName)}
                       className={`tab tab-md ${tabName === tab ? 'tab-active' : ''}`}>
                        {tabName}
                    </a>
                )}
            </div>
            <ul className="w-full text-sm divide-y border-t border-b overflow-y-auto flex-grow">
                {tweets.map((tweet, index) =>
                    <TweetItem active={index === selectedTweet}
                               onClick={() => setSelectedTweet(index)}
                               key={index}
                               text={tweet.text}/>
                )}
            </ul>
        </div>);
}
