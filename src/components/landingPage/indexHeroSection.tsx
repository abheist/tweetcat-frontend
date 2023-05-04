import Image from "next/image";
import {TwitterLoginButton} from "@/components/twitterLoginButton";

interface IndexHeroSectionProps {
    onClick: () => void;
}

export function IndexHeroSection({onClick}: IndexHeroSectionProps) {
    return <div className={`container mx-auto pt-24 px-4`}>
        <div className={`flex flex-col items-center text-center gap-y-6`}>
            <Image src={`/tweetcat_logo.png`} alt={"tweetcat logo"} width={200} height={200}/>
            <div className="badge bg-yellow-400 gap-2 border-yellow-600 font-bold text-yellow-900 text-md px-8 py-4">
                Suspended as part of new Twitter API restrictions
            </div>
            <h1 className={`text-6xl lg:text-9xl font-black`}>TweetCat</h1>
            <h2 className={`text-3xl lg:text-5xl text-blue-500 font-bold lg:mt-6`}>
                Schedule thousands of tweets in a second
            </h2>
            <h3 className={`text-lg lg:text-2xl font-medium text-slate-500 -mt-2 text-center lg:w-2/5`}>
                Experience Unparalleled Efficiency with TweetCat and take control of your Twitter
                presence
            </h3>
            <TwitterLoginButton onClick={onClick} name={`SCHEDULE IN BULK NOW`} className={`mt-12`}/>
        </div>
    </div>;
}
