import {EventCleaningTweet, EventNewTweet, EventRetweet} from "@/components/tweetEvents";
import React from "react";
import {UpcomingFeature} from "@/components/upcomingFeature";

export function UpcomingEvents() {
    return <div className="card bg-base-100 shadow overflow-hidden max-h-[490px]">
        <UpcomingFeature
            icon={`🐣`}
            heading={'Upcoming Feature'}
            description={`You will able to see your upcoming events here, which include your scheduled tweets, retweets,
                          and cleaning.`}/>
        <div className="card-body">
            <h2 className="card-title">Upcoming Events</h2>
            <p>Today</p>
            <div className={`space-y-2`}>
                <EventNewTweet/>
                <EventRetweet/>
                <EventRetweet/>
                <EventCleaningTweet/>
            </div>
            <p>Tomorrow</p>
            <div className={`space-y-2`}>
                <EventNewTweet/>
                <EventRetweet/>
                <EventRetweet/>
                <EventCleaningTweet/>
            </div>
        </div>
        <div
            className={`card-actions absolute w-full bottom-0 flex justify-end pb-8 pt-8 px-8 bg-gradient-to-t from-white to-white/70`}>
            <button className={`btn btn-primary btn-xs btn-outline`}>See All</button>
        </div>
    </div>;
}
