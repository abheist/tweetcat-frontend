import {
    FiClock,
    FiLoader,
    FiMessageSquare,
    FiRadio,
    FiSearch,
    FiSettings,
    FiTarget,
    FiTrendingUp
} from "react-icons/fi";
import {GoZap} from "react-icons/go";
import {TwitterLoginButton} from "@/components/twitterLoginButton";

interface BenefitsProps {
    onClick: () => void
}

export function Benefits({onClick}: BenefitsProps) {
    return <div className={``}>
        <div className={`container mx-auto py-40 flex flex-col items-center max-w-7xl`}>
            <div className={`flex flex-wrap justify-around w-full text-center font-light gap-y-24 px-4`}>
                <div className={`flex flex-col items-center gap-y-8 w-1/2 md:w-1/4`}>
                    <FiClock className={`text-5xl md:text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-xl lg:text-3xl font-bold leading-snug text-gray-950`}>Effective time<br/>management</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/2 md:w-1/4`}>
                    <FiSettings className={`text-5xl md:text-7xl stroke-2 text-gray-950`}/>
                    <div className={`relative`}>
                        <GoZap className={`text-yellow-500 text-7xl absolute`}/>
                        <p className={`text-xl lg:text-3xl font-bold leading-snug text-gray-950 relative`}>Customize<br/>campaign
                        </p>
                    </div>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/2 md:w-1/4`}>
                    <FiSearch className={`text-5xl md:text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-xl lg:text-3xl font-bold leading-snug text-gray-950`}>Be more<br/>discoverable</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/2 md:w-1/4`}>
                    <FiLoader className={`text-5xl md:text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-xl lg:text-3xl font-bold leading-snug text-gray-950`}>Work smarter<br/>not harder</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/2 md:w-1/4`}>
                    <FiRadio className={`text-5xl md:text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-xl lg:text-3xl font-bold leading-snug text-gray-950`}>Boost<br/>Engagement</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/2 md:w-1/4`}>
                    <FiTrendingUp className={`text-5xl md:text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-xl lg:text-3xl font-bold leading-snug text-gray-950`}>Analyze &<br/>improve</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/2 md:w-1/4`}>
                    <FiMessageSquare className={`text-5xl md:text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-xl lg:text-3xl font-bold leading-snug text-gray-950`}>Engage &<br/>grow</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/2 md:w-1/4`}>
                    <FiTarget className={`text-5xl md:text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-xl lg:text-3xl font-bold leading-snug text-gray-950`}>Focus on<br/>engagement</p>
                </div>
            </div>
            <TwitterLoginButton onClick={onClick} name={`GROW YOUR BUSINESS`} className={`mt-16 md:mt-24`}/>
        </div>
    </div>;
}
