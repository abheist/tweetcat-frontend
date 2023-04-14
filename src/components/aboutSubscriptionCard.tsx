import {FiCheck} from "react-icons/fi";

export function AboutSubscriptionCard() {

    const includedFeatures = [
        'Upload unlimited tweets',
        'Automated tweet publishing',
        'Upload thousands of tweets in one go',
        'Define your own publishing schedule',
    ]

    return <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Choose the right membership
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">
            Just provide your tweet file and we will do the rest to help your grow your audience. We
            will publish your tweets on your behalf to grow your business and you can sit back and
            relax.
        </p>
        <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
            </h4>
            <div className="h-px flex-auto bg-gray-100"/>
        </div>
        <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
            {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                    <FiCheck className="h-6 w-5 flex-none text-indigo-600"
                             aria-hidden="true"/>
                    {feature}
                </li>
            ))}
        </ul>
    </div>;
}
