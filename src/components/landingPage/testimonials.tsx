import Image from "next/image";

export function Testimonials() {
    return <div className={``}>
        <div className={`container mx-auto py-40 flex flex-col items-center max-w-7xl px-4`}>
            <h1 className={`text-3xl md:text-7xl font-black text-center w-4/5 leading-snug tracking-wide`}>
                What our customers say
            </h1>
            <div className={`flex flex-col items-center gap-y-8 mt-12`}>
                <div className={`flex flex-col items-center gap-y-4`}>
                    <Image src="/customer1.png" alt="customer 1" width={150} height={150}
                           className={`rounded-full`}/>
                    <p className={`text-xl md:text-4xl font-medium text-center md:w-3/5 leading-relaxed`}>
                        “I love TweetCat! It’s so easy to use and it’s helped me schedule 1000s of
                        tweets in a second and saved loads of time. I highly recommend it to anyone who
                        wants to grow their business.”
                    </p>
                    <p className={`text-md md:text-2xl font-medium text-center w-3/5 leading-relaxed`}>
                        - Steve Jobs
                    </p>
                </div>
            </div>
        </div>
    </div>;
}
