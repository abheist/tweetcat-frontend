import React from "react";

interface UpcomingFeatureProps {
    icon: string;
    heading: string;
    description: string;
}

export function UpcomingFeature({icon, heading, description}: UpcomingFeatureProps) {
    return <div
        className={`absolute bg-gray-100/80 z-20 w-full h-full flex justify-center items-center px-8`}>
        <div className={`space-y-4`}>
            <p className={`text-4xl text-center`}>{icon}</p>
            <p className={`text-lg mx-auto font-bold italic font-serif text-gray-700 text-center`}>{heading}</p>
            <p className={`mx-auto text-primary-900 text-center`}>{description}</p>
        </div>
    </div>;
}
