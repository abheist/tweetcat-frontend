import React from "react";
import Link from "next/link";
import CustomerPortalButton from "@/components/customerPortalButton";
import {logout} from "@/utils/fetchMiddleware";
import Image from "next/image";

interface SideBarAppIconProps {
    tooltip?: string
    link: string
}

function SideBarAppIcon({tooltip, link}: SideBarAppIconProps) {
    return (
        <div className="tooltip tooltip-right" data-tip={tooltip}>
            <Link href={link}>
                <button className="btn btn-ghost btn-square p-0">
                    <Image src={`/tweetcat_logo.png`} alt={"tweetcat logo"} width={60} height={60}/>
                </button>
            </Link>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className={`flex fixed w-16 h-screen py-4 z-10`}>
            <div className={`flex-grow flex flex-col items-center`}>
                <SideBarAppIcon link={'/'}/>

                <div className={`flex-grow`}></div>

                {/*<SideBarAppIcon icon={<FiHome/>} tooltip={`Home`} link={`/home`}/>*/}
                {/*<SideBarAppIcon icon={<FiFeather/>} tooltip={`Tweet`} link={`tweet`}/>*/}
                {/*<SideBarAppIcon icon={<FiFeather/>} tooltip={`Tweets`} link={`tweets`}/>*/}
                {/*<SideBarAppIcon icon={<FiCalendar/>} tooltip={`Calendar`} link={`calender`}/>*/}
                {/*<SideBarAppIcon icon={<FiTrendingUp/>} tooltip={`Analytics`} link={`analytics`}/>*/}

                <div className={`flex-grow`}></div>

                <div className="dropdown dropdown-right dropdown-end tooltip tooltip-right" data-tip="Settings">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full ring">
                            <img
                                src="https://pbs.twimg.com/profile_images/1640726751469793283/lCbZ1c2y_400x400.jpg"
                                alt={`profile pic`}/>
                        </div>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><CustomerPortalButton/></li>
                        <li>
                            <button onClick={() => logout()}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
