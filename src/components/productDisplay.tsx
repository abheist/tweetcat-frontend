import {useMutation} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";
import {PricingCard} from "@/components/pricingCard";
import {AboutSubscriptionCard} from "@/components/aboutSubscriptionCard";

export const createCheckOutSession = (lookupKey: string) => {
    return axiosPrivate.post('payments/checkout-session/', {lookupKey: lookupKey})
}

export const ProductDisplay = () => {
    const mutation = useMutation(createCheckOutSession)

    const handleClick = async (lookupKey: string) => {
        const response = await mutation.mutateAsync(lookupKey)
        const data = response.data
        if (data.redirect) {
            window.location = data.redirect;
        }
    }

    return (
        <div className={``}>
            <div className={`container mx-auto py-40 flex flex-col items-center max-w-7xl px-4`}>
                <h2 className={`text-3xl md:text-7xl font-black text-center w-4/5 leading-snug tracking-wide`}>
                    Grow your audience like a PRO
                </h2>
                <h3 className={`text-lg lg:text-2xl font-medium text-center w-4/5 mt-6 leading-relaxed`}>
                    With the right tools, you can grow your business and reach new customers. Here, we are
                    consistently working to provide you with the best tools to help you grow your business
                    online.
                </h3>
                <div className={`flex flex-col items-center gap-y-8 mt-12`}>
                    <div
                        className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <AboutSubscriptionCard/>
                        <PricingCard onClick={() => handleClick('nap_app_monthly')}
                                     onClick1={() => handleClick('nap_app_yearly')}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

