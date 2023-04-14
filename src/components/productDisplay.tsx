import {useMutation} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";
import Layout from "@/components/layout";
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
        <Layout className={`bg-white`}>
            <div className={`container mx-auto flex justify-center min-h-screen py-24 sm:py-30`}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Grow your audience like a PRO
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            With the right tools, you can grow your business and reach new customers. Here, we are
                            consistently working to provide you with the best tools to help you grow your business
                            online.
                        </p>
                    </div>
                    <div
                        className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <AboutSubscriptionCard/>
                        <PricingCard onClick={() => handleClick('nap_app_monthly')}
                                     onClick1={() => handleClick('nap_app_yearly')}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

