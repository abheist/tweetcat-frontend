import React from 'react';
import {WriteSidebar} from "@/components/writeSidebar";
import sanitizeHtml from 'sanitize-html';
import Layout from "@/components/layout";
import {ScheduleSidebar} from "@/components/scheduleSidebar";
import {TweetHeader} from "@/components/tweetHeader";
import {TweetInputArea} from "@/components/tweetInputArea";

const Tweet = () => {

    const [content, setContent] = React.useState("")

    const onContentChange = React.useCallback((evt: any) => {
        const sanitizeConf = {};

        setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    }, [])


    return (
        <Layout className={``}>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <div className={`flex`}>
                        <WriteSidebar/>
                        <div className={`flex-grow`}>
                            <TweetHeader/>
                            <TweetInputArea onChange={onContentChange} html={content}/>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <ScheduleSidebar/>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default Tweet;
