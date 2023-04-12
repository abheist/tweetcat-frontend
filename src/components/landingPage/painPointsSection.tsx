import Image from "next/image";
import {FiCheck} from "react-icons/fi";

export function PainPointsSection(props: { onClick: () => void }) {
    let painPoints = [
        "Time-consuming manual scheduling Juggling multiple tasks and struggling to find time to consistently post on Twitter can be exhausting.",
        "Inefficient audience growth: Without the right tools, growing your Twitter following can be a slow and frustrating process.",
        "Low engagement rates: Posting at the wrong times or without a clear strategy can lead to low engagement and missed opportunities.",
        "Difficulty managing multiple accounts: If you're responsible for multiple Twitter accounts, keeping track of all your activities can be a daunting task.",
        "Limited analytics and insights: Not having access to comprehensive analytics can make it difficult to measure your performance and adjust your strategy accordingly.",
    ]
    return <div className={`bg-blue-500`}>
        <div className={`container mx-auto`}>
            <div className={`relative w-full min-h-screen`}>
                <Image
                    alt="Image Alt"
                    src="/tweetcat_tweets.png"
                    fill
                    className={`-mt-48`}
                    style={{objectFit: "contain", objectPosition: "center"}}
                />
                <div className={`absolute w-full bottom-0 h-full bg-gradient-to-t from-10% from-blue-500 via-70% via-blue-500/95 to-blue-500/0
                                                flex items-center`}>
                    <div className={`container mx-auto`}>
                        <div className={`flex flex-col items-center`}>
                            <h2 className={`text-5xl font-bold w-4/5 leading-snug tracking-wide text-white text-center mt-20`}>
                                Overcome Twitter Challenges with TweetCat
                            </h2>
                            <h3 className={`text-2xl text-white font-medium text-center w-4/5 mt-6 leading-relaxed`}>
                                Twitter automation platform will help you save time and
                                focus on other important things, while boosting your social media
                                presence and extending your reach.
                            </h3>
                            <div
                                className={`text-white flex flex-wrap gap-x-8 gap-y-8 justify-center mt-10`}>
                                {painPoints.map((feature) => (
                                    <li key={feature}
                                        className="flex gap-x-3 w-3/12 border rounded-2xl px-8 py-4">
                                        <FiCheck className="h-6 w-5 flex-none text-white"
                                                 aria-hidden="true"/>
                                        {feature}
                                    </li>
                                ))}
                            </div>
                            <button className={`btn btn-wide btn-lg bg-blue-500 font-extrabold rounded-full
                                                            text-white mt-20 border-blue-500 hover:border-blue-500 
                                                            shadow-sm shadow-white hover:shadow-lg
                                                            bg-gradient-to-b from-blue-500 to-blue-700`}
                                    onClick={props.onClick}>
                                SAVE TIME
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`z-20 absolute bottom-0 right-0 -mb-12 -mr-32 flex items-start`}>
                    <div className="chat chat-end mt-12">
                        <div className="chat-bubble">You underestimate my power!</div>
                    </div>
                    <Image src="/bird.png" alt="twitter bird" width={300} height={300}
                           className={`object-contain`}/>
                </div>
            </div>
        </div>
    </div>;
}
