import {FiCalendar, FiFeather, FiHome, FiTrendingUp} from "react-icons/fi";
import {ReactNode} from "react";
import Link from "next/link";

interface SideBarAppIconProps {
    icon: ReactNode
    tooltip?: string
    link: string
}

function SideBarAppIcon({icon, tooltip, link}: SideBarAppIconProps) {
    return (
        <div className="tooltip tooltip-right" data-tip={tooltip}>
            <Link href={link}>
                <button className="btn btn-ghost">
                    {icon}
                </button>
            </Link>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className={`flex fixed w-16 border-r h-screen bg-blue-100 py-4`}>
            <div className={`flex-grow flex flex-col items-center`}>
                <SideBarAppIcon icon={"N"} link={'/'}/>

                <div className={`flex-grow`}></div>

                <SideBarAppIcon icon={<FiHome/>} tooltip={`Home`} link={`/home`}/>
                <SideBarAppIcon icon={<FiFeather/>} tooltip={`Tweet`} link={`tweet`}/>
                <SideBarAppIcon icon={<FiCalendar/>} tooltip={`Calendar`} link={`calender`}/>
                <SideBarAppIcon icon={<FiTrendingUp/>} tooltip={`Analytics`} link={`analytics`}/>

                <div className={`flex-grow`}></div>

                <div className="dropdown dropdown-end tooltip tooltip-right" data-tip="Settings">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full ring">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"/>
                        </div>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
