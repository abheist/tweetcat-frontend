import {SiMicrosoftexcel} from "react-icons/si";
import {BsFiletypeCsv} from "react-icons/bs";
import React from "react";

export function UploadTweetFile() {
    return <div className={`space-y-16 flex justify-between space-x-16 flex-grow items-center w-full`}>
        <label htmlFor="dropzone-file"
               className={`flex flex-col items-center justify-center w-full h-64 
                                           border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
                                           bg-gray-50 hover:bg-gray-100 p-4`}>
            <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-y-8 text-center">
                <div className={`flex gap-x-12`}>
                    <SiMicrosoftexcel className="w-12 h-12 text-gray-400 dark:text-gray-600"/>
                    <BsFiletypeCsv className="w-12 h-12 text-gray-400 dark:text-gray-600"/>
                </div>
                <div>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-bold">
                        Click to upload <span className="font-normal">or</span> drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                        CSV, XLS or XLSX (max size: 1MB)
                    </p>
                </div>
            </div>
            <input id="dropzone-file" type="file" className="hidden"/>
        </label>
    </div>;
}
