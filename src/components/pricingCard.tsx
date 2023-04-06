export function PricingCard(props: { onClick: () => Promise<void>, onClick1: () => Promise<void> }) {
    return <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-xl lg:flex-shrink-0">
        <div
            className={`rounded-2xl bg-gradient-to-bl from-purple-50 via-white to-blue-50  py-10 text-center ring-1 ring-inset ring-gray-900/5 
                                            lg:flex lg:flex-col lg:justify-center lg:py-10`}>
            <div className="mx-auto w-full px-8 space-y-8">
                <p className="text-base font-semibold text-gray-600">
                    Get started today
                </p>
                <div className={`flex justify-between items-center mt-4`}>
                    <div className={`border py-10 px-8 flex-1 -mr-4 rounded-2xl`}>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                            <div className="text-3xl font-bold tracking-tight text-gray-700">
                                $12
                            </div>
                            <div
                                className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                USD
                            </div>
                        </p>
                        <p className={`text-xs`}>monthly</p>
                        <div className={`mt-10`}>
                            <button
                                className="btn btn-md btn-block"
                                onClick={props.onClick}
                            >
                                Monthly
                            </button>
                        </div>
                    </div>
                    <div
                        className={`border pt-10 pb-6 px-8 flex-1 z-10 shadow-2xl rounded-2xl bg-white`}>
                        <div
                            className="text-xl font-mono line-through font-bold text-gray-400">
                            $144 USD
                        </div>
                        <p className="mt-2 flex items-baseline justify-center gap-x-2">
                            <div className="text-5xl font-bold tracking-tight text-gray-900">
                                $108
                            </div>
                        </p>
                        <p className={`text-xs mt-2`}>USD per year</p>
                        <div className={`mt-10`}>
                            <button
                                className="btn btn-md flex-1 btn-primary btn-block"
                                onClick={props.onClick1}
                            >
                                Become Pro
                            </button>
                            <div className={`text-xs mt-4`}>save 12% on yearly</div>
                        </div>
                    </div>
                </div>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company reimbursement
                </p>
            </div>
        </div>
    </div>;
}
