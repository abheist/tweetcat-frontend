import Link from "next/link";

export function Header() {
    return <div className={`container mx-auto lg:px-48`}>
        <div className="navbar">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Niyam</a>
            </div>
            <div className={`flex-grow`}>
                <ul className="menu menu-compact menu-vertical md:menu-horizontal bg-base-100 rounded-box shadow-primary">
                    {/*TODO: Icons can be added here*/}
                    <li><Link href={`/home`}>Dashboard</Link></li>
                    <li><Link href={`/write`}>Write</Link></li>
                    <li><Link href={`/calender`}>Calender</Link></li>
                    <li><Link href={`/analytics`}>Analytics</Link></li>
                    <li><Link href={`/settings`}>Settings</Link></li>
                </ul>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
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
    </div>;
}
