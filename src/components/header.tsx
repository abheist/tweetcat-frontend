export function Header() {
    return <div>
        <div className="navbar mx-auto px-56">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Niyam</a>
            </div>
            <div className={`flex-grow`}>
                <ul className="menu menu-compact menu-vertical lg:menu-horizontal bg-base-100 rounded-box shadow-primary">
                    {/*TODO: Icons can be added here*/}
                    <li><a>Dashboard</a></li>
                    <li><a>Write</a></li>
                    <li><a>Calender</a></li>
                    <li><a>Analytics</a></li>
                    <li><a>Settings</a></li>
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
