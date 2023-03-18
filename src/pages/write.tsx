import React from 'react';

const Write = () => {
    return (
        <div className={`flex`}>
            <div className={`w-80 min-h-screen bg-base-200`}>
                <div className="tabs tabs-boxed flex justify-around my-4">
                    <a className="tab tab-md tab-active">Drafts</a>
                    <a className="tab tab-md">Scheduled</a>
                    <a className="tab tab-md">Published</a>
                </div>
                <ul className="w-full text-sm divide-y border-t border-b">
                    <li className={`px-6 py-4`}>
                        <p>What is happening here, you are not the controller of it, you can just...</p>
                    </li>
                    <li className={`px-6 py-4 bg-white border-l-4 border-l-primary group relative`}>
                        <div
                            className={`absolute py-2 px-4 right-0 flex gap-x-2 bg-gradient-to-l from-white to-white/80 invisible group-hover:visible`}>
                            <button className="btn btn-xs btn-square btn-outline">
                                E
                            </button>
                        </div>
                        <p className={``}>What is happening here, you are not the controller of it, you can just...</p>
                    </li>
                    <li className={`px-6 py-4`}>
                        <p>What is happening here, you are not the controller of it, you can just...</p>
                    </li>
                    <li className={`px-6 py-4`}>
                        <p>What is happening here, you are not the controller of it, you can just...</p>
                    </li>
                    <li className={`px-6 py-4`}>
                        <p>What is happening here, you are not the controller of it, you can just...</p>
                    </li>
                </ul>
            </div>
            <div className={`flex-grow bg-blue-100`}>what</div>
        </div>
    );
};

export default Write;
