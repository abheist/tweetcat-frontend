import Image from "next/image";
import {TwitterLoginButton} from "@/components/twitterLoginButton";

interface AnalyticsSectionProps {
    onClick: () => void;
}

export function AnalyticsSection({onClick}: AnalyticsSectionProps) {
    return <div className={`container mx-auto max-w-7xl`}>
        <div className={`flex flex-col items-center md:gap-y-6`}>
            <h1 className={`text-3xl md:text-7xl font-black text-center px-2 md:w-4/5 leading-snug tracking-wide`}>
                Designed for Solopreneurs, Businesses, and Agencies
            </h1>
            <div className={`relative w-11/12 h-16 md:h-48 md:mt-8`}>
                <Image src="/tweetcat_analytics.png" alt="TweetCat analytics" fill
                       style={{objectFit: "contain", objectPosition: "center"}}/>
            </div>
            <p className={`md:text-4xl font-medium text-center md:w-3/5 leading-relaxed`}>
                Focus on your passion, focus on the thing, focus on your destiny, call and be the
                builder
            </p>
            <TwitterLoginButton onClick={onClick} name={`BE THE BUILDER`} wide className={`mt-12 md:mt-24`}/>
        </div>
    </div>;
}
