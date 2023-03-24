import ContentEditable from "react-contenteditable";
import {FiImage, FiPlus, FiX} from "react-icons/fi";
import {RxDragHandleDots2} from "react-icons/rx";
import React from "react";
import sanitizeHtml from "sanitize-html";

interface SingleTweetTextareaProps {
    content: string,
    onChange: (evt: any) => void
    addTweet: (evt: any) => void
}

export function SingleTweetTextarea({content, onChange, addTweet}: any) {
    const [tweet, setTweet] = React.useState(() => content);

    const onContentChange = React.useCallback((evt: any) => {
        const sanitizeConf = {};
        setTweet(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    }, [])

    const progressValues = {"--size": "0.8rem", "--value": 70}


    return <div className={`flex gap-x-2 group/main`}>
        <div className={`flex`}>
            <button className={`btn btn-square btn-sm btn-ghost cursor-grab active:cursor-grabbing`}>
                <RxDragHandleDots2/>
            </button>
            <div>
                <div className="avatar">
                    <div className="w-8 rounded-full">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"/>
                    </div>
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
                onChange={onContentChange}
                onBlur={onContentChange}
                html={tweet}/>
            <div className={`flex gap-x-2 h-8 items-center`}>
                <div className={`flex-grow flex flex-col justify-center`}>
                    <div className={`h-[0.05px] bg-slate-300`}></div>
                </div>
                <div className="flex justify-between items-center gap-x-1 hidden group-hover/main:flex">
                    <button className={`btn btn-xs btn-outline border-slate-200`}>
                        {/*@ts-ignore*/}
                        <div className="radial-progress" style={progressValues}/>
                    </button>
                    <button className="btn btn-square btn-outline border-slate-200 btn-xs font-light">
                        #2
                    </button>
                    <button className="btn btn-square btn-outline border-slate-200 btn-xs">
                        <FiImage/>
                    </button>
                    <button className="btn btn-square btn-outline border-slate-200 btn-xs" onClick={addTweet}>
                        <FiPlus/>
                    </button>
                    <button className="btn btn-square btn-outline border-slate-200 btn-xs">
                        <FiX/>
                    </button>
                </div>
            </div>
        </div>
    </div>;
}
