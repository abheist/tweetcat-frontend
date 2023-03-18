import React from "react";

export function EventNewTweet() {
    return <div
        className={`border border-2 border-base-300 rounded-xl px-4 py-2 flex gap-3`}>
        <div className={`text-xl`}>🐣</div>
        <div className={`flex flex-col`}>
            <p className={`uppercase text-[10px]`}>Tweet</p>
            <p className={`uppercase text-[10px]`}>08:25PM</p>
        </div>
        {/*TODO: cut the text after certain limit*/}
        <div className={`text-xs`}>
            Crazy are the ones who think of changing the world!
        </div>
    </div>;
}

export function EventRetweet() {
    return <div
        className={`border-dashed border-2 border-base-300 rounded-xl px-4 py-2 flex gap-3`}>
        <div className={`text-xl`}>♻️</div>
        <div className={`flex flex-col`}>
            <p className={`uppercase text-[10px]`}>Retweet</p>
            <p className={`uppercase text-[10px]`}>10:25PM</p>
        </div>
        {/*TODO: cut the text after certain limit*/}
        <div className={`text-xs`}>
            Crazy are the ones who think of changing the world!
        </div>
    </div>;
}

export function EventCleaningTweet() {
    return <div
        className={`border-dotted border-2 border-base-300 rounded-xl px-4 py-2 flex gap-3`}>
        <div className={`text-xl`}>🧹</div>
        <div className={`flex flex-col`}>
            <p className={`uppercase text-[10px]`}>CLEAN</p>
            <p className={`uppercase text-[10px]`}>08:25PM</p>
        </div>
        {/*TODO: cut the text after certain limit*/}
        <div className={`text-xs`}>
            Crazy are the ones who think of changing the world!
        </div>
    </div>;
}
