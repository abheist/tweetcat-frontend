import ContentEditable from "react-contenteditable";
import {FiImage, FiPlus, FiX} from "react-icons/fi";
import {RxDragHandleDots2} from "react-icons/rx";
import React from "react";
import sanitizeHtml from "sanitize-html";

interface SingleTweetTextareaProps {
    content: string,
    addTweet: (evt: any) => void
    removeTweet: (evt: any) => void
    index: number
}

export function SingleTweetTextarea({content, addTweet, index, removeTweet}: SingleTweetTextareaProps) {
    const [tweet, setTweet] = React.useState(() => content);
    const [files, setFiles] = React.useState<File[]>(() => []);
    const [isDragging, setIsDragging] = React.useState(() => false);
    const sanitizeConf = {};
    const maxTweetLength = 280;

    const onContentChange = React.useCallback((evt: any) => {
        const sanitized = sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf)
        if (sanitized.length > maxTweetLength) {
            /*
            * TODO:
            *  add a snackbar for showing the user that the tweet is too long,
            *  better to let user continue typing and highlight the extra characters in red
            */
        }
        setTweet(sanitized)
    }, [])

    const handleDrop = (evt: any) => {
        setIsDragging(false)
        evt.preventDefault();
        evt.stopPropagation();

        const files = evt?.dataTransfer?.files || evt?.target?.files
        if (files.length > 0) {
            let newFiles = []
            for (let i = 0; i < files.length; i++) {
                newFiles.push(Object.assign(files.item(i), {preview: URL.createObjectURL(files[i])}))
            }
            setFiles(newFiles);
        }
    }


    function handleImageDelete(index: number) {
        setFiles(files.filter((file, i) => i !== index))
    }

    const thumbs = <div className={`flex flex-row flex-wrap gap-4`}>
        {files.map((file: any, index: number) => (
            <div key={file?.name} className={`relative group`}>
                <img
                    src={file?.preview}
                    className={`h-20 w-20 object-cover rounded-md border border-dashed border-blue-500`}
                    // Revoke data uri after image is loaded
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview)
                    }}
                    alt={file?.name}
                />
                <button
                    className={`btn btn-square btn-error btn-xs absolute top-1 right-1 z-10 hidden group-hover:flex`}
                    onClick={() => handleImageDelete(index)}>
                    <FiX/>
                </button>
                {/*
                    TODO: check if there is any file limit on twitter image upload, if there is, then show the below and add a limit check
                    <p className={`font-mono z-10 text-xs`}>
                        {file.size / 1024 < 1000 ? (file.size / 1024).toFixed(1) + ` KB` : (file.size / (1024 * 1024)).toFixed(1) + ` MB`}
                    </p>
                */}
            </div>
        ))}
    </div>;

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
        <div className={`space-y-4`}>
            <div className={`flex items-center gap-x-2`}>
                <span className={`font-bold`}>Abhishek Singh</span>
                <span className={`text-slate-400 text-sm`}>- @abheist</span>
            </div>
            <ContentEditable
                onDrop={(evt) => handleDrop(evt)}
                onDragEnter={(evt) => setIsDragging(true)}
                onDragLeave={(evt) => setIsDragging(false)}
                className={`w-96 px-4 py-2 ` + (isDragging ? `bg-blue-100 border border-2 border-dashed border-blue-500` : ``)}
                onChange={onContentChange}
                onBlur={onContentChange}
                html={tweet}/>
            {files.length > 0 && thumbs}
            <div className={`flex gap-x-2 h-8 items-center`}>
                <div className={`flex-grow flex flex-col justify-center`}>
                    <div className={`h-[0.05px] bg-slate-300`}></div>
                </div>
                <div className="flex justify-between items-center gap-x-1 hidden group-hover/main:flex">
                    <button className={`btn btn-xs btn-outline border-slate-200 space-x-1`}>
                        {tweet.length > 0 && <div className={`text-[10px]`}>{tweet.length}</div>}
                        {/*@ts-ignore*/}
                        <div style={{"--size": "0.8rem", "--value": ((tweet.length / 140) * 100)}}
                             className="radial-progress"/>
                    </button>
                    <button className="btn btn-square btn-outline border-slate-200 btn-xs font-light">
                        #{index + 1}
                    </button>
                    <label className="btn btn-square btn-outline border-slate-200 btn-xs" htmlFor="file">
                        <input name="file" id="file" type="file" className={`hidden`} max={4} multiple
                               onChange={handleDrop}/>
                        <FiImage/>
                    </label>
                    <button className="btn btn-square btn-outline border-slate-200 btn-xs"
                            onClick={() => addTweet(index)}>
                        <FiPlus/>
                    </button>
                    <button className="btn btn-square btn-outline border-slate-200 btn-xs"
                            onClick={() => removeTweet(index)}>
                        <FiX/>
                    </button>
                </div>
            </div>
        </div>
    </div>;
}
