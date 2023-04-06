import React from "react";
import {useMutation} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";
import Layout from "@/components/layout";
import {FiCheck} from "react-icons/fi";

export const createCheckOutSession = (lookupKey: string) => {
    return axiosPrivate.post('payments/checkout-session/', {lookupKey: lookupKey})
}

export const ProductDisplay = () => {
    const mutation = useMutation(createCheckOutSession)

    const includedFeatures = [
        'Upload unlimited tweets',
        'Automated tweet publishing',
        'Upload thousands of tweets in one go',
        'Define your own publishing schedule',
    ]

    const handleClick = async (lookupKey: string) => {
        const response = await mutation.mutateAsync(lookupKey)
        const data = response.data
        if (data.redirect) {
            window.location = data.redirect;
        }
    }

    return (
        <Layout className={`min-h-screen bg-white`}>
            <div className={`container mx-auto flex justify-center min-h-screen py-24 sm:py-30`}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Grow your business like a PRO
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            With the right tools, you can grow your business and reach new customers. Here, we are
                            consistently
                            working to provide you with the best tools to help you grow your business online.
                        </p>
                    </div>
                    <div
                        className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Choose the right
                                membership</h3>
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
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div
                                className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-600">
                                        Pay once, own it forever
                                    </p>
                                    <div className={`flex justify-between items-center`}>
                                        <div>
                                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span className="text-3xl font-bold tracking-tight text-gray-700">
                                                $12
                                            </span>
                                                <span
                                                    className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                                USD
                                            </span>
                                            </p>
                                            <p className={`text-xs`}>monthly</p>
                                        </div>
                                        <div>
                                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                $9
                                            </span>
                                                <span
                                                    className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                                USD
                                            </span>
                                            </p>
                                            <p className={`text-xs`}>yearly</p>
                                        </div>
                                    </div>
                                    <div className={`flex gap-x-2 mt-10`}>
                                        <button
                                            className="btn btn-md"
                                            onClick={() => handleClick('nap_app_monthly')}
                                        >
                                            Monthly
                                        </button>
                                        <button
                                            className="btn btn-md flex-1 btn-primary"
                                            onClick={() => handleClick('nap_app_yearly')}
                                        >
                                            Become Pro
                                        </button>
                                    </div>
                                    <p className="mt-6 text-xs leading-5 text-gray-600">
                                        Invoices and receipts available for easy company reimbursement
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

