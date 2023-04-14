import {SiMicrosoftexcel} from "react-icons/si";
import {BsFiletypeCsv} from "react-icons/bs";
import React, {useEffect} from "react";
import {useDropzone} from "react-dropzone";
import {useMutation} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";

const uploadTweetFile = (files: any) => {
    return axiosPrivate.post('tweets/upload/', files)
}

export function UploadTweetFile() {
    const [files, setFiles] = React.useState<File[]>(() => []);
    const mutation = useMutation(uploadTweetFile)
    const {getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, isDragActive} = useDropzone({
        accept: {
            'application/vnd.ms-excel': ['.xls'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'text/csv': ['.csv'],
        },
        maxFiles: 1,
        maxSize: 1000000,
        multiple: false,
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles);
        }
    });

    useEffect(() => {
        if (files.length > 0) {
            handleFileUpload(files)
        }
    }, [files])

    const handleFileUpload = (files: any) => {
        const newFiles = new FormData()
        newFiles.append('file', files[0])
        console.log(newFiles)
        mutation.mutate(newFiles)
    }

    return <div className={`space-y-16 flex justify-between space-x-16 flex-grow items-center w-full`}>


        <label htmlFor="dropzone-file"
               {...getRootProps()}
               className={`flex flex-col items-center justify-center w-full h-64 
                           border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
                           bg-gray-50 hover:bg-gray-100 p-4
                           ${isDragAccept && 'border-green-500 bg-green-50 hover:bg-green-100'}
                           ${isDragReject && 'border-red-500 bg-red-50 hover:bg-red-100'}
                           ${isDragActive && 'border-blue-500 bg-blue-50 hover:bg-blue-100'}
                           ${isFocused && 'border-blue-500 bg-blue-50 hover:bg-blue-100'}
                         `}>
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
            <input id="dropzone-file" type="file" className="hidden" {...getInputProps()} />
        </label>
    </div>;
}
