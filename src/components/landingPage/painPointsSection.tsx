import {MdPersonAdd, MdShowChart, MdSupervisedUserCircle, MdThumbDown, MdTimer} from "react-icons/md";
import {TwitterLoginButton} from "@/components/twitterLoginButton";

interface PainPointProps {
    onClick: () => void
}

export function PainPointsSection({ onClick }: PainPointProps) {
    let painPoints = [
        {
            icon: <MdTimer className="h-7 w-7 flex-none text-white" aria-hidden="true"/>,
            text: "Time-consuming manual scheduling Juggling multiple tasks and struggling to find time to consistently post on Twitter can be exhausting.",
        },
        {
            icon: <MdPersonAdd className="h-7 w-7 flex-none text-white" aria-hidden="true"/>,
            text: "Inefficient audience growth: Without the right tools, growing your Twitter following can be a slow and frustrating process.",
        },
        {
            icon: <MdThumbDown className="h-7 w-7 flex-none text-white" aria-hidden="true"/>,
            text: "Low engagement rates: Posting at the wrong times or without a clear strategy can lead to low engagement and missed opportunities.",
        },
        {
            icon: <MdSupervisedUserCircle className="h-7 w-7 flex-none text-white" aria-hidden="true"/>,
            text: "Difficulty managing multiple accounts: If you're responsible for multiple Twitter accounts, keeping track of all your activities can be a daunting task.",
        },
        {
            icon: <MdShowChart className="h-7 w-7 flex-none text-white" aria-hidden="true"/>,
            text: "Limited analytics and insights: Not having access to comprehensive analytics can make it difficult to measure your performance and adjust your strategy accordingly.",
        },
    ]
    return <div className={`container mx-auto mt-56`}>
        <div className={`bg-blue-500 flex flex-col items-center py-20 rounded-[80px]`}>
            <h2 className={`text-5xl font-bold w-4/5 leading-snug tracking-wide text-white text-center`}>
                Overcome Twitter Challenges with TweetCat
            </h2>
            <h3 className={`text-2xl text-white font-medium text-center w-4/5 mt-6 leading-relaxed`}>
                Twitter automation platform will help you save time and
                focus on other important things, while boosting your social media
                presence and extending your reach.
            </h3>
            <div
                className={`text-white flex flex-wrap gap-x-8 gap-y-8 justify-center mt-10`}>
                {painPoints.map((point) => (
                    <div key={point.text}
                         className="space-y-3 w-3/12 border border-blue-400 rounded-2xl px-8 py-4">
                        <div>{point.icon}</div>
                        <div>{point.text}</div>
                    </div>
                ))}
            </div>
            <TwitterLoginButton onClick={onClick} name={`SAVE TIME`} wide/>
        </div>
    </div>
        ;
}
