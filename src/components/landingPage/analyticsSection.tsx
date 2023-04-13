import Image from "next/image";

export function AnalyticsSection(props: { onClick: () => void }) {
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
            <button
                className={`btn btn-lg bg-blue-500 rounded-full font-extrabold text-white mt-12 
                                            border-blue-500 shadow-lg shadow-blue-500 btn-wide
                                             hover:shadow-xl hover:shadow-blue-500
                                            bg-gradient-to-b from-blue-500 to-blue-700`}
                onClick={props.onClick}>
                BE THE BUILDER
            </button>
        </div>
    </div>;
}
