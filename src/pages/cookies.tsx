import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

const CookiesPage = () => {


    return (
        <Layout className={`py-16`} sidebar={false}>
            <div className={`container mx-auto flex justify-center px-48`}>
                <div className={`space-y-16 w-full`}>
                    <div className={`flex justify-between items-center`}>
                        <h2 className={`text-2xl`}>👋 Hey</h2>
                        <div className={`flex space-x-4`}>
                            <Link href={`/`} className={`text-gray-500 hover:text-gray-700`}>
                                Home
                            </Link>
                        </div>
                    </div>
                    <div className={`space-y-4`}>
                        <h1 className={`text-4xl`}>Cookie Policy</h1>

                        <p>This website uses cookies to enhance your browsing experience and provide personalized
                            recommendations. Cookies are small pieces of data that are stored on your device when you
                            visit a website.</p>

                        <h3 className={`text-2xl`}>What are cookies?</h3>

                        <p>Cookies are small text files that are stored on your device by websites that you visit. They
                            are widely used to make websites work, or work more efficiently, as well as to provide
                            information to the owners of the site.</p>

                        <h3 className={`text-2xl`}>Types of cookies</h3>

                        <p>There are different types of cookies used by websites. Here are the types of cookies used by
                            this website:</p>

                        <p><b>Session cookies</b>: These cookies are temporary and are stored on your device until you
                            close your browser. They are used to enable certain website features and to remember your
                            preferences during your browsing session.</p>
                        <p><b>Permanent cookies</b>: These cookies are stored on your device for a set period of time
                            (usually up to 1 year). They are used to remember your preferences and settings when you
                            return to the website.</p>
                        <p><b>Third-party cookies</b>: These cookies are set by third-party services that are used on
                            this website, such as Google Analytics. They are used to track your browsing behavior and to
                            provide personalized advertising.</p>

                        <h3 className={`text-2xl`}>Managing cookies</h3>

                        <p>You can control the use of cookies on this website through your browser settings. You can
                            choose to disable cookies altogether or to only allow certain types of cookies. However,
                            please note that disabling cookies may affect your browsing experience and some website
                            features may not work properly.</p>

                        <h3 className={`text-2xl`}>Changes to this policy</h3>

                        <p>We may update this cookie policy from time to time to reflect changes in our website and
                            cookie practices. We encourage you to check this policy regularly for updates.</p>

                        <p>If you have any questions or concerns about this cookie policy, please contact us at [contact
                            email address].</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CookiesPage
