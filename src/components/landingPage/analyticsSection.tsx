import Image from "next/image";
import {TwitterLoginButton} from "@/components/twitterLoginButton";

interface AnalyticsSectionProps {
    onClick: () => void;
}

export function AnalyticsSection({onClick}: AnalyticsSectionProps) {
    return <div className={`container mx-auto my-64`}>
        <div className={`flex flex-col items-center gap-y-6`}>
            <h1 className={`text-7xl font-black text-center w-4/5 leading-snug tracking-wide`}>
                Designed for Solopreneurs, Businesses, and Agencies
            </h1>
            <div className={`relative w-11/12 h-48 mt-8`}>
                <Image src="/tweetcat_analytics.png" alt="TweetCat analytics" fill
                       style={{objectFit: "contain", objectPosition: "center"}}/>
            </div>
            <p className={`text-4xl font-medium text-center w-3/5 leading-relaxed`}>
                Focus on your passion, focus on the thing, focus on your destiny, call and be the
                builder
            </p>
            <TwitterLoginButton onClick={onClick} name={`BE THE BUILDER`} wide/>
        </div>
    </div>;
}
