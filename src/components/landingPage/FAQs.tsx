export function FAQs() {
    return <div>
        {/*FAQS*/}
        <div className={`container mx-auto md:py-40 flex flex-col items-center max-w-7xl px-4`}>
            <h1 className={`text-3xl md:text-7xl font-black text-center leading-snug tracking-wide`}>
                Frequently Asked Questions
            </h1>
            <div className={`flex flex-col gap-y-4 md:gap-y-8 mt-12 md:w-3/5`}>
                <div tabIndex={0}
                     className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-md md:text-xl font-medium">
                        How do I get started with TweetCat?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Signing up for TweetCat is easy. Simply choose a plan that suits your needs,
                            create an account, and follow the step-by-step instructions to connect your
                            Twitter account.
                        </p>
                    </div>
                </div>
                <div tabIndex={0}
                     className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-md md:text-xl font-medium">
                        Can I upgrade or downgrade my plan at any time?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Yes, you can easily upgrade or downgrade your plan at any time from your
                            account settings. The changes will be effective from the next billing cycle.
                        </p>
                    </div>
                </div>
                <div tabIndex={0}
                     className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-md md:text-xl font-medium">
                        Is my data safe with TweetCat?
                    </div>
                    <div className="collapse-content">
                        <p>
                            We take data security very seriously. Your data is protected with
                            industry-standard encryption, and we never share your information with third
                            parties.
                        </p>
                    </div>
                </div>
                <div tabIndex={0}
                     className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-md md:text-xl font-medium">
                        Do you offer a free trial?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Yes, we offer a 14-day free trial for our Pro plan. Simply sign up for the
                            Pro plan, and you won't be charged if you cancel within the trial
                            period.
                        </p>
                    </div>
                </div>
                <div tabIndex={0}
                     className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-md md:text-xl font-medium">
                        Can I cancel my subscription at any time?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Yes, you can cancel your subscription at any time from your account
                            settings. Your account will remain active until the end of the current
                            billing cycle.
                        </p>
                    </div>
                </div>
                <div tabIndex={0}
                     className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-md md:text-xl font-medium">
                        What kind of support can I expect?
                    </div>
                    <div className="collapse-content">
                        <p>
                            All our plans come with email support. Pro and Enterprise plans have
                            priority email support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
