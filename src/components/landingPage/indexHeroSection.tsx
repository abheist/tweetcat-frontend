import Image from "next/image";
import {TwitterLoginButton} from "@/components/twitterLoginButton";

interface IndexHeroSectionProps {
    onClick: () => void;
}

export function IndexHeroSection({onClick}: IndexHeroSectionProps) {
    return <div className={`container mx-auto pt-24`}>
        <div className={`flex flex-col items-center gap-y-6`}>
            <Image src={`/tweetcat_logo.png`} alt={"tweetcat logo"} width={200} height={200}/>
            <h1 className={`text-9xl font-black`}>TweetCat</h1>
            <h2 className={`text-5xl text-blue-500 font-bold mt-6`}>
                Schedule thousands of tweets in a second
            </h2>
            <h3 className={`text-2xl font-medium text-slate-500 -mt-2 text-center w-2/5`}>
                Experience Unparalleled Efficiency with TweetCat and take control of your Twitter
                presence
            </h3>
            <TwitterLoginButton onClick={onClick} name={`SCHEDULE IN BULK NOW`}/>
        </div>
    </div>;
}
