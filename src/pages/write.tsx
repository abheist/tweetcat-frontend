import React from 'react';
import {WriteSidebar} from "@/components/writeSidebar";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from 'sanitize-html';
import {Header} from "@/components/header";

function SingleTweetTextarea(props: { onChange: (evt: any) => void, html: string }) {
    return <div className={`flex gap-x-2`}>
        <div>
            <div className="avatar">
                <div className="w-8 rounded-full">
                    <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"/>
                </div>
            </div>
        </div>
        <div>
            <div className={`flex items-center gap-x-2`}>
                <span className={`font-bold`}>Abhishek Singh</span>
                <span className={`text-slate-400 text-sm`}>- @abheist</span>
            </div>
            <ContentEditable
                className={`w-96 px-4 py-2`}
                onChange={props.onChange}
                onBlur={props.onChange}
                html={props.html}/>
            <div className={`flex gap-x-2`}>
                <div className={`flex-grow flex flex-col justify-center`}>
                    <div className={`h-[0.05px] bg-slate-300`}></div>
                </div>
                <div className="">
                    <div className="radial-progress bg-slate-100 border-2 border-slate-100" style={{
                        "--size": "1rem",
                        "--value": 70
                    }}/>
                    <button className="btn btn-square btn-ghost btn-xs">
                        A
                    </button>
                    <button className="btn btn-square btn-ghost btn-xs">
                        B
                    </button>
                    <button className="btn btn-square btn-ghost btn-xs">
                        C
                    </button>
                    <button className="btn btn-square btn-ghost btn-xs">
                        D
                    </button>
                </div>
            </div>
            {/*<textarea className={`w-96 px-4 py-2`} placeholder={`What's happening?`} maxLength={120} />*/}
        </div>
    </div>;
}

const Write = () => {

    const [content, setContent] = React.useState("")

    const onContentChange = React.useCallback((evt: any) => {
        const sanitizeConf = {};

        setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    }, [])


    return (
        <div className={`flex`}>
            <WriteSidebar/>
            <div className={`flex-grow`}>
                <Header />
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
    );
};

export default Write;
