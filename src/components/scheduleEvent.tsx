import {EventNewTweet} from "@/components/tweetEvents";
import React from "react";

export function ScheduleEvent() {
    return <div
        className={`border border-2 border-base-300 rounded-xl px-4 py-2 space-y-2`}>
        <div className={`flex gap-3 justify-center items-center`}>
            <div className={`flex flex-col`}>
                <p className={`uppercase text-xs`}>08:25PM</p>
            </div>
            <div>
                →
            </div>
            {/*TODO: cut the text after certain limit*/}
            <button className={`btn btn-xs btn-ghost text-primary text-xs font-bold`}>
                Schedule
            </button>
        </div>
        <EventNewTweet withTime={false}/>
    </div>;
}
