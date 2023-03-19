import React from 'react';
import {WriteSidebar} from "@/components/writeSidebar";
import sanitizeHtml from 'sanitize-html';
import {SingleTweetTextarea} from "@/components/singleTweetTextarea";
import Layout from "@/components/layout";
import * as chrono from "chrono-node";

const Tweet = () => {

    const [content, setContent] = React.useState("")

    const onContentChange = React.useCallback((evt: any) => {
        const sanitizeConf = {};

        setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    }, [])


    return (
        <Layout>
            <div className={`flex`}>
                <WriteSidebar/>
                <div className={`flex-grow`}>
                    <div className="navbar">
                        <div className={`flex-grow flex justify-end gap-x-2`}>
                            <button className="btn btn-ghost btn-xs text-primary">Dashboard</button>
                            <button className="btn btn-outline btn-xs btn-primary">Schedule</button>
                            <button className="btn btn-outline btn-xs btn-primary">Tweet Now</button>
                        </div>
                    </div>
                    <div className={`flex-grow flex justify-center items-center mt-16`}>
                        <div>
                            <SingleTweetTextarea onChange={onContentChange} html={content}/>
                            <SingleTweetTextarea onChange={onContentChange} html={content}/>
                            <SingleTweetTextarea onChange={onContentChange} html={content}/>
                            <SingleTweetTextarea onChange={onContentChange} html={content}/>
                            <SingleTweetTextarea onChange={onContentChange} html={content}/>
                            <SingleTweetTextarea onChange={onContentChange} html={content}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Tweet;
