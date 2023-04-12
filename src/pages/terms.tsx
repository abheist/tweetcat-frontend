import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

const TermsPage = () => {


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
                            <Link href={`/terms`} className={`text-gray-500 hover:text-gray-700`}>
                                Terms
                            </Link>
                        </div>
                    </div>
                    <div className={`space-y-4`}>
                        <h1 className={`text-4xl`}>Terms of Service</h1>

                        <p>Last updated: April 11, 2023</p>

                        <p>Welcome to TweetCat! Please read these Terms of Service ("Terms") carefully before using our
                            website, services, or any other features offered by TweetCat (collectively, the
                            "Services").</p>

                        <p>By accessing or using our Services, you agree to be bound by these Terms. If you do not agree
                            to these Terms, you must not access or use our Services.</p>

                        <h3 className={`text-2xl`}>1. Eligibility</h3>

                        <p>By using our Services, you represent and warrant that you are at least 18 years of age and
                            have the legal capacity to enter into a binding agreement. If you are under 18, you may use
                            our Services only with the involvement of a parent or guardian.</p>

                        <h3 className={`text-2xl`}>2. Account Registration</h3>

                        <p>To access certain features of our Services, you may be required to register for an account.
                            You agree to provide accurate, current, and complete information during the registration
                            process and to update such information as necessary to keep it accurate, current, and
                            complete. You are responsible for maintaining the confidentiality of your account
                            credentials and for all activities that occur under your account. You agree to immediately
                            notify us of any unauthorized use of your account or any other breach of security.</p>

                        <h3 className={`text-2xl`}>3. Acceptable Use</h3>

                        <p>You agree to use our Services only for lawful purposes and in a manner that does not infringe
                            on the rights of others or restrict their use and enjoyment of the Services. Prohibited
                            activities include, but are not limited to:</p>
                        <ul>
                            <li>a. Using the Services for any illegal or unauthorized purpose.</li>
                            <li>b. Interfering with or disrupting the operation of the Services or the servers and
                                networks
                                that host them.
                            </li>
                            <li>c. Attempting to gain unauthorized access to other users' accounts or to the systems
                                used to
                                provide the Services.
                            </li>
                            <li>d. Transmitting or uploading any material that contains viruses, Trojan horses, worms,
                                or any
                                other harmful or malicious code.
                            </li>
                            <li>e. Impersonating any person or entity, or falsely stating or otherwise misrepresenting
                                your
                                affiliation with a person or entity.
                            </li>
                        </ul>

                        <h3 className={`text-2xl`}>4. Intellectual Property</h3>

                        <p>All content and materials available on our Services, including but not limited to text,
                            graphics, logos, and software, are the property of TweetCat or its licensors and are
                            protected by applicable copyright, trademark, and other intellectual property laws. You may
                            not reproduce, distribute, create derivative works of, publicly display, or otherwise
                            exploit any content or materials on our Services without the express written permission of
                            TweetCat or the respective copyright owner.</p>

                        <h3 className={`text-2xl`}>5. Termination</h3>

                        <p>We reserve the right, in our sole discretion, to terminate your access to all or part of the
                            Services at any time, with or without notice, for any reason or no reason, including but not
                            limited to violation of these Terms.</p>

                        <h3 className={`text-2xl`}>6. Disclaimers</h3>

                        <p>Our Services are provided on an "as is" and "as available" basis, without warranties of any
                            kind, either express or implied, including but not limited to warranties of merchantability,
                            fitness for a particular purpose, or non-infringement. TweetCat does not warrant that the
                            Services will be uninterrupted, error-free, or free of viruses or other harmful
                            components.</p>

                        <h3 className={`text-2xl`}>7. Limitation of Liability</h3>

                        <p>In no event shall TweetCat, its affiliates, or their respective officers, directors,
                            employees, or agents be liable for any direct, indirect, incidental, special, consequential,
                            or punitive damages, including but not limited to loss of profits, loss of data, or other
                            damages arising out of or in connection with your use of, or inability to use, the Services,
                            even if TweetCat has been advised of the possibility of such damages.</p>

                        <h3 className={`text-2xl`}>8. Indemnification</h3>

                        <p>You agree to indemnify, defend, and hold harmless TweetCat, its affiliates, and their
                            respective officers, directors, employees, and agents from and against any and all claims,
                            liabilities, damages, losses, or expenses, including</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TermsPage
