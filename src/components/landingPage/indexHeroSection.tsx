import Image from "next/image";

export function IndexHeroSection(props: { onClick: () => void }) {
    return <div className={`container mx-auto min-h-screen pt-24`}>
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
            <button
                className={`btn btn-lg bg-blue-500 rounded-full font-extrabold text-white mt-10 
                                            border-blue-500 shadow-lg shadow-blue-500
                                             hover:shadow-xl hover:shadow-blue-500
                                            bg-gradient-to-b from-blue-500 to-blue-700`}
                onClick={props.onClick}>
                SCHEDULE IN BULK NOW
            </button>
        </div>
    </div>;
}
