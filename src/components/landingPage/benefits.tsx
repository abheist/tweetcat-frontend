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

export function Benefits(props: { onClick: () => void }) {
    return <div className={``}>
        <div className={`container mx-auto py-40 flex flex-col items-center`}>
            <div className={`flex flex-wrap justify-around w-full text-center font-light gap-y-24`}>
                <div className={`flex flex-col items-center gap-y-8 w-1/4`}>
                    <FiClock className={`text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-3xl font-bold leading-snug text-gray-950`}>Effective time<br/>management</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/4`}>
                    <FiSettings className={`text-7xl stroke-2 text-gray-950`}/>
                    <div className={`relative`}>
                        <GoZap className={`text-yellow-500 text-7xl absolute`}/>
                        <p className={`text-3xl font-bold leading-snug text-gray-950 relative`}>Customize<br/>campaign
                        </p>
                    </div>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/4`}>
                    <FiSearch className={`text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-3xl font-bold leading-snug text-gray-950`}>Be more<br/>discoverable</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/4`}>
                    <FiLoader className={`text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-3xl font-bold leading-snug text-gray-950`}>Work smarter<br/>not harder</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/4`}>
                    <FiRadio className={`text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-3xl font-bold leading-snug text-gray-950`}>Boost<br/>Engagement</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/4`}>
                    <FiTrendingUp className={`text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-3xl font-bold leading-snug text-gray-950`}>Analyze &<br/>improve</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/4`}>
                    <FiMessageSquare className={`text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-3xl font-bold leading-snug text-gray-950`}>Engage &<br/>grow</p>
                </div>
                <div className={`flex flex-col items-center gap-y-8 w-1/4`}>
                    <FiTarget className={`text-7xl stroke-2 text-gray-950`}/>
                    <p className={`text-3xl font-bold leading-snug text-gray-950`}>Focus on<br/>engagement</p>
                </div>
            </div>
            <button
                className={`btn btn-lg bg-blue-500 rounded-full font-extrabold text-white mt-24 
                                            border-blue-500 shadow-lg shadow-blue-500 hover:shadow-xl hover:shadow-blue-500
                                            bg-gradient-to-b from-blue-500 to-blue-700`}
                onClick={props.onClick}>
                GROW YOUR BUSINESS
            </button>
        </div>
    </div>;
}
