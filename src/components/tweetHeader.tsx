export function TweetHeader() {
    return <div className="navbar flex justify-between">
        <button className="btn btn-ghost btn-xs text-primary">Dashboard</button>
        <div className={`flex gap-x-2`}>
            <label className="btn btn-outline btn-xs btn-primary drawer-button btn btn-primary"
                   htmlFor="my-drawer-4">
                Schedule
            </label>
            <button className="btn btn-outline btn-xs btn-primary">Tweet Now</button>
        </div>
    </div>;
}
