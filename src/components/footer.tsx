import Image from "next/image";
import Link from "next/link";
import {BsTwitter} from "react-icons/bs";

export function Footer({className = ""}) {
    return <div className={`bg-gray-900 ${className}`}>
        <footer className="footer container mx-auto px-16 py-24 text-gray-50 max-w-7xl">
            <div className={`flex flex-col items-center -mt-4`}>
                <Image src={`/tweetcat_logo.png`} alt={"tweetcat logo"} width={150} height={150}/>
                <p className={`text-md`}>© TweetCat 2023.<br/>All rights reserved.</p>
            </div>
            <div>
                <span className="footer-title">Product</span>
                <Link href={`pricing`} className="link link-hover line-through">Pricing</Link>
                <Link href={`affliates`} className="link link-hover line-through">Affliates</Link>
            </div>
            <div>
                <span className="footer-title">Updates</span>
                <Link href={`/contact`} className="link link-hover line-through">Contact</Link>
                <Link href={`/blog`} className="link link-hover line-through">Blog</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link href={`/terms`} className="link link-hover">Terms of use</Link>
                <Link href={`/privacy`} className="link link-hover">Privacy policy</Link>
                <Link href={`/cookies`} className="link link-hover">Cookies policy</Link>
            </div>
            <div className={`flex justify-end`}>
                <BsTwitter className={`text-4xl`}/>
            </div>
        </footer>
    </div>;
}
