import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

const PrivacyPage = () => {
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
                        <h1 className={`text-4xl`}>Privacy Policy</h1>

                        <p>Last updated: April 11, 2023</p>

                        <p>At TweetCat, we are committed to protecting your privacy. This Privacy Policy explains how we
                            collect, use, and disclose your personal information when you visit or use our services. By
                            using our services, you agree to the collection and use of your information in accordance
                            with this Privacy Policy.</p>

                        <h3 className={`text-2xl`}>1. Information We Collect</h3>

                        <p>When you use our services, we may collect the following types of information:</p>

                        <p>a. Personal Information: This includes information that can be used to identify you
                            personally, such as your name, email address, phone number, and profile picture.</p>

                        <p>b. Usage Information: We collect data on how you use our services, such as the features you
                            interact with, the frequency of your visits, and the duration of your sessions.</p>

                        <p>c. Device Information: We collect information about the devices you use to access our
                            services, such as your device model, operating system, browser type, and IP address.</p>

                        <p>d. Cookies and Tracking Technologies: We use cookies and other tracking technologies to
                            collect information about your preferences and browsing habits on our website.</p>

                        <h3 className={`text-2xl`}>2. How We Use Your Information</h3>

                        <p>We use your information to:</p>

                        <p>a. Provide and improve our services, including customer support.</p>
                        <p>b. Personalize your experience and tailor our services to your preferences.</p>
                        <p>c. Communicate with you about updates, promotions, and other relevant information.</p>
                        <p>d. Monitor and analyze usage patterns to improve the functionality and performance of our
                            services.</p>
                        <p>e. Ensure the security and integrity of our systems and protect against fraud and other
                            malicious activity.</p>

                        <h3 className={`text-2xl`}>3. Disclosure of Your Information</h3>

                        <p>We may share your personal information with third parties under the following
                            circumstances:</p>

                        <p>a. With your consent, when you explicitly agree to have your information shared.</p>
                        <p>b. With service providers who perform services on our behalf, such as payment processors and
                            marketing partners.</p>
                        <p>c. When required by law, in response to legal requests or to protect the rights, property, or
                            safety of our users and the public.</p>
                        <p>d. In connection with a merger, acquisition, or sale of our assets, in which case the privacy
                            policy of the acquiring entity will apply.</p>

                        <h3 className={`text-2xl`}>4. Your Rights and Choices</h3>

                        <p>You have the right to:</p>

                        <p>a. Access, update, or delete your personal information by logging into your account and
                            making the necessary changes.</p>
                        <p>b. Opt-out of marketing communications by following the unsubscribe instructions included in
                            our emails.</p>
                        <p>c. Disable cookies and tracking technologies in your browser settings.</p>

                        <h3 className={`text-2xl`}>5. Security</h3>

                        <p>We implement a variety of security measures to protect your personal information from
                            unauthorized access, use, or disclosure. However, please note that no method of transmission
                            or storage is 100% secure, and we cannot guarantee the absolute security of your
                            information.</p>

                        <h3 className={`text-2xl`}>6. Changes to This Privacy Policy</h3>

                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by
                            posting the updated policy on our website and updating the "Last Updated" date at the top of
                            this policy. Your continued use of our services after any changes to this Privacy Policy
                            constitutes your acceptance of the updated policy.</p>

                        <Link href={`/contact`}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PrivacyPage
