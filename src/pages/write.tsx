import React from 'react';
import {WriteSidebar} from "@/components/writeSidebar";

const Write = () => {
    return (
        <div className={`flex`}>
            <WriteSidebar/>
            <div className={`flex-grow bg-blue-100`}>what</div>
        </div>
    );
};

export default Write;
